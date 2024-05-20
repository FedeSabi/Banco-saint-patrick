import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI =
  "mongodb+srv://federicosabiche:fedesabi8818*@cluster0.bxuyrd3.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URI);

const dbConnection = mongoose.connection;

dbConnection.on(
  "error",
  console.error.bind(console, "Error de conexión a MongoDB:")
);
dbConnection.once("open", () => {
  console.log("Conexión a MongoDB exitosa");
});

export default mongoose;
