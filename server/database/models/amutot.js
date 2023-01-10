import Sequelize from "sequelize";
import sequelize from "../db.js";

const Amutot = sequelize.define("amutot", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    lowercase: true,
    validate: {
      isEmail: true,
      notContains: ' ',
      notEmpty: true,
    }
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  whatsapp: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  logo: {
    type: Sequelize.STRING
  },
  website: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notContains: ' ',
      min:6,
      notEmpty: true,
    }
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  notes: {
    type: Sequelize.STRING
  },
  about: {
    type: Sequelize.STRING
  },
  contact_name: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  },
  contact_phone: {
    type: Sequelize.STRING
  },
  default_show_phone: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  default_show_email: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  default_show_whatsapp: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  is_super_manager: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
},
{
  paranoid: true,
  updatedAt: "modified_at",
  deletedAt: "softDelete",
  createdAt: "created_at",
}
);

export default Amutot;
