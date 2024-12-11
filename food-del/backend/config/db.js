import mongoose from "mongoose"

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://bansalpiyush833:241573@cluster0.id5klst.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}