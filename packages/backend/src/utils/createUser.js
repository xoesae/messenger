import userController from '../controllers/user.controller'

async function createUser(username){
  try{
    let res = await userController.userExists(username)
    if(res.exists){
      let user = await userController.getUser(username)
      return { sucess: true, user: user }
    } else{
      res = userController.newUser({ name: username, status: 'online' })
      if(res.sucess){
        let user = await userController.getUser(username)
        return { sucess: true, user: user }
      } else{
        return res
      }
    }
  } catch(err){
    console.log(err)
  }
}

export default createUser
