import Pirsumim from "../database/models/pirsumim.js";

class AmutotFunctions {
  constructor() { }

  static async deletePirsum(Data, userId) {
    await Pirsumim.destroy({
      where: {
        id_pirsum: Data.id,
        amuta_id: userId
      }
    });
  }

  // edit option 1
  static async editPirsum(Data, userId) {
    
       Pirsumim.update(Data, {
        where: {
          id_pirsum: Data.id_pirsum,
          amuta_id: Data.amuta_id
        }
      }).then(() => {
        return true;
      }).catch((error) => {
        console.log(error);
      })
  }
  // edit option 2
  static async editPirsum2(Data, userId) {
    
       Pirsumim.findByPk(Data.id_pirsum).then((pirsum) =>{
        pirsum.title = Data.title;
        return pirsum.save()
       }).then(() => {
        return "success"
       }).catch((error) => {
        console.log("error");
       });
  }

  static async addPirsum(Data) {
    const pirsum = await Pirsumim.create(Data);
    console.log(pirsum.id_pirsum);
    return pirsum;
  }


}
export default AmutotFunctions;