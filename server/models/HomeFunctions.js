import db from "../database/dbexample.js";
import Pirsumim from "../database/models/pirsumim.js";
import Amutot from "../database/models/amutot.js";

class HomeFunctions {
    constructor() { }

    static async findAll() {

        const users = await Pirsumim.findAll({
            include: Amutot,
        });
        return JSON.stringify(users);
    }

    static async checkIfAdmin(id) {
        const users = await Amutot.findOne({
            where: {
                id: id,
                is_super_manager:true
            },
        });
        return (users instanceof Amutot);
    }

}
export default HomeFunctions;