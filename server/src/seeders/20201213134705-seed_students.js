"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Students", [
      {
        id: 7,
        first_name: "Nitzan",
        last_name: "Listman",
        id_number: "123432159",
        email: "student@student.com",
        phone: "0529363490",
        age: 24,
        address: "Tel Mond, Israel",
        marital_status: "Single",
        children: 0,
        academic_background: ".",
        military_service: "Combat intelligence",
        work_experience: ".",
        languages: "Hebrew",
        citizenship: "Israeli",
        additional_details: ".",
        class_id: 6,
        fcc_account: "nitzo",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        first_name: "Amir",
        last_name: "Debbie",
        id_number: "746564354",
        email: "cyybrp@gmail.com",
        phone: "0508392471",
        age: 22,
        address: "Herzliya, Israel",
        marital_status: "Married",
        children: 2,
        academic_background: ".",
        military_service: "Combat intelligence",
        work_experience: ".",
        languages: "Albanian,Azerbaijani",
        citizenship: "Israeli",
        additional_details: ".",
        class_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        first_name: "Shahar",
        last_name: "Eliyahu",
        id_number: "123456789",
        email: "snake@gmail.com",
        phone: "0508392471",
        age: 22,
        address: "Modiin, Modi'in-Maccabim-Re'ut, Israel",
        marital_status: "Single",
        children: 0,
        academic_background: ".",
        military_service: "Tohanim",
        work_experience: ".",
        languages: "Hebrew, Italian",
        citizenship: "Israeli, American",
        additional_details: ".",
        class_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        first_name: "Zach ",
        last_name: "Beja",
        id_number: "648623580",
        email: "zachirp@gmail.com",
        phone: "0529363490",
        age: 21,
        address: "Modiin, Modi'in-Maccabim-Re'ut, Israel",
        marital_status: "Married",
        children: 15,
        academic_background: ".",
        military_service: "Paratroopers",
        work_experience: ".",
        languages: "Hebrew, English, Spanish",
        citizenship: "Israeli",
        additional_details: ".",
        class_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // More Cyber4s students, waiting for more details
      // {
      //   id: 11,
      //   first_name: "Omri",
      //   last_name: "Zilberstein",
      //   id_number: 207448119,
      //   email: "Omrizil5@gmail.com",
      //   phone_number: "	0549509509",
      //   languages: "Hebrew, English",
      //   address:
      //     "		Kfar Warburg	22	Single	0	Israeli, European 		Paratroopers	None	High school 	",
      // },
      // {
      //   id: 11,
      //   first_name: "Aloon",
      //   last_name: "Broik",
      //   id_number: 654536227,
      //   email: "allonsy@brittle.com",
      //   phone_number: "",
      //   languages: "Hebrew, English",
      // },
      // {
      //   id: 11,
      //   first_name: "Meiron",
      //   last_name: "Yotvat",
      //   id_number: 209007301,
      //   email: "meiron1312@gmail.com",
      //   phone_number: "		",
      //   languages: "Hebrew, English",
      // },
      // {
      //   id: 11,
      //   first_name: "Moran",
      //   last_name: "Elad",
      //   id_number: 318303864,
      //   email: "moran1324@gmail.com",
      //   phone_number: "		",
      //   languages: "Hebrew, English",
      // },
      // {
      //   id: 11,
      //   first_name: "Youval",
      //   last_name: "Waisman",
      //   id_number: 318782570,
      //   email: "yuvalwais@gmail.com",
      //   phone_number: "	0548816729",
      //   languages: "Hebrew, English",
      // },
      // {
      //   id: 11,
      //   first_name: "Guy",
      //   last_name: "Leifer",
      //   id_number: 315443697,
      //   email: "guylei7@gmail.com",
      //   phone_number: "	0528405966",
      //   languages: "Hebrew, English",
      // },
      // {
      //   id: 11,
      //   first_name: "Ofir",
      //   last_name: "Simhi",
      //   id_number: 315908863,
      //   email: "ofirsimhi1612@gmail.com",
      //   phone_number: "	0542141462",
      //   languages: "Hebrew, English",
      // },
      // {
      //   id: 11,
      //   first_name: "Nir",
      //   last_name: "Kahana",
      //   id_number: 206730376,
      //   email: "nirkahana8@gmail.com",
      //   phone_number: "	+972542012464",
      //   languages: "Hebrew, English, Spanish",
      // },
      // {
      //   id: 11,
      //   first_name: "Sagiv",
      //   last_name: "Dayan",
      //   id_number: 318780640,
      //   email: "sagiv.keeper@gmail.com",
      //   phone_number: "		",
      //   languages: "Hebrew, English",
      // },
      // {
      //   id: 11,
      //   first_name: "Ori",
      //   last_name: "Sass",
      //   id_number: 206789182,
      //   email: "ori.sass1@gmail.com",
      //   phone_number: "	0544946311",
      //   languages: "Hebrew, English",
      // },
      // {
      //   id: 11,
      //   first_name: "Liam",
      //   last_name: "Kless",
      //   id_number: 208252882,
      //   email: "Klessliam@gmail.com",
      //   phone_number: "	0587967500",
      //   languages: "Hebrew, English",
      // },
      // {
      //   id: 11,
      //   first_name: "Itai",
      //   last_name: "Brand",
      //   id_number: 24,
      //   email: "itai.brand1000@gmail.com",
      //   phone_number: "	0547965596",
      //   languages: "Hebrew, English",
      // },
      // {
      //   id: 11,
      //   first_name: "Dor",
      //   last_name: "Kachlon",
      //   id_number: 227382269,
      //   email: "dor1kachlon@gmail.com",
      //   phone_number: "0534271447",
      //   languages: "Hebrew, English",
      // },
      // {
      //   id: 11,
      //   first_name: "Gal",
      //   last_name: "Moshkovitz",
      //   id_number: 13371337,
      //   email: "Gal.moshko@gmail.com",
      //   phone_number: "0547652686",
      //   languages: "Hebrew, English, Arabic",
      // },
      // {
      //   id: 11,
      //   first_name: "roy",
      //   last_name: "shnitzer",
      //   id_number: 206416869,
      //   email: "roya098@gmail.com",
      //   phone_number: "		",
      //   languages: "Hebrew, English, Arabic",
      // },
      // {
      //   id: 11,
      //   first_name: "David",
      //   last_name: "Diamant",
      //   id_number: 208828665,
      //   email: "david35008@gmail.com",
      //   phone_number: "	0544661474",
      //   languages: "Hebrew, English",
      // },
    ]),
      {};
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Students", null, {});
  },
};
