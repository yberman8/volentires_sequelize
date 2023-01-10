import express from 'express'
const router = express.Router();
import AmutotClass from '../../controllers/Amutot.js';
import checkAuth from '../../middleware/authToken.js';
import checkAuthForReset from '../../middleware/authTokenResetPass.js';



// בקשות API
router.post('/Login', AmutotClass.Login);
router.post('/checkAuth',checkAuth, (req,res)=>{
    res.status(200).json(req.userId);
});
router.post('/getAllPirsumim',checkAuth, AmutotClass.getAllPirsumim);
router.post('/getInfo',checkAuth, AmutotClass.getInfo);
router.put('/updateDetails',checkAuth, AmutotClass.updateDetails);
router.put('/updateDefaults',checkAuth, AmutotClass.updateDefaults);

router.delete('/deletePirsum',checkAuth, AmutotClass.deletePirsum);
router.put('/editPirsum',checkAuth, AmutotClass.editPirsum);
router.post('/addPirsum',checkAuth, AmutotClass.addPirsum);
router.put('/finishPirsum',checkAuth, AmutotClass.finishPirsum);

router.post('/deleteImage',checkAuth, AmutotClass.deleteImage);
router.post('/deleteFolderImages',checkAuth, AmutotClass.deleteFolderPirsum);

router.post('/renameFolderAmuta',checkAuth, AmutotClass.renameFolderAmuta);

router.post('/forgotPassword', AmutotClass.forgotPassword);
router.post('/resetPassword',checkAuthForReset, AmutotClass.resetPassword);



export default router;