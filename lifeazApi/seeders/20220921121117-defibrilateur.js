'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
        'defibrilateurs', 
        [
          {
            serial: 'CLA012345678',
            locationname: 'Mairie d\'Elattes',
            locationaddr: '12 Rue Jacques Prévert, 42980 Elattes',
            state: 0,
            electrodesexpiry: '2025-10-05'
          },
          {
            serial: 'CLA123456789',
            locationname: 'Gymnase Pierre Peyroche',
            locationaddr: '1Bis Place des Combattants, 42980 Elattes',
            state: 0,
            electrodesexpiry: '2025-10-05'
          }/*,
          {
            serial: 'CLA234567890',
            locationname: 'École Municipale',
            locationaddr: '26 Rue Jacques Prévert, 42980 Elattes',
            state: 2,
            electrodesexpiry: '2025-10-05'
          },
          {
            serial: 'CLA345678901',
            locationname: 'Épicerie Samoreau',
            locationaddr: '17 Boulevard du Commandant Kelchmin, 42980 Elattes',
            state: 0,
            electrodesexpiry: '2025-10-05'
          },
          {
            serial: 'CLA456789012',
            locationname: 'Moussa&Telli Réparation Informatique',
            locationaddr: '90 Impasse des Cèdres, 42980 Elattes',
            state: 1,
            electrodesexpiry: '2025-10-05'
          },
          {
            serial: 'CLA567890123',
            locationname: 'Boucherie Boussal',
            locationaddr: '3 Rue Félidée, 42980 Elattes',
            state: 2,
            electrodesexpiry: '2025-10-05'
          },
          {
            serial: 'CLA678901234',
            locationname: 'Scierie Dubois&Fils',
            locationaddr: '649 Route de Lyon, 42980 Elattes',
            state: 0,
            electrodesexpiry: '2025-10-05'
          },
          {
            serial: 'CLA789012345',
            locationname: 'It\'tif Coiffure Mixte',
            locationaddr: '19 Boulevard Lévy, 42980 Elattes',
            state: 0,
            electrodesexpiry: '2025-10-05'
          },
          {
            serial: 'CLA890123456',
            locationname: 'Ferme Sarbise Laine & Tricotée',
            locationaddr: '40 Route de Lyon 42980 Elattes',
            state: 0,
            electrodesexpiry: '2025-10-05'
          },
          {
            serial: 'CLA901234567',
            locationname: 'Garage Quérin-Gogheräuss',
            locationaddr: '12 Rue Jacques Prévert, 42980 Elattes',
            state: 0,
            electrodesexpiry: '2025-10-05'
          }*/
        ],
        {}
      );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('defibrilateurs', null, {});
  }
};
