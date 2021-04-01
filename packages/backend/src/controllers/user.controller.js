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
    const exists = await this.userExists(data.name)
    if (exists) {
      const user = new User(data)
      await user.save()
      return { sucess: true, message: 'user create with sucess' }
    } else {
      return { sucess: false, message: 'this user already exists' }
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
