import { users } from "../src/database.js";

const resolveIndexByUserId = (req, res, next) => {
  const {
    params: { id },
  } = req;

  const parseID = parseInt(id);
  if (isNaN(parseID)) return res.sendStatus(400);

  const userIndex = users.findIndex((user) => user.id === parseID);
  if (userIndex === -1) return res.sendStatus(404);
  req.userIndex = userIndex;
  next();
};

export { resolveIndexByUserId };
