'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Positions',{
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primarykey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salary: {
        type: DataTypes.STRING,
        allowNull: null,
      },
      created_at: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      uptated_at: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.droptable('Positions')
  }
};
 // MODULO 9 = CRIAÇÃO DO PROJETO TIMING PARADO 9:07
 