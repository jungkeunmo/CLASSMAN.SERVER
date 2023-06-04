const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class TestModel extends Model {
  static init(sequelize) {
    return super.init(
      {
        temp: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },

        temp2: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        modelName: "Menu",
        tableName: "menus",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 한글 저장
        sequelize,
      }
    );
  }

  static associate(db) {}
};
