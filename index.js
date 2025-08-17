import express from "express";
import router from "./routes/index.js";
import url from "url";
import path from "path";
import {users,books} from "./src/database.js"

console.log(users);
console.log(books);

const ___filename = url.fileURLToPath(import.meta.url);
const ___dirname = path.dirname(___filename);

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(express.static(___dirname+"/public/Scripts"));
app.use(express.static(___dirname+"/public/images"));
app.use(router);
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

