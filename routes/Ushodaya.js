var express = require('express');
const Ushodaya_controlers= require('../controllers/Ushodaya')
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }


router.get('/', Ushodaya_controlers.Ushodaya_view_all_Page);


router.get('/detail', Ushodaya_controlers.Ushodaya_view_one_Page);

router.get('/create', Ushodaya_controlers.Ushodaya_create_Page);

router.get('/update',secured, Ushodaya_controlers.Ushodaya_update_Page);
router.get('/delete', Ushodaya_controlers.Ushodaya_delete_Page);



module.exports = router;
