var Ushodaya = require('../models/Ushodaya');
// List of all bakerys
exports.Ushodaya_list = async function(req, res) {
    try{
        theUshodaya = await Ushodaya.find();
        res.send(theUshodaya);
    }
    catch(err){
        res.error(500,`{"error": ${err}}`);
    }
//res.send('NOT IMPLEMENTED: bakery list');
};

// for a specific Ushodaya.
// for a specific Costume. 
exports.Ushodaya_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Ushodaya.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle Ushodaya create on POST.
exports.Ushodaya_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Ushodaya();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"UshodayaItemname":"goat", "cost":12, "size":"large"}
    document.Itemname = req.body.Itemname;
    document.Quantity = req.body.Quantity;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle bakery delete form on DELETE.
exports.Ushodaya_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Ushodaya.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Costume update form on PUT. 
exports.Ushodaya_update_put = async function(req, res) {   
      console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)   
        try { 
        let toUpdate = await Ushodaya.findById( req.params.id) 
        // Do updates of properties     
            if(req.body.Ushodaya_itemname)     
                        toUpdate.itemname = req.body.itemname;  
                               if(req.body.cost) toUpdate.Quantity = req.body.Quantity;       
                                 if(req.body.size) toUpdate.price = req.body.Price;     
                                     let result = await toUpdate.save();      
                                        console.log("Sucess " + result) 
        res.send(result)   
      } catch (err) {     
              res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
        failed`); 
    } 
}; 



// VIEWS
// Handle a show all view
exports.Ushodaya_view_all_Page = async function (req, res) {
    try {
        theUshodaya = await Ushodaya.find();
        res.render('Ushodaya', { title: 'Ushodaya Search Results', results: theUshodaya });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

// Handle a show one view with id specified by query
exports.Ushodaya_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await Ushodaya.findById( req.query.id)
        res.render('Ushodayadetail', { title: 'Ushodaya Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Ushodaya_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('Ushodayacreate', { title: 'Ushodaya Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{"error": Error creating ${err}}`); 
    }
};

// Handle building the view for updating a fish.
// query provides the id
exports.Ushodaya_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Ushodaya.findById(req.query.id)
        res.render('Ushodayaupdate', { title: 'Ushodaya Update', toShow: result });
    }
    catch(err){
        res.status(500)
        
    }
};

// Handle a delete one view with id from query
exports.Ushodaya_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await Ushodaya.findById(req.query.id)
        res.render('Ushodayadelete', { title: 'Ushodaya Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};