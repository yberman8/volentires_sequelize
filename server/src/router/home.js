import express from 'express'
import HomeClass from '../../controllers/Home.js';
const router = express.Router();

// בקשות API
// router.use(checkAuth())
router.get('/getAllPirsumim', HomeClass.getAllPirsumim);
router.post('/getPirsumimFiltered', HomeClass.getPirsumimFiltered);
router.post('/checkIfAdmin', HomeClass.checkIfAdmin);
router.post('/getSinglePirsumim', HomeClass.getSinglePirsumim);



export default router;