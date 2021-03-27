import userController from '../controllers/user.controller'

async function createUser(username){
  const exists = await userController.userExists('carlos')
  if(exists){
    return { sucess: true }
  } else{
    const user = userController.newUser({ name: username, status: 'online' })
    return user
  }
}

export default createUser
