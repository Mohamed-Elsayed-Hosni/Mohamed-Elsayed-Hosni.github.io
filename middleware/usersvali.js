export const createUserValidationSchema = {
  firstname: {
    isLength: {
      options: {
        min: 2,
        max: 32,
      },
      errorMessage: "firstname length must be within range 2-32 chars",
    },
    notEmpty: { errorMessage: "firstname cant be empty" },
    isString: {
      errorMessage: "lastname must be a string",
    },
},
    lastname:{
    isLength: {
      options: {
        min: 2,
        max: 32,
      },
      errorMessage: "lastname length must be within range 2-32 chars",
    },
     notEmpty: { errorMessage: "lastname cant be empty" },
     isString: {
      errorMessage: "lastname must be a string",
    },

  },
  gender: {
    notEmpty: {
      errorMessage: "Age can't be empty",
    },
  },
  country: {
    notEmpty:{
        errorMessage: "Country can't be empty",
    },
    isString:{
        errorMessage: "Country must be a string",
    }

    }
  };