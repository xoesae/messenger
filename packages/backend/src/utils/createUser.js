import userController from '../controllers/user.controller'

async function createUser(username) {
  try {
    const res = await userController.userExists(username)
    if (res.exists) {
      const user = await userController.getUser(username)
      return { sucess: true, user: user }
    } else {
      Promise.resolve(
        userController.newUser({
          name: username,
          status: 'online'
        })
      ).then(async res => {
        if (res.sucess) {
          const user = await userController.getUser(username)
          return { sucess: true, user: user }
        } else {
          return { sucess: false }
        }
      })
    }
  } catch (err) {
    console.log(err)
  }
}

export default createUser
