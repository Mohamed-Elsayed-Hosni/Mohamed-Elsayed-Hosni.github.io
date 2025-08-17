import { Router } from "express"
import url from "url";
import path from "path";
import { get } from "http";
const router = Router();

const ___filename = url.fileURLToPath(import.meta.url);
const ___dirname = path.dirname(___filename);

router.get("/", (req, res) => {
  res.sendFile(path.join(___dirname, '../src/index.html'));
});

router.get("/HomePage.html", (req, res) => {
  res.sendFile(path.join(___dirname, '../src/HomePage.html'));
});

router.get("/Checkout.html", (req, res) => {
  res.sendFile(path.join(___dirname, '../src/Checkout.html'));
});

router.get("/Catalogue.html", (req, res) => {
  res.sendFile(path.join(___dirname, '../src/Catalogue.html'));
});

router.use((req, res, next) => {
  if (req = get){
  res.sendFile(path.join(___dirname, '../src/NotFound.html'));}
  });

export default router;