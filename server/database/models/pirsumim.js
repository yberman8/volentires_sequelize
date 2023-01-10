import Sequelize from "sequelize";
import sequelize from "../db.js";


const Pirsumim = sequelize.define("pirsumim", {
  id_pirsum: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  title: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.STRING
  },
  pick_up_address: {
    type: Sequelize.STRING
  },
  zone: {
    type: Sequelize.STRING
  },
  text_finish: {
    type: Sequelize.STRING
  },
  picture: {
    type: Sequelize.STRING
  },
  status_pirsum: {
    type: Sequelize.STRING
  },
  // amuta_id: {
  //   type: Sequelize.INTEGER
  // },
  pirsum_show_phone: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  pirsum_show_whatsapp: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  pirsum_show_email: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
}, {
  paranoid: true,
  updatedAt: "modified_at",
  deletedAt: "softDelete",
  createdAt: "created_at",
  foreignKey: "amuta_id"
}
);

export default Pirsumim;
