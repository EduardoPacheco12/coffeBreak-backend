export async function validateTokenMiddleware(req, res, next) {
    const authorization = req.headers.authorization;
    if (!authorization) {
      throw unauthorizedError("Token not found");
    }
  
    const token = authorization?.replace("Bearer ", "");
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      if (err) {
        throw unauthorizedError("Unauthorized");
      }
      res.locals.userId = decoded.id;
      next();
    });
}