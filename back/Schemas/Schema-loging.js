import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  nombre: String,
  numeroTarjeta : Number,
  pin : Number,


});

const User = mongoose.model('userLogin', userSchema);
export default User