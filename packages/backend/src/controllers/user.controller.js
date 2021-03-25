import User from '../models/user.model'

const userController = {}

messageController.newUser = async function(data) {
  try{
    let user = new User(data)
    user = await user.save()
    return { sucess: true, message: 'user create with sucess' }
  } catch(err){
    return { sucess: false, message: 'an error ocurred', error: err }
  }
}

export default messageController
