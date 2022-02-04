import Sequelize from "sequelize";

const { DataTypes } = Sequelize;

const url =
  process.env.DATABASE_URL ||
  "postgres://postgres:postgres@localhost:5432/review_app";
const options = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
        require: process.env.NODE_ENV === 'production',
        rejectUnauthorized: false,
    },
  },
} : {}
export const sequelize = new Sequelize(url, options);

export const User = sequelize.define(
  "user",
  {
    sub: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bestscore: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    besttime: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

  },
  { underscored: true },
);

export const Karuta = sequelize.define(
  "Karuta",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    kami: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    simo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { underscored: true },
);
