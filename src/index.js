import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const employee_data = [
  {
      "first_name": "Peter",
      "last_name": "Gonzalez",
      "email": "pgonzalez@strawbridge.com",
      "phone_number": "795-399-0270x21645",
      "ssn": "234-38-0587"
  },
  {
      "first_name": "Ann",
      "last_name": "Wilson",
      "email": "awilson@strawbridge.com",
      "phone_number": "827.657.5133x8085",
      "ssn": "850-05-1512"
  },
  {
      "first_name": "Holly",
      "last_name": "Hill",
      "email": "hhill@strawbridge.com",
      "phone_number": "(996)546-5648x05399",
      "ssn": "290-47-4298"
  },
  {
      "first_name": "Destiny",
      "last_name": "Valenzuela",
      "email": "dvalenzuela@strawbridge.com",
      "phone_number": "785.509.9230x87676",
      "ssn": "653-22-6983"
  },
  {
      "first_name": "Valerie",
      "last_name": "Martinez",
      "email": "vmartinez@strawbridge.com",
      "phone_number": "+1-439-347-1268x22262",
      "ssn": "694-24-3904"
  },
  {
      "first_name": "Heather",
      "last_name": "Alvarez",
      "email": "halvarez@strawbridge.com",
      "phone_number": "+1-480-645-6530x62647",
      "ssn": "785-10-0800"
  },
  {
      "first_name": "Christopher",
      "last_name": "Monroe",
      "email": "cmonroe@strawbridge.com",
      "phone_number": "001-936-624-5667x44812",
      "ssn": "768-92-7856"
  },
  {
      "first_name": "Shawn",
      "last_name": "Murray",
      "email": "smurray@strawbridge.com",
      "phone_number": "(246)530-1954",
      "ssn": "898-62-4282"
  },
  {
      "first_name": "Stacey",
      "last_name": "Walker",
      "email": "swalker@strawbridge.com",
      "phone_number": "463-668-8748",
      "ssn": "767-58-7962"
  },
  {
      "first_name": "Francisco",
      "last_name": "Simpson",
      "email": "fsimpson@strawbridge.com",
      "phone_number": "+1-839-952-2106x3143",
      "ssn": "183-76-3221"
  },
  {
      "first_name": "Pedro",
      "last_name": "Edwards",
      "email": "pedwards@strawbridge.com",
      "phone_number": "964.514.0320x86136",
      "ssn": "426-46-7490"
  },
  {
      "first_name": "Nicole",
      "last_name": "Butler",
      "email": "nbutler@strawbridge.com",
      "phone_number": "(575)385-1504x08988",
      "ssn": "575-74-1051"
  },
  {
      "first_name": "Laura",
      "last_name": "Clay",
      "email": "lclay@strawbridge.com",
      "phone_number": "609-256-5527x63503",
      "ssn": "063-69-1139"
  },
  {
      "first_name": "Matthew",
      "last_name": "Jones",
      "email": "mjones@strawbridge.com",
      "phone_number": "636.668.0862x87492",
      "ssn": "326-82-6654"
  },
  {
      "first_name": "Keith",
      "last_name": "Tyler",
      "email": "ktyler@strawbridge.com",
      "phone_number": "001-414-694-3590x648",
      "ssn": "493-85-8943"
  },
  {
      "first_name": "David",
      "last_name": "Ray",
      "email": "dray@strawbridge.com",
      "phone_number": "789-847-3223x44889",
      "ssn": "858-68-5775"
  },
  {
      "first_name": "Victor",
      "last_name": "Waters",
      "email": "vwaters@strawbridge.com",
      "phone_number": "432-885-3453x1430",
      "ssn": "782-58-2190"
  },
  {
      "first_name": "Suzanne",
      "last_name": "Howard",
      "email": "showard@strawbridge.com",
      "phone_number": "+1-530-798-5484",
      "ssn": "363-05-1121"
  },
  {
      "first_name": "Heather",
      "last_name": "Fritz",
      "email": "hfritz@strawbridge.com",
      "phone_number": "(721)282-2759",
      "ssn": "675-51-0079"
  },
  {
      "first_name": "Amy",
      "last_name": "Morales",
      "email": "amorales@strawbridge.com",
      "phone_number": "(390)573-0503x6947",
      "ssn": "127-59-1775"
  },
  {
      "first_name": "Gregory",
      "last_name": "Rios",
      "email": "grios@strawbridge.com",
      "phone_number": "3717498403",
      "ssn": "818-98-4209"
  },
  {
      "first_name": "Craig",
      "last_name": "Weiss",
      "email": "cweiss@strawbridge.com",
      "phone_number": "899-950-0025",
      "ssn": "025-04-1413"
  },
  {
      "first_name": "Martha",
      "last_name": "Hodges",
      "email": "mhodges@strawbridge.com",
      "phone_number": "968-288-9149x80859",
      "ssn": "720-09-8682"
  },
  {
      "first_name": "Kyle",
      "last_name": "Moore",
      "email": "kmoore@strawbridge.com",
      "phone_number": "8149197005",
      "ssn": "516-96-5552"
  },
  {
      "first_name": "Troy",
      "last_name": "Harris",
      "email": "tharris@strawbridge.com",
      "phone_number": "+1-636-488-6435x583",
      "ssn": "059-19-2550"
  },
  {
      "first_name": "Joseph",
      "last_name": "Hartman",
      "email": "jhartman@strawbridge.com",
      "phone_number": "(553)634-0030",
      "ssn": "086-29-8898"
  },
  {
      "first_name": "Dawn",
      "last_name": "Russell",
      "email": "drussell@strawbridge.com",
      "phone_number": "(357)251-6353x5843",
      "ssn": "041-87-4810"
  },
  {
      "first_name": "Maria",
      "last_name": "Hoffman",
      "email": "mhoffman@strawbridge.com",
      "phone_number": "839.575.6542x212",
      "ssn": "084-45-2297"
  },
  {
      "first_name": "Donald",
      "last_name": "Myers",
      "email": "dmyers@strawbridge.com",
      "phone_number": "700-723-2736x37430",
      "ssn": "533-10-4337"
  },
  {
      "first_name": "Sarah",
      "last_name": "Hammond",
      "email": "shammond@strawbridge.com",
      "phone_number": "589-548-0296",
      "ssn": "056-34-7797"
  },
  {
      "first_name": "Tara",
      "last_name": "Kramer",
      "email": "tkramer@strawbridge.com",
      "phone_number": "(965)235-1513x95331",
      "ssn": "711-25-8234"
  },
  {
      "first_name": "Mallory",
      "last_name": "Reynolds",
      "email": "mreynolds@strawbridge.com",
      "phone_number": "994-258-5036x8164",
      "ssn": "288-09-7242"
  },
  {
      "first_name": "Jonathan",
      "last_name": "Johnson",
      "email": "jjohnson@strawbridge.com",
      "phone_number": "861-311-4618x15817",
      "ssn": "691-93-3509"
  },
  {
      "first_name": "Susan",
      "last_name": "Marquez",
      "email": "smarquez@strawbridge.com",
      "phone_number": "284.900.6185x0080",
      "ssn": "469-37-4947"
  },
  {
      "first_name": "Roy",
      "last_name": "West",
      "email": "rwest@strawbridge.com",
      "phone_number": "+1-905-469-4019x0144",
      "ssn": "520-91-1171"
  },
  {
      "first_name": "Tammy",
      "last_name": "Johnson",
      "email": "tjohnson@strawbridge.com",
      "phone_number": "681-537-3119x722",
      "ssn": "617-54-6956"
  },
  {
      "first_name": "Lauren",
      "last_name": "Owens",
      "email": "lowens@strawbridge.com",
      "phone_number": "(847)862-7634x10002",
      "ssn": "883-13-4616"
  },
  {
      "first_name": "Heather",
      "last_name": "Rosales",
      "email": "hrosales@strawbridge.com",
      "phone_number": "(964)340-1039x83147",
      "ssn": "174-71-9330"
  },
  {
      "first_name": "Alan",
      "last_name": "Henry",
      "email": "ahenry@strawbridge.com",
      "phone_number": "3438886494",
      "ssn": "683-95-2414"
  },
  {
      "first_name": "Elizabeth",
      "last_name": "Gomez",
      "email": "egomez@strawbridge.com",
      "phone_number": "+1-717-386-6274",
      "ssn": "272-56-0029"
  },
  {
      "first_name": "Aaron",
      "last_name": "Butler",
      "email": "abutler@strawbridge.com",
      "phone_number": "702-990-4662",
      "ssn": "163-86-3527"
  },
  {
      "first_name": "James",
      "last_name": "Anderson",
      "email": "janderson@strawbridge.com",
      "phone_number": "8278419337",
      "ssn": "660-18-0338"
  },
  {
      "first_name": "Logan",
      "last_name": "Hammond",
      "email": "lhammond@strawbridge.com",
      "phone_number": "(915)707-9815",
      "ssn": "280-83-7963"
  },
  {
      "first_name": "Deanna",
      "last_name": "Rollins",
      "email": "drollins@strawbridge.com",
      "phone_number": "670-425-0184x603",
      "ssn": "374-02-7763"
  },
  {
      "first_name": "Michael",
      "last_name": "Butler",
      "email": "mbutler@strawbridge.com",
      "phone_number": "+1-675-819-7496x898",
      "ssn": "659-51-3675"
  },
  {
      "first_name": "Derek",
      "last_name": "Brooks",
      "email": "dbrooks@strawbridge.com",
      "phone_number": "(931)555-9577x8852",
      "ssn": "023-22-4360"
  },
  {
      "first_name": "Jacob",
      "last_name": "Garcia",
      "email": "jgarcia@strawbridge.com",
      "phone_number": "679.761.4186",
      "ssn": "103-59-9374"
  },
  {
      "first_name": "Brian",
      "last_name": "Thomas",
      "email": "bthomas@strawbridge.com",
      "phone_number": "412.522.2142x739",
      "ssn": "246-67-4401"
  },
  {
      "first_name": "Steven",
      "last_name": "Hernandez",
      "email": "shernandez@strawbridge.com",
      "phone_number": "394.769.1929x98989",
      "ssn": "002-62-3132"
  },
  {
      "first_name": "Dawn",
      "last_name": "Erickson",
      "email": "derickson@strawbridge.com",
      "phone_number": "(608)807-6142x84733",
      "ssn": "862-96-8430"
  }
]

root.render(
  <React.StrictMode>
    <App employees={employee_data} />
  </React.StrictMode>
);