import { Router } from "express"
import pagesRouter from "./pages.js"
import usersRouter from "./users.js"
import booksRouter from "./books.js"
const router = Router();
router.use(usersRouter);
router.use(booksRouter);
router.use(pagesRouter);

export default router