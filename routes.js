const routes = require('./router.js')()

routes.get("/", () => {
  return { name: "John Doe" };
})
routes.post("/", () => {
  return { name: "Doe John" };
})
module.exports = routes