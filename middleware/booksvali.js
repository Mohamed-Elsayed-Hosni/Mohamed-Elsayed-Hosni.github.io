export const createBookValidationSchema = {
  title: {
    isLength: {
      options: {
        min: 2,
        max: 100,
      },
      errorMessage: "Title length must be within range 2-100 chars",
    },
    notEmpty: { errorMessage: "Title cant be empty" },
    isString: {
      errorMessage: "Title must be a string",
    },
},
    author:{
    isLength: {
      options: {
        min: 2,
        max: 32,
      },
      errorMessage: "Author Name length must be within range 2-32 chars",
    },
     isString: {
      errorMessage: "Author must be a string",
    },

  },
 genre:{
    isLength: {
      options: {
        min: 2,
        max: 32,
      },
      errorMessage: "Genre length must be within range 2-32 chars",
    },
     isString: {
      errorMessage: "Genre must be a string",
    },

  },
  
  };