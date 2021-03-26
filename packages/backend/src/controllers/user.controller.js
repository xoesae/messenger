import User from '../models/user.model'

const userController = {}

userController.userExists = async function(name){
  let exists = await User.findOne({ name: name })
  if(exists){
    console.log(exists);
    return exists
  } else{
    return exists
  }
}

userController.newUser = async function(data) {
  try{
    let user = new User(data)
    user = await user.save()
    return { sucess: true, message: 'user create with sucess' }
  } catch(err){
    return { sucess: false, message: 'an error ocurred', error: err }
  }
}

export default userController
