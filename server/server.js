import express from 'express';
import path from 'path';
import * as url from 'url';
import cors from 'cors';
import { notFound } from './middleware/pageNotFound.js';
import home from './src/router/home.js';
import amuta from './src/router/amuta.js';
import sequelize from './database/db.js';
import AmutotDB from './database/models/amutot.js';
import PirsumimDB from './database/models/pirsumim.js';
// import logger from'./middleware/logger.js';
import dotenv from 'dotenv';
dotenv.config();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default function server() {

   AmutotDB.hasMany(PirsumimDB, { as: 'pirsumims', foreignKey: 'amuta_id' });
   PirsumimDB.belongsTo(AmutotDB);

   sequelize.sync().then(async (results) => {
      //    const users = await PirsumimDB.findAll({
      //       include: AmutotDB,
      //   });
      //   console.log(users.amutot);
      // await PirsumimDB.destroy({
      //    where: {
      //      id_pirsum: 5,
      //      amuta_id: 37
      //    }
      // })
      const jane = await PirsumimDB.create({ title: "4444yrggrrrghrhthttrtr", content: "ht" ,pick_up_address:"45",zone:"43",text_finish:"grgr",picture:null,
      status_pirsum:"פעילים",pirsum_show_phone:1,pirsum_show_whatsapp:1,pirsum_show_email:1,amuta_id:22});
      console.log("Jane's auto-generated ID:", jane.id_pirsum);

   });

   const app = express();
   app.use(express.json());
   // app.use(logger);


   app.use(express.urlencoded({ extended: false }));
   app.use(express.static(path.join(__dirname, 'public')));

   // הגדרת אדרים מומלצים של אקספרס
   app.use(
      cors({
         origin: "*",
      })
   );

   app.listen(process.env.PORT, () => {
      console.log('Example app listening on port 3000!');
   });

   app.get('/', (req, res) => {
      res.send("home");
   });

   app.use('/home', home);
   app.use('/amuta', amuta);
   app.use('*', notFound);

}

// const https = require("https");
// const fs = request("fs");

// https.createServer(
// 		// Provide the private and public key to the server by reading each
// 		// file's content with the readFileSync() method.
//     {
//       key: fs.readFileSync("key.pem"),
//       cert: fs.readFileSync("cert.pem"),
//     },
//     app
//   )
//   .listen(4000, () => {
//     console.log("serever is runing at port 4000");
//   });
