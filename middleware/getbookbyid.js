import { books } from "../src/database.js";

const resolveIndexByBookId = (req, res, next) => {
  const {
    params: { id },
  } = req;

  const parseID = parseInt(id);
  if (isNaN(parseID)) return res.sendStatus(400);

  const bookIndex = books.findIndex((book) => book.id === parseID);
  if (bookIndex === -1) return res.sendStatus(404);
  req.bookindex = bookIndex;
  next();
};

export { resolveIndexByBookId };
