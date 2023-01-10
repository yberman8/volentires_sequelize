import jwt from 'jsonwebtoken';
import AdminFunctions from '../models/AdminFunctions.js';
import dotenv from'dotenv'
dotenv.config();


const auth = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    // let token = req.header("x-api-key");
    if (!token) {
         res.status(401).json("auth failed");
    }
    try {
        let decodeToken = await jwt.verify(token, process.env.SECRET_WORD);
        req.userId = decodeToken._id

        try {
            const users = await AdminFunctions.checkIfAdmin(decodeToken._id);
            console.log(11111111111 + users);
            if (users === true) {
                next();
            }
          } catch (error) {
            console.log(error);
          }
       
    } catch (error) {
          res.status(401).json("token invalid or expaired");
    }
};

export default auth;