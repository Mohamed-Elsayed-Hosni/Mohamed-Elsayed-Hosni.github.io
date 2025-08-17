import { Router } from "express";
import {books} from "../src/database.js";
import {
  query,
  validationResult,
  checkSchema,
  matchedData,
} from "express-validator";
import { createBookValidationSchema } from "../middleware/booksvali.js";
import { resolveIndexByBookId } from "../middleware/getbookbyid.js";
const router = Router();

router.get("/api/books",
    query("filter")
    .isString()
    .withMessage("filter must be a string")
    .notEmpty()
    .withMessage("filter must not be empty")
    .optional()
    ,(request,response) =>{
        const result = validationResult(request);

        if (!result.isEmpty()){return response.status(400).json({errors :result.array()});}

        const {query : {filter,value}} = request;

        if (!filter || !value) return response.json(books);
        
  
        const filteredbooks= books.filter((book)=>book[filter].includes(value));
        return response.json(filteredbooks);
    }

)

router.get("/api/books/:id",resolveIndexByBookId ,(request, response) => {
  console.log(books[request.bookindex]);
  response.status(200).send(books[request.bookindex]);
});
router.post("/api/books",
    checkSchema(createBookValidationSchema),(request,response)=>{
        const result = validationResult(request);

    // send errors to the endpoint
    if (!result.isEmpty())
      return response.status(400).send({ errors: result.array() });

    const data = matchedData(request);

    books.push({id: books.length+1, ...data});
    response.status(201).send(data);
    }
)
router.put("/api/books/:id", resolveIndexByBookId, (request, response) => {
  const { body } = request;

  books[request.bookindex] = { id: books[request.bookindex].id, ...body };

  return response.sendStatus(200);
});

router.patch("/api/books/:id", resolveIndexByBookId, (request, response) => {
  const { body } = request;

  books[request.bookindex] = { ...books[request.bookindex], ...body };
  response.sendStatus(200);
});

router.delete("/api/books/:id", resolveIndexByBookId, (request, response) => {
  books.splice(request.bookindex, 1);
  return response.sendStatus(200);
});

export default router;