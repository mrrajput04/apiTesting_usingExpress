const userValidator = (req, res, next) => {
  // let regex = new RegExp('/^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/')
  // if(req.body.email.match !== regex) {
  //   next("wrong email provided");
  // }
  // if (!req.body.asdf || req.body.asdf.length < 3) {
  //   next("asdf not provided");
  // }
  if (req.body.password.length < 6) {
    next();
  }else{
    throw new Error ("password length must be greater than 6")
  }

  if (req.body.email && req.body.name !== "") {
    next();
  } else {
    throw new Error("error, fields are required");
  }
};

module.exports = userValidator;

// const userProfileValidator = (req,res, next)=>{
//   if(req.body.mobileNo !== Number){
//     next();
//   }else{
//     throw new Error("mobile number can not be string")
//   }
// }

// module.exports = userProfileValidator;
