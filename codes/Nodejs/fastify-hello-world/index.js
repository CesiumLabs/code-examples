const fastify = require("fastify")({
  logger: true,
});

fastify.get("/", (req, rep) => {
  rep.type("application/json").code(200);
  return { message: "Hello world!" };
});

fastify.listen(3000, (err, address) => {
  if (err) throw err;
  console.log(`Now listening to ${address}`);
});
