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

