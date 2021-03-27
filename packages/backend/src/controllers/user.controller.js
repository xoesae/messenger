import User from '../models/user.model'

const userController = {}

userController.userExists = async function(name){
  let exists = await User.findOne({ name: name })
  if(exists){
    return { exists: true }
  } else{
    return { exists: false }
  }
}

userController.newUser = async function(data) {
  try{
    let exists = await this.userExists(data.name)
    if(exists){
      let user = new User(data)
      await user.save()
      return { sucess: true, message: 'user create with sucess' }
    } else{
      return { sucess: false, message: 'this user already exists' }
    }
  } catch(err){
    return { sucess: false, message: 'an error ocurred', error: err }
  }
}

export default userController
