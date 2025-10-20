const mongoose= require('mongoose');
const dotenv= require('dotenv');

// load config
dotenv.config();


const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(`mongodb+srv://sundramkumar9896:KPPQoE3lT0LNotVL@cluster1.udcppv5.mongodb.net/`,{
         usenewUrlParser: true,
        });

        console.log("MongoDb Connected")
    }
    catch(error){
        console.error(error.message);
        process.exit(1);

    }

}

module.exports = connectDB;