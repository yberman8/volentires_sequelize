import HomeFunctions from '../models/HomeFunctions.js';

class Home {
  constructor() {
  }

  static async getAllPirsumim(req, res) {
    try {
      const users = await HomeFunctions.findAll();
      const usersOBj = JSON.parse(users)
       console.log(usersOBj);
      res.status(200).json(usersOBj);
    } catch (error) {
      console.log(error);
    }
  };

  static async checkIfAdmin(req, res) {
    try {
      const [users, _] = await HomeFunctions.checkIfAdmin(req.body.id);
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  };


}

export default Home;