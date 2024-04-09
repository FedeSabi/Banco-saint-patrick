import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONGO_URI;

mongoose.connect(URI);

const dbConnection = mongoose.connection;

dbConnection.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
dbConnection.once('open', () => {
  console.log('Conexión a MongoDB exitosa');
});

export default mongoose;

