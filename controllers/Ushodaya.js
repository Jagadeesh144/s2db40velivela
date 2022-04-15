var Ushodaya = require('../models/Ushodaya'); 
 
// List of all Ushodayas 
exports.Ushodaya_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ushodaya list'); 
}; 
 
// for a specific Ushodaya. 
exports.Ushodaya_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ushodaya detail: ' + req.params.id); 
}; 
 
// Handle Ushodaya create on POST. 
exports.Ushodaya_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ushodaya create POST'); 
}; 
 
// Handle Ushodaya delete form on DELETE. 
exports.Ushodaya_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ushodaya delete DELETE ' + req.params.id); 
}; 
 
// Handle Ushodaya update form on PUT. 
exports.Ushodaya_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ushodaya update PUT' + req.params.id); 
};