//Authors: Yenziwe , Azania, Luke and Asanda
// Student Numbers : ST10480778,ST10467891,ST10488658,ST10484117
// Project Name : Empowering the nation mobile application.
// Module Code: XHAW5112
// Module Name: Work Intergrated

import { CourseItem } from "../types";
import images from "../assets/images";

/* ----------------------- Course Data ----------------------- */
export const allCourses: CourseItem[] = [
  { id: "1", 
  title: "First Aid", 
  price: 1500, 
  duration: "6 months", 
  purpose: "Gain the knowledge and practical skills to respond confidently to medical emergencies at home, work, or in the community. This accredited course is ideal for parents, caregivers, and professionals.",
   content: ["CPR", "Choking response", "Wound care", "Emergency safety"],
    image: images.firstAid
   },
  { id: "2",
   title: "Sewing", 
   price: 1500, 
   duration: "6 months", 
   purpose: "Unlock your creativity with sewing and tailoring skills. Whether for personal use, fashion design, or small business, this course provides the foundation to turn fabric into finished garments and crafts.", 
   content: ["Hand stitching", "Machine sewing", "Repairs"],
    image: images.sewing 
  },
  { id: "3",
   title: "Landscaping",
    price: 1500,
     duration: "6 months",
      purpose: "Learn how to transform outdoor spaces into functional and visually appealing environments. This course is ideal for aspiring landscapers, garden designers, or homeowners looking to upgrade their space.",
       content: ["Design basics", "Soil prep", "Plant care"],
        image: images.landscaping
       },
  { id: "4",
   title: "Life Skills",
    price: 1500, 
    duration: "6 months", 
    purpose: "Build personal, social, and practical skills to thrive in everyday life. This course is designed to empower learners with tools for better decision-making, relationships, and productivity.", 
    content: ["Communication", "Budgeting", "Time management"], 
    image: images.lifeSkills
   },
  { id: "5", 
  title: "Child Minding",
   price: 750, 
   duration: "6 weeks",
    purpose: "This course equips you with the knowledge and confidence to provide safe, nurturing, and developmentally appropriate care for children of different ages. Perfect for aspiring childminders, au pairs, and caregivers.", 
    content: ["Birth to 6 months", "Toddlers", "Educational toys"],
     image: images.child 
    },
  { id: "6", 
  title: "Cooking",
   price: 750,
    duration: "6 weeks", 
    purpose: "Master the art of preparing healthy, tasty meals for yourself, your family, or as a stepping stone into the food industry. This hands-on course builds confidence in the kitchen.", content: ["Kitchen safety", "Basic meals", "Meal planning"], 
    image: images.cooking 
  },
  { id: "7",
   title: "Garden Maintenance",
    price: 750, 
    duration: "6 weeks",
     purpose: "Learn essential garden maintenance and landscaping techniques to keep outdoor spaces beautiful and sustainable. This course covers practical skills for both home gardens and small-scale landscaping jobs.",
      content: ["Planting", "Lawn care", "Tools"],
       image: images.garden
       },

];

/* ----------------------- Home Screen Grouping ----------------------- */
export const homeScreenCourses: { [key: string]: CourseItem[] } = {
  "6weeks": allCourses.filter((c) => c.duration === "6 weeks"),
  "6months": allCourses.filter((c) => c.duration === "6 months"),
};

/* ----------------------- FAQ Data ----------------------- */
// data/faqData.ts
export const faqData = {
  en: [
    { title: "Who is Empowering The Nation?", content: "Empowering The Nation was established in 2022 by Precious to offer training courses in Johannesburg, focusing on domestic workers and gardeners." },
    { title: "What courses are available?", content: "We offer courses like First Aid, Sewing, Landscaping, Life Skills, Child Minding, Cooking, and Garden Maintenance." },
    { title: "Are there discounts for multiple courses?", content: "Yes, discounts are automatically applied if you select more than one course during the checkout process." },
    { title: "Where can we find you?", content: "Empowering The Nation is located in Johannesburg South, Roodepoort, and Sandton." },
    { title: "How to join the Empowering The Nation Courses?", content: "Courses can be joined via our website or mobile app on iOS and Android." },
    { title: "Can I volunteer?", content: "Yes! Sign up at one of our locations closest to you." },
    { title: "Do you have a website for Empowering The Nation?", content: "Yes! Visit www.EmpoweringTheNation.com." },
    { title: "How do I track my progress and see my scheduled classes?", content: "Once registered, your dashboard will show all courses, schedules, and a progress tracker." },
  ],

  zu: [
    { title: "Ubani i-Empowering The Nation?", content: "I-Empowering The Nation yasungulwa ngo-2022 ngu-Precious ukuze inikeze izifundo eGoli ezigxile kubasebenzi basekhaya nabalimi." },
    { title: "Yiziphi izifundo ezitholakalayo?", content: "Sinezifundo ezifana ne-First Aid, Ukuthunga, Landscaping, Amakhono Okuphila, Ukunakekela Izingane, Ukupheka, kanye Nokugcinwa Kwegadi." },
    { title: "Ngabe kunesaphulelo uma ngikhetha izifundo eziningi?", content: "Yebo, izaphulelo ziyasebenza ngokuzenzakalela uma ukhetha izifundo ezingaphezu kwesisodwa." },
    { title: "Singakuthola kuphi?", content: "Sitholakala eGoli eNingizimu, eRoodepoort, naseSandton." },
    { title: "Ngiyijoyina kanjani i-Empowering The Nation?", content: "Ungazibhalisa kuwebhusayithi yethu noma kuhlelo lweselula lwe-iOS noma lwe-Android." },
    { title: "Ngingakwazi yini ukuzinikela?", content: "Yebo! Bhalisa kwenye yezindawo zethu eziseduze nawe." },
    { title: "Inayo yini iwebhusayithi i-Empowering The Nation?", content: "Yebo! Vakashela ku-www.EmpoweringTheNation.com." },
    { title: "Ngilandelela kanjani inqubekelaphambili yami?", content: "Uma ubhalisiwe, i-dashboard yakho izokukhombisa izifundo, izinhlelo, kanye nenqubekelaphambili yakho." },
  ],

  xh: [
    { title: "Ngubani i-Empowering The Nation?", content: "I-Empowering The Nation yasekwa ngo-2022 ngu-Precious ukuze inikeze uqeqesho eGoli kubasebenzi basekhaya nabalimi." },
    { title: "Zeziphi izifundo ezikhoyo?", content: "Sinezifundo ezifana ne-First Aid, Ukuthunga, Landscaping, Amakhono eBomi, Ukunyamekela abantwana, Ukupheka, kunye ne-Gardening." },
    { title: "Ngaba kukho isaphulelo xa ndikhetha izifundo ezininzi?", content: "Ewe, isaphulelo sisebenza ngokuzenzekelayo xa ukhetha izifundo ezingaphezulu kwesinye." },
    { title: "Singakufumana phi?", content: "Sikwiindawo ezintathu eGoli eMzantsi, eRoodepoort, naseSandton." },
    { title: "Ndijoyina njani i-Empowering The Nation?", content: "Ungazibhalisa kwiwebhusayithi okanye kwi-app yeselula ye-iOS okanye ye-Android." },
    { title: "Ndinganikezela na?", content: "Ewe! Bhalisela kufutshane nawe." },
    { title: "Ngaba ninayo iwebhusayithi?", content: "Ewe! Ndwendwela ku-www.EmpoweringTheNation.com." },
    { title: "Ndijonga njani inkqubela yam?", content: "I-dashboard yakho iza kubonisa izifundo, izicwangciso, kunye nenkqubela yakho." },
  ],

  st: [
    { title: "Ke mang Empowering The Nation?", content: "Empowering The Nation e thehiloe ka 2022 ke Precious ho fana ka koetliso e Johannesburg bakeng sa basebetsi ba malapeng le balemi." },
    { title: "Ke lithuto life tse fumanehang?", content: "Re fana ka lithuto tse kang First Aid, Ho roka, Landscaping, Tsebo ea Bophelo, Ho hlokomela Bana, Ho pheha, le Tlhokomelo ea Serapa." },
    { title: "Na ho na le litheolelo ha ke khetha lithuto tse ngata?", content: "E, litheolelo li sebetsa ka bohona ha u khetha lithuto tse ngata." },
    { title: "Re ka u fumana hokae?", content: "Re fumaneha Johannesburg Boroa, Roodepoort le Sandton." },
    { title: "Ke kenella joang lithutong tsa Empowering The Nation?", content: "O ka ingolisa webosaeteng kapa ts'ebetsong ea iOS le Android." },
    { title: "Na nka ithaopa?", content: "E, ingolise sebakeng se haufi le uena." },
    { title: "Na le na le webosaete?", content: "E, etela www.EmpoweringTheNation.com." },
    { title: "Ke latela joang tsoelo-pele ea ka?", content: "Dashboard ea hau e tla bontša lithuto le tsoelo-pele ea hau." },
  ],

  tn: [
    { title: "Ke mang Empowering The Nation?", content: "Empowering The Nation e tlhomiwe ka 2022 ke Precious go ruta batho Gaborone le Johannesburg, segolo thata badiri ba malapa le balemi." },
    { title: "Ke difundo dife tse di teng?", content: "Re na le difundo tse jaaka First Aid, Go roka, Go lema, Bokgoni jwa botshelo, Go tlhokomela bana, Go apeela le Go tlhokomela tshingwana." },
    { title: "A go na le ditlhotlhomiso fa ke tsaya difundo di le dintsi?", content: "Ee, ditlhotlhomiso di a dirwa fa o tsaya difundo di feta nngwe." },
    { title: "Re ka go bona kae?", content: "Re Johannesburg South, Roodepoort le Sandton." },
    { title: "Ke tsena jang mo Empowering The Nation?", content: "O ka ikwadisa mo webosaeteng kgotsa mo app ya iOS le Android." },
    { title: "A nka thusa ka boithaopo?", content: "Ee! Ikwadise mo lefelong le le gaufi le wena." },
    { title: "A le na le webosaete?", content: "Ee! Etela www.EmpoweringTheNation.com." },
    { title: "Ke latela jang tiro ya me?", content: "Dashboard ya gago e bontsha difundo le seabe sa gago mo thutong." },
  ],
};

/*------------------------Adresses-------------------------*/
export const addresses: string[] = [
  "Corner of Market Street & Fraser Street (Library Gardens), Johannesburg, Gauteng", // addresses[0]
  "Cnr Kingsway and University Road, Auckland Park, Johannesburg, 2006", // addresses[1]
  "1 Jan Smuts Avenue, Braamfontein, Johannesburg, Gauteng, 2001", // addresses[2]
];
