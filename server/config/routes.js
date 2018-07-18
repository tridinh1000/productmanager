const bodyParser = require("body-parser");
const api = require("../controllers/products")

function router(app)
{
    app.use(bodyParser.json());
    app.get("/api/products", api.getAllProducts);
    app.get("/api/products/:id", api.getProductById);
    app.post("/api/products", api.createProduct);
    app.patch("/api/products/:id", api.updateProduct);
    app.delete("/api/products/:id", api.deleteProduct);
}
module.exports = router;