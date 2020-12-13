"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await Promise.all([
      queryInterface.addColumn("students", "fcc_account", {
        type: Sequelize.STRING(30),
      }),
      queryInterface.changeColumn("students", "email", {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await Promise.all([
      queryInterface.removeColumn("students", "fcc_account"),
      queryInterface.changeColumn("students", "email", {
        type: Sequelize.VARCHAR(50),
      }),
    ]);
  },
};
