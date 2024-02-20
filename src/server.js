import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT);

app.listen(PORT, () => {
  console.log(`Rodando server na porta ${PORT}`);
});