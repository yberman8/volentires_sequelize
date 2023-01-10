import bcrypt from 'bcrypt';
import AmutotFunctions from '../models/AmutotFunctions.js';
import PirsumimDB from "../database/models/pirsumim.js";
import AmutotDB from "../database/models/amutot.js";


class Amutot {
  constructor() {
  }
  // API
  static async Login(request, response) {
    let newData = {
      email: request.body.email,
      password: request.body.password
    }
    
     try {
      const exist = await AmutotDB.findOne({ where: { email: newData.email } });
      if (exist instanceof AmutotDB) {
        console.log('founded');
      } else {
        return response.status(401).json("auth email failed");
      }
      const savedPassword = exist?.password;

      let comparePass = await bcrypt.compare(newData.password, savedPassword);
      if (!comparePass) {
        return response.status(401).json("auth failed");
      }

      let newToken = await AmutotFunctions.genToken(exist?.id);
      return response.status(200).json(newToken);

    } catch (error) {
      response.status(400).json(error);
      console.log(error);
    }
  };

  static async deletePirsum(request, response) {
    try {
      const [users, _] = await AmutotFunctions.deletePirsum(request.body, request.userId);
      response.status(200).json(users);
    } catch (error) {
      response.status(400).json(error);
      console.log(error);
    }
  };

  static async editPirsum(request, response) {
    try {
      const [users, _] = await AmutotFunctions.editPirsum(request.body, request.userId);
      response.status(200).json(users);
    } catch (error) {
      response.status(400).json(error);
      console.log(error);
    }
  };

  static async addPirsum(request, response) {
    try {
      const [users, _] = await AmutotFunctions.addPirsum(request.body, request.userId);
      response.status(200).json(users);
    } catch (error) {
      response.status(400).json(error);
      console.log(error);
    }
  };


}

export default Amutot;

