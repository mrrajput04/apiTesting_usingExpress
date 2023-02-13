const userValidator = (req, res, next) => {
  // if (!req.body.email.match(
  //     /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  //   )
  // ) {
  //   next("wrong email provided");
  // }
  // if (!req.body.asdf || req.body.asdf.length < 3) {
  //   next("asdf not provided");
  // }
  if (req.body.password.length > 6) {
    next();
  } else {
    throw new Error("password length must be greater than 6");
  }

  if (req.body.email && req.body.name !== "") {
    next();
  } else {
    throw new Error("error, fields are required");
  }
};

module.exports = userValidator;
