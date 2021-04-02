import User from '../models/user.model'

const userController = {}

userController.userExists = async function (name) {
  const exists = await User.findOne({ name: name })
  if (exists) {
    return { exists: true }
  } else {
    return { exists: false }
  }
}

userController.newUser = async function (data) {
  try {
    const res = await this.userExists(data.name)
    if (res.exists) {
      const getUser = await userController.getUser(data.name)
      return { sucess: true, user: getUser }
    } else {
      const user = new User(data)
      await user.save()
      return { sucess: true, user: user }
    }
  } catch (err) {
    return { sucess: false, message: 'an error ocurred', error: err }
  }
}

userController.getUser = async function (name) {
  const res = await userController.userExists(name)
  if (res.exists) {
    const user = await User.findOne({ name: name })
    return user
  }
}

userController.getUserById = async function (userId) {
  if (userId) {
    const user = await User.findById(userId)
    if (user) {
      return { sucess: true, name: user.name }
    } else {
      return { sucess: false }
    }
  } else {
    return { sucess: false }
  }
}

export default userController
