var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Ushodaya_controller = require('../controllers/Ushodaya'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Ushodaya ROUTES /// 
 
// POST request for creating a Ushodaya.  
router.post('/Ushodaya', Ushodaya_controller.Ushodaya_create_post); 
 
// DELETE request to delete Ushodaya. 
router.delete('/Ushodaya/:id', Ushodaya_controller.Ushodaya_delete); 
 
// PUT request to update Ushodaya. 
router.put('/Ushodaya/:id', Ushodaya_controller.Ushodaya_update_put); 
 
// GET request for one Ushodaya. 
router.get('/Ushodaya/:id', Ushodaya_controller.Ushodaya_detail); 
 
// GET request for list of all Ushodaya items. 
router.get('/Ushodaya', Ushodaya_controller.Ushodaya_list); 
 
module.exports = router; 