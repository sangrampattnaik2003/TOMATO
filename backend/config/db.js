import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://sangrampattnaik53:Sangram.16032003@cluster0.4efltjf.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}

