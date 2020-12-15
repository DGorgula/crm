"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Teacher, {
        foreignKey: "createdBy"
      });

      this.hasMany(models.QuizSubmission, {
        foreignKey: "quizId",
      });
      this.hasMany(models.Question, {
        foreignKey: "quizId",
      });
      this.belongsToMany(models.Student, {
        through: models.QuizSubmission,
        foreignKey: 'quizId',
        otherKey: 'studentId'
      });
    }
  }
  Quiz.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      underscored: true,
      modelName: "Quiz",
      paranoid: true,
    }
  );
  return Quiz;
};
