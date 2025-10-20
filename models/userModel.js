const{Schema,model} = require('mongoose');

const formSchema = new Schema({
     name:{
        type: String,
        required: true,
        maxLength: 50

     },
     email:{
        type:String,
        required: true,
        maxLength: 50
     },
     number:{
        type:Number,
        required: true,
        maxLength:50
     },
     about:{
        type: String,
        required: true,
        maxLength: 50

     },
     issue:{
        type:String,
        required: true,
        maxLength: 250
     },

});

const UserModel2 = model("form", formSchema)

module.exports= UserModel2;
