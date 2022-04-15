const mongoose = require("mongoose") 
const UshodayaSchema = mongoose.Schema({ 
 Itemname: String, 
 Quantity: String, 
 price: String 
}) 
 
module.exports = mongoose.model("Ushodaya", 
UshodayaSchema)