const mongoose = require("mongoose") 
const UshodayaSchema = mongoose.Schema({ 
 Itemname: {
     type: String,
     minLength: 1,
     maxLength: 15
 },
 Quantity: String, 
 price: String 
}) 
 
module.exports = mongoose.model("Ushodaya", 
UshodayaSchema)