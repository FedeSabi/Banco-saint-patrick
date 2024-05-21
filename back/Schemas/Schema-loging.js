import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nombre: String,
<<<<<<< HEAD
  numeroTarjeta : String,
  pin : String,


=======
  numeroTarjeta: Number,
  pin: Number,
>>>>>>> e9dd49af13639d6f955edba1b208a8f67699b363
});

const User = mongoose.model("userLogin", userSchema);
export default User;
