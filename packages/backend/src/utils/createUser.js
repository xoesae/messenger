import userController from '../controllers/user.controller'

async function createUser(username) {
  try {
    let res = await userController.userExists(username)
    if (res.exists) {
      const user = await userController.getUser(username)
      return { sucess: true, user: user }
    } else {
      res = userController.newUser({ name: username, status: 'online' })
      if (res.sucess) {
        const user = await userController.getUser(username)
        return { sucess: true, user: user }
      } else {
        return res
      }
    }
  } catch (err) {
    console.log(err)
  }
}

export default createUser
