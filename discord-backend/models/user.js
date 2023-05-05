const mongoose =require('mongoose');

const Schema = mongoose.Schema;
const userSchema =new mongoose.Schema({
    mail:{ type:String,unique:true},
    username:{type:String},
    password:{ type:String},
    friends: [{ type: Schema.Types.Object, ref: "User" }],
})// in that we difining users properties
    // this user schema will be defining the model,which will be saved to our database.
    

module.exports = mongoose.model('User',userSchema);// now we just export the schema with module.exports

//mongoose helps the create the schema of user's database.//
