import userController from '../controllers/user.controller'

async function createUser(username){
  try{
    let res = await userController.userExists(username)
    if(res.exists){
      return { sucess: true }
    } else{
      res = userController.newUser({ name: username, status: 'online' })
      return res
    }
  } catch(err){
    console.log(err)
  }
}

export default createUser
