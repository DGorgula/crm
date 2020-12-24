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
      // #region More Cyber4s students, waiting for more details
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
      //#endregion

      //#region Excellentteam students
      // {
      //   id: 20,
      //   first_name: "abeer",
      //   last_name: " daw",
      //   id_number: "313208050",
      //   phone_number: "547570104",
      //   email: "abeer.d.95@gmail.com",
      //   additional_details: "	Computer Science",
      //   academic_background: "University of Haifa in	2020",
      //   address: "Haifa",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "Aladin",
      //   last_name: " Handoklo",
      //   id_number: "204161491",
      //   phone_number: "546139514",
      //   email: "aladin.handuklo@gmail.com",
      //   additional_details: "	Software Engineering",
      //   academic_background: "Sami Shamoon in	2020",
      //   address: "Beer Sheva",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "Amjad",
      //   last_name: " Bashiti",
      //   id_number: "315899013",
      //   phone_number: "526488801",
      //   email: "amjad.bashiti.96@gmail.com",
      //   additional_details: "	Software Engineering",
      //   academic_background: "Azrieli College of Engineering Jerusalem in	2020",
      //   address: "Jerusalem",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "Apkar",
      //   last_name: " Nalbandian",
      //   id_number: "207049727",
      //   phone_number: "503381093",
      //   email: "apkar96@gmail.com",
      //   additional_details: "	Computer Science",
      //   academic_background: "Azrieli College of Engineering Jerusalem in	2019",
      //   address: "Jerusalem",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "Aseel",
      //   last_name: " Nassar",
      //   id_number: "315885392",
      //   phone_number: "509091207",
      //   email: "aseel1296@gmail.com",
      //   additional_details: "	Computer Engineering",
      //   academic_background: "Technion in	2020",
      //   address: "Arabeh",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "aseel",
      //   last_name: " sakas",
      //   id_number: "312390842",
      //   phone_number: "544280415",
      //   email: "aseel_sakas@hotmail.com",
      //   additional_details: "	Computer Science",
      //   academic_background: "Technion in	2020",
      //   address: "Haifa",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "basil",
      //   last_name: " sgheir",
      //   id_number: "316543909",
      //   phone_number: "533013218",
      //   email: "basil.sgier@gmail.com",
      //   additional_details: "	Computer Science",
      //   academic_background: "University of Haifa in	2020",
      //   address: "מג'ד אל כרום",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "Gabriel",
      //   last_name: " Nalbandian",
      //   id_number: "205366826",
      //   phone_number: "542849744",
      //   email: "gabriel.nalbandian94@gmail.com",
      //   additional_details: "	Computer Science",
      //   academic_background: "Hadassah Academic College in	2019",
      //   address: "jerusalem",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "kareem",
      //   last_name: " nasrallah",
      //   id_number: "308554492",
      //   phone_number: "508464642",
      //   email: "Kareem.nass@outlook.com",
      //   additional_details: "	Computer Science",
      //   academic_background: "IDC in	2020",
      //   address: "Herzliya",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "loay",
      //   last_name: " jaber",
      //   id_number: "315427740",
      //   phone_number: "526160211",
      //   email: "loayjaber5@gmail.com",
      //   additional_details: "	Software Engineering",
      //   academic_background: "Azrieli College of Engineering Jerusalem in	2020",
      //   address: "Jerusalem",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "Marwan",
      //   last_name: " Bushara",
      //   id_number: "318454741",
      //   phone_number: "502245732",
      //   email: "mah3ot95@gmail.com",
      //   additional_details: "	Computer Science",
      //   academic_background: "University of Haifa in	2020",
      //   address: "Nazerath",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "mahmood",
      //   last_name: " qawasmi",
      //   id_number: "206837387",
      //   phone_number: "544467190",
      //   email: "m7mood.nael.1996@gmail.com",
      //   additional_details: "	Software Engineering",
      //   academic_background: "Azrieli College of Engineering Jerusalem in	2020",
      //   address: "Jerusalem",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "Mohammad",
      //   last_name: " Salman",
      //   id_number: "316365279",
      //   phone_number: "523601320",
      //   email: "moodi.salman@gmail.com",
      //   additional_details: "	Software Engineering",
      //   academic_background: "Azrieli College of Engineering Jerusalem in	2020",
      //   address: "Jerusalem",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "Mohammad",
      //   last_name: " Jayyousi",
      //   id_number: "305204497",
      //   phone_number: "542699106",
      //   email: "mhmd.t2@gmail.com",
      //   additional_details: "	Computer Science",
      //   academic_background: "Technion in	2020",
      //   address: "Jaljoulya",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "Mohammad",
      //   last_name: " Abu ali",
      //   id_number: "208887687",
      //   phone_number: "543118096",
      //   email: "Abualimohammmad@gmail.com",
      //   additional_details: "	Computer Science",
      //   academic_background: "hebrew university in	2020",
      //   address: "jerusalem",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "Mohammad",
      //   last_name: " Obeid",
      //   id_number: "313413346",
      //   phone_number: "543112285",
      //   email: "m.abid.author@gmail.com",
      //   additional_details: "	information systems",
      //   academic_background: "University of Haifa in	2020",
      //   address: "Sheikh Danun",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "Qasem",
      //   last_name: " Habib Allah",
      //   id_number: "205993942",
      //   phone_number: "509007236",
      //   email: "qasim.habiballa@gmail.com",
      //   additional_details: "	Computer Science",
      //   academic_background: "University of Haifa in	2020",
      //   address: "Nazerath",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "Weam",
      //   last_name: " Hanosh",
      //   id_number: "209433390",
      //   phone_number: "523442987",
      //   email: "weamhanosh@gmail.com",
      //   additional_details: "	Computer Science",
      //   academic_background: "Ben Gurion University in	2020",
      //   address: "Akku",
      //   class_id: 5,
      // },
      // {
      //   id: 20,
      //   first_name: "Wisam",
      //   last_name: " Armaly",
      //   id_number: "318282498",
      //   phone_number: "547759045",
      //   email: "armalywisam@gmail.com",
      //   additional_details: "	Computer Science",
      //   academic_background: "Ben Gurion University in	2020",
      //   address: "ShafaAmr",
      //   class_id: 5,
      // },
      // {
      //   id: 30,
      //   first_name: "אור",
      //   last_name: "שרוני",
      //   id_number: 204684104,
      //   email: "ornavon93@gmail.com",
      //   address: "ירושלים	527134215	מדמח	האוניברסיטה הפתוחה	84	2021",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "אביגיל",
      //   last_name: "אברג'ל",
      //   id_number: 318349495,
      //   email: "avigailz1997@gmail.com",
      //   address:
      //     "ירושלים	504131034	הנדסאית תוכנה	סמינר בנות אלישבע-תואר הנדסאי ממשרד החינוך	98	2017",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "אביטל",
      //   last_name: "ברקוביץ",
      //   id_number: 207404294,
      //   email: "avitalberko18@gmail.com",
      //   address: "ביתר עילית	556786355	מדמח	הדסה - קמפוס שטראוס	95	9.202",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "אורפז",
      //   last_name: "לוי",
      //   id_number: 208825109,
      //   email: "orpazlevi1818@gmail.com",
      //   address: "פתח תקווה	584193334	מדמח	מכון לב - לוסטיג	80	5.202",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "איילת",
      //   last_name: "וינשטוק",
      //   id_number: 209311182,
      //   email: "ayelet98k@gmail.com",
      //   address: "תל אביב	535205774	מדמח	מכון לב - לוסטיג	91	2020",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "איילת",
      //   last_name: "פולק",
      //   id_number: 206935330,
      //   email: "ayeletpollack@gmail.com",
      //   address: "ירושלים	523132375	מדמח	מכון לב	88	1.8",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "ברוריה",
      //   last_name: "אשווגה",
      //   id_number: 39700174,
      //   email: "Brurya.zak@gmail.com",
      //   address: "מודיעין עילית	542566878	מדמח	מכון לב + הפתוחה	87	2013",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "ברכה",
      //   last_name: "הולד",
      //   id_number: 316092154,
      //   email: "0527161548a@gmail.com",
      //   address: "ירושלים	532260892	מדמח	מכון לב	88	2018",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "הדס",
      //   last_name: "זוננפלד",
      //   id_number: 35994714,
      //   email: "hadas.schacham@mail.huji.ac.il",
      //   addres: "ירושלים	524225448	מדמח	האוניברסיטה העברית	92	9.202",
      // },
      // {
      //   id: 30,
      //   first_name: "חביבה",
      //   last_name: "אלימלך",
      //   id_number: 206516726,
      //   email: "Chaviva.am@gmail.com",
      //   address: "מבשרת ציון	584414356	מדמח	הדסה - קמפוס שטראוס	93	Aug-20",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "יהודית",
      //   last_name: "בן זאב",
      //   id_number: 206553653,
      //   email: "yehudit.benzeev@gmail.com",
      //   address: "ירושלים	542432295	הנדסת תוכנה	מכללת עזריאלי - תמורה	90	7.2021",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "יעל",
      //   last_name: "רובין",
      //   id_number: 208025569,
      //   email: "yael8477@gmail.com",
      //   address: "פתח תקווה	587195899	מדמח	מכון לב - לוסטיג	92	2020",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "לבנה",
      //   last_name: "כהן",
      //   id_number: 318716481,
      //   email: "levanac7@gmail.com",
      //   address: "תל אביב	548528763	מתמטיקה ומדמח	האוניברסיטה הפתוחה	90	2020",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "נאורה",
      //   last_name: "אסולין",
      //   id_number: 207988262,
      //   email: "neoraasulin@gmail.com",
      //   address: "בית שמש	585881770	ביואינפורמטיקה	מכון לב - קמפוס טל	Apr-00	Aug-20",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "נחמה",
      //   last_name: "בת ציון מצגר",
      //   id_number: 318758729,
      //   email: "metzgerbattzion@gmail.com",
      //   address: "בית שמש, נחלה ומנוחה	534157627	מדמח	מכון לב	81	Jul-20",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "צופיה",
      //   last_name: "אשרוב",
      //   id_number: 318166808,
      //   email: "tzof0428@gmail.com",
      //   address: "ירושלים	504120428	הנדסאית תוכנה	סמינר בנות אלישבע	98	7.2017",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "רבקה",
      //   last_name: "אובר",
      //   id_number: 318846797,
      //   email: "rivkaover@gmail.com",
      //   address: "בני ברק	556790043	מדמח	מכון לב - לוסטיג	92	2020",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "רחל",
      //   last_name: "הדס נקאר",
      //   id_number: 206783433,
      //   email: "rachel.123.nkr@gmail.com",
      //   address: "רמת גן	504105790	הנדסת תוכנה	מכון לב	94	9.202",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "שרה",
      //   last_name: "מורדכיוב",
      //   id_number: 207352816,
      //   email: "SARAMOR325@GMAIL.COM",
      //   address: "קרית מלאכי	583235885	מדמח	מכון לב	93	2019",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "שרה",
      //   last_name: "עהרנרייך",
      //   id_number: 312547870,
      //   email: "sm5800810@gmail.com",
      //   address: "ביתר עילית	527131328	הנדסת תוכנה	מכללת עזריאלי - תמורה	93	5.2019",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "שרון",
      //   last_name: "אשל",
      //   id_number: 206795528,
      //   email: "sharoncohen96@gmail.com",
      //   address: "מצפה יריחו	556790792	הנדסת תוכנה	מכון לב	90	2019 ",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "תמר",
      //   last_name: "'באחג",
      //   id_number: 206860264,
      //   email: "tamarbahaj@gmail.com",
      //   address: "נתניה	548488686	מדמח	האוניברסיטה הפתוחה	98	2020",
      //   class_id: 7,
      // },
      // {
      //   id: 30,
      //   first_name: "תמר",
      //   last_name: "גולדשמיד",
      //   id_number: 207623224,
      //   email: "tamarr.go@gmail.com",
      //   address: "פתח תקווה	586244704	מדמח	מכון לב - לוסטיג	98	8.2     ",
      //   class_id: 7,
      // },
      //#endregion
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
