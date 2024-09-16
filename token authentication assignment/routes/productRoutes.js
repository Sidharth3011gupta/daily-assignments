const express = require("express");
const router = express.Router();
const {addProduct} = require("../controllers/post");
const {auth,isSeller} = require("../middleware/auth");
const { getProducts } = require("../controllers/getProducts");
const {updateProductStatus} = require("../controllers/patch");
const { updateProduct } = require("../controllers/put");
const { deleteProduct } = require("../controllers/deleteProduct");

router.post("/addProduct",auth,isSeller,addProduct)
router.get("/getProducts",getProducts)
router.get("/getProducts/:id",getProducts)
router.put("/updateProduct/:id",auth,isSeller,updateProduct)
router.patch("/updateProductStatus/:id",auth,isSeller,updateProductStatus)
router.delete("/deleteProduct/:id",auth,isSeller,deleteProduct)

module.exports = router