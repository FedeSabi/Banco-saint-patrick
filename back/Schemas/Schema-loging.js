import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nombre: String,
  numeroTarjeta : String,
  pin : String,


});

const User = mongoose.model("userLogin", userSchema);
export default User;
