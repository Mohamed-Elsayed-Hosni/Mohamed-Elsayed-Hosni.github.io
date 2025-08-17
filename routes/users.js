import { Router } from "express";
import {users} from "../src/database.js";
import {
  query,
  validationResult,
  checkSchema,
  matchedData,
} from "express-validator";
import { createUserValidationSchema } from "../middleware/usersvali.js";
import { resolveIndexByUserId } from "../middleware/getuserbyid.js";
const router = Router();

router.get("/api/users",
    query("filter")
    .isString()
    .withMessage("filter must be a string")
    .notEmpty()
    .withMessage("filter must not be empty")
    .isLength({ min: 3, max: 10 })
    .withMessage("filter size range 3-10 chars")
    .optional()
    ,(request,response) =>{
        const result = validationResult(request);

        if (!result.isEmpty()){return response.status(400).json({errors :result.array()});}

        const {query : {filter,value}} = request;

        if (!filter || !value) return response.json(users);
        
        if (filter == "gender") {const filteredusers= users.filter((user)=>user.gender == value);
            response.sendStatus(200)
            return response.json(filteredusers);
        }
        const filteredusers= users.filter((user)=>user[filter].includes(value));
        response.sendStatus(200)
            return response.json(filteredusers);
    }

)

router.get("/api/users/:id",resolveIndexByUserId ,(request, response) => {
  console.log(users[request.userIndex]);
  response.status(200).send(users[request.userIndex]);
});
router.post("/api/users",
    checkSchema(createUserValidationSchema),(request,response)=>{
        const result = validationResult(request);

    // send errors to the endpoint
    if (!result.isEmpty())
      return response.status(400).send({ errors: result.array() });

    const data = matchedData(request);
    users.push({ id: users.length+1, ...data});
    response.status(201).send(data);
    }
)
router.put("/api/users/:id", resolveIndexByUserId, (request, response) => {
  const { body } = request;

  users[request.userIndex] = { id: users[request.userIndex].id, ...body };

  return response.sendStatus(200);
});

router.patch("/api/users/:id", resolveIndexByUserId, (request, response) => {
  const { body } = request;

  users[request.userIndex] = { ...users[request.userIndex], ...body };
  response.sendStatus(200);
});

router.delete("/api/users/:id", resolveIndexByUserId, (request, response) => {
  users.splice(request.userIndex, 1);
  return response.sendStatus(200);
});

export default router;