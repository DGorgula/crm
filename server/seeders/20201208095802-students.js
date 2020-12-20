"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Students",
      [
        {
          id:1,
          first_name: "John",
          last_name: "Doe",
          id_number: 1,
          email:"example1@example.com",
          phone:"1234567890",
          age:23,
          address:"kibbutz shefayim",
          children:0,
          military_service:"p-7",
          languages:"hebrew",
          created_at: new Date(),
          updated_at:new Date(),
          class_id:1,
<<<<<<< HEAD
=======
          mentor_id:1
>>>>>>> 660706bdb5dd7d40b47883afb379e03ee50f67bf
        },
        {
          id:2,
          first_name: "Dana",
          last_name: 'negev',
          id_number: 2,
          email:"example2@example.com",
          phone: "0545444433",
          age: 21,
          address: "yokneam",
          marital_status: "foo",
          children: 0,
          academic_background: "none",
          military_service: "israeli navy",
          work_experience: "none",
          languages: "Hebrew,english",
          citizenship:"none",
          additional_details:"none",
          created_at:new Date(),
          updated_at:new Date(),
          class_id:2,
        },
        {
          id:3,
          first_name: "Gil",
          last_name: 'Ron',
          id_number: 2,
          email:"example3@example.com",
          phone: "0545474433",
          age: 31,
          address: "yokneam",
          marital_status: "foo",
          children: 2,
          academic_background: "none",
          military_service: "israeli navy",
          work_experience: "none",
          languages: "Hebrew,english",
          citizenship:"none",
          additional_details:"none",
          created_at:new Date(),
          updated_at:new Date(),
          class_id:3,
<<<<<<< HEAD
=======
          mentor_id:3
>>>>>>> 660706bdb5dd7d40b47883afb379e03ee50f67bf
        },
        {
          id:4,
          first_name: "Tom",
          last_name: 'Maor',
          id_number: 2,
          email:"example4@example.com",
          phone: "0545444433",
          age: 26,
          address: "yokneam",
          marital_status: "foo",
          children: 0,
          academic_background: "none",
          military_service: "israeli navy",
          work_experience: "none",
          languages: "Hebrew,english",
          citizenship:"none",
          additional_details:"none",
          created_at:new Date(),
          updated_at:new Date(),
          class_id:4,
        },
        {
          id:5,
          first_name: "Tomer",
          last_name: 'Nir',
          id_number: 2,
          email:"example5@example.com",
          phone: "0545444433",
          age: 26,
          address: "yokneam",
          marital_status: "foo",
          children: 0,
          academic_background: "none",
          military_service: "israeli navy",
          work_experience: "none",
          languages: "Hebrew,english",
          citizenship:"none",
          additional_details:"none",
          created_at:new Date(),
          updated_at:new Date(),
          class_id:1,
          mentor_id:4
        },
        {
          id:6,
          first_name: "Johnny",
          last_name: 'B-good',
          id_number: 2,
          email:"example6@example.com",
          phone: "0545444433",
          age: 26,
          address: "yokneam",
          marital_status: "foo",
          children: 0,
          academic_background: "none",
          military_service: "israeli navy",
          work_experience: "none",
          languages: "Hebrew,english",
          citizenship:"none",
          additional_details:"none",
          created_at:new Date(),
          updated_at:new Date(),
          class_id:4,
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Students', null, {});
     
  },
};
