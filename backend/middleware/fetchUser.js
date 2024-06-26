const jwt = require("jsonwebtoken");
const JWT_SECRET = "Harryisagoodboy";
const fetchuser = (req, res, next) => {
  //get the user from the jwt token and add id to req object ., because in the token we have passde user object so that will decode and use and id can alsoi be deocde
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token " });
  }
};
module.exports = fetchuser;
