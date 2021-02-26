'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [{
      nombre: 'Cristian',
      correo: 'cchura.cpc@gmail.com',
      clave: 'clave123',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
