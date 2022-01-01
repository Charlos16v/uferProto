//handle duplicates
const handleDuplicateKeyError = (err, res) => {
   const field = Object.keys(err.keyValue);
   const code = 409;
   const error = `An register with that ${field} already exists.`;
   res.status(code).send({
      messages: error,
      fields: field
   });
}


//error controller function
module.exports = (err, req, res, next) => {
   try {
      if (err.code && err.code == 11000) return err = handleDuplicateKeyError(err, res);
   } catch (err) {
      res
         .status(500)
         .send('An unknown error occurred.');
   }
}