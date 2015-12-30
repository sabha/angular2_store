
/** category indexes **/
db.getCollection("category").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** customer indexes **/
db.getCollection("customer").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** employee indexes **/
db.getCollection("employee").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** order indexes **/
db.getCollection("order").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** orderDetail indexes **/
db.getCollection("orderDetail").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** product indexes **/
db.getCollection("product").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** shipper indexes **/
db.getCollection("shipper").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** supplier indexes **/
db.getCollection("supplier").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** category records **/
db.getCollection("category").insert({
  "_id": ObjectId("568370e299b9433316351859"),
  "CategoryID": 1,
  "CategoryName": "Beverages",
  "Description": "Soft drinks, coffees, teas, beers, and ales",
  "Picture": null
});
db.getCollection("category").insert({
  "_id": ObjectId("568370e299b943331635185a"),
  "CategoryID": 2,
  "CategoryName": "Condiments",
  "Description": "Sweet and savory sauces, relishes, spreads, and seasonings",
  "Picture": null
});
db.getCollection("category").insert({
  "_id": ObjectId("568370e299b943331635185b"),
  "CategoryID": 3,
  "CategoryName": "Confections",
  "Description": "Desserts, candies, and sweet breads",
  "Picture": null
});
db.getCollection("category").insert({
  "_id": ObjectId("568370e299b943331635185c"),
  "CategoryID": 4,
  "CategoryName": "Dairy Products",
  "Description": "Cheeses",
  "Picture": null
});
db.getCollection("category").insert({
  "_id": ObjectId("568370e299b943331635185d"),
  "CategoryID": 5,
  "CategoryName": "Grains/Cereals",
  "Description": "Breads, crackers, pasta, and cereal",
  "Picture": null
});
db.getCollection("category").insert({
  "_id": ObjectId("568370e299b943331635185e"),
  "CategoryID": 6,
  "CategoryName": "Meat/Poultry",
  "Description": "Prepared meats",
  "Picture": null
});
db.getCollection("category").insert({
  "_id": ObjectId("568370e299b943331635185f"),
  "CategoryID": 7,
  "CategoryName": "Produce",
  "Description": "Dried fruit and bean curd",
  "Picture": null
});
db.getCollection("category").insert({
  "_id": ObjectId("568370e299b9433316351860"),
  "CategoryID": 8,
  "CategoryName": "Seafood",
  "Description": "Seaweed and fish",
  "Picture": null
});

/** customer records **/
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351465"),
  "CustomerID": "ALFKI",
  "CompanyName": "Alfreds Futterkiste",
  "ContactName": "Maria Anders",
  "ContactTitle": "Sales Representative",
  "Address": "Obere Str. 57",
  "City": "Berlin",
  "Region": "",
  "PostalCode": "12209",
  "Country": "Germany",
  "Phone": "030-0074321",
  "Fax": "030-0076545"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351466"),
  "CustomerID": "ANATR",
  "CompanyName": "Ana Trujillo Emparedados y helados",
  "ContactName": "Ana Trujillo",
  "ContactTitle": "Owner",
  "Address": "Avda. de la Constitución 2222",
  "City": "México D.F.",
  "Region": "",
  "PostalCode": "05021",
  "Country": "Mexico",
  "Phone": "(5) 555-4729",
  "Fax": "(5) 555-3745"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351467"),
  "CustomerID": "ANTON",
  "CompanyName": "Antonio Moreno Taquería",
  "ContactName": "Antonio Moreno",
  "ContactTitle": "Owner",
  "Address": "Mataderos  2312",
  "City": "México D.F.",
  "Region": "",
  "PostalCode": "05023",
  "Country": "Mexico",
  "Phone": "(5) 555-3932",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351468"),
  "CustomerID": "AROUT",
  "CompanyName": "Around the Horn",
  "ContactName": "Thomas Hardy",
  "ContactTitle": "Sales Representative",
  "Address": "120 Hanover Sq.",
  "City": "London",
  "Region": "",
  "PostalCode": "WA1 1DP",
  "Country": "UK",
  "Phone": "(171) 555-7788",
  "Fax": "(171) 555-6750"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351469"),
  "CustomerID": "BERGS",
  "CompanyName": "Berglunds snabbköp",
  "ContactName": "Christina Berglund",
  "ContactTitle": "Order Administrator",
  "Address": "Berguvsvägen  8",
  "City": "Luleå",
  "Region": "",
  "PostalCode": "S-958 22",
  "Country": "Sweden",
  "Phone": "0921-12 34 65",
  "Fax": "0921-12 34 67"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635146a"),
  "CustomerID": "BLAUS",
  "CompanyName": "Blauer See Delikatessen",
  "ContactName": "Hanna Moos",
  "ContactTitle": "Sales Representative",
  "Address": "Forsterstr. 57",
  "City": "Mannheim",
  "Region": "",
  "PostalCode": "68306",
  "Country": "Germany",
  "Phone": "0621-08460",
  "Fax": "0621-08924"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635146b"),
  "CustomerID": "BLONP",
  "CompanyName": "Blondel père et fils",
  "ContactName": "Frédérique Citeaux",
  "ContactTitle": "Marketing Manager",
  "Address": "24, place Kléber",
  "City": "Strasbourg",
  "Region": "",
  "PostalCode": "67000",
  "Country": "France",
  "Phone": "88.60.15.31",
  "Fax": "88.60.15.32"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635146c"),
  "CustomerID": "BOLID",
  "CompanyName": "Bólido Comidas preparadas",
  "ContactName": "Martín Sommer",
  "ContactTitle": "Owner",
  "Address": "C/ Araquil, 67",
  "City": "Madrid",
  "Region": "",
  "PostalCode": "28023",
  "Country": "Spain",
  "Phone": "(91) 555 22 82",
  "Fax": "(91) 555 91 99"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635146d"),
  "CustomerID": "BONAP",
  "CompanyName": "Bon app'",
  "ContactName": "Laurence Lebihan",
  "ContactTitle": "Owner",
  "Address": "12, rue des Bouchers",
  "City": "Marseille",
  "Region": "",
  "PostalCode": "13008",
  "Country": "France",
  "Phone": "91.24.45.40",
  "Fax": "91.24.45.41"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635146e"),
  "CustomerID": "BOTTM",
  "CompanyName": "Bottom-Dollar Markets",
  "ContactName": "Elizabeth Lincoln",
  "ContactTitle": "Accounting Manager",
  "Address": "23 Tsawassen Blvd.",
  "City": "Tsawassen",
  "Region": "BC",
  "PostalCode": "T2F 8M4",
  "Country": "Canada",
  "Phone": "(604) 555-4729",
  "Fax": "(604) 555-3745"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635146f"),
  "CustomerID": "BSBEV",
  "CompanyName": "B's Beverages",
  "ContactName": "Victoria Ashworth",
  "ContactTitle": "Sales Representative",
  "Address": "Fauntleroy Circus",
  "City": "London",
  "Region": "",
  "PostalCode": "EC2 5NT",
  "Country": "UK",
  "Phone": "(171) 555-1212",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351470"),
  "CustomerID": "CACTU",
  "CompanyName": "Cactus Comidas para llevar",
  "ContactName": "Patricio Simpson",
  "ContactTitle": "Sales Agent",
  "Address": "Cerrito 333",
  "City": "Buenos Aires",
  "Region": "",
  "PostalCode": "1010",
  "Country": "Argentina",
  "Phone": "(1) 135-5555",
  "Fax": "(1) 135-4892"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351471"),
  "CustomerID": "CENTC",
  "CompanyName": "Centro comercial Moctezuma",
  "ContactName": "Francisco Chang",
  "ContactTitle": "Marketing Manager",
  "Address": "Sierras de Granada 9993",
  "City": "México D.F.",
  "Region": "",
  "PostalCode": "05022",
  "Country": "Mexico",
  "Phone": "(5) 555-3392",
  "Fax": "(5) 555-7293"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351472"),
  "CustomerID": "CHOPS",
  "CompanyName": "Chop-suey Chinese",
  "ContactName": "Yang Wang",
  "ContactTitle": "Owner",
  "Address": "Hauptstr. 29",
  "City": "Bern",
  "Region": "",
  "PostalCode": "3012",
  "Country": "Switzerland",
  "Phone": "0452-076545",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351473"),
  "CustomerID": "COMMI",
  "CompanyName": "Comércio Mineiro",
  "ContactName": "Pedro Afonso",
  "ContactTitle": "Sales Associate",
  "Address": "Av. dos Lusíadas, 23",
  "City": "São Paulo",
  "Region": "SP",
  "PostalCode": "05432-043",
  "Country": "Brazil",
  "Phone": "(11) 555-7647",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351474"),
  "CustomerID": "CONSH",
  "CompanyName": "Consolidated Holdings",
  "ContactName": "Elizabeth Brown",
  "ContactTitle": "Sales Representative",
  "Address": "Berkeley Gardens\n12  Brewery",
  "City": "London",
  "Region": "",
  "PostalCode": "WX1 6LT",
  "Country": "UK",
  "Phone": "(171) 555-2282",
  "Fax": "(171) 555-9199"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351475"),
  "CustomerID": "DRACD",
  "CompanyName": "Drachenblut Delikatessen",
  "ContactName": "Sven Ottlieb",
  "ContactTitle": "Order Administrator",
  "Address": "Walserweg 21",
  "City": "Aachen",
  "Region": "",
  "PostalCode": "52066",
  "Country": "Germany",
  "Phone": "0241-039123",
  "Fax": "0241-059428"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351476"),
  "CustomerID": "DUMON",
  "CompanyName": "Du monde entier",
  "ContactName": "Janine Labrune",
  "ContactTitle": "Owner",
  "Address": "67, rue des Cinquante Otages",
  "City": "Nantes",
  "Region": "",
  "PostalCode": "44000",
  "Country": "France",
  "Phone": "40.67.88.88",
  "Fax": "40.67.89.89"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351477"),
  "CustomerID": "EASTC",
  "CompanyName": "Eastern Connection",
  "ContactName": "Ann Devon",
  "ContactTitle": "Sales Agent",
  "Address": "35 King George",
  "City": "London",
  "Region": "",
  "PostalCode": "WX3 6FW",
  "Country": "UK",
  "Phone": "(171) 555-0297",
  "Fax": "(171) 555-3373"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351478"),
  "CustomerID": "ERNSH",
  "CompanyName": "Ernst Handel",
  "ContactName": "Roland Mendel",
  "ContactTitle": "Sales Manager",
  "Address": "Kirchgasse 6",
  "City": "Graz",
  "Region": "",
  "PostalCode": "8010",
  "Country": "Austria",
  "Phone": "7675-3425",
  "Fax": "7675-3426"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351479"),
  "CustomerID": "FAMIA",
  "CompanyName": "Familia Arquibaldo",
  "ContactName": "Aria Cruz",
  "ContactTitle": "Marketing Assistant",
  "Address": "Rua Orós, 92",
  "City": "São Paulo",
  "Region": "SP",
  "PostalCode": "05442-030",
  "Country": "Brazil",
  "Phone": "(11) 555-9857",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635147a"),
  "CustomerID": "FISSA",
  "CompanyName": "FISSA Fabrica Inter. Salchichas S.A.",
  "ContactName": "Diego Roel",
  "ContactTitle": "Accounting Manager",
  "Address": "C/ Moralzarzal, 86",
  "City": "Madrid",
  "Region": "",
  "PostalCode": "28034",
  "Country": "Spain",
  "Phone": "(91) 555 94 44",
  "Fax": "(91) 555 55 93"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635147b"),
  "CustomerID": "FOLIG",
  "CompanyName": "Folies gourmandes",
  "ContactName": "Martine Rancé",
  "ContactTitle": "Assistant Sales Agent",
  "Address": "184, chaussée de Tournai",
  "City": "Lille",
  "Region": "",
  "PostalCode": "59000",
  "Country": "France",
  "Phone": "20.16.10.16",
  "Fax": "20.16.10.17"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635147c"),
  "CustomerID": "FOLKO",
  "CompanyName": "Folk och fä HB",
  "ContactName": "Maria Larsson",
  "ContactTitle": "Owner",
  "Address": "Åkergatan 24",
  "City": "Bräcke",
  "Region": "",
  "PostalCode": "S-844 67",
  "Country": "Sweden",
  "Phone": "0695-34 67 21",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635147d"),
  "CustomerID": "FRANK",
  "CompanyName": "Frankenversand",
  "ContactName": "Peter Franken",
  "ContactTitle": "Marketing Manager",
  "Address": "Berliner Platz 43",
  "City": "München",
  "Region": "",
  "PostalCode": "80805",
  "Country": "Germany",
  "Phone": "089-0877310",
  "Fax": "089-0877451"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635147e"),
  "CustomerID": "FRANR",
  "CompanyName": "France restauration",
  "ContactName": "Carine Schmitt",
  "ContactTitle": "Marketing Manager",
  "Address": "54, rue Royale",
  "City": "Nantes",
  "Region": "",
  "PostalCode": "44000",
  "Country": "France",
  "Phone": "40.32.21.21",
  "Fax": "40.32.21.20"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635147f"),
  "CustomerID": "FRANS",
  "CompanyName": "Franchi S.p.A.",
  "ContactName": "Paolo Accorti",
  "ContactTitle": "Sales Representative",
  "Address": "Via Monte Bianco 34",
  "City": "Torino",
  "Region": "",
  "PostalCode": "10100",
  "Country": "Italy",
  "Phone": "011-4988260",
  "Fax": "011-4988261"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351480"),
  "CustomerID": "FURIB",
  "CompanyName": "Furia Bacalhau e Frutos do Mar",
  "ContactName": "Lino Rodriguez",
  "ContactTitle": "Sales Manager",
  "Address": "Jardim das rosas n. 32",
  "City": "Lisboa",
  "Region": "",
  "PostalCode": "1675",
  "Country": "Portugal",
  "Phone": "(1) 354-2534",
  "Fax": "(1) 354-2535"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351481"),
  "CustomerID": "GALED",
  "CompanyName": "Galería del gastrónomo",
  "ContactName": "Eduardo Saavedra",
  "ContactTitle": "Marketing Manager",
  "Address": "Rambla de Cataluña, 23",
  "City": "Barcelona",
  "Region": "",
  "PostalCode": "08022",
  "Country": "Spain",
  "Phone": "(93) 203 4560",
  "Fax": "(93) 203 4561"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351482"),
  "CustomerID": "GODOS",
  "CompanyName": "Godos Cocina Típica",
  "ContactName": "José Pedro Freyre",
  "ContactTitle": "Sales Manager",
  "Address": "C/ Romero, 33",
  "City": "Sevilla",
  "Region": "",
  "PostalCode": "41101",
  "Country": "Spain",
  "Phone": "(95) 555 82 82",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351483"),
  "CustomerID": "GOURL",
  "CompanyName": "Gourmet Lanchonetes",
  "ContactName": "André Fonseca",
  "ContactTitle": "Sales Associate",
  "Address": "Av. Brasil, 442",
  "City": "Campinas",
  "Region": "SP",
  "PostalCode": "04876-786",
  "Country": "Brazil",
  "Phone": "(11) 555-9482",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351484"),
  "CustomerID": "GREAL",
  "CompanyName": "Great Lakes Food Market",
  "ContactName": "Howard Snyder",
  "ContactTitle": "Marketing Manager",
  "Address": "2732 Baker Blvd.",
  "City": "Eugene",
  "Region": "OR",
  "PostalCode": "97403",
  "Country": "USA",
  "Phone": "(503) 555-7555",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351485"),
  "CustomerID": "GROSR",
  "CompanyName": "GROSELLA-Restaurante",
  "ContactName": "Manuel Pereira",
  "ContactTitle": "Owner",
  "Address": "5ª Ave. Los Palos Grandes",
  "City": "Caracas",
  "Region": "DF",
  "PostalCode": "1081",
  "Country": "Venezuela",
  "Phone": "(2) 283-2951",
  "Fax": "(2) 283-3397"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351486"),
  "CustomerID": "HANAR",
  "CompanyName": "Hanari Carnes",
  "ContactName": "Mario Pontes",
  "ContactTitle": "Accounting Manager",
  "Address": "Rua do Paço, 67",
  "City": "Rio de Janeiro",
  "Region": "RJ",
  "PostalCode": "05454-876",
  "Country": "Brazil",
  "Phone": "(21) 555-0091",
  "Fax": "(21) 555-8765"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351487"),
  "CustomerID": "HILAA",
  "CompanyName": "HILARIÓN-Abastos",
  "ContactName": "Carlos Hernández",
  "ContactTitle": "Sales Representative",
  "Address": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "City": "San Cristóbal",
  "Region": "Táchira",
  "PostalCode": "5022",
  "Country": "Venezuela",
  "Phone": "(5) 555-1340",
  "Fax": "(5) 555-1948"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351488"),
  "CustomerID": "HUNGC",
  "CompanyName": "Hungry Coyote Import Store",
  "ContactName": "Yoshi Latimer",
  "ContactTitle": "Sales Representative",
  "Address": "City Center Plaza\n516 Main St.",
  "City": "Elgin",
  "Region": "OR",
  "PostalCode": "97827",
  "Country": "USA",
  "Phone": "(503) 555-6874",
  "Fax": "(503) 555-2376"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351489"),
  "CustomerID": "HUNGO",
  "CompanyName": "Hungry Owl All-Night Grocers",
  "ContactName": "Patricia McKenna",
  "ContactTitle": "Sales Associate",
  "Address": "8 Johnstown Road",
  "City": "Cork",
  "Region": "Co. Cork",
  "PostalCode": "",
  "Country": "Ireland",
  "Phone": "2967 542",
  "Fax": "2967 3333"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635148a"),
  "CustomerID": "ISLAT",
  "CompanyName": "Island Trading",
  "ContactName": "Helen Bennett",
  "ContactTitle": "Marketing Manager",
  "Address": "Garden House\nCrowther Way",
  "City": "Cowes",
  "Region": "Isle of Wight",
  "PostalCode": "PO31 7PJ",
  "Country": "UK",
  "Phone": "(198) 555-8888",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635148b"),
  "CustomerID": "KOENE",
  "CompanyName": "Königlich Essen",
  "ContactName": "Philip Cramer",
  "ContactTitle": "Sales Associate",
  "Address": "Maubelstr. 90",
  "City": "Brandenburg",
  "Region": "",
  "PostalCode": "14776",
  "Country": "Germany",
  "Phone": "0555-09876",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635148c"),
  "CustomerID": "LACOR",
  "CompanyName": "La corne d'abondance",
  "ContactName": "Daniel Tonini",
  "ContactTitle": "Sales Representative",
  "Address": "67, avenue de l'Europe",
  "City": "Versailles",
  "Region": "",
  "PostalCode": "78000",
  "Country": "France",
  "Phone": "30.59.84.10",
  "Fax": "30.59.85.11"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635148d"),
  "CustomerID": "LAMAI",
  "CompanyName": "La maison d'Asie",
  "ContactName": "Annette Roulet",
  "ContactTitle": "Sales Manager",
  "Address": "1 rue Alsace-Lorraine",
  "City": "Toulouse",
  "Region": "",
  "PostalCode": "31000",
  "Country": "France",
  "Phone": "61.77.61.10",
  "Fax": "61.77.61.11"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635148e"),
  "CustomerID": "LAUGB",
  "CompanyName": "Laughing Bacchus Wine Cellars",
  "ContactName": "Yoshi Tannamuri",
  "ContactTitle": "Marketing Assistant",
  "Address": "1900 Oak St.",
  "City": "Vancouver",
  "Region": "BC",
  "PostalCode": "V3F 2K1",
  "Country": "Canada",
  "Phone": "(604) 555-3392",
  "Fax": "(604) 555-7293"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635148f"),
  "CustomerID": "LAZYK",
  "CompanyName": "Lazy K Kountry Store",
  "ContactName": "John Steel",
  "ContactTitle": "Marketing Manager",
  "Address": "12 Orchestra Terrace",
  "City": "Walla Walla",
  "Region": "WA",
  "PostalCode": "99362",
  "Country": "USA",
  "Phone": "(509) 555-7969",
  "Fax": "(509) 555-6221"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351490"),
  "CustomerID": "LEHMS",
  "CompanyName": "Lehmanns Marktstand",
  "ContactName": "Renate Messner",
  "ContactTitle": "Sales Representative",
  "Address": "Magazinweg 7",
  "City": "Frankfurt a.M.",
  "Region": "",
  "PostalCode": "60528",
  "Country": "Germany",
  "Phone": "069-0245984",
  "Fax": "069-0245874"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351491"),
  "CustomerID": "LETSS",
  "CompanyName": "Let's Stop N Shop",
  "ContactName": "Jaime Yorres",
  "ContactTitle": "Owner",
  "Address": "87 Polk St.\nSuite 5",
  "City": "San Francisco",
  "Region": "CA",
  "PostalCode": "94117",
  "Country": "USA",
  "Phone": "(415) 555-5938",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351492"),
  "CustomerID": "LILAS",
  "CompanyName": "LILA-Supermercado",
  "ContactName": "Carlos González",
  "ContactTitle": "Accounting Manager",
  "Address": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
  "City": "Barquisimeto",
  "Region": "Lara",
  "PostalCode": "3508",
  "Country": "Venezuela",
  "Phone": "(9) 331-6954",
  "Fax": "(9) 331-7256"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351493"),
  "CustomerID": "LINOD",
  "CompanyName": "LINO-Delicateses",
  "ContactName": "Felipe Izquierdo",
  "ContactTitle": "Owner",
  "Address": "Ave. 5 de Mayo Porlamar",
  "City": "I. de Margarita",
  "Region": "Nueva Esparta",
  "PostalCode": "4980",
  "Country": "Venezuela",
  "Phone": "(8) 34-56-12",
  "Fax": "(8) 34-93-93"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351494"),
  "CustomerID": "LONEP",
  "CompanyName": "Lonesome Pine Restaurant",
  "ContactName": "Fran Wilson",
  "ContactTitle": "Sales Manager",
  "Address": "89 Chiaroscuro Rd.",
  "City": "Portland",
  "Region": "OR",
  "PostalCode": "97219",
  "Country": "USA",
  "Phone": "(503) 555-9573",
  "Fax": "(503) 555-9646"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351495"),
  "CustomerID": "MAGAA",
  "CompanyName": "Magazzini Alimentari Riuniti",
  "ContactName": "Giovanni Rovelli",
  "ContactTitle": "Marketing Manager",
  "Address": "Via Ludovico il Moro 22",
  "City": "Bergamo",
  "Region": "",
  "PostalCode": "24100",
  "Country": "Italy",
  "Phone": "035-640230",
  "Fax": "035-640231"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351496"),
  "CustomerID": "MAISD",
  "CompanyName": "Maison Dewey",
  "ContactName": "Catherine Dewey",
  "ContactTitle": "Sales Agent",
  "Address": "Rue Joseph-Bens 532",
  "City": "Bruxelles",
  "Region": "",
  "PostalCode": "B-1180",
  "Country": "Belgium",
  "Phone": "(02) 201 24 67",
  "Fax": "(02) 201 24 68"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351497"),
  "CustomerID": "MEREP",
  "CompanyName": "Mère Paillarde",
  "ContactName": "Jean Fresnière",
  "ContactTitle": "Marketing Assistant",
  "Address": "43 rue St. Laurent",
  "City": "Montréal",
  "Region": "Québec",
  "PostalCode": "H1J 1C3",
  "Country": "Canada",
  "Phone": "(514) 555-8054",
  "Fax": "(514) 555-8055"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351498"),
  "CustomerID": "MORGK",
  "CompanyName": "Morgenstern Gesundkost",
  "ContactName": "Alexander Feuer",
  "ContactTitle": "Marketing Assistant",
  "Address": "Heerstr. 22",
  "City": "Leipzig",
  "Region": "",
  "PostalCode": "04179",
  "Country": "Germany",
  "Phone": "0342-023176",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b9433316351499"),
  "CustomerID": "NORTS",
  "CompanyName": "North/South",
  "ContactName": "Simon Crowther",
  "ContactTitle": "Sales Associate",
  "Address": "South House\n300 Queensbridge",
  "City": "London",
  "Region": "",
  "PostalCode": "SW7 1RZ",
  "Country": "UK",
  "Phone": "(171) 555-7733",
  "Fax": "(171) 555-2530"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635149a"),
  "CustomerID": "OCEAN",
  "CompanyName": "Océano Atlántico Ltda.",
  "ContactName": "Yvonne Moncada",
  "ContactTitle": "Sales Agent",
  "Address": "Ing. Gustavo Moncada 8585\nPiso 20-A",
  "City": "Buenos Aires",
  "Region": "",
  "PostalCode": "1010",
  "Country": "Argentina",
  "Phone": "(1) 135-5333",
  "Fax": "(1) 135-5535"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635149b"),
  "CustomerID": "OLDWO",
  "CompanyName": "Old World Delicatessen",
  "ContactName": "Rene Phillips",
  "ContactTitle": "Sales Representative",
  "Address": "2743 Bering St.",
  "City": "Anchorage",
  "Region": "AK",
  "PostalCode": "99508",
  "Country": "USA",
  "Phone": "(907) 555-7584",
  "Fax": "(907) 555-2880"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635149c"),
  "CustomerID": "OTTIK",
  "CompanyName": "Ottilies Käseladen",
  "ContactName": "Henriette Pfalzheim",
  "ContactTitle": "Owner",
  "Address": "Mehrheimerstr. 369",
  "City": "Köln",
  "Region": "",
  "PostalCode": "50739",
  "Country": "Germany",
  "Phone": "0221-0644327",
  "Fax": "0221-0765721"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635149d"),
  "CustomerID": "PARIS",
  "CompanyName": "Paris spécialités",
  "ContactName": "Marie Bertrand",
  "ContactTitle": "Owner",
  "Address": "265, boulevard Charonne",
  "City": "Paris",
  "Region": "",
  "PostalCode": "75012",
  "Country": "France",
  "Phone": "(1) 42.34.22.66",
  "Fax": "(1) 42.34.22.77"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635149e"),
  "CustomerID": "PERIC",
  "CompanyName": "Pericles Comidas clásicas",
  "ContactName": "Guillermo Fernández",
  "ContactTitle": "Sales Representative",
  "Address": "Calle Dr. Jorge Cash 321",
  "City": "México D.F.",
  "Region": "",
  "PostalCode": "05033",
  "Country": "Mexico",
  "Phone": "(5) 552-3745",
  "Fax": "(5) 545-3745"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b943331635149f"),
  "CustomerID": "PICCO",
  "CompanyName": "Piccolo und mehr",
  "ContactName": "Georg Pipps",
  "ContactTitle": "Sales Manager",
  "Address": "Geislweg 14",
  "City": "Salzburg",
  "Region": "",
  "PostalCode": "5020",
  "Country": "Austria",
  "Phone": "6562-9722",
  "Fax": "6562-9723"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514a0"),
  "CustomerID": "PRINI",
  "CompanyName": "Princesa Isabel Vinhos",
  "ContactName": "Isabel de Castro",
  "ContactTitle": "Sales Representative",
  "Address": "Estrada da saúde n. 58",
  "City": "Lisboa",
  "Region": "",
  "PostalCode": "1756",
  "Country": "Portugal",
  "Phone": "(1) 356-5634",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514a1"),
  "CustomerID": "QUEDE",
  "CompanyName": "Que Delícia",
  "ContactName": "Bernardo Batista",
  "ContactTitle": "Accounting Manager",
  "Address": "Rua da Panificadora, 12",
  "City": "Rio de Janeiro",
  "Region": "RJ",
  "PostalCode": "02389-673",
  "Country": "Brazil",
  "Phone": "(21) 555-4252",
  "Fax": "(21) 555-4545"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514a2"),
  "CustomerID": "QUEEN",
  "CompanyName": "Queen Cozinha",
  "ContactName": "Lúcia Carvalho",
  "ContactTitle": "Marketing Assistant",
  "Address": "Alameda dos Canàrios, 891",
  "City": "São Paulo",
  "Region": "SP",
  "PostalCode": "05487-020",
  "Country": "Brazil",
  "Phone": "(11) 555-1189",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514a3"),
  "CustomerID": "QUICK",
  "CompanyName": "QUICK-Stop",
  "ContactName": "Horst Kloss",
  "ContactTitle": "Accounting Manager",
  "Address": "Taucherstraße 10",
  "City": "Cunewalde",
  "Region": "",
  "PostalCode": "01307",
  "Country": "Germany",
  "Phone": "0372-035188",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514a4"),
  "CustomerID": "RANCH",
  "CompanyName": "Rancho grande",
  "ContactName": "Sergio Gutiérrez",
  "ContactTitle": "Sales Representative",
  "Address": "Av. del Libertador 900",
  "City": "Buenos Aires",
  "Region": "",
  "PostalCode": "1010",
  "Country": "Argentina",
  "Phone": "(1) 123-5555",
  "Fax": "(1) 123-5556"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514a5"),
  "CustomerID": "RATTC",
  "CompanyName": "Rattlesnake Canyon Grocery",
  "ContactName": "Paula Wilson",
  "ContactTitle": "Assistant Sales Representative",
  "Address": "2817 Milton Dr.",
  "City": "Albuquerque",
  "Region": "NM",
  "PostalCode": "87110",
  "Country": "USA",
  "Phone": "(505) 555-5939",
  "Fax": "(505) 555-3620"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514a6"),
  "CustomerID": "REGGC",
  "CompanyName": "Reggiani Caseifici",
  "ContactName": "Maurizio Moroni",
  "ContactTitle": "Sales Associate",
  "Address": "Strada Provinciale 124",
  "City": "Reggio Emilia",
  "Region": "",
  "PostalCode": "42100",
  "Country": "Italy",
  "Phone": "0522-556721",
  "Fax": "0522-556722"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514a7"),
  "CustomerID": "RICAR",
  "CompanyName": "Ricardo Adocicados",
  "ContactName": "Janete Limeira",
  "ContactTitle": "Assistant Sales Agent",
  "Address": "Av. Copacabana, 267",
  "City": "Rio de Janeiro",
  "Region": "RJ",
  "PostalCode": "02389-890",
  "Country": "Brazil",
  "Phone": "(21) 555-3412",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514a8"),
  "CustomerID": "RICSU",
  "CompanyName": "Richter Supermarkt",
  "ContactName": "Michael Holz",
  "ContactTitle": "Sales Manager",
  "Address": "Grenzacherweg 237",
  "City": "Genève",
  "Region": "",
  "PostalCode": "1203",
  "Country": "Switzerland",
  "Phone": "0897-034214",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514a9"),
  "CustomerID": "ROMEY",
  "CompanyName": "Romero y tomillo",
  "ContactName": "Alejandra Camino",
  "ContactTitle": "Accounting Manager",
  "Address": "Gran Vía, 1",
  "City": "Madrid",
  "Region": "",
  "PostalCode": "28001",
  "Country": "Spain",
  "Phone": "(91) 745 6200",
  "Fax": "(91) 745 6210"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514aa"),
  "CustomerID": "SANTG",
  "CompanyName": "Santé Gourmet",
  "ContactName": "Jonas Bergulfsen",
  "ContactTitle": "Owner",
  "Address": "Erling Skakkes gate 78",
  "City": "Stavern",
  "Region": "",
  "PostalCode": "4110",
  "Country": "Norway",
  "Phone": "07-98 92 35",
  "Fax": "07-98 92 47"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514ab"),
  "CustomerID": "SAVEA",
  "CompanyName": "Save-a-lot Markets",
  "ContactName": "Jose Pavarotti",
  "ContactTitle": "Sales Representative",
  "Address": "187 Suffolk Ln.",
  "City": "Boise",
  "Region": "ID",
  "PostalCode": "83720",
  "Country": "USA",
  "Phone": "(208) 555-8097",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514ac"),
  "CustomerID": "SEVES",
  "CompanyName": "Seven Seas Imports",
  "ContactName": "Hari Kumar",
  "ContactTitle": "Sales Manager",
  "Address": "90 Wadhurst Rd.",
  "City": "London",
  "Region": "",
  "PostalCode": "OX15 4NB",
  "Country": "UK",
  "Phone": "(171) 555-1717",
  "Fax": "(171) 555-5646"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514ad"),
  "CustomerID": "SIMOB",
  "CompanyName": "Simons bistro",
  "ContactName": "Jytte Petersen",
  "ContactTitle": "Owner",
  "Address": "Vinbæltet 34",
  "City": "København",
  "Region": "",
  "PostalCode": "1734",
  "Country": "Denmark",
  "Phone": "31 12 34 56",
  "Fax": "31 13 35 57"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514ae"),
  "CustomerID": "SPECD",
  "CompanyName": "Spécialités du monde",
  "ContactName": "Dominique Perrier",
  "ContactTitle": "Marketing Manager",
  "Address": "25, rue Lauriston",
  "City": "Paris",
  "Region": "",
  "PostalCode": "75016",
  "Country": "France",
  "Phone": "(1) 47.55.60.10",
  "Fax": "(1) 47.55.60.20"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514af"),
  "CustomerID": "SPLIR",
  "CompanyName": "Split Rail Beer & Ale",
  "ContactName": "Art Braunschweiger",
  "ContactTitle": "Sales Manager",
  "Address": "P.O. Box 555",
  "City": "Lander",
  "Region": "WY",
  "PostalCode": "82520",
  "Country": "USA",
  "Phone": "(307) 555-4680",
  "Fax": "(307) 555-6525"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514b0"),
  "CustomerID": "SUPRD",
  "CompanyName": "Suprêmes délices",
  "ContactName": "Pascale Cartrain",
  "ContactTitle": "Accounting Manager",
  "Address": "Boulevard Tirou, 255",
  "City": "Charleroi",
  "Region": "",
  "PostalCode": "B-6000",
  "Country": "Belgium",
  "Phone": "(071) 23 67 22 20",
  "Fax": "(071) 23 67 22 21"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514b1"),
  "CustomerID": "THEBI",
  "CompanyName": "The Big Cheese",
  "ContactName": "Liz Nixon",
  "ContactTitle": "Marketing Manager",
  "Address": "89 Jefferson Way\nSuite 2",
  "City": "Portland",
  "Region": "OR",
  "PostalCode": "97201",
  "Country": "USA",
  "Phone": "(503) 555-3612",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514b2"),
  "CustomerID": "THECR",
  "CompanyName": "The Cracker Box",
  "ContactName": "Liu Wong",
  "ContactTitle": "Marketing Assistant",
  "Address": "55 Grizzly Peak Rd.",
  "City": "Butte",
  "Region": "MT",
  "PostalCode": "59801",
  "Country": "USA",
  "Phone": "(406) 555-5834",
  "Fax": "(406) 555-8083"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514b3"),
  "CustomerID": "TOMSP",
  "CompanyName": "Toms Spezialitäten",
  "ContactName": "Karin Josephs",
  "ContactTitle": "Marketing Manager",
  "Address": "Luisenstr. 48",
  "City": "Münster",
  "Region": "",
  "PostalCode": "44087",
  "Country": "Germany",
  "Phone": "0251-031259",
  "Fax": "0251-035695"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514b4"),
  "CustomerID": "TORTU",
  "CompanyName": "Tortuga Restaurante",
  "ContactName": "Miguel Angel Paolino",
  "ContactTitle": "Owner",
  "Address": "Avda. Azteca 123",
  "City": "México D.F.",
  "Region": "",
  "PostalCode": "05033",
  "Country": "Mexico",
  "Phone": "(5) 555-2933",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514b5"),
  "CustomerID": "TRADH",
  "CompanyName": "Tradição Hipermercados",
  "ContactName": "Anabela Domingues",
  "ContactTitle": "Sales Representative",
  "Address": "Av. Inês de Castro, 414",
  "City": "São Paulo",
  "Region": "SP",
  "PostalCode": "05634-030",
  "Country": "Brazil",
  "Phone": "(11) 555-2167",
  "Fax": "(11) 555-2168"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514b6"),
  "CustomerID": "TRAIH",
  "CompanyName": "Trail's Head Gourmet Provisioners",
  "ContactName": "Helvetius Nagy",
  "ContactTitle": "Sales Associate",
  "Address": "722 DaVinci Blvd.",
  "City": "Kirkland",
  "Region": "WA",
  "PostalCode": "98034",
  "Country": "USA",
  "Phone": "(206) 555-8257",
  "Fax": "(206) 555-2174"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514b7"),
  "CustomerID": "VAFFE",
  "CompanyName": "Vaffeljernet",
  "ContactName": "Palle Ibsen",
  "ContactTitle": "Sales Manager",
  "Address": "Smagsløget 45",
  "City": "Århus",
  "Region": "",
  "PostalCode": "8200",
  "Country": "Denmark",
  "Phone": "86 21 32 43",
  "Fax": "86 22 33 44"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514b8"),
  "CustomerID": "VICTE",
  "CompanyName": "Victuailles en stock",
  "ContactName": "Mary Saveley",
  "ContactTitle": "Sales Agent",
  "Address": "2, rue du Commerce",
  "City": "Lyon",
  "Region": "",
  "PostalCode": "69004",
  "Country": "France",
  "Phone": "78.32.54.86",
  "Fax": "78.32.54.87"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514b9"),
  "CustomerID": "VINET",
  "CompanyName": "Vins et alcools Chevalier",
  "ContactName": "Paul Henriot",
  "ContactTitle": "Accounting Manager",
  "Address": "59 rue de l'Abbaye",
  "City": "Reims",
  "Region": "",
  "PostalCode": "51100",
  "Country": "France",
  "Phone": "26.47.15.10",
  "Fax": "26.47.15.11"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514ba"),
  "CustomerID": "WANDK",
  "CompanyName": "Die Wandernde Kuh",
  "ContactName": "Rita Müller",
  "ContactTitle": "Sales Representative",
  "Address": "Adenauerallee 900",
  "City": "Stuttgart",
  "Region": "",
  "PostalCode": "70563",
  "Country": "Germany",
  "Phone": "0711-020361",
  "Fax": "0711-035428"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514bb"),
  "CustomerID": "WARTH",
  "CompanyName": "Wartian Herkku",
  "ContactName": "Pirkko Koskitalo",
  "ContactTitle": "Accounting Manager",
  "Address": "Torikatu 38",
  "City": "Oulu",
  "Region": "",
  "PostalCode": "90110",
  "Country": "Finland",
  "Phone": "981-443655",
  "Fax": "981-443655"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514bc"),
  "CustomerID": "WELLI",
  "CompanyName": "Wellington Importadora",
  "ContactName": "Paula Parente",
  "ContactTitle": "Sales Manager",
  "Address": "Rua do Mercado, 12",
  "City": "Resende",
  "Region": "SP",
  "PostalCode": "08737-363",
  "Country": "Brazil",
  "Phone": "(14) 555-8122",
  "Fax": ""
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514bd"),
  "CustomerID": "WHITC",
  "CompanyName": "White Clover Markets",
  "ContactName": "Karl Jablonski",
  "ContactTitle": "Owner",
  "Address": "305 - 14th Ave. S.\nSuite 3B",
  "City": "Seattle",
  "Region": "WA",
  "PostalCode": "98128",
  "Country": "USA",
  "Phone": "(206) 555-4112",
  "Fax": "(206) 555-4115"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514be"),
  "CustomerID": "WILMK",
  "CompanyName": "Wilman Kala",
  "ContactName": "Matti Karttunen",
  "ContactTitle": "Owner/Marketing Assistant",
  "Address": "Keskuskatu 45",
  "City": "Helsinki",
  "Region": "",
  "PostalCode": "21240",
  "Country": "Finland",
  "Phone": "90-224 8858",
  "Fax": "90-224 8858"
});
db.getCollection("customer").insert({
  "_id": ObjectId("56836fad99b94333163514bf"),
  "CustomerID": "WOLZA",
  "CompanyName": "Wolski  Zajazd",
  "ContactName": "Zbyszek Piestrzeniewicz",
  "ContactTitle": "Owner",
  "Address": "ul. Filtrowa 68",
  "City": "Warszawa",
  "Region": "",
  "PostalCode": "01-012",
  "Country": "Poland",
  "Phone": "(26) 642-7012",
  "Fax": "(26) 642-7012"
});

/** employee records **/
db.getCollection("employee").insert({
  "_id": ObjectId("5683715599b9433316351861"),
  "EmployeeID": 1,
  "LastName": "Davolio",
  "FirstName": "Nancy",
  "Title": "Sales Representative",
  "TitleOfCourtesy": "Ms.",
  "BirthDate": "12/8/1968",
  "HireDate": "5/1/1992",
  "Address": "507 - 20th Ave. E.\nApt. 2A",
  "City": "Seattle",
  "Region": "WA",
  "PostalCode": "98122",
  "Country": "USA",
  "HomePhone": "(206) 555-9857",
  "Extension": 5467,
  "Photo": "EmpID1.bmp",
  "Notes": "Education includes a BA in psychology from Colorado State University.  She also completed ",
  "ReportsTo": 2
});
db.getCollection("employee").insert({
  "_id": ObjectId("5683715599b9433316351862"),
  "EmployeeID": 2,
  "LastName": "Fuller",
  "FirstName": "Andrew",
  "Title": "Vice President, Sales",
  "TitleOfCourtesy": "Dr.",
  "BirthDate": "2/19/1952",
  "HireDate": "8/14/1992",
  "Address": "908 W. Capital Way",
  "City": "Tacoma",
  "Region": "WA",
  "PostalCode": "98401",
  "Country": "USA",
  "HomePhone": "(206) 555-9482",
  "Extension": 3457,
  "Photo": "EmpID2.bmp",
  "Notes": "Andrew received his BTS commercial and a Ph.D. in international marketing from the University of Dallas.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager and was then named vice president of sales.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.",
  "ReportsTo": null
});
db.getCollection("employee").insert({
  "_id": ObjectId("5683715599b9433316351863"),
  "EmployeeID": 3,
  "LastName": "Leverling",
  "FirstName": "Janet",
  "Title": "Sales Representative",
  "TitleOfCourtesy": "Ms.",
  "BirthDate": "8/30/1963",
  "HireDate": "4/1/1992",
  "Address": "722 Moss Bay Blvd.",
  "City": "Kirkland",
  "Region": "WA",
  "PostalCode": "98033",
  "Country": "USA",
  "HomePhone": "(206) 555-3412",
  "Extension": 3355,
  "Photo": "EmpID3.bmp",
  "Notes": "Janet has a BS degree in chemistry from Boston College).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate and was promoted to sales representative.",
  "ReportsTo": 2
});
db.getCollection("employee").insert({
  "_id": ObjectId("5683715599b9433316351864"),
  "EmployeeID": 4,
  "LastName": "Peacock",
  "FirstName": "Margaret",
  "Title": "Sales Representative",
  "TitleOfCourtesy": "Mrs.",
  "BirthDate": "9/19/1958",
  "HireDate": "5/3/1993",
  "Address": "4110 Old Redmond Rd.",
  "City": "Redmond",
  "Region": "WA",
  "PostalCode": "98052",
  "Country": "USA",
  "HomePhone": "(206) 555-8122",
  "Extension": 5176,
  "Photo": "EmpID4.bmp",
  "Notes": "Margaret holds a BA in English literature from Concordia College and an MA from the American Institute of Culinary Arts. She was temporarily assigned to the London office before returning to her permanent post in Seattle.",
  "ReportsTo": 2
});
db.getCollection("employee").insert({
  "_id": ObjectId("5683715599b9433316351865"),
  "EmployeeID": 5,
  "LastName": "Buchanan",
  "FirstName": "Steven",
  "Title": "Sales Manager",
  "TitleOfCourtesy": "Mr.",
  "BirthDate": "3/4/1955",
  "HireDate": "10/17/1993",
  "Address": "14 Garrett Hill",
  "City": "London",
  "Region": "",
  "PostalCode": "SW1 8JR",
  "Country": "UK",
  "HomePhone": "(71) 555-4848",
  "Extension": 3453,
  "Photo": "EmpID5.bmp",
  "Notes": "Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree.  Upon joining the company as a sales representative, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London, where he was promoted to sales manager.  Mr. Buchanan has completed the courses ",
  "ReportsTo": 2
});
db.getCollection("employee").insert({
  "_id": ObjectId("5683715599b9433316351866"),
  "EmployeeID": 6,
  "LastName": "Suyama",
  "FirstName": "Michael",
  "Title": "Sales Representative",
  "TitleOfCourtesy": "Mr.",
  "BirthDate": "7/2/1963",
  "HireDate": "10/17/1993",
  "Address": "Coventry House\nMiner Rd.",
  "City": "London",
  "Region": "",
  "PostalCode": "EC2 7JR",
  "Country": "UK",
  "HomePhone": "(71) 555-7773",
  "Extension": 428,
  "Photo": "EmpID6.bmp",
  "Notes": "Michael is a graduate of Sussex University (MA, economics) and the University of California at Los Angeles (MBA, marketing).  He has also taken the courses ",
  "ReportsTo": 5
});
db.getCollection("employee").insert({
  "_id": ObjectId("5683715599b9433316351867"),
  "EmployeeID": 7,
  "LastName": "King",
  "FirstName": "Robert",
  "Title": "Sales Representative",
  "TitleOfCourtesy": "Mr.",
  "BirthDate": "5/29/1960",
  "HireDate": "1/2/1994",
  "Address": "Edgeham Hollow\nWinchester Way",
  "City": "London",
  "Region": "",
  "PostalCode": "RG1 9SP",
  "Country": "UK",
  "HomePhone": "(71) 555-5598",
  "Extension": 465,
  "Photo": "EmpID7.bmp",
  "Notes": "Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan and then joining the company.  After completing a course entitled ",
  "ReportsTo": 5
});
db.getCollection("employee").insert({
  "_id": ObjectId("5683715599b9433316351868"),
  "EmployeeID": 8,
  "LastName": "Callahan",
  "FirstName": "Laura",
  "Title": "Inside Sales Coordinator",
  "TitleOfCourtesy": "Ms.",
  "BirthDate": "1/9/1958",
  "HireDate": "3/5/1994",
  "Address": "4726 - 11th Ave. N.E.",
  "City": "Seattle",
  "Region": "WA",
  "PostalCode": "98105",
  "Country": "USA",
  "HomePhone": "(206) 555-1189",
  "Extension": 2344,
  "Photo": "EmpID8.bmp",
  "Notes": "Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.",
  "ReportsTo": 2
});
db.getCollection("employee").insert({
  "_id": ObjectId("5683715599b9433316351869"),
  "EmployeeID": 9,
  "LastName": "Dodsworth",
  "FirstName": "Anne",
  "Title": "Sales Representative",
  "TitleOfCourtesy": "Ms.",
  "BirthDate": "7/2/1969",
  "HireDate": "11/15/1994",
  "Address": "7 Houndstooth Rd.",
  "City": "London",
  "Region": "",
  "PostalCode": "WG2 7LT",
  "Country": "UK",
  "HomePhone": "(71) 555-4444",
  "Extension": 452,
  "Photo": "EmpID9.bmp",
  "Notes": "Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.",
  "ReportsTo": 5
});

/** order records **/
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352480"),
  "OrderID": 10248,
  "CustomerID": "WILMK",
  "EmployeeID": 5,
  "OrderDate": ISODate("1996-07-04T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-01T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-07-16T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 32.38,
  "ShipName": "Vins et alcools Chevalier",
  "ShipAddress": "59 rue de l'Abbaye",
  "ShipCity": "Reims",
  "ShipRegion": "",
  "ShipPostalCode": "51100",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352481"),
  "OrderID": 10249,
  "CustomerID": "TRADH",
  "EmployeeID": 6,
  "OrderDate": ISODate("1996-07-05T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-07-10T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 11.61,
  "ShipName": "Toms Spezialitäten",
  "ShipAddress": "Luisenstr. 48",
  "ShipCity": "Münster",
  "ShipRegion": "",
  "ShipPostalCode": "44087",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352482"),
  "OrderID": 10250,
  "CustomerID": "HANAR",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-07-08T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-05T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-07-12T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 65.83,
  "ShipName": "Hanari Carnes",
  "ShipAddress": "Rua do Paço, 67",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "05454-876",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352483"),
  "OrderID": 10251,
  "CustomerID": "VICTE",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-07-08T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-05T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-07-15T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 41.34,
  "ShipName": "Victuailles en stock",
  "ShipAddress": "2, rue du Commerce",
  "ShipCity": "Lyon",
  "ShipRegion": "",
  "ShipPostalCode": "69004",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352484"),
  "OrderID": 10252,
  "CustomerID": "SUPRD",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-07-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-06T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-07-11T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 51.3,
  "ShipName": "Suprêmes délices",
  "ShipAddress": "Boulevard Tirou, 255",
  "ShipCity": "Charleroi",
  "ShipRegion": "",
  "ShipPostalCode": "B-6000",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352485"),
  "OrderID": 10253,
  "CustomerID": "HANAR",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-07-10T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-07-24T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-07-16T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 58.17,
  "ShipName": "Hanari Carnes",
  "ShipAddress": "Rua do Paço, 67",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "05454-876",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352486"),
  "OrderID": 10254,
  "CustomerID": "CHOPS",
  "EmployeeID": 5,
  "OrderDate": ISODate("1996-07-11T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-07-23T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 22.98,
  "ShipName": "Chop-suey Chinese",
  "ShipAddress": "Hauptstr. 31",
  "ShipCity": "Bern",
  "ShipRegion": "",
  "ShipPostalCode": "3012",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352487"),
  "OrderID": 10255,
  "CustomerID": "RICSU",
  "EmployeeID": 9,
  "OrderDate": ISODate("1996-07-12T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-09T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-07-15T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 148.33,
  "ShipName": "Richter Supermarkt",
  "ShipAddress": "Starenweg 5",
  "ShipCity": "Genève",
  "ShipRegion": "",
  "ShipPostalCode": "1204",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352488"),
  "OrderID": 10256,
  "CustomerID": "WELLI",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-07-15T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-12T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-07-17T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 13.97,
  "ShipName": "Wellington Importadora",
  "ShipAddress": "Rua do Mercado, 12",
  "ShipCity": "Resende",
  "ShipRegion": "SP",
  "ShipPostalCode": "08737-363",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352489"),
  "OrderID": 10257,
  "CustomerID": "HILAA",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-07-16T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-13T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-07-22T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 81.91,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635248a"),
  "OrderID": 10258,
  "CustomerID": "ERNSH",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-07-17T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-14T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-07-23T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 140.51,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635248b"),
  "OrderID": 10259,
  "CustomerID": "CENTC",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-07-18T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-15T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-07-25T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 3.25,
  "ShipName": "Centro comercial Moctezuma",
  "ShipAddress": "Sierras de Granada 9993",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05022",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635248c"),
  "OrderID": 10260,
  "CustomerID": "OLDWO",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-07-19T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-07-29T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 55.09,
  "ShipName": "Ottilies Käseladen",
  "ShipAddress": "Mehrheimerstr. 369",
  "ShipCity": "Köln",
  "ShipRegion": "",
  "ShipPostalCode": "50739",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635248d"),
  "OrderID": 10261,
  "CustomerID": "QUEDE",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-07-19T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-07-30T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 3.05,
  "ShipName": "Que Delícia",
  "ShipAddress": "Rua da Panificadora, 12",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-673",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635248e"),
  "OrderID": 10262,
  "CustomerID": "RATTC",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-07-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-19T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-07-25T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 48.29,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635248f"),
  "OrderID": 10263,
  "CustomerID": "ERNSH",
  "EmployeeID": 9,
  "OrderDate": ISODate("1996-07-23T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-20T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-07-31T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 146.06,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352490"),
  "OrderID": 10264,
  "CustomerID": "FOLKO",
  "EmployeeID": 6,
  "OrderDate": ISODate("1996-07-24T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-21T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-23T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 3.67,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352491"),
  "OrderID": 10265,
  "CustomerID": "BLONP",
  "EmployeeID": 2,
  "OrderDate": ISODate("1996-07-25T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-22T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-12T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 55.28,
  "ShipName": "Blondel père et fils",
  "ShipAddress": "24, place Kléber",
  "ShipCity": "Strasbourg",
  "ShipRegion": "",
  "ShipPostalCode": "67000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352492"),
  "OrderID": 10266,
  "CustomerID": "WARTH",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-07-26T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-06T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-07-31T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 25.73,
  "ShipName": "Wartian Herkku",
  "ShipAddress": "Torikatu 38",
  "ShipCity": "Oulu",
  "ShipRegion": "",
  "ShipPostalCode": "90110",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352493"),
  "OrderID": 10267,
  "CustomerID": "FRANK",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-07-29T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-26T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-06T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 208.58,
  "ShipName": "Frankenversand",
  "ShipAddress": "Berliner Platz 43",
  "ShipCity": "München",
  "ShipRegion": "",
  "ShipPostalCode": "80805",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352494"),
  "OrderID": 10268,
  "CustomerID": "GROSR",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-07-30T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-27T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-02T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 66.29,
  "ShipName": "GROSELLA-Restaurante",
  "ShipAddress": "5ª Ave. Los Palos Grandes",
  "ShipCity": "Caracas",
  "ShipRegion": "DF",
  "ShipPostalCode": "1081",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352495"),
  "OrderID": 10269,
  "CustomerID": "WHITC",
  "EmployeeID": 5,
  "OrderDate": ISODate("1996-07-31T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-14T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-09T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 4.56,
  "ShipName": "White Clover Markets",
  "ShipAddress": "1029 - 12th Ave. S.",
  "ShipCity": "Seattle",
  "ShipRegion": "WA",
  "ShipPostalCode": "98124",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352496"),
  "OrderID": 10270,
  "CustomerID": "WARTH",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-08-01T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-29T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-02T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 136.54,
  "ShipName": "Wartian Herkku",
  "ShipAddress": "Torikatu 38",
  "ShipCity": "Oulu",
  "ShipRegion": "",
  "ShipPostalCode": "90110",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352497"),
  "OrderID": 10271,
  "CustomerID": "SPLIR",
  "EmployeeID": 6,
  "OrderDate": ISODate("1996-08-01T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-29T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-30T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 4.54,
  "ShipName": "Split Rail Beer & Ale",
  "ShipAddress": "P.O. Box 555",
  "ShipCity": "Lander",
  "ShipRegion": "WY",
  "ShipPostalCode": "82520",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352498"),
  "OrderID": 10272,
  "CustomerID": "RATTC",
  "EmployeeID": 6,
  "OrderDate": ISODate("1996-08-02T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-30T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-06T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 98.03,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352499"),
  "OrderID": 10273,
  "CustomerID": "QUICK",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-08-05T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-02T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-12T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 76.07,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635249a"),
  "OrderID": 10274,
  "CustomerID": "VINET",
  "EmployeeID": 6,
  "OrderDate": ISODate("1996-08-06T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-03T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-16T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 6.01,
  "ShipName": "Vins et alcools Chevalier",
  "ShipAddress": "59 rue de l'Abbaye",
  "ShipCity": "Reims",
  "ShipRegion": "",
  "ShipPostalCode": "51100",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635249b"),
  "OrderID": 10275,
  "CustomerID": "MAGAA",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-08-07T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-04T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-09T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 26.93,
  "ShipName": "Magazzini Alimentari Riuniti",
  "ShipAddress": "Via Ludovico il Moro 22",
  "ShipCity": "Bergamo",
  "ShipRegion": "",
  "ShipPostalCode": "24100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635249c"),
  "OrderID": 10276,
  "CustomerID": "TORTU",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-08-08T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-22T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-14T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 13.84,
  "ShipName": "Tortuga Restaurante",
  "ShipAddress": "Avda. Azteca 123",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05033",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635249d"),
  "OrderID": 10277,
  "CustomerID": "MORGK",
  "EmployeeID": 2,
  "OrderDate": ISODate("1996-08-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-06T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-13T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 125.77,
  "ShipName": "Morgenstern Gesundkost",
  "ShipAddress": "Heerstr. 22",
  "ShipCity": "Leipzig",
  "ShipRegion": "",
  "ShipPostalCode": "04179",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635249e"),
  "OrderID": 10278,
  "CustomerID": "BERGS",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-08-12T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-09T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-16T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 92.69,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635249f"),
  "OrderID": 10279,
  "CustomerID": "LEHMS",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-08-13T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-10T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-16T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 25.83,
  "ShipName": "Lehmanns Marktstand",
  "ShipAddress": "Magazinweg 7",
  "ShipCity": "Frankfurt a.M.",
  "ShipRegion": "",
  "ShipPostalCode": "60528",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524a0"),
  "OrderID": 10280,
  "CustomerID": "BERGS",
  "EmployeeID": 2,
  "OrderDate": ISODate("1996-08-14T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-11T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-12T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 8.98,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524a1"),
  "OrderID": 10281,
  "CustomerID": "ROMEY",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-08-14T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-08-28T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-21T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 2.94,
  "ShipName": "Romero y tomillo",
  "ShipAddress": "Gran Vía, 1",
  "ShipCity": "Madrid",
  "ShipRegion": "",
  "ShipPostalCode": "28001",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524a2"),
  "OrderID": 10282,
  "CustomerID": "ROMEY",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-08-15T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-12T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-21T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 12.69,
  "ShipName": "Romero y tomillo",
  "ShipAddress": "Gran Vía, 1",
  "ShipCity": "Madrid",
  "ShipRegion": "",
  "ShipPostalCode": "28001",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524a3"),
  "OrderID": 10283,
  "CustomerID": "LILAS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-08-16T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-13T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-23T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 84.81,
  "ShipName": "LILA-Supermercado",
  "ShipAddress": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
  "ShipCity": "Barquisimeto",
  "ShipRegion": "Lara",
  "ShipPostalCode": "3508",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524a4"),
  "OrderID": 10284,
  "CustomerID": "LEHMS",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-08-19T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-27T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 76.56,
  "ShipName": "Lehmanns Marktstand",
  "ShipAddress": "Magazinweg 7",
  "ShipCity": "Frankfurt a.M.",
  "ShipRegion": "",
  "ShipPostalCode": "60528",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524a5"),
  "OrderID": 10285,
  "CustomerID": "QUICK",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-08-20T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-17T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-26T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 76.83,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524a6"),
  "OrderID": 10286,
  "CustomerID": "QUICK",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-08-21T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-18T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-30T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 229.24,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524a7"),
  "OrderID": 10287,
  "CustomerID": "RICAR",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-08-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-19T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-28T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 12.76,
  "ShipName": "Ricardo Adocicados",
  "ShipAddress": "Av. Copacabana, 267",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-890",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524a8"),
  "OrderID": 10288,
  "CustomerID": "REGGC",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-08-23T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-20T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-03T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 7.45,
  "ShipName": "Reggiani Caseifici",
  "ShipAddress": "Strada Provinciale 124",
  "ShipCity": "Reggio Emilia",
  "ShipRegion": "",
  "ShipPostalCode": "42100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524a9"),
  "OrderID": 10289,
  "CustomerID": "BSBEV",
  "EmployeeID": 7,
  "OrderDate": ISODate("1996-08-26T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-23T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-08-28T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 22.77,
  "ShipName": "B's Beverages",
  "ShipAddress": "Fauntleroy Circus",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "EC2 5NT",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524aa"),
  "OrderID": 10290,
  "CustomerID": "COMMI",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-08-27T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-24T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-03T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 79.7,
  "ShipName": "Comércio Mineiro",
  "ShipAddress": "Av. dos Lusíadas, 23",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05432-043",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524ab"),
  "OrderID": 10291,
  "CustomerID": "QUEDE",
  "EmployeeID": 6,
  "OrderDate": ISODate("1996-08-27T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-24T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-04T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 6.4,
  "ShipName": "Que Delícia",
  "ShipAddress": "Rua da Panificadora, 12",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-673",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524ac"),
  "OrderID": 10292,
  "CustomerID": "TRADH",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-08-28T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-25T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-02T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 1.35,
  "ShipName": "Tradição Hipermercados",
  "ShipAddress": "Av. Inês de Castro, 414",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05634-030",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524ad"),
  "OrderID": 10293,
  "CustomerID": "TORTU",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-08-29T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-26T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-11T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 21.18,
  "ShipName": "Tortuga Restaurante",
  "ShipAddress": "Avda. Azteca 123",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05033",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524ae"),
  "OrderID": 10294,
  "CustomerID": "RATTC",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-08-30T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-27T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-05T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 147.26,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524af"),
  "OrderID": 10295,
  "CustomerID": "VINET",
  "EmployeeID": 2,
  "OrderDate": ISODate("1996-09-02T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-09-30T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-10T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 1.15,
  "ShipName": "Vins et alcools Chevalier",
  "ShipAddress": "59 rue de l'Abbaye",
  "ShipCity": "Reims",
  "ShipRegion": "",
  "ShipPostalCode": "51100",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524b0"),
  "OrderID": 10296,
  "CustomerID": "LILAS",
  "EmployeeID": 6,
  "OrderDate": ISODate("1996-09-03T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-01T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-11T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 0.12,
  "ShipName": "LILA-Supermercado",
  "ShipAddress": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
  "ShipCity": "Barquisimeto",
  "ShipRegion": "Lara",
  "ShipPostalCode": "3508",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524b1"),
  "OrderID": 10297,
  "CustomerID": "BLONP",
  "EmployeeID": 5,
  "OrderDate": ISODate("1996-09-04T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-10T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 5.74,
  "ShipName": "Blondel père et fils",
  "ShipAddress": "24, place Kléber",
  "ShipCity": "Strasbourg",
  "ShipRegion": "",
  "ShipPostalCode": "67000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524b2"),
  "OrderID": 10298,
  "CustomerID": "HUNGO",
  "EmployeeID": 6,
  "OrderDate": ISODate("1996-09-05T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-03T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-11T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 168.22,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524b3"),
  "OrderID": 10299,
  "CustomerID": "RICAR",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-09-06T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-04T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-13T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 29.76,
  "ShipName": "Ricardo Adocicados",
  "ShipAddress": "Av. Copacabana, 267",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-890",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524b4"),
  "OrderID": 10300,
  "CustomerID": "MAGAA",
  "EmployeeID": 2,
  "OrderDate": ISODate("1996-09-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-18T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 17.68,
  "ShipName": "Magazzini Alimentari Riuniti",
  "ShipAddress": "Via Ludovico il Moro 22",
  "ShipCity": "Bergamo",
  "ShipRegion": "",
  "ShipPostalCode": "24100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524b5"),
  "OrderID": 10301,
  "CustomerID": "WANDK",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-09-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-17T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 45.08,
  "ShipName": "Die Wandernde Kuh",
  "ShipAddress": "Adenauerallee 900",
  "ShipCity": "Stuttgart",
  "ShipRegion": "",
  "ShipPostalCode": "70563",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524b6"),
  "OrderID": 10302,
  "CustomerID": "SUPRD",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-09-10T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-09T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 6.27,
  "ShipName": "Suprêmes délices",
  "ShipAddress": "Boulevard Tirou, 255",
  "ShipCity": "Charleroi",
  "ShipRegion": "",
  "ShipPostalCode": "B-6000",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524b7"),
  "OrderID": 10303,
  "CustomerID": "GODOS",
  "EmployeeID": 7,
  "OrderDate": ISODate("1996-09-11T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-09T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-18T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 107.83,
  "ShipName": "Godos Cocina Típica",
  "ShipAddress": "C/ Romero, 33",
  "ShipCity": "Sevilla",
  "ShipRegion": "",
  "ShipPostalCode": "41101",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524b8"),
  "OrderID": 10304,
  "CustomerID": "TORTU",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-09-12T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-10T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-17T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 63.79,
  "ShipName": "Tortuga Restaurante",
  "ShipAddress": "Avda. Azteca 123",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05033",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524b9"),
  "OrderID": 10305,
  "CustomerID": "OLDWO",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-09-13T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-11T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-09T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 257.62,
  "ShipName": "Old World Delicatessen",
  "ShipAddress": "2743 Bering St.",
  "ShipCity": "Anchorage",
  "ShipRegion": "AK",
  "ShipPostalCode": "99508",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524ba"),
  "OrderID": 10306,
  "CustomerID": "ROMEY",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-09-16T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-14T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-23T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 7.56,
  "ShipName": "Romero y tomillo",
  "ShipAddress": "Gran Vía, 1",
  "ShipCity": "Madrid",
  "ShipRegion": "",
  "ShipPostalCode": "28001",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524bb"),
  "OrderID": 10307,
  "CustomerID": "LONEP",
  "EmployeeID": 2,
  "OrderDate": ISODate("1996-09-17T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-15T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-25T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 0.56,
  "ShipName": "Lonesome Pine Restaurant",
  "ShipAddress": "89 Chiaroscuro Rd.",
  "ShipCity": "Portland",
  "ShipRegion": "OR",
  "ShipPostalCode": "97219",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524bc"),
  "OrderID": 10308,
  "CustomerID": "ANATR",
  "EmployeeID": 7,
  "OrderDate": ISODate("1996-09-18T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-24T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 1.61,
  "ShipName": "Ana Trujillo Emparedados y helados",
  "ShipAddress": "Avda. de la Constitución 2222",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05021",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524bd"),
  "OrderID": 10309,
  "CustomerID": "HUNGO",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-09-19T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-17T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-23T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 47.3,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524be"),
  "OrderID": 10310,
  "CustomerID": "THEBI",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-09-20T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-18T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-27T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 17.52,
  "ShipName": "The Big Cheese",
  "ShipAddress": "89 Jefferson Way\nSuite 2",
  "ShipCity": "Portland",
  "ShipRegion": "OR",
  "ShipPostalCode": "97201",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524bf"),
  "OrderID": 10311,
  "CustomerID": "DUMON",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-09-20T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-04T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-09-26T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 24.69,
  "ShipName": "Du monde entier",
  "ShipAddress": "67, rue des Cinquante Otages",
  "ShipCity": "Nantes",
  "ShipRegion": "",
  "ShipPostalCode": "44000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524c0"),
  "OrderID": 10312,
  "CustomerID": "WANDK",
  "EmployeeID": 2,
  "OrderDate": ISODate("1996-09-23T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-21T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-03T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 40.26,
  "ShipName": "Die Wandernde Kuh",
  "ShipAddress": "Adenauerallee 900",
  "ShipCity": "Stuttgart",
  "ShipRegion": "",
  "ShipPostalCode": "70563",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524c1"),
  "OrderID": 10313,
  "CustomerID": "QUICK",
  "EmployeeID": 2,
  "OrderDate": ISODate("1996-09-24T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-22T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-04T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 1.96,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524c2"),
  "OrderID": 10314,
  "CustomerID": "RATTC",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-09-25T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-23T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-04T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 74.16,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524c3"),
  "OrderID": 10315,
  "CustomerID": "ISLAT",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-09-26T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-24T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-03T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 41.76,
  "ShipName": "Island Trading",
  "ShipAddress": "Garden House\nCrowther Way",
  "ShipCity": "Cowes",
  "ShipRegion": "Isle of Wight",
  "ShipPostalCode": "PO31 7PJ",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524c4"),
  "OrderID": 10316,
  "CustomerID": "RATTC",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-09-27T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-25T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-08T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 150.15,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524c5"),
  "OrderID": 10317,
  "CustomerID": "LONEP",
  "EmployeeID": 6,
  "OrderDate": ISODate("1996-09-30T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-28T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-10T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 12.69,
  "ShipName": "Lonesome Pine Restaurant",
  "ShipAddress": "89 Chiaroscuro Rd.",
  "ShipCity": "Portland",
  "ShipRegion": "OR",
  "ShipPostalCode": "97219",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524c6"),
  "OrderID": 10318,
  "CustomerID": "ISLAT",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-10-01T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-29T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-04T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 4.73,
  "ShipName": "Island Trading",
  "ShipAddress": "Garden House\nCrowther Way",
  "ShipCity": "Cowes",
  "ShipRegion": "Isle of Wight",
  "ShipPostalCode": "PO31 7PJ",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524c7"),
  "OrderID": 10319,
  "CustomerID": "TORTU",
  "EmployeeID": 7,
  "OrderDate": ISODate("1996-10-02T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-30T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-11T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 64.5,
  "ShipName": "Tortuga Restaurante",
  "ShipAddress": "Avda. Azteca 123",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05033",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524c8"),
  "OrderID": 10320,
  "CustomerID": "WARTH",
  "EmployeeID": 5,
  "OrderDate": ISODate("1996-10-03T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-17T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-18T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 34.57,
  "ShipName": "Wartian Herkku",
  "ShipAddress": "Torikatu 38",
  "ShipCity": "Oulu",
  "ShipRegion": "",
  "ShipPostalCode": "90110",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524c9"),
  "OrderID": 10321,
  "CustomerID": "ISLAT",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-10-03T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-31T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-11T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 3.43,
  "ShipName": "Island Trading",
  "ShipAddress": "Garden House\nCrowther Way",
  "ShipCity": "Cowes",
  "ShipRegion": "Isle of Wight",
  "ShipPostalCode": "PO31 7PJ",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524ca"),
  "OrderID": 10322,
  "CustomerID": "PERIC",
  "EmployeeID": 7,
  "OrderDate": ISODate("1996-10-04T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-01T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-23T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 0.4,
  "ShipName": "Pericles Comidas clásicas",
  "ShipAddress": "Calle Dr. Jorge Cash 321",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05033",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524cb"),
  "OrderID": 10323,
  "CustomerID": "KOENE",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-10-07T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-04T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-14T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 4.88,
  "ShipName": "Königlich Essen",
  "ShipAddress": "Maubelstr. 90",
  "ShipCity": "Brandenburg",
  "ShipRegion": "",
  "ShipPostalCode": "14776",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524cc"),
  "OrderID": 10324,
  "CustomerID": "SAVEA",
  "EmployeeID": 9,
  "OrderDate": ISODate("1996-10-08T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-05T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-10T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 214.27,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524cd"),
  "OrderID": 10325,
  "CustomerID": "KOENE",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-10-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-10-23T04:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-14T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 64.86,
  "ShipName": "Königlich Essen",
  "ShipAddress": "Maubelstr. 90",
  "ShipCity": "Brandenburg",
  "ShipRegion": "",
  "ShipPostalCode": "14776",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524ce"),
  "OrderID": 10326,
  "CustomerID": "BOLID",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-10-10T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-07T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-14T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 77.92,
  "ShipName": "Bólido Comidas preparadas",
  "ShipAddress": "C/ Araquil, 67",
  "ShipCity": "Madrid",
  "ShipRegion": "",
  "ShipPostalCode": "28023",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524cf"),
  "OrderID": 10327,
  "CustomerID": "FOLKO",
  "EmployeeID": 2,
  "OrderDate": ISODate("1996-10-11T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-08T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-14T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 63.36,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524d0"),
  "OrderID": 10328,
  "CustomerID": "FURIB",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-10-14T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-11T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-17T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 87.03,
  "ShipName": "Furia Bacalhau e Frutos do Mar",
  "ShipAddress": "Jardim das rosas n. 32",
  "ShipCity": "Lisboa",
  "ShipRegion": "",
  "ShipPostalCode": "1675",
  "ShipCountry": "Portugal"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524d1"),
  "OrderID": 10329,
  "CustomerID": "SPLIR",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-10-15T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-23T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 191.67,
  "ShipName": "Split Rail Beer & Ale",
  "ShipAddress": "P.O. Box 555",
  "ShipCity": "Lander",
  "ShipRegion": "WY",
  "ShipPostalCode": "82520",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524d2"),
  "OrderID": 10330,
  "CustomerID": "LILAS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-10-16T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-28T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 12.75,
  "ShipName": "LILA-Supermercado",
  "ShipAddress": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
  "ShipCity": "Barquisimeto",
  "ShipRegion": "Lara",
  "ShipPostalCode": "3508",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524d3"),
  "OrderID": 10331,
  "CustomerID": "BONAP",
  "EmployeeID": 9,
  "OrderDate": ISODate("1996-10-16T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-27T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-21T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 10.19,
  "ShipName": "Bon app'",
  "ShipAddress": "12, rue des Bouchers",
  "ShipCity": "Marseille",
  "ShipRegion": "",
  "ShipPostalCode": "13008",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524d4"),
  "OrderID": 10332,
  "CustomerID": "MEREP",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-10-17T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-28T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-21T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 52.84,
  "ShipName": "Mère Paillarde",
  "ShipAddress": "43 rue St. Laurent",
  "ShipCity": "Montréal",
  "ShipRegion": "Québec",
  "ShipPostalCode": "H1J 1C3",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524d5"),
  "OrderID": 10333,
  "CustomerID": "WARTH",
  "EmployeeID": 5,
  "OrderDate": ISODate("1996-10-18T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-15T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-25T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 0.59,
  "ShipName": "Wartian Herkku",
  "ShipAddress": "Torikatu 38",
  "ShipCity": "Oulu",
  "ShipRegion": "",
  "ShipPostalCode": "90110",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524d6"),
  "OrderID": 10334,
  "CustomerID": "VICTE",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-10-21T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-18T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-28T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 8.56,
  "ShipName": "Victuailles en stock",
  "ShipAddress": "2, rue du Commerce",
  "ShipCity": "Lyon",
  "ShipRegion": "",
  "ShipPostalCode": "69004",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524d7"),
  "OrderID": 10335,
  "CustomerID": "HUNGO",
  "EmployeeID": 7,
  "OrderDate": ISODate("1996-10-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-19T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-24T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 42.11,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524d8"),
  "OrderID": 10336,
  "CustomerID": "PRINI",
  "EmployeeID": 7,
  "OrderDate": ISODate("1996-10-23T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-20T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-25T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 15.51,
  "ShipName": "Princesa Isabel Vinhos",
  "ShipAddress": "Estrada da saúde n. 58",
  "ShipCity": "Lisboa",
  "ShipRegion": "",
  "ShipPostalCode": "1756",
  "ShipCountry": "Portugal"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524d9"),
  "OrderID": 10337,
  "CustomerID": "FRANK",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-10-24T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-21T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-29T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 108.26,
  "ShipName": "Frankenversand",
  "ShipAddress": "Berliner Platz 43",
  "ShipCity": "München",
  "ShipRegion": "",
  "ShipPostalCode": "80805",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524da"),
  "OrderID": 10338,
  "CustomerID": "OLDWO",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-10-25T04:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-22T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-10-29T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 84.21,
  "ShipName": "Old World Delicatessen",
  "ShipAddress": "2743 Bering St.",
  "ShipCity": "Anchorage",
  "ShipRegion": "AK",
  "ShipPostalCode": "99508",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524db"),
  "OrderID": 10339,
  "CustomerID": "MEREP",
  "EmployeeID": 2,
  "OrderDate": ISODate("1996-10-28T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-25T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-04T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 15.66,
  "ShipName": "Mère Paillarde",
  "ShipAddress": "43 rue St. Laurent",
  "ShipCity": "Montréal",
  "ShipRegion": "Québec",
  "ShipPostalCode": "H1J 1C3",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524dc"),
  "OrderID": 10340,
  "CustomerID": "BONAP",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-10-29T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-08T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 166.31,
  "ShipName": "Bon app'",
  "ShipAddress": "12, rue des Bouchers",
  "ShipCity": "Marseille",
  "ShipRegion": "",
  "ShipPostalCode": "13008",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524dd"),
  "OrderID": 10341,
  "CustomerID": "SIMOB",
  "EmployeeID": 7,
  "OrderDate": ISODate("1996-10-29T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-05T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 26.78,
  "ShipName": "Simons bistro",
  "ShipAddress": "Vinbæltet 34",
  "ShipCity": "København",
  "ShipRegion": "",
  "ShipPostalCode": "1734",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524de"),
  "OrderID": 10342,
  "CustomerID": "FRANK",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-10-30T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-04T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 54.83,
  "ShipName": "Frankenversand",
  "ShipAddress": "Berliner Platz 43",
  "ShipCity": "München",
  "ShipRegion": "",
  "ShipPostalCode": "80805",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524df"),
  "OrderID": 10343,
  "CustomerID": "LEHMS",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-10-31T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-28T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-06T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 110.37,
  "ShipName": "Lehmanns Marktstand",
  "ShipAddress": "Magazinweg 7",
  "ShipCity": "Frankfurt a.M.",
  "ShipRegion": "",
  "ShipPostalCode": "60528",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524e0"),
  "OrderID": 10344,
  "CustomerID": "WHITC",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-11-01T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-29T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-05T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 23.29,
  "ShipName": "White Clover Markets",
  "ShipAddress": "1029 - 12th Ave. S.",
  "ShipCity": "Seattle",
  "ShipRegion": "WA",
  "ShipPostalCode": "98124",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524e1"),
  "OrderID": 10345,
  "CustomerID": "QUICK",
  "EmployeeID": 2,
  "OrderDate": ISODate("1996-11-04T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-11T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 249.06,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524e2"),
  "OrderID": 10346,
  "CustomerID": "RATTC",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-11-05T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-17T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-08T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 142.08,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524e3"),
  "OrderID": 10347,
  "CustomerID": "FAMIA",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-11-06T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-04T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-08T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 3.1,
  "ShipName": "Familia Arquibaldo",
  "ShipAddress": "Rua Orós, 92",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05442-030",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524e4"),
  "OrderID": 10348,
  "CustomerID": "WANDK",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-11-07T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-05T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-15T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 0.78,
  "ShipName": "Die Wandernde Kuh",
  "ShipAddress": "Adenauerallee 900",
  "ShipCity": "Stuttgart",
  "ShipRegion": "",
  "ShipPostalCode": "70563",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524e5"),
  "OrderID": 10349,
  "CustomerID": "SPLIR",
  "EmployeeID": 7,
  "OrderDate": ISODate("1996-11-08T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-15T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 8.63,
  "ShipName": "Split Rail Beer & Ale",
  "ShipAddress": "P.O. Box 555",
  "ShipCity": "Lander",
  "ShipRegion": "WY",
  "ShipPostalCode": "82520",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524e6"),
  "OrderID": 10350,
  "CustomerID": "LAMAI",
  "EmployeeID": 6,
  "OrderDate": ISODate("1996-11-11T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-09T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-03T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 64.19,
  "ShipName": "La maison d'Asie",
  "ShipAddress": "1 rue Alsace-Lorraine",
  "ShipCity": "Toulouse",
  "ShipRegion": "",
  "ShipPostalCode": "31000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524e7"),
  "OrderID": 10351,
  "CustomerID": "ERNSH",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-11-11T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-09T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-20T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 162.33,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524e8"),
  "OrderID": 10352,
  "CustomerID": "FURIB",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-11-12T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-11-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-18T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 1.3,
  "ShipName": "Furia Bacalhau e Frutos do Mar",
  "ShipAddress": "Jardim das rosas n. 32",
  "ShipCity": "Lisboa",
  "ShipRegion": "",
  "ShipPostalCode": "1675",
  "ShipCountry": "Portugal"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524e9"),
  "OrderID": 10353,
  "CustomerID": "PICCO",
  "EmployeeID": 7,
  "OrderDate": ISODate("1996-11-13T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-11T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-25T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 360.63,
  "ShipName": "Piccolo und mehr",
  "ShipAddress": "Geislweg 14",
  "ShipCity": "Salzburg",
  "ShipRegion": "",
  "ShipPostalCode": "5020",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524ea"),
  "OrderID": 10354,
  "CustomerID": "PERIC",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-11-14T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-12T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-20T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 53.8,
  "ShipName": "Pericles Comidas clásicas",
  "ShipAddress": "Calle Dr. Jorge Cash 321",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05033",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524eb"),
  "OrderID": 10355,
  "CustomerID": "AROUT",
  "EmployeeID": 6,
  "OrderDate": ISODate("1996-11-15T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-20T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 41.95,
  "ShipName": "Around the Horn",
  "ShipAddress": "Brook Farm\nStratford St. Mary",
  "ShipCity": "Colchester",
  "ShipRegion": "Essex",
  "ShipPostalCode": "CO7 6JX",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524ec"),
  "OrderID": 10356,
  "CustomerID": "WANDK",
  "EmployeeID": 6,
  "OrderDate": ISODate("1996-11-18T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-16T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-27T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 36.71,
  "ShipName": "Die Wandernde Kuh",
  "ShipAddress": "Adenauerallee 900",
  "ShipCity": "Stuttgart",
  "ShipRegion": "",
  "ShipPostalCode": "70563",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524ed"),
  "OrderID": 10357,
  "CustomerID": "LILAS",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-11-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-17T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-02T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 34.88,
  "ShipName": "LILA-Supermercado",
  "ShipAddress": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
  "ShipCity": "Barquisimeto",
  "ShipRegion": "Lara",
  "ShipPostalCode": "3508",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524ee"),
  "OrderID": 10358,
  "CustomerID": "LAMAI",
  "EmployeeID": 5,
  "OrderDate": ISODate("1996-11-20T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-18T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-27T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 19.64,
  "ShipName": "La maison d'Asie",
  "ShipAddress": "1 rue Alsace-Lorraine",
  "ShipCity": "Toulouse",
  "ShipRegion": "",
  "ShipPostalCode": "31000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524ef"),
  "OrderID": 10359,
  "CustomerID": "SEVES",
  "EmployeeID": 5,
  "OrderDate": ISODate("1996-11-21T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-19T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-26T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 288.43,
  "ShipName": "Seven Seas Imports",
  "ShipAddress": "90 Wadhurst Rd.",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "OX15 4NB",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524f0"),
  "OrderID": 10360,
  "CustomerID": "BLONP",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-11-22T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-20T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-02T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 131.7,
  "ShipName": "Blondel père et fils",
  "ShipAddress": "24, place Kléber",
  "ShipCity": "Strasbourg",
  "ShipRegion": "",
  "ShipPostalCode": "67000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524f1"),
  "OrderID": 10361,
  "CustomerID": "QUICK",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-11-22T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-20T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-03T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 183.17,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524f2"),
  "OrderID": 10362,
  "CustomerID": "BONAP",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-11-25T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-23T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-11-28T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 96.04,
  "ShipName": "Bon app'",
  "ShipAddress": "12, rue des Bouchers",
  "ShipCity": "Marseille",
  "ShipRegion": "",
  "ShipPostalCode": "13008",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524f3"),
  "OrderID": 10363,
  "CustomerID": "DRACD",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-11-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-04T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 30.54,
  "ShipName": "Drachenblut Delikatessen",
  "ShipAddress": "Walserweg 21",
  "ShipCity": "Aachen",
  "ShipRegion": "",
  "ShipPostalCode": "52066",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524f4"),
  "OrderID": 10364,
  "CustomerID": "EASTC",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-11-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-07T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-04T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 71.97,
  "ShipName": "Eastern Connection",
  "ShipAddress": "35 King George",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "WX3 6FW",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524f5"),
  "OrderID": 10365,
  "CustomerID": "ANTON",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-11-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-25T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-02T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 22,
  "ShipName": "Antonio Moreno Taquería",
  "ShipAddress": "Mataderos  2312",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05023",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524f6"),
  "OrderID": 10366,
  "CustomerID": "GALED",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-11-28T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-09T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-30T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 10.14,
  "ShipName": "Galería del gastronómo",
  "ShipAddress": "Rambla de Cataluña, 23",
  "ShipCity": "Barcelona",
  "ShipRegion": "",
  "ShipPostalCode": "8022",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524f7"),
  "OrderID": 10367,
  "CustomerID": "VAFFE",
  "EmployeeID": 7,
  "OrderDate": ISODate("1996-11-28T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-02T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 13.55,
  "ShipName": "Vaffeljernet",
  "ShipAddress": "Smagsløget 45",
  "ShipCity": "Århus",
  "ShipRegion": "",
  "ShipPostalCode": "8200",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524f8"),
  "OrderID": 10368,
  "CustomerID": "ERNSH",
  "EmployeeID": 2,
  "OrderDate": ISODate("1996-11-29T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-27T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-02T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 101.95,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524f9"),
  "OrderID": 10369,
  "CustomerID": "SPLIR",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-12-02T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-30T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-09T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 195.68,
  "ShipName": "Split Rail Beer & Ale",
  "ShipAddress": "P.O. Box 555",
  "ShipCity": "Lander",
  "ShipRegion": "WY",
  "ShipPostalCode": "82520",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524fa"),
  "OrderID": 10370,
  "CustomerID": "CHOPS",
  "EmployeeID": 6,
  "OrderDate": ISODate("1996-12-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-31T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-27T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 1.17,
  "ShipName": "Chop-suey Chinese",
  "ShipAddress": "Hauptstr. 31",
  "ShipCity": "Bern",
  "ShipRegion": "",
  "ShipPostalCode": "3012",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524fb"),
  "OrderID": 10371,
  "CustomerID": "LAMAI",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-12-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1996-12-31T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-24T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 0.45,
  "ShipName": "La maison d'Asie",
  "ShipAddress": "1 rue Alsace-Lorraine",
  "ShipCity": "Toulouse",
  "ShipRegion": "",
  "ShipPostalCode": "31000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524fc"),
  "OrderID": 10372,
  "CustomerID": "QUEEN",
  "EmployeeID": 5,
  "OrderDate": ISODate("1996-12-04T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-01T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-09T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 890.78,
  "ShipName": "Queen Cozinha",
  "ShipAddress": "Alameda dos Canàrios, 891",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05487-020",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524fd"),
  "OrderID": 10373,
  "CustomerID": "HUNGO",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-12-05T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-11T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 124.12,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524fe"),
  "OrderID": 10374,
  "CustomerID": "WOLZA",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-12-05T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-09T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 3.94,
  "ShipName": "Wolski Zajazd",
  "ShipAddress": "ul. Filtrowa 68",
  "ShipCity": "Warszawa",
  "ShipRegion": "",
  "ShipPostalCode": "01-012",
  "ShipCountry": "Poland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b94333163524ff"),
  "OrderID": 10375,
  "CustomerID": "HUNGC",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-12-06T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-03T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-09T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 20.12,
  "ShipName": "Hungry Coyote Import Store",
  "ShipAddress": "City Center Plaza\n516 Main St.",
  "ShipCity": "Elgin",
  "ShipRegion": "OR",
  "ShipPostalCode": "97827",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352500"),
  "OrderID": 10376,
  "CustomerID": "MEREP",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-12-09T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-13T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 20.39,
  "ShipName": "Mère Paillarde",
  "ShipAddress": "43 rue St. Laurent",
  "ShipCity": "Montréal",
  "ShipRegion": "Québec",
  "ShipPostalCode": "H1J 1C3",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352501"),
  "OrderID": 10377,
  "CustomerID": "SEVES",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-12-09T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-13T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 22.21,
  "ShipName": "Seven Seas Imports",
  "ShipAddress": "90 Wadhurst Rd.",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "OX15 4NB",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352502"),
  "OrderID": 10378,
  "CustomerID": "FOLKO",
  "EmployeeID": 5,
  "OrderDate": ISODate("1996-12-10T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-07T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-19T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 5.44,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352503"),
  "OrderID": 10379,
  "CustomerID": "QUEDE",
  "EmployeeID": 2,
  "OrderDate": ISODate("1996-12-11T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-08T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-13T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 45.03,
  "ShipName": "Que Delícia",
  "ShipAddress": "Rua da Panificadora, 12",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-673",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352504"),
  "OrderID": 10380,
  "CustomerID": "HUNGO",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-12-12T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-09T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-16T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 35.03,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352505"),
  "OrderID": 10381,
  "CustomerID": "LILAS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-12-12T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-09T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-13T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 7.99,
  "ShipName": "LILA-Supermercado",
  "ShipAddress": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
  "ShipCity": "Barquisimeto",
  "ShipRegion": "Lara",
  "ShipPostalCode": "3508",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352506"),
  "OrderID": 10382,
  "CustomerID": "ERNSH",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-12-13T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-10T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-16T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 94.77,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352507"),
  "OrderID": 10383,
  "CustomerID": "AROUT",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-12-16T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-18T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 34.24,
  "ShipName": "Around the Horn",
  "ShipAddress": "Brook Farm\nStratford St. Mary",
  "ShipCity": "Colchester",
  "ShipRegion": "Essex",
  "ShipPostalCode": "CO7 6JX",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352508"),
  "OrderID": 10384,
  "CustomerID": "BERGS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-12-16T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-20T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 168.64,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352509"),
  "OrderID": 10385,
  "CustomerID": "SPLIR",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-12-17T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-14T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-23T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 30.96,
  "ShipName": "Split Rail Beer & Ale",
  "ShipAddress": "P.O. Box 555",
  "ShipCity": "Lander",
  "ShipRegion": "WY",
  "ShipPostalCode": "82520",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635250a"),
  "OrderID": 10386,
  "CustomerID": "FAMIA",
  "EmployeeID": 9,
  "OrderDate": ISODate("1996-12-18T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-01T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-25T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 13.99,
  "ShipName": "Familia Arquibaldo",
  "ShipAddress": "Rua Orós, 92",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05442-030",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635250b"),
  "OrderID": 10387,
  "CustomerID": "SANTG",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-12-18T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-15T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-20T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 93.63,
  "ShipName": "Santé Gourmet",
  "ShipAddress": "Erling Skakkes gate 78",
  "ShipCity": "Stavern",
  "ShipRegion": "",
  "ShipPostalCode": "4110",
  "ShipCountry": "Norway"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635250c"),
  "OrderID": 10388,
  "CustomerID": "SEVES",
  "EmployeeID": 2,
  "OrderDate": ISODate("1996-12-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-16T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-20T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 34.86,
  "ShipName": "Seven Seas Imports",
  "ShipAddress": "90 Wadhurst Rd.",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "OX15 4NB",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635250d"),
  "OrderID": 10389,
  "CustomerID": "BOTTM",
  "EmployeeID": 4,
  "OrderDate": ISODate("1996-12-20T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-17T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-24T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 47.42,
  "ShipName": "Bottom-Dollar Markets",
  "ShipAddress": "23 Tsawassen Blvd.",
  "ShipCity": "Tsawassen",
  "ShipRegion": "BC",
  "ShipPostalCode": "T2F 8M4",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635250e"),
  "OrderID": 10390,
  "CustomerID": "ERNSH",
  "EmployeeID": 6,
  "OrderDate": ISODate("1996-12-23T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-20T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-26T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 126.38,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b943331635250f"),
  "OrderID": 10391,
  "CustomerID": "DRACD",
  "EmployeeID": 3,
  "OrderDate": ISODate("1996-12-23T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-20T05:00:00.0Z"),
  "ShippedDate": ISODate("1996-12-31T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 5.45,
  "ShipName": "Drachenblut Delikatessen",
  "ShipAddress": "Walserweg 21",
  "ShipCity": "Aachen",
  "ShipRegion": "",
  "ShipPostalCode": "52066",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352510"),
  "OrderID": 10392,
  "CustomerID": "PICCO",
  "EmployeeID": 2,
  "OrderDate": ISODate("1996-12-24T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-21T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-01T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 122.46,
  "ShipName": "Piccolo und mehr",
  "ShipAddress": "Geislweg 14",
  "ShipCity": "Salzburg",
  "ShipRegion": "",
  "ShipPostalCode": "5020",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352511"),
  "OrderID": 10393,
  "CustomerID": "SAVEA",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-12-25T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-22T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-03T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 126.56,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352512"),
  "OrderID": 10394,
  "CustomerID": "HUNGC",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-12-25T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-22T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-03T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 30.34,
  "ShipName": "Hungry Coyote Import Store",
  "ShipAddress": "City Center Plaza\n516 Main St.",
  "ShipCity": "Elgin",
  "ShipRegion": "OR",
  "ShipPostalCode": "97827",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352513"),
  "OrderID": 10395,
  "CustomerID": "HILAA",
  "EmployeeID": 6,
  "OrderDate": ISODate("1996-12-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-23T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-03T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 184.41,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352514"),
  "OrderID": 10396,
  "CustomerID": "FRANK",
  "EmployeeID": 1,
  "OrderDate": ISODate("1996-12-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-10T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-06T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 135.35,
  "ShipName": "Frankenversand",
  "ShipAddress": "Berliner Platz 43",
  "ShipCity": "München",
  "ShipRegion": "",
  "ShipPostalCode": "80805",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352515"),
  "OrderID": 10397,
  "CustomerID": "PRINI",
  "EmployeeID": 5,
  "OrderDate": ISODate("1996-12-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-02T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 60.26,
  "ShipName": "Princesa Isabel Vinhos",
  "ShipAddress": "Estrada da saúde n. 58",
  "ShipCity": "Lisboa",
  "ShipRegion": "",
  "ShipPostalCode": "1756",
  "ShipCountry": "Portugal"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352516"),
  "OrderID": 10398,
  "CustomerID": "SAVEA",
  "EmployeeID": 2,
  "OrderDate": ISODate("1996-12-30T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-27T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-09T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 89.16,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352517"),
  "OrderID": 10399,
  "CustomerID": "VAFFE",
  "EmployeeID": 8,
  "OrderDate": ISODate("1996-12-31T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-14T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-08T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 27.36,
  "ShipName": "Vaffeljernet",
  "ShipAddress": "Smagsløget 45",
  "ShipCity": "Århus",
  "ShipRegion": "",
  "ShipPostalCode": "8200",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352518"),
  "OrderID": 10400,
  "CustomerID": "EASTC",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-01-01T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-29T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-16T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 83.93,
  "ShipName": "Eastern Connection",
  "ShipAddress": "35 King George",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "WX3 6FW",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fa99b9433316352519"),
  "OrderID": 10401,
  "CustomerID": "RATTC",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-01-01T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-29T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-10T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 12.51,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635251a"),
  "OrderID": 10402,
  "CustomerID": "ERNSH",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-01-02T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-10T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 67.88,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635251b"),
  "OrderID": 10403,
  "CustomerID": "ERNSH",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-01-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-31T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-09T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 73.79,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635251c"),
  "OrderID": 10404,
  "CustomerID": "MAGAA",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-01-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-01-31T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-08T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 155.97,
  "ShipName": "Magazzini Alimentari Riuniti",
  "ShipAddress": "Via Ludovico il Moro 22",
  "ShipCity": "Bergamo",
  "ShipRegion": "",
  "ShipPostalCode": "24100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635251d"),
  "OrderID": 10405,
  "CustomerID": "LINOD",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-01-06T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-03T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-22T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 34.82,
  "ShipName": "LINO-Delicateses",
  "ShipAddress": "Ave. 5 de Mayo Porlamar",
  "ShipCity": "I. de Margarita",
  "ShipRegion": "Nueva Esparta",
  "ShipPostalCode": "4980",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635251e"),
  "OrderID": 10406,
  "CustomerID": "QUEEN",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-01-07T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-18T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-13T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 108.04,
  "ShipName": "Queen Cozinha",
  "ShipAddress": "Alameda dos Canàrios, 891",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05487-020",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635251f"),
  "OrderID": 10407,
  "CustomerID": "OTTIK",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-01-07T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-04T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-30T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 91.48,
  "ShipName": "Ottilies Käseladen",
  "ShipAddress": "Mehrheimerstr. 369",
  "ShipCity": "Köln",
  "ShipRegion": "",
  "ShipPostalCode": "50739",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352520"),
  "OrderID": 10408,
  "CustomerID": "FOLIG",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-01-08T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-05T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-14T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 11.26,
  "ShipName": "Folies gourmandes",
  "ShipAddress": "184, chaussée de Tournai",
  "ShipCity": "Lille",
  "ShipRegion": "",
  "ShipPostalCode": "59000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352521"),
  "OrderID": 10409,
  "CustomerID": "OCEAN",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-01-09T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-14T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 29.83,
  "ShipName": "Océano Atlántico Ltda.",
  "ShipAddress": "Ing. Gustavo Moncada 8585\nPiso 20-A",
  "ShipCity": "Buenos Aires",
  "ShipRegion": "",
  "ShipPostalCode": "1010",
  "ShipCountry": "Argentina"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352522"),
  "OrderID": 10410,
  "CustomerID": "BOTTM",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-01-10T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-07T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-15T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 2.4,
  "ShipName": "Bottom-Dollar Markets",
  "ShipAddress": "23 Tsawassen Blvd.",
  "ShipCity": "Tsawassen",
  "ShipRegion": "BC",
  "ShipPostalCode": "T2F 8M4",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352523"),
  "OrderID": 10411,
  "CustomerID": "BOTTM",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-01-10T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-07T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-21T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 23.65,
  "ShipName": "Bottom-Dollar Markets",
  "ShipAddress": "23 Tsawassen Blvd.",
  "ShipCity": "Tsawassen",
  "ShipRegion": "BC",
  "ShipPostalCode": "T2F 8M4",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352524"),
  "OrderID": 10412,
  "CustomerID": "WARTH",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-01-13T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-10T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-15T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 3.77,
  "ShipName": "Wartian Herkku",
  "ShipAddress": "Torikatu 38",
  "ShipCity": "Oulu",
  "ShipRegion": "",
  "ShipPostalCode": "90110",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352525"),
  "OrderID": 10413,
  "CustomerID": "LAMAI",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-01-14T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-11T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-16T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 95.66,
  "ShipName": "La maison d'Asie",
  "ShipAddress": "1 rue Alsace-Lorraine",
  "ShipCity": "Toulouse",
  "ShipRegion": "",
  "ShipPostalCode": "31000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352526"),
  "OrderID": 10414,
  "CustomerID": "FAMIA",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-01-14T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-11T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-17T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 21.48,
  "ShipName": "Familia Arquibaldo",
  "ShipAddress": "Rua Orós, 92",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05442-030",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352527"),
  "OrderID": 10415,
  "CustomerID": "HUNGC",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-01-15T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-12T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-24T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 0.2,
  "ShipName": "Hungry Coyote Import Store",
  "ShipAddress": "City Center Plaza\n516 Main St.",
  "ShipCity": "Elgin",
  "ShipRegion": "OR",
  "ShipPostalCode": "97827",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352528"),
  "OrderID": 10416,
  "CustomerID": "WARTH",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-01-16T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-27T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 22.72,
  "ShipName": "Wartian Herkku",
  "ShipAddress": "Torikatu 38",
  "ShipCity": "Oulu",
  "ShipRegion": "",
  "ShipPostalCode": "90110",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352529"),
  "OrderID": 10417,
  "CustomerID": "SIMOB",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-01-16T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-28T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 70.29,
  "ShipName": "Simons bistro",
  "ShipAddress": "Vinbæltet 34",
  "ShipCity": "København",
  "ShipRegion": "",
  "ShipPostalCode": "1734",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635252a"),
  "OrderID": 10418,
  "CustomerID": "QUICK",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-01-17T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-14T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-24T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 17.55,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635252b"),
  "OrderID": 10419,
  "CustomerID": "RICSU",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-01-20T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-17T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-30T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 137.35,
  "ShipName": "Richter Supermarkt",
  "ShipAddress": "Starenweg 5",
  "ShipCity": "Genève",
  "ShipRegion": "",
  "ShipPostalCode": "1204",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635252c"),
  "OrderID": 10420,
  "CustomerID": "WELLI",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-01-21T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-18T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-27T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 44.12,
  "ShipName": "Wellington Importadora",
  "ShipAddress": "Rua do Mercado, 12",
  "ShipCity": "Resende",
  "ShipRegion": "SP",
  "ShipPostalCode": "08737-363",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635252d"),
  "OrderID": 10421,
  "CustomerID": "QUEDE",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-01-21T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-04T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-27T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 99.23,
  "ShipName": "Que Delícia",
  "ShipAddress": "Rua da Panificadora, 12",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-673",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635252e"),
  "OrderID": 10422,
  "CustomerID": "FRANS",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-01-22T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-19T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-31T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 3.02,
  "ShipName": "Franchi S.p.A.",
  "ShipAddress": "Via Monte Bianco 34",
  "ShipCity": "Torino",
  "ShipRegion": "",
  "ShipPostalCode": "10100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635252f"),
  "OrderID": 10423,
  "CustomerID": "GOURL",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-01-23T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-24T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 24.5,
  "ShipName": "Gourmet Lanchonetes",
  "ShipAddress": "Av. Brasil, 442",
  "ShipCity": "Campinas",
  "ShipRegion": "SP",
  "ShipPostalCode": "04876-786",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352530"),
  "OrderID": 10424,
  "CustomerID": "MEREP",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-01-23T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-20T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-01-27T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 370.61,
  "ShipName": "Mère Paillarde",
  "ShipAddress": "43 rue St. Laurent",
  "ShipCity": "Montréal",
  "ShipRegion": "Québec",
  "ShipPostalCode": "H1J 1C3",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352531"),
  "OrderID": 10425,
  "CustomerID": "LAMAI",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-01-24T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-21T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-14T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 7.93,
  "ShipName": "La maison d'Asie",
  "ShipAddress": "1 rue Alsace-Lorraine",
  "ShipCity": "Toulouse",
  "ShipRegion": "",
  "ShipPostalCode": "31000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352532"),
  "OrderID": 10426,
  "CustomerID": "GALED",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-01-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-06T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 18.69,
  "ShipName": "Galería del gastronómo",
  "ShipAddress": "Rambla de Cataluña, 23",
  "ShipCity": "Barcelona",
  "ShipRegion": "",
  "ShipPostalCode": "8022",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352533"),
  "OrderID": 10427,
  "CustomerID": "PICCO",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-01-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-03T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 31.29,
  "ShipName": "Piccolo und mehr",
  "ShipAddress": "Geislweg 14",
  "ShipCity": "Salzburg",
  "ShipRegion": "",
  "ShipPostalCode": "5020",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352534"),
  "OrderID": 10428,
  "CustomerID": "REGGC",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-01-28T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-25T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-04T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 11.09,
  "ShipName": "Reggiani Caseifici",
  "ShipAddress": "Strada Provinciale 124",
  "ShipCity": "Reggio Emilia",
  "ShipRegion": "",
  "ShipPostalCode": "42100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352535"),
  "OrderID": 10429,
  "CustomerID": "HUNGO",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-01-29T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-12T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-07T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 56.63,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352536"),
  "OrderID": 10430,
  "CustomerID": "ERNSH",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-01-30T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-03T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 458.78,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352537"),
  "OrderID": 10431,
  "CustomerID": "BOTTM",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-01-30T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-07T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 44.17,
  "ShipName": "Bottom-Dollar Markets",
  "ShipAddress": "23 Tsawassen Blvd.",
  "ShipCity": "Tsawassen",
  "ShipRegion": "BC",
  "ShipPostalCode": "T2F 8M4",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352538"),
  "OrderID": 10432,
  "CustomerID": "SPLIR",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-01-31T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-02-14T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-07T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 4.34,
  "ShipName": "Split Rail Beer & Ale",
  "ShipAddress": "P.O. Box 555",
  "ShipCity": "Lander",
  "ShipRegion": "WY",
  "ShipPostalCode": "82520",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352539"),
  "OrderID": 10433,
  "CustomerID": "PRINI",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-02-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-03T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-04T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 73.83,
  "ShipName": "Princesa Isabel Vinhos",
  "ShipAddress": "Estrada da saúde n. 58",
  "ShipCity": "Lisboa",
  "ShipRegion": "",
  "ShipPostalCode": "1756",
  "ShipCountry": "Portugal"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635253a"),
  "OrderID": 10434,
  "CustomerID": "FOLKO",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-02-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-03T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-13T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 17.92,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635253b"),
  "OrderID": 10435,
  "CustomerID": "CONSH",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-02-04T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-18T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-07T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 9.21,
  "ShipName": "Consolidated Holdings",
  "ShipAddress": "Berkeley Gardens\n12  Brewery",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "WX1 6LT",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635253c"),
  "OrderID": 10436,
  "CustomerID": "BLONP",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-02-05T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-05T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-11T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 156.66,
  "ShipName": "Blondel père et fils",
  "ShipAddress": "24, place Kléber",
  "ShipCity": "Strasbourg",
  "ShipRegion": "",
  "ShipPostalCode": "67000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635253d"),
  "OrderID": 10437,
  "CustomerID": "WARTH",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-02-05T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-05T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-12T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 19.97,
  "ShipName": "Wartian Herkku",
  "ShipAddress": "Torikatu 38",
  "ShipCity": "Oulu",
  "ShipRegion": "",
  "ShipPostalCode": "90110",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635253e"),
  "OrderID": 10438,
  "CustomerID": "TOMSP",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-02-06T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-14T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 8.24,
  "ShipName": "Toms Spezialitäten",
  "ShipAddress": "Luisenstr. 48",
  "ShipCity": "Münster",
  "ShipRegion": "",
  "ShipPostalCode": "44087",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635253f"),
  "OrderID": 10439,
  "CustomerID": "MEREP",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-02-07T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-07T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-10T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 4.07,
  "ShipName": "Mère Paillarde",
  "ShipAddress": "43 rue St. Laurent",
  "ShipCity": "Montréal",
  "ShipRegion": "Québec",
  "ShipPostalCode": "H1J 1C3",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352540"),
  "OrderID": 10440,
  "CustomerID": "SAVEA",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-02-10T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-10T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-28T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 86.53,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352541"),
  "OrderID": 10441,
  "CustomerID": "OLDWO",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-02-10T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-14T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 73.02,
  "ShipName": "Old World Delicatessen",
  "ShipAddress": "2743 Bering St.",
  "ShipCity": "Anchorage",
  "ShipRegion": "AK",
  "ShipPostalCode": "99508",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352542"),
  "OrderID": 10442,
  "CustomerID": "ERNSH",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-02-11T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-11T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-18T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 47.94,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352543"),
  "OrderID": 10443,
  "CustomerID": "REGGC",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-02-12T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-12T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-14T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 13.95,
  "ShipName": "Reggiani Caseifici",
  "ShipAddress": "Strada Provinciale 124",
  "ShipCity": "Reggio Emilia",
  "ShipRegion": "",
  "ShipPostalCode": "42100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352544"),
  "OrderID": 10444,
  "CustomerID": "BERGS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-02-12T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-12T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-21T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 3.5,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352545"),
  "OrderID": 10445,
  "CustomerID": "BERGS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-02-13T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-20T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 9.3,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352546"),
  "OrderID": 10446,
  "CustomerID": "TOMSP",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-02-14T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-14T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-19T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 14.68,
  "ShipName": "Toms Spezialitäten",
  "ShipAddress": "Luisenstr. 48",
  "ShipCity": "Münster",
  "ShipRegion": "",
  "ShipPostalCode": "44087",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352547"),
  "OrderID": 10447,
  "CustomerID": "RICAR",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-02-14T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-14T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-07T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 68.66,
  "ShipName": "Ricardo Adocicados",
  "ShipAddress": "Av. Copacabana, 267",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-890",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352548"),
  "OrderID": 10448,
  "CustomerID": "RANCH",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-02-17T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-17T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-24T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 38.82,
  "ShipName": "Rancho grande",
  "ShipAddress": "Av. del Libertador 900",
  "ShipCity": "Buenos Aires",
  "ShipRegion": "",
  "ShipPostalCode": "1010",
  "ShipCountry": "Argentina"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352549"),
  "OrderID": 10449,
  "CustomerID": "BLONP",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-02-18T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-18T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-27T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 53.3,
  "ShipName": "Blondel père et fils",
  "ShipAddress": "24, place Kléber",
  "ShipCity": "Strasbourg",
  "ShipRegion": "",
  "ShipPostalCode": "67000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635254a"),
  "OrderID": 10450,
  "CustomerID": "VICTE",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-02-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-19T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-11T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 7.23,
  "ShipName": "Victuailles en stock",
  "ShipAddress": "2, rue du Commerce",
  "ShipCity": "Lyon",
  "ShipRegion": "",
  "ShipPostalCode": "69004",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635254b"),
  "OrderID": 10451,
  "CustomerID": "QUICK",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-02-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-05T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-12T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 189.09,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635254c"),
  "OrderID": 10452,
  "CustomerID": "SAVEA",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-02-20T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-20T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-26T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 140.26,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635254d"),
  "OrderID": 10453,
  "CustomerID": "AROUT",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-02-21T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-21T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-26T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 25.36,
  "ShipName": "Around the Horn",
  "ShipAddress": "Brook Farm\nStratford St. Mary",
  "ShipCity": "Colchester",
  "ShipRegion": "Essex",
  "ShipPostalCode": "CO7 6JX",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635254e"),
  "OrderID": 10454,
  "CustomerID": "LAMAI",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-02-21T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-21T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-25T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 2.74,
  "ShipName": "La maison d'Asie",
  "ShipAddress": "1 rue Alsace-Lorraine",
  "ShipCity": "Toulouse",
  "ShipRegion": "",
  "ShipPostalCode": "31000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635254f"),
  "OrderID": 10455,
  "CustomerID": "WARTH",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-02-24T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-03T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 180.45,
  "ShipName": "Wartian Herkku",
  "ShipAddress": "Torikatu 38",
  "ShipCity": "Oulu",
  "ShipRegion": "",
  "ShipPostalCode": "90110",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352550"),
  "OrderID": 10456,
  "CustomerID": "KOENE",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-02-25T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-28T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 8.12,
  "ShipName": "Königlich Essen",
  "ShipAddress": "Maubelstr. 90",
  "ShipCity": "Brandenburg",
  "ShipRegion": "",
  "ShipPostalCode": "14776",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352551"),
  "OrderID": 10457,
  "CustomerID": "KOENE",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-02-25T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-25T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-03T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 11.57,
  "ShipName": "Königlich Essen",
  "ShipAddress": "Maubelstr. 90",
  "ShipCity": "Brandenburg",
  "ShipRegion": "",
  "ShipPostalCode": "14776",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352552"),
  "OrderID": 10458,
  "CustomerID": "SUPRD",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-02-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-04T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 147.06,
  "ShipName": "Suprêmes délices",
  "ShipAddress": "Boulevard Tirou, 255",
  "ShipCity": "Charleroi",
  "ShipRegion": "",
  "ShipPostalCode": "B-6000",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352553"),
  "OrderID": 10459,
  "CustomerID": "VICTE",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-02-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-27T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-02-28T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 25.09,
  "ShipName": "Victuailles en stock",
  "ShipAddress": "2, rue du Commerce",
  "ShipCity": "Lyon",
  "ShipRegion": "",
  "ShipPostalCode": "69004",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352554"),
  "OrderID": 10460,
  "CustomerID": "FOLKO",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-02-28T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-28T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-03T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 16.27,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352555"),
  "OrderID": 10461,
  "CustomerID": "LILAS",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-02-28T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-28T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-05T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 148.61,
  "ShipName": "LILA-Supermercado",
  "ShipAddress": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
  "ShipCity": "Barquisimeto",
  "ShipRegion": "Lara",
  "ShipPostalCode": "3508",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352556"),
  "OrderID": 10462,
  "CustomerID": "CONSH",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-03-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-31T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-18T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 6.17,
  "ShipName": "Consolidated Holdings",
  "ShipAddress": "Berkeley Gardens\n12  Brewery",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "WX1 6LT",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352557"),
  "OrderID": 10463,
  "CustomerID": "SUPRD",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-03-04T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-01T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-06T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 14.78,
  "ShipName": "Suprêmes délices",
  "ShipAddress": "Boulevard Tirou, 255",
  "ShipCity": "Charleroi",
  "ShipRegion": "",
  "ShipPostalCode": "B-6000",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352558"),
  "OrderID": 10464,
  "CustomerID": "FURIB",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-03-04T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-01T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-14T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 89,
  "ShipName": "Furia Bacalhau e Frutos do Mar",
  "ShipAddress": "Jardim das rosas n. 32",
  "ShipCity": "Lisboa",
  "ShipRegion": "",
  "ShipPostalCode": "1675",
  "ShipCountry": "Portugal"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352559"),
  "OrderID": 10465,
  "CustomerID": "VAFFE",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-03-05T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-14T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 145.04,
  "ShipName": "Vaffeljernet",
  "ShipAddress": "Smagsløget 45",
  "ShipCity": "Århus",
  "ShipRegion": "",
  "ShipPostalCode": "8200",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635255a"),
  "OrderID": 10466,
  "CustomerID": "COMMI",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-03-06T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-03T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-13T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 11.93,
  "ShipName": "Comércio Mineiro",
  "ShipAddress": "Av. dos Lusíadas, 23",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05432-043",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635255b"),
  "OrderID": 10467,
  "CustomerID": "MAGAA",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-03-06T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-03T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-11T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 4.93,
  "ShipName": "Magazzini Alimentari Riuniti",
  "ShipAddress": "Via Ludovico il Moro 22",
  "ShipCity": "Bergamo",
  "ShipRegion": "",
  "ShipPostalCode": "24100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635255c"),
  "OrderID": 10468,
  "CustomerID": "KOENE",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-03-07T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-04T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-12T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 44.12,
  "ShipName": "Königlich Essen",
  "ShipAddress": "Maubelstr. 90",
  "ShipCity": "Brandenburg",
  "ShipRegion": "",
  "ShipPostalCode": "14776",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635255d"),
  "OrderID": 10469,
  "CustomerID": "WHITC",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-03-10T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-14T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 60.18,
  "ShipName": "White Clover Markets",
  "ShipAddress": "1029 - 12th Ave. S.",
  "ShipCity": "Seattle",
  "ShipRegion": "WA",
  "ShipPostalCode": "98124",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635255e"),
  "OrderID": 10470,
  "CustomerID": "BONAP",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-03-11T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-14T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 64.56,
  "ShipName": "Bon app'",
  "ShipAddress": "12, rue des Bouchers",
  "ShipCity": "Marseille",
  "ShipRegion": "",
  "ShipPostalCode": "13008",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635255f"),
  "OrderID": 10471,
  "CustomerID": "BSBEV",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-03-11T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-18T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 45.59,
  "ShipName": "B's Beverages",
  "ShipAddress": "Fauntleroy Circus",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "EC2 5NT",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352560"),
  "OrderID": 10472,
  "CustomerID": "SEVES",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-03-12T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-09T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-19T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 4.2,
  "ShipName": "Seven Seas Imports",
  "ShipAddress": "90 Wadhurst Rd.",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "OX15 4NB",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352561"),
  "OrderID": 10473,
  "CustomerID": "ISLAT",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-03-13T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-03-27T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-21T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 16.37,
  "ShipName": "Island Trading",
  "ShipAddress": "Garden House\nCrowther Way",
  "ShipCity": "Cowes",
  "ShipRegion": "Isle of Wight",
  "ShipPostalCode": "PO31 7PJ",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352562"),
  "OrderID": 10474,
  "CustomerID": "PERIC",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-03-13T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-10T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-21T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 83.49,
  "ShipName": "Pericles Comidas clásicas",
  "ShipAddress": "Calle Dr. Jorge Cash 321",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05033",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352563"),
  "OrderID": 10475,
  "CustomerID": "SUPRD",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-03-14T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-11T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-04T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 68.52,
  "ShipName": "Suprêmes délices",
  "ShipAddress": "Boulevard Tirou, 255",
  "ShipCity": "Charleroi",
  "ShipRegion": "",
  "ShipPostalCode": "B-6000",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352564"),
  "OrderID": 10476,
  "CustomerID": "HILAA",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-03-17T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-14T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-24T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 4.41,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352565"),
  "OrderID": 10477,
  "CustomerID": "PRINI",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-03-17T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-14T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-25T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 13.02,
  "ShipName": "Princesa Isabel Vinhos",
  "ShipAddress": "Estrada da saúde n. 58",
  "ShipCity": "Lisboa",
  "ShipRegion": "",
  "ShipPostalCode": "1756",
  "ShipCountry": "Portugal"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352566"),
  "OrderID": 10478,
  "CustomerID": "VICTE",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-03-18T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-01T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-26T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 4.81,
  "ShipName": "Victuailles en stock",
  "ShipAddress": "2, rue du Commerce",
  "ShipCity": "Lyon",
  "ShipRegion": "",
  "ShipPostalCode": "69004",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352567"),
  "OrderID": 10479,
  "CustomerID": "RATTC",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-03-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-21T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 708.95,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352568"),
  "OrderID": 10480,
  "CustomerID": "FOLIG",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-03-20T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-17T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-24T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 1.35,
  "ShipName": "Folies gourmandes",
  "ShipAddress": "184, chaussée de Tournai",
  "ShipCity": "Lille",
  "ShipRegion": "",
  "ShipPostalCode": "59000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352569"),
  "OrderID": 10481,
  "CustomerID": "RICAR",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-03-20T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-17T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-25T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 64.33,
  "ShipName": "Ricardo Adocicados",
  "ShipAddress": "Av. Copacabana, 267",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-890",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635256a"),
  "OrderID": 10482,
  "CustomerID": "LAZYK",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-03-21T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-18T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-10T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 7.48,
  "ShipName": "Lazy K Kountry Store",
  "ShipAddress": "12 Orchestra Terrace",
  "ShipCity": "Walla Walla",
  "ShipRegion": "WA",
  "ShipPostalCode": "99362",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635256b"),
  "OrderID": 10483,
  "CustomerID": "WHITC",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-03-24T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-21T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-25T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 15.28,
  "ShipName": "White Clover Markets",
  "ShipAddress": "1029 - 12th Ave. S.",
  "ShipCity": "Seattle",
  "ShipRegion": "WA",
  "ShipPostalCode": "98124",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635256c"),
  "OrderID": 10484,
  "CustomerID": "BSBEV",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-03-24T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-21T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-01T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 6.88,
  "ShipName": "B's Beverages",
  "ShipAddress": "Fauntleroy Circus",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "EC2 5NT",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635256d"),
  "OrderID": 10485,
  "CustomerID": "LINOD",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-03-25T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-31T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 64.45,
  "ShipName": "LINO-Delicateses",
  "ShipAddress": "Ave. 5 de Mayo Porlamar",
  "ShipCity": "I. de Margarita",
  "ShipRegion": "Nueva Esparta",
  "ShipPostalCode": "4980",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635256e"),
  "OrderID": 10486,
  "CustomerID": "HILAA",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-03-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-23T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-02T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 30.53,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635256f"),
  "OrderID": 10487,
  "CustomerID": "QUEEN",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-03-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-23T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-03-28T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 71.07,
  "ShipName": "Queen Cozinha",
  "ShipAddress": "Alameda dos Canàrios, 891",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05487-020",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352570"),
  "OrderID": 10488,
  "CustomerID": "FRANK",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-03-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-24T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-02T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 4.93,
  "ShipName": "Frankenversand",
  "ShipAddress": "Berliner Platz 43",
  "ShipCity": "München",
  "ShipRegion": "",
  "ShipPostalCode": "80805",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352571"),
  "OrderID": 10489,
  "CustomerID": "PICCO",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-03-28T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-25T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-09T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 5.29,
  "ShipName": "Piccolo und mehr",
  "ShipAddress": "Geislweg 14",
  "ShipCity": "Salzburg",
  "ShipRegion": "",
  "ShipPostalCode": "5020",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352572"),
  "OrderID": 10490,
  "CustomerID": "HILAA",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-03-31T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-28T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-03T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 210.19,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352573"),
  "OrderID": 10491,
  "CustomerID": "FURIB",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-03-31T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-28T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-08T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 16.96,
  "ShipName": "Furia Bacalhau e Frutos do Mar",
  "ShipAddress": "Jardim das rosas n. 32",
  "ShipCity": "Lisboa",
  "ShipRegion": "",
  "ShipPostalCode": "1675",
  "ShipCountry": "Portugal"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352574"),
  "OrderID": 10492,
  "CustomerID": "BOTTM",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-04-01T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-29T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-11T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 62.89,
  "ShipName": "Bottom-Dollar Markets",
  "ShipAddress": "23 Tsawassen Blvd.",
  "ShipCity": "Tsawassen",
  "ShipRegion": "BC",
  "ShipPostalCode": "T2F 8M4",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352575"),
  "OrderID": 10493,
  "CustomerID": "LAMAI",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-04-02T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-30T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-10T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 10.64,
  "ShipName": "La maison d'Asie",
  "ShipAddress": "1 rue Alsace-Lorraine",
  "ShipCity": "Toulouse",
  "ShipRegion": "",
  "ShipPostalCode": "31000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352576"),
  "OrderID": 10494,
  "CustomerID": "COMMI",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-04-02T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-04-30T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-09T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 65.99,
  "ShipName": "Comércio Mineiro",
  "ShipAddress": "Av. dos Lusíadas, 23",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05432-043",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352577"),
  "OrderID": 10495,
  "CustomerID": "LAUGB",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-04-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-01T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-11T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 4.65,
  "ShipName": "Laughing Bacchus Wine Cellars",
  "ShipAddress": "2319 Elm St.",
  "ShipCity": "Vancouver",
  "ShipRegion": "BC",
  "ShipPostalCode": "V3F 2K1",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352578"),
  "OrderID": 10496,
  "CustomerID": "TRADH",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-04-04T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-02T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-07T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 46.77,
  "ShipName": "Tradição Hipermercados",
  "ShipAddress": "Av. Inês de Castro, 414",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05634-030",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352579"),
  "OrderID": 10497,
  "CustomerID": "LEHMS",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-04-04T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-02T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-07T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 36.21,
  "ShipName": "Lehmanns Marktstand",
  "ShipAddress": "Magazinweg 7",
  "ShipCity": "Frankfurt a.M.",
  "ShipRegion": "",
  "ShipPostalCode": "60528",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635257a"),
  "OrderID": 10498,
  "CustomerID": "HILAA",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-04-07T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-05T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-11T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 29.75,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635257b"),
  "OrderID": 10499,
  "CustomerID": "LILAS",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-04-08T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-06T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-16T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 102.02,
  "ShipName": "LILA-Supermercado",
  "ShipAddress": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
  "ShipCity": "Barquisimeto",
  "ShipRegion": "Lara",
  "ShipPostalCode": "3508",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635257c"),
  "OrderID": 10500,
  "CustomerID": "LAMAI",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-04-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-17T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 42.68,
  "ShipName": "La maison d'Asie",
  "ShipAddress": "1 rue Alsace-Lorraine",
  "ShipCity": "Toulouse",
  "ShipRegion": "",
  "ShipPostalCode": "31000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635257d"),
  "OrderID": 10501,
  "CustomerID": "BLAUS",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-04-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-16T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 8.85,
  "ShipName": "Blauer See Delikatessen",
  "ShipAddress": "Forsterstr. 57",
  "ShipCity": "Mannheim",
  "ShipRegion": "",
  "ShipPostalCode": "68306",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635257e"),
  "OrderID": 10502,
  "CustomerID": "PERIC",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-04-10T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-29T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 69.32,
  "ShipName": "Pericles Comidas clásicas",
  "ShipAddress": "Calle Dr. Jorge Cash 321",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05033",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635257f"),
  "OrderID": 10503,
  "CustomerID": "HUNGO",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-04-11T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-09T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-16T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 16.74,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352580"),
  "OrderID": 10504,
  "CustomerID": "WHITC",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-04-11T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-09T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-18T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 59.13,
  "ShipName": "White Clover Markets",
  "ShipAddress": "1029 - 12th Ave. S.",
  "ShipCity": "Seattle",
  "ShipRegion": "WA",
  "ShipPostalCode": "98124",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352581"),
  "OrderID": 10505,
  "CustomerID": "MEREP",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-04-14T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-12T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-21T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 7.13,
  "ShipName": "Mère Paillarde",
  "ShipAddress": "43 rue St. Laurent",
  "ShipCity": "Montréal",
  "ShipRegion": "Québec",
  "ShipPostalCode": "H1J 1C3",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352582"),
  "OrderID": 10506,
  "CustomerID": "KOENE",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-04-15T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-13T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-02T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 21.19,
  "ShipName": "Königlich Essen",
  "ShipAddress": "Maubelstr. 90",
  "ShipCity": "Brandenburg",
  "ShipRegion": "",
  "ShipPostalCode": "14776",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352583"),
  "OrderID": 10507,
  "CustomerID": "ANTON",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-04-15T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-13T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-22T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 47.45,
  "ShipName": "Antonio Moreno Taquería",
  "ShipAddress": "Mataderos  2312",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05023",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352584"),
  "OrderID": 10508,
  "CustomerID": "OTTIK",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-04-16T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-14T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-13T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 4.99,
  "ShipName": "Ottilies Käseladen",
  "ShipAddress": "Mehrheimerstr. 369",
  "ShipCity": "Köln",
  "ShipRegion": "",
  "ShipPostalCode": "50739",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352585"),
  "OrderID": 10509,
  "CustomerID": "BLAUS",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-04-17T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-15T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-29T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 0.15,
  "ShipName": "Blauer See Delikatessen",
  "ShipAddress": "Forsterstr. 57",
  "ShipCity": "Mannheim",
  "ShipRegion": "",
  "ShipPostalCode": "68306",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352586"),
  "OrderID": 10510,
  "CustomerID": "SAVEA",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-04-18T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-28T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 367.63,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352587"),
  "OrderID": 10511,
  "CustomerID": "BONAP",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-04-18T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-21T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 350.64,
  "ShipName": "Bon app'",
  "ShipAddress": "12, rue des Bouchers",
  "ShipCity": "Marseille",
  "ShipRegion": "",
  "ShipPostalCode": "13008",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352588"),
  "OrderID": 10512,
  "CustomerID": "FAMIA",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-04-21T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-19T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-24T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 3.53,
  "ShipName": "Familia Arquibaldo",
  "ShipAddress": "Rua Orós, 92",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05442-030",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352589"),
  "OrderID": 10513,
  "CustomerID": "WANDK",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-04-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-03T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-28T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 105.65,
  "ShipName": "Die Wandernde Kuh",
  "ShipAddress": "Adenauerallee 900",
  "ShipCity": "Stuttgart",
  "ShipRegion": "",
  "ShipPostalCode": "70563",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635258a"),
  "OrderID": 10514,
  "CustomerID": "ERNSH",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-04-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-20T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-16T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 789.95,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635258b"),
  "OrderID": 10515,
  "CustomerID": "QUICK",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-04-23T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-23T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 204.47,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635258c"),
  "OrderID": 10516,
  "CustomerID": "HUNGO",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-04-24T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-22T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-01T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 62.78,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635258d"),
  "OrderID": 10517,
  "CustomerID": "NORTS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-04-24T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-22T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-04-29T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 32.07,
  "ShipName": "North/South",
  "ShipAddress": "South House\n300 Queensbridge",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "SW7 1RZ",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635258e"),
  "OrderID": 10518,
  "CustomerID": "TORTU",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-04-25T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-09T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-05T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 218.15,
  "ShipName": "Tortuga Restaurante",
  "ShipAddress": "Avda. Azteca 123",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05033",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635258f"),
  "OrderID": 10519,
  "CustomerID": "CHOPS",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-04-28T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-26T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-01T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 91.76,
  "ShipName": "Chop-suey Chinese",
  "ShipAddress": "Hauptstr. 31",
  "ShipCity": "Bern",
  "ShipRegion": "",
  "ShipPostalCode": "3012",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352590"),
  "OrderID": 10520,
  "CustomerID": "SANTG",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-04-29T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-27T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-01T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 13.37,
  "ShipName": "Santé Gourmet",
  "ShipAddress": "Erling Skakkes gate 78",
  "ShipCity": "Stavern",
  "ShipRegion": "",
  "ShipPostalCode": "4110",
  "ShipCountry": "Norway"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352591"),
  "OrderID": 10521,
  "CustomerID": "CACTU",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-04-29T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-27T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-02T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 17.22,
  "ShipName": "Cactus Comidas para llevar",
  "ShipAddress": "Cerrito 333",
  "ShipCity": "Buenos Aires",
  "ShipRegion": "",
  "ShipPostalCode": "1010",
  "ShipCountry": "Argentina"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352592"),
  "OrderID": 10522,
  "CustomerID": "LEHMS",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-04-30T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-28T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-06T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 45.33,
  "ShipName": "Lehmanns Marktstand",
  "ShipAddress": "Magazinweg 7",
  "ShipCity": "Frankfurt a.M.",
  "ShipRegion": "",
  "ShipPostalCode": "60528",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352593"),
  "OrderID": 10523,
  "CustomerID": "SEVES",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-05-01T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-29T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-30T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 77.63,
  "ShipName": "Seven Seas Imports",
  "ShipAddress": "90 Wadhurst Rd.",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "OX15 4NB",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352594"),
  "OrderID": 10524,
  "CustomerID": "BERGS",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-05-01T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-29T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-07T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 244.79,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352595"),
  "OrderID": 10525,
  "CustomerID": "BONAP",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-05-02T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-30T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-23T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 11.06,
  "ShipName": "Bon app'",
  "ShipAddress": "12, rue des Bouchers",
  "ShipCity": "Marseille",
  "ShipRegion": "",
  "ShipPostalCode": "13008",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352596"),
  "OrderID": 10526,
  "CustomerID": "WARTH",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-05-05T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-02T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-15T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 58.59,
  "ShipName": "Wartian Herkku",
  "ShipAddress": "Torikatu 38",
  "ShipCity": "Oulu",
  "ShipRegion": "",
  "ShipPostalCode": "90110",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352597"),
  "OrderID": 10527,
  "CustomerID": "QUICK",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-05-05T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-02T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-07T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 41.9,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352598"),
  "OrderID": 10528,
  "CustomerID": "GREAL",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-05-06T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-20T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-09T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 3.35,
  "ShipName": "Great Lakes Food Market",
  "ShipAddress": "2732 Baker Blvd.",
  "ShipCity": "Eugene",
  "ShipRegion": "OR",
  "ShipPostalCode": "97403",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352599"),
  "OrderID": 10529,
  "CustomerID": "MAISD",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-05-07T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-04T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-09T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 66.69,
  "ShipName": "Maison Dewey",
  "ShipAddress": "Rue Joseph-Bens 532",
  "ShipCity": "Bruxelles",
  "ShipRegion": "",
  "ShipPostalCode": "B-1180",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635259a"),
  "OrderID": 10530,
  "CustomerID": "PICCO",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-05-08T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-05T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-12T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 339.22,
  "ShipName": "Piccolo und mehr",
  "ShipAddress": "Geislweg 14",
  "ShipCity": "Salzburg",
  "ShipRegion": "",
  "ShipPostalCode": "5020",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635259b"),
  "OrderID": 10531,
  "CustomerID": "OCEAN",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-05-08T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-05T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-19T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 8.12,
  "ShipName": "Océano Atlántico Ltda.",
  "ShipAddress": "Ing. Gustavo Moncada 8585\nPiso 20-A",
  "ShipCity": "Buenos Aires",
  "ShipRegion": "",
  "ShipPostalCode": "1010",
  "ShipCountry": "Argentina"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635259c"),
  "OrderID": 10532,
  "CustomerID": "EASTC",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-05-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-06T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-12T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 74.46,
  "ShipName": "Eastern Connection",
  "ShipAddress": "35 King George",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "WX3 6FW",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635259d"),
  "OrderID": 10533,
  "CustomerID": "FOLKO",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-05-12T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-09T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-22T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 188.04,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635259e"),
  "OrderID": 10534,
  "CustomerID": "LEHMS",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-05-12T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-09T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-14T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 27.94,
  "ShipName": "Lehmanns Marktstand",
  "ShipAddress": "Magazinweg 7",
  "ShipCity": "Frankfurt a.M.",
  "ShipRegion": "",
  "ShipPostalCode": "60528",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635259f"),
  "OrderID": 10535,
  "CustomerID": "ANTON",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-05-13T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-10T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-21T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 15.64,
  "ShipName": "Antonio Moreno Taquería",
  "ShipAddress": "Mataderos  2312",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05023",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525a0"),
  "OrderID": 10536,
  "CustomerID": "LEHMS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-05-14T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-11T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-06T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 58.88,
  "ShipName": "Lehmanns Marktstand",
  "ShipAddress": "Magazinweg 7",
  "ShipCity": "Frankfurt a.M.",
  "ShipRegion": "",
  "ShipPostalCode": "60528",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525a1"),
  "OrderID": 10537,
  "CustomerID": "RICSU",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-05-14T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-05-28T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-19T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 78.85,
  "ShipName": "Richter Supermarkt",
  "ShipAddress": "Starenweg 5",
  "ShipCity": "Genève",
  "ShipRegion": "",
  "ShipPostalCode": "1204",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525a2"),
  "OrderID": 10538,
  "CustomerID": "BSBEV",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-05-15T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-12T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-16T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 4.87,
  "ShipName": "B's Beverages",
  "ShipAddress": "Fauntleroy Circus",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "EC2 5NT",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525a3"),
  "OrderID": 10539,
  "CustomerID": "BSBEV",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-05-16T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-13T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-23T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 12.36,
  "ShipName": "B's Beverages",
  "ShipAddress": "Fauntleroy Circus",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "EC2 5NT",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525a4"),
  "OrderID": 10540,
  "CustomerID": "QUICK",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-05-19T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-13T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 1007.64,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525a5"),
  "OrderID": 10541,
  "CustomerID": "HANAR",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-05-19T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-29T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 68.65,
  "ShipName": "Hanari Carnes",
  "ShipAddress": "Rua do Paço, 67",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "05454-876",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525a6"),
  "OrderID": 10542,
  "CustomerID": "KOENE",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-05-20T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-17T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-26T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 10.95,
  "ShipName": "Königlich Essen",
  "ShipAddress": "Maubelstr. 90",
  "ShipCity": "Brandenburg",
  "ShipRegion": "",
  "ShipPostalCode": "14776",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525a7"),
  "OrderID": 10543,
  "CustomerID": "LILAS",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-05-21T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-18T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-23T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 48.17,
  "ShipName": "LILA-Supermercado",
  "ShipAddress": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
  "ShipCity": "Barquisimeto",
  "ShipRegion": "Lara",
  "ShipPostalCode": "3508",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525a8"),
  "OrderID": 10544,
  "CustomerID": "LONEP",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-05-21T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-18T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-30T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 24.91,
  "ShipName": "Lonesome Pine Restaurant",
  "ShipAddress": "89 Chiaroscuro Rd.",
  "ShipCity": "Portland",
  "ShipRegion": "OR",
  "ShipPostalCode": "97219",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525a9"),
  "OrderID": 10545,
  "CustomerID": "LAZYK",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-05-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-19T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-26T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 11.92,
  "ShipName": "Lazy K Kountry Store",
  "ShipAddress": "12 Orchestra Terrace",
  "ShipCity": "Walla Walla",
  "ShipRegion": "WA",
  "ShipPostalCode": "99362",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525aa"),
  "OrderID": 10546,
  "CustomerID": "VICTE",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-05-23T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-20T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-27T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 194.72,
  "ShipName": "Victuailles en stock",
  "ShipAddress": "2, rue du Commerce",
  "ShipCity": "Lyon",
  "ShipRegion": "",
  "ShipPostalCode": "69004",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525ab"),
  "OrderID": 10547,
  "CustomerID": "SEVES",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-05-23T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-20T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-02T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 178.43,
  "ShipName": "Seven Seas Imports",
  "ShipAddress": "90 Wadhurst Rd.",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "OX15 4NB",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525ac"),
  "OrderID": 10548,
  "CustomerID": "TOMSP",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-05-26T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-23T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-02T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 1.43,
  "ShipName": "Toms Spezialitäten",
  "ShipAddress": "Luisenstr. 48",
  "ShipCity": "Münster",
  "ShipRegion": "",
  "ShipPostalCode": "44087",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525ad"),
  "OrderID": 10549,
  "CustomerID": "QUICK",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-05-27T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-10T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-05-30T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 171.24,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525ae"),
  "OrderID": 10550,
  "CustomerID": "GODOS",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-05-28T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-25T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-06T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 4.32,
  "ShipName": "Godos Cocina Típica",
  "ShipAddress": "C/ Romero, 33",
  "ShipCity": "Sevilla",
  "ShipRegion": "",
  "ShipPostalCode": "41101",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525af"),
  "OrderID": 10551,
  "CustomerID": "FURIB",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-05-28T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-09T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-06T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 72.95,
  "ShipName": "Furia Bacalhau e Frutos do Mar",
  "ShipAddress": "Jardim das rosas n. 32",
  "ShipCity": "Lisboa",
  "ShipRegion": "",
  "ShipPostalCode": "1675",
  "ShipCountry": "Portugal"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525b0"),
  "OrderID": 10552,
  "CustomerID": "HILAA",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-05-29T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-26T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-05T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 83.22,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525b1"),
  "OrderID": 10553,
  "CustomerID": "WARTH",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-05-30T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-27T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-03T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 149.49,
  "ShipName": "Wartian Herkku",
  "ShipAddress": "Torikatu 38",
  "ShipCity": "Oulu",
  "ShipRegion": "",
  "ShipPostalCode": "90110",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525b2"),
  "OrderID": 10554,
  "CustomerID": "OTTIK",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-05-30T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-27T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-05T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 120.97,
  "ShipName": "Ottilies Käseladen",
  "ShipAddress": "Mehrheimerstr. 369",
  "ShipCity": "Köln",
  "ShipRegion": "",
  "ShipPostalCode": "50739",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525b3"),
  "OrderID": 10555,
  "CustomerID": "SAVEA",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-06-02T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-30T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-04T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 252.49,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525b4"),
  "OrderID": 10556,
  "CustomerID": "SIMOB",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-06-03T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-15T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-13T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 9.8,
  "ShipName": "Simons bistro",
  "ShipAddress": "Vinbæltet 34",
  "ShipCity": "København",
  "ShipRegion": "",
  "ShipPostalCode": "1734",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525b5"),
  "OrderID": 10557,
  "CustomerID": "LEHMS",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-06-03T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-06-17T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-06T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 96.72,
  "ShipName": "Lehmanns Marktstand",
  "ShipAddress": "Magazinweg 7",
  "ShipCity": "Frankfurt a.M.",
  "ShipRegion": "",
  "ShipPostalCode": "60528",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525b6"),
  "OrderID": 10558,
  "CustomerID": "AROUT",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-06-04T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-02T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-10T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 72.97,
  "ShipName": "Around the Horn",
  "ShipAddress": "Brook Farm\nStratford St. Mary",
  "ShipCity": "Colchester",
  "ShipRegion": "Essex",
  "ShipPostalCode": "CO7 6JX",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525b7"),
  "OrderID": 10559,
  "CustomerID": "BLONP",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-06-05T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-03T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-13T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 8.05,
  "ShipName": "Blondel père et fils",
  "ShipAddress": "24, place Kléber",
  "ShipCity": "Strasbourg",
  "ShipRegion": "",
  "ShipPostalCode": "67000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525b8"),
  "OrderID": 10560,
  "CustomerID": "FRANK",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-06-06T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-04T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-09T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 36.65,
  "ShipName": "Frankenversand",
  "ShipAddress": "Berliner Platz 43",
  "ShipCity": "München",
  "ShipRegion": "",
  "ShipPostalCode": "80805",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525b9"),
  "OrderID": 10561,
  "CustomerID": "FOLKO",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-06-06T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-04T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-09T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 242.21,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525ba"),
  "OrderID": 10562,
  "CustomerID": "REGGC",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-06-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-12T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 22.95,
  "ShipName": "Reggiani Caseifici",
  "ShipAddress": "Strada Provinciale 124",
  "ShipCity": "Reggio Emilia",
  "ShipRegion": "",
  "ShipPostalCode": "42100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525bb"),
  "OrderID": 10563,
  "CustomerID": "RICAR",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-06-10T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-22T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-24T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 60.43,
  "ShipName": "Ricardo Adocicados",
  "ShipAddress": "Av. Copacabana, 267",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-890",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525bc"),
  "OrderID": 10564,
  "CustomerID": "RATTC",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-06-10T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-16T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 13.75,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525bd"),
  "OrderID": 10565,
  "CustomerID": "MEREP",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-06-11T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-09T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-18T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 7.15,
  "ShipName": "Mère Paillarde",
  "ShipAddress": "43 rue St. Laurent",
  "ShipCity": "Montréal",
  "ShipRegion": "Québec",
  "ShipPostalCode": "H1J 1C3",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525be"),
  "OrderID": 10566,
  "CustomerID": "BLONP",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-06-12T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-10T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-18T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 88.4,
  "ShipName": "Blondel père et fils",
  "ShipAddress": "24, place Kléber",
  "ShipCity": "Strasbourg",
  "ShipRegion": "",
  "ShipPostalCode": "67000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525bf"),
  "OrderID": 10567,
  "CustomerID": "HUNGO",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-06-12T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-10T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-17T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 33.97,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525c0"),
  "OrderID": 10568,
  "CustomerID": "GALED",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-06-13T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-11T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-09T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 6.54,
  "ShipName": "Galería del gastronómo",
  "ShipAddress": "Rambla de Cataluña, 23",
  "ShipCity": "Barcelona",
  "ShipRegion": "",
  "ShipPostalCode": "8022",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525c1"),
  "OrderID": 10569,
  "CustomerID": "RATTC",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-06-16T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-14T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-11T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 58.98,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525c2"),
  "OrderID": 10570,
  "CustomerID": "MEREP",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-06-17T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-15T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-19T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 188.99,
  "ShipName": "Mère Paillarde",
  "ShipAddress": "43 rue St. Laurent",
  "ShipCity": "Montréal",
  "ShipRegion": "Québec",
  "ShipPostalCode": "H1J 1C3",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525c3"),
  "OrderID": 10571,
  "CustomerID": "ERNSH",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-06-17T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-29T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-04T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 26.06,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525c4"),
  "OrderID": 10572,
  "CustomerID": "BERGS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-06-18T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-25T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 116.43,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525c5"),
  "OrderID": 10573,
  "CustomerID": "ANTON",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-06-19T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-17T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-20T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 84.84,
  "ShipName": "Antonio Moreno Taquería",
  "ShipAddress": "Mataderos  2312",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05023",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525c6"),
  "OrderID": 10574,
  "CustomerID": "TRAIH",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-06-19T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-17T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-30T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 37.6,
  "ShipName": "Trail's Head Gourmet Provisioners",
  "ShipAddress": "722 DaVinci Blvd.",
  "ShipCity": "Kirkland",
  "ShipRegion": "WA",
  "ShipPostalCode": "98034",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525c7"),
  "OrderID": 10575,
  "CustomerID": "MORGK",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-06-20T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-04T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-30T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 127.34,
  "ShipName": "Morgenstern Gesundkost",
  "ShipAddress": "Heerstr. 22",
  "ShipCity": "Leipzig",
  "ShipRegion": "",
  "ShipPostalCode": "04179",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525c8"),
  "OrderID": 10576,
  "CustomerID": "TORTU",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-06-23T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-30T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 18.56,
  "ShipName": "Tortuga Restaurante",
  "ShipAddress": "Avda. Azteca 123",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05033",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525c9"),
  "OrderID": 10577,
  "CustomerID": "TRAIH",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-06-23T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-04T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-06-30T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 25.41,
  "ShipName": "Trail's Head Gourmet Provisioners",
  "ShipAddress": "722 DaVinci Blvd.",
  "ShipCity": "Kirkland",
  "ShipRegion": "WA",
  "ShipPostalCode": "98034",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525ca"),
  "OrderID": 10578,
  "CustomerID": "BSBEV",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-06-24T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-22T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-25T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 29.6,
  "ShipName": "B's Beverages",
  "ShipAddress": "Fauntleroy Circus",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "EC2 5NT",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525cb"),
  "OrderID": 10579,
  "CustomerID": "LETSS",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-06-25T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-23T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-04T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 13.73,
  "ShipName": "Let's Stop N Shop",
  "ShipAddress": "87 Polk St.\nSuite 5",
  "ShipCity": "San Francisco",
  "ShipRegion": "CA",
  "ShipPostalCode": "94117",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525cc"),
  "OrderID": 10580,
  "CustomerID": "OTTIK",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-06-26T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-24T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-01T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 75.89,
  "ShipName": "Ottilies Käseladen",
  "ShipAddress": "Mehrheimerstr. 369",
  "ShipCity": "Köln",
  "ShipRegion": "",
  "ShipPostalCode": "50739",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525cd"),
  "OrderID": 10581,
  "CustomerID": "FAMIA",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-06-26T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-24T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-02T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 3.01,
  "ShipName": "Familia Arquibaldo",
  "ShipAddress": "Rua Orós, 92",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05442-030",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525ce"),
  "OrderID": 10582,
  "CustomerID": "BLAUS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-06-27T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-25T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-14T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 27.71,
  "ShipName": "Blauer See Delikatessen",
  "ShipAddress": "Forsterstr. 57",
  "ShipCity": "Mannheim",
  "ShipRegion": "",
  "ShipPostalCode": "68306",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525cf"),
  "OrderID": 10583,
  "CustomerID": "WARTH",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-06-30T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-28T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-04T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 7.28,
  "ShipName": "Wartian Herkku",
  "ShipAddress": "Torikatu 38",
  "ShipCity": "Oulu",
  "ShipRegion": "",
  "ShipPostalCode": "90110",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525d0"),
  "OrderID": 10584,
  "CustomerID": "BLONP",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-06-30T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-28T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-04T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 59.14,
  "ShipName": "Blondel père et fils",
  "ShipAddress": "24, place Kléber",
  "ShipCity": "Strasbourg",
  "ShipRegion": "",
  "ShipPostalCode": "67000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525d1"),
  "OrderID": 10585,
  "CustomerID": "WELLI",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-07-01T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-29T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-10T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 13.41,
  "ShipName": "Wellington Importadora",
  "ShipAddress": "Rua do Mercado, 12",
  "ShipCity": "Resende",
  "ShipRegion": "SP",
  "ShipPostalCode": "08737-363",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525d2"),
  "OrderID": 10586,
  "CustomerID": "REGGC",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-07-02T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-30T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-09T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 0.48,
  "ShipName": "Reggiani Caseifici",
  "ShipAddress": "Strada Provinciale 124",
  "ShipCity": "Reggio Emilia",
  "ShipRegion": "",
  "ShipPostalCode": "42100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525d3"),
  "OrderID": 10587,
  "CustomerID": "QUEDE",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-07-02T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-30T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-09T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 62.52,
  "ShipName": "Que Delícia",
  "ShipAddress": "Rua da Panificadora, 12",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-673",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525d4"),
  "OrderID": 10588,
  "CustomerID": "QUICK",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-07-03T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-31T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-10T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 194.67,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525d5"),
  "OrderID": 10589,
  "CustomerID": "GREAL",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-07-04T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-01T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-14T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 4.42,
  "ShipName": "Great Lakes Food Market",
  "ShipAddress": "2732 Baker Blvd.",
  "ShipCity": "Eugene",
  "ShipRegion": "OR",
  "ShipPostalCode": "97403",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525d6"),
  "OrderID": 10590,
  "CustomerID": "MEREP",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-07-07T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-04T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-14T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 44.77,
  "ShipName": "Mère Paillarde",
  "ShipAddress": "43 rue St. Laurent",
  "ShipCity": "Montréal",
  "ShipRegion": "Québec",
  "ShipPostalCode": "H1J 1C3",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525d7"),
  "OrderID": 10591,
  "CustomerID": "VAFFE",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-07-07T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-07-21T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-16T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 55.92,
  "ShipName": "Vaffeljernet",
  "ShipAddress": "Smagsløget 45",
  "ShipCity": "Århus",
  "ShipRegion": "",
  "ShipPostalCode": "8200",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525d8"),
  "OrderID": 10592,
  "CustomerID": "LEHMS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-07-08T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-05T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-16T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 32.1,
  "ShipName": "Lehmanns Marktstand",
  "ShipAddress": "Magazinweg 7",
  "ShipCity": "Frankfurt a.M.",
  "ShipRegion": "",
  "ShipPostalCode": "60528",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525d9"),
  "OrderID": 10593,
  "CustomerID": "LEHMS",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-07-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-06T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-13T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 174.2,
  "ShipName": "Lehmanns Marktstand",
  "ShipAddress": "Magazinweg 7",
  "ShipCity": "Frankfurt a.M.",
  "ShipRegion": "",
  "ShipPostalCode": "60528",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525da"),
  "OrderID": 10594,
  "CustomerID": "OLDWO",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-07-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-06T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-16T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 5.24,
  "ShipName": "Old World Delicatessen",
  "ShipAddress": "2743 Bering St.",
  "ShipCity": "Anchorage",
  "ShipRegion": "AK",
  "ShipPostalCode": "99508",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525db"),
  "OrderID": 10595,
  "CustomerID": "ERNSH",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-07-10T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-14T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 96.78,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525dc"),
  "OrderID": 10596,
  "CustomerID": "WHITC",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-07-11T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-12T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 16.34,
  "ShipName": "White Clover Markets",
  "ShipAddress": "1029 - 12th Ave. S.",
  "ShipCity": "Seattle",
  "ShipRegion": "WA",
  "ShipPostalCode": "98124",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525dd"),
  "OrderID": 10597,
  "CustomerID": "PICCO",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-07-11T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-18T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 35.12,
  "ShipName": "Piccolo und mehr",
  "ShipAddress": "Geislweg 14",
  "ShipCity": "Salzburg",
  "ShipRegion": "",
  "ShipPostalCode": "5020",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525de"),
  "OrderID": 10598,
  "CustomerID": "RATTC",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-07-14T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-11T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-18T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 44.42,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525df"),
  "OrderID": 10599,
  "CustomerID": "BSBEV",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-07-15T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-26T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-21T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 29.98,
  "ShipName": "B's Beverages",
  "ShipAddress": "Fauntleroy Circus",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "EC2 5NT",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525e0"),
  "OrderID": 10600,
  "CustomerID": "HUNGC",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-07-16T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-13T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-21T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 45.13,
  "ShipName": "Hungry Coyote Import Store",
  "ShipAddress": "City Center Plaza\n516 Main St.",
  "ShipCity": "Elgin",
  "ShipRegion": "OR",
  "ShipPostalCode": "97827",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525e1"),
  "OrderID": 10601,
  "CustomerID": "HILAA",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-07-16T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-27T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-22T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 58.3,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525e2"),
  "OrderID": 10602,
  "CustomerID": "VAFFE",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-07-17T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-14T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-22T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 2.92,
  "ShipName": "Vaffeljernet",
  "ShipAddress": "Smagsløget 45",
  "ShipCity": "Århus",
  "ShipRegion": "",
  "ShipPostalCode": "8200",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525e3"),
  "OrderID": 10603,
  "CustomerID": "SAVEA",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-07-18T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-15T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-08T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 48.77,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525e4"),
  "OrderID": 10604,
  "CustomerID": "FURIB",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-07-18T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-15T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-29T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 7.46,
  "ShipName": "Furia Bacalhau e Frutos do Mar",
  "ShipAddress": "Jardim das rosas n. 32",
  "ShipCity": "Lisboa",
  "ShipRegion": "",
  "ShipPostalCode": "1675",
  "ShipCountry": "Portugal"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525e5"),
  "OrderID": 10605,
  "CustomerID": "MEREP",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-07-21T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-18T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-29T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 379.13,
  "ShipName": "Mère Paillarde",
  "ShipAddress": "43 rue St. Laurent",
  "ShipCity": "Montréal",
  "ShipRegion": "Québec",
  "ShipPostalCode": "H1J 1C3",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525e6"),
  "OrderID": 10606,
  "CustomerID": "TRADH",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-07-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-19T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-31T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 79.4,
  "ShipName": "Tradição Hipermercados",
  "ShipAddress": "Av. Inês de Castro, 414",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05634-030",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525e7"),
  "OrderID": 10607,
  "CustomerID": "SAVEA",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-07-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-19T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-25T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 200.24,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525e8"),
  "OrderID": 10608,
  "CustomerID": "TOMSP",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-07-23T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-20T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-01T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 27.79,
  "ShipName": "Toms Spezialitäten",
  "ShipAddress": "Luisenstr. 48",
  "ShipCity": "Münster",
  "ShipRegion": "",
  "ShipPostalCode": "44087",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525e9"),
  "OrderID": 10609,
  "CustomerID": "DUMON",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-07-24T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-21T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-07-30T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 1.85,
  "ShipName": "Du monde entier",
  "ShipAddress": "67, rue des Cinquante Otages",
  "ShipCity": "Nantes",
  "ShipRegion": "",
  "ShipPostalCode": "44000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525ea"),
  "OrderID": 10610,
  "CustomerID": "LAMAI",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-07-25T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-22T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-06T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 26.78,
  "ShipName": "La maison d'Asie",
  "ShipAddress": "1 rue Alsace-Lorraine",
  "ShipCity": "Toulouse",
  "ShipRegion": "",
  "ShipPostalCode": "31000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525eb"),
  "OrderID": 10611,
  "CustomerID": "WOLZA",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-07-25T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-22T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-01T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 80.65,
  "ShipName": "Wolski Zajazd",
  "ShipAddress": "ul. Filtrowa 68",
  "ShipCity": "Warszawa",
  "ShipRegion": "",
  "ShipPostalCode": "01-012",
  "ShipCountry": "Poland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525ec"),
  "OrderID": 10612,
  "CustomerID": "SAVEA",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-07-28T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-25T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-01T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 544.08,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525ed"),
  "OrderID": 10613,
  "CustomerID": "HILAA",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-07-29T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-26T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-01T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 8.11,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525ee"),
  "OrderID": 10614,
  "CustomerID": "BLAUS",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-07-29T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-26T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-01T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 1.93,
  "ShipName": "Blauer See Delikatessen",
  "ShipAddress": "Forsterstr. 57",
  "ShipCity": "Mannheim",
  "ShipRegion": "",
  "ShipPostalCode": "68306",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525ef"),
  "OrderID": 10615,
  "CustomerID": "WILMK",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-07-30T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-27T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-06T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 0.75,
  "ShipName": "Wilman Kala",
  "ShipAddress": "Keskuskatu 45",
  "ShipCity": "Helsinki",
  "ShipRegion": "",
  "ShipPostalCode": "21240",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525f0"),
  "OrderID": 10616,
  "CustomerID": "GREAL",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-07-31T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-28T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-05T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 116.53,
  "ShipName": "Great Lakes Food Market",
  "ShipAddress": "2732 Baker Blvd.",
  "ShipCity": "Eugene",
  "ShipRegion": "OR",
  "ShipPostalCode": "97403",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525f1"),
  "OrderID": 10617,
  "CustomerID": "GREAL",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-07-31T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-08-28T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-04T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 18.53,
  "ShipName": "Great Lakes Food Market",
  "ShipAddress": "2732 Baker Blvd.",
  "ShipCity": "Eugene",
  "ShipRegion": "OR",
  "ShipPostalCode": "97403",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525f2"),
  "OrderID": 10618,
  "CustomerID": "MEREP",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-08-01T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-12T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-08T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 154.68,
  "ShipName": "Mère Paillarde",
  "ShipAddress": "43 rue St. Laurent",
  "ShipCity": "Montréal",
  "ShipRegion": "Québec",
  "ShipPostalCode": "H1J 1C3",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525f3"),
  "OrderID": 10619,
  "CustomerID": "MEREP",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-08-04T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-01T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-07T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 91.05,
  "ShipName": "Mère Paillarde",
  "ShipAddress": "43 rue St. Laurent",
  "ShipCity": "Montréal",
  "ShipRegion": "Québec",
  "ShipPostalCode": "H1J 1C3",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525f4"),
  "OrderID": 10620,
  "CustomerID": "LAUGB",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-08-05T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-02T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-14T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 0.94,
  "ShipName": "Laughing Bacchus Wine Cellars",
  "ShipAddress": "2319 Elm St.",
  "ShipCity": "Vancouver",
  "ShipRegion": "BC",
  "ShipPostalCode": "V3F 2K1",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525f5"),
  "OrderID": 10621,
  "CustomerID": "ISLAT",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-08-05T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-02T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-11T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 23.73,
  "ShipName": "Island Trading",
  "ShipAddress": "Garden House\nCrowther Way",
  "ShipCity": "Cowes",
  "ShipRegion": "Isle of Wight",
  "ShipPostalCode": "PO31 7PJ",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525f6"),
  "OrderID": 10622,
  "CustomerID": "RICAR",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-08-06T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-03T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-11T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 50.97,
  "ShipName": "Ricardo Adocicados",
  "ShipAddress": "Av. Copacabana, 267",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-890",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525f7"),
  "OrderID": 10623,
  "CustomerID": "FRANK",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-08-07T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-04T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-12T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 97.18,
  "ShipName": "Frankenversand",
  "ShipAddress": "Berliner Platz 43",
  "ShipCity": "München",
  "ShipRegion": "",
  "ShipPostalCode": "80805",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525f8"),
  "OrderID": 10624,
  "CustomerID": "THECR",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-08-07T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-04T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-19T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 94.8,
  "ShipName": "The Cracker Box",
  "ShipAddress": "55 Grizzly Peak Rd.",
  "ShipCity": "Butte",
  "ShipRegion": "MT",
  "ShipPostalCode": "59801",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525f9"),
  "OrderID": 10625,
  "CustomerID": "ANATR",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-08-08T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-05T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-14T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 43.9,
  "ShipName": "Ana Trujillo Emparedados y helados",
  "ShipAddress": "Avda. de la Constitución 2222",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05021",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525fa"),
  "OrderID": 10626,
  "CustomerID": "BERGS",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-08-11T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-20T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 138.69,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525fb"),
  "OrderID": 10627,
  "CustomerID": "SAVEA",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-08-11T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-22T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-21T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 107.46,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525fc"),
  "OrderID": 10628,
  "CustomerID": "BLONP",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-08-12T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-09T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-20T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 30.36,
  "ShipName": "Blondel père et fils",
  "ShipAddress": "24, place Kléber",
  "ShipCity": "Strasbourg",
  "ShipRegion": "",
  "ShipPostalCode": "67000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525fd"),
  "OrderID": 10629,
  "CustomerID": "GODOS",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-08-12T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-09T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-20T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 85.46,
  "ShipName": "Godos Cocina Típica",
  "ShipAddress": "C/ Romero, 33",
  "ShipCity": "Sevilla",
  "ShipRegion": "",
  "ShipPostalCode": "41101",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525fe"),
  "OrderID": 10630,
  "CustomerID": "KOENE",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-08-13T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-10T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-19T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 32.35,
  "ShipName": "Königlich Essen",
  "ShipAddress": "Maubelstr. 90",
  "ShipCity": "Brandenburg",
  "ShipRegion": "",
  "ShipPostalCode": "14776",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163525ff"),
  "OrderID": 10631,
  "CustomerID": "LAMAI",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-08-14T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-11T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-15T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 0.87,
  "ShipName": "La maison d'Asie",
  "ShipAddress": "1 rue Alsace-Lorraine",
  "ShipCity": "Toulouse",
  "ShipRegion": "",
  "ShipPostalCode": "31000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352600"),
  "OrderID": 10632,
  "CustomerID": "WANDK",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-08-14T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-11T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-19T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 41.38,
  "ShipName": "Die Wandernde Kuh",
  "ShipAddress": "Adenauerallee 900",
  "ShipCity": "Stuttgart",
  "ShipRegion": "",
  "ShipPostalCode": "70563",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352601"),
  "OrderID": 10633,
  "CustomerID": "ERNSH",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-08-15T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-12T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-18T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 477.9,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352602"),
  "OrderID": 10634,
  "CustomerID": "FOLIG",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-08-15T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-12T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-21T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 487.38,
  "ShipName": "Folies gourmandes",
  "ShipAddress": "184, chaussée de Tournai",
  "ShipCity": "Lille",
  "ShipRegion": "",
  "ShipPostalCode": "59000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352603"),
  "OrderID": 10635,
  "CustomerID": "MAGAA",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-08-18T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-15T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-21T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 47.46,
  "ShipName": "Magazzini Alimentari Riuniti",
  "ShipAddress": "Via Ludovico il Moro 22",
  "ShipCity": "Bergamo",
  "ShipRegion": "",
  "ShipPostalCode": "24100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352604"),
  "OrderID": 10636,
  "CustomerID": "WARTH",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-08-19T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-26T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 1.15,
  "ShipName": "Wartian Herkku",
  "ShipAddress": "Torikatu 38",
  "ShipCity": "Oulu",
  "ShipRegion": "",
  "ShipPostalCode": "90110",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352605"),
  "OrderID": 10637,
  "CustomerID": "QUEEN",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-08-19T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-26T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 201.29,
  "ShipName": "Queen Cozinha",
  "ShipAddress": "Alameda dos Canàrios, 891",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05487-020",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352606"),
  "OrderID": 10638,
  "CustomerID": "LINOD",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-08-20T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-17T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-01T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 158.44,
  "ShipName": "LINO-Delicateses",
  "ShipAddress": "Ave. 5 de Mayo Porlamar",
  "ShipCity": "I. de Margarita",
  "ShipRegion": "Nueva Esparta",
  "ShipPostalCode": "4980",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352607"),
  "OrderID": 10639,
  "CustomerID": "SANTG",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-08-20T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-17T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-27T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 38.64,
  "ShipName": "Santé Gourmet",
  "ShipAddress": "Erling Skakkes gate 78",
  "ShipCity": "Stavern",
  "ShipRegion": "",
  "ShipPostalCode": "4110",
  "ShipCountry": "Norway"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352608"),
  "OrderID": 10640,
  "CustomerID": "WANDK",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-08-21T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-18T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-28T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 23.55,
  "ShipName": "Die Wandernde Kuh",
  "ShipAddress": "Adenauerallee 900",
  "ShipCity": "Stuttgart",
  "ShipRegion": "",
  "ShipPostalCode": "70563",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352609"),
  "OrderID": 10641,
  "CustomerID": "HILAA",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-08-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-19T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-26T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 179.61,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635260a"),
  "OrderID": 10642,
  "CustomerID": "SIMOB",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-08-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-19T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-05T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 41.89,
  "ShipName": "Simons bistro",
  "ShipAddress": "Vinbæltet 34",
  "ShipCity": "København",
  "ShipRegion": "",
  "ShipPostalCode": "1734",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635260b"),
  "OrderID": 10643,
  "CustomerID": "ALFKI",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-08-25T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-22T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-02T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 29.46,
  "ShipName": "Alfreds Futterkiste",
  "ShipAddress": "Obere Str. 57",
  "ShipCity": "Berlin",
  "ShipRegion": "",
  "ShipPostalCode": "12209",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635260c"),
  "OrderID": 10644,
  "CustomerID": "WELLI",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-08-25T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-22T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-01T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 0.14,
  "ShipName": "Wellington Importadora",
  "ShipAddress": "Rua do Mercado, 12",
  "ShipCity": "Resende",
  "ShipRegion": "SP",
  "ShipPostalCode": "08737-363",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635260d"),
  "OrderID": 10645,
  "CustomerID": "HANAR",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-08-26T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-23T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-02T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 12.41,
  "ShipName": "Hanari Carnes",
  "ShipAddress": "Rua do Paço, 67",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "05454-876",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635260e"),
  "OrderID": 10646,
  "CustomerID": "HUNGO",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-08-27T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-03T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 142.33,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635260f"),
  "OrderID": 10647,
  "CustomerID": "QUEDE",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-08-27T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-10T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-03T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 45.54,
  "ShipName": "Que Delícia",
  "ShipAddress": "Rua da Panificadora, 12",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-673",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352610"),
  "OrderID": 10648,
  "CustomerID": "RICAR",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-08-28T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-09T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-09T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 14.25,
  "ShipName": "Ricardo Adocicados",
  "ShipAddress": "Av. Copacabana, 267",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-890",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352611"),
  "OrderID": 10649,
  "CustomerID": "MAISD",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-08-28T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-25T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-08-29T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 6.2,
  "ShipName": "Maison Dewey",
  "ShipAddress": "Rue Joseph-Bens 532",
  "ShipCity": "Bruxelles",
  "ShipRegion": "",
  "ShipPostalCode": "B-1180",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352612"),
  "OrderID": 10650,
  "CustomerID": "FAMIA",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-08-29T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-26T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-03T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 176.81,
  "ShipName": "Familia Arquibaldo",
  "ShipAddress": "Rua Orós, 92",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05442-030",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352613"),
  "OrderID": 10651,
  "CustomerID": "WANDK",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-09-01T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-29T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-11T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 20.6,
  "ShipName": "Die Wandernde Kuh",
  "ShipAddress": "Adenauerallee 900",
  "ShipCity": "Stuttgart",
  "ShipRegion": "",
  "ShipPostalCode": "70563",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352614"),
  "OrderID": 10652,
  "CustomerID": "GOURL",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-09-01T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-29T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-08T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 7.14,
  "ShipName": "Gourmet Lanchonetes",
  "ShipAddress": "Av. Brasil, 442",
  "ShipCity": "Campinas",
  "ShipRegion": "SP",
  "ShipPostalCode": "04876-786",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352615"),
  "OrderID": 10653,
  "CustomerID": "FRANK",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-09-02T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-30T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-19T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 93.25,
  "ShipName": "Frankenversand",
  "ShipAddress": "Berliner Platz 43",
  "ShipCity": "München",
  "ShipRegion": "",
  "ShipPostalCode": "80805",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352616"),
  "OrderID": 10654,
  "CustomerID": "BERGS",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-09-02T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-30T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-11T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 55.26,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352617"),
  "OrderID": 10655,
  "CustomerID": "REGGC",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-09-03T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-01T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-11T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 4.41,
  "ShipName": "Reggiani Caseifici",
  "ShipAddress": "Strada Provinciale 124",
  "ShipCity": "Reggio Emilia",
  "ShipRegion": "",
  "ShipPostalCode": "42100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352618"),
  "OrderID": 10656,
  "CustomerID": "GREAL",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-09-04T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-02T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-10T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 57.15,
  "ShipName": "Great Lakes Food Market",
  "ShipAddress": "2732 Baker Blvd.",
  "ShipCity": "Eugene",
  "ShipRegion": "OR",
  "ShipPostalCode": "97403",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352619"),
  "OrderID": 10657,
  "CustomerID": "SAVEA",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-09-04T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-02T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-15T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 352.69,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635261a"),
  "OrderID": 10658,
  "CustomerID": "QUICK",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-09-05T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-03T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-08T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 364.15,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635261b"),
  "OrderID": 10659,
  "CustomerID": "QUEEN",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-09-05T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-03T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-10T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 105.81,
  "ShipName": "Queen Cozinha",
  "ShipAddress": "Alameda dos Canàrios, 891",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05487-020",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635261c"),
  "OrderID": 10660,
  "CustomerID": "HUNGC",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-09-08T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-06T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-15T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 111.29,
  "ShipName": "Hungry Coyote Import Store",
  "ShipAddress": "City Center Plaza\n516 Main St.",
  "ShipCity": "Elgin",
  "ShipRegion": "OR",
  "ShipPostalCode": "97827",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635261d"),
  "OrderID": 10661,
  "CustomerID": "HUNGO",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-09-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-15T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 17.55,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635261e"),
  "OrderID": 10662,
  "CustomerID": "LONEP",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-09-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-18T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 1.28,
  "ShipName": "Lonesome Pine Restaurant",
  "ShipAddress": "89 Chiaroscuro Rd.",
  "ShipCity": "Portland",
  "ShipRegion": "OR",
  "ShipPostalCode": "97219",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635261f"),
  "OrderID": 10663,
  "CustomerID": "BONAP",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-09-10T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-09-24T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-03T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 113.15,
  "ShipName": "Bon app'",
  "ShipAddress": "12, rue des Bouchers",
  "ShipCity": "Marseille",
  "ShipRegion": "",
  "ShipPostalCode": "13008",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352620"),
  "OrderID": 10664,
  "CustomerID": "FURIB",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-09-10T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-19T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 1.27,
  "ShipName": "Furia Bacalhau e Frutos do Mar",
  "ShipAddress": "Jardim das rosas n. 32",
  "ShipCity": "Lisboa",
  "ShipRegion": "",
  "ShipPostalCode": "1675",
  "ShipCountry": "Portugal"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352621"),
  "OrderID": 10665,
  "CustomerID": "LONEP",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-09-11T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-09T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-17T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 26.31,
  "ShipName": "Lonesome Pine Restaurant",
  "ShipAddress": "89 Chiaroscuro Rd.",
  "ShipCity": "Portland",
  "ShipRegion": "OR",
  "ShipPostalCode": "97219",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352622"),
  "OrderID": 10666,
  "CustomerID": "RICSU",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-09-12T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-10T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-22T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 232.42,
  "ShipName": "Richter Supermarkt",
  "ShipAddress": "Starenweg 5",
  "ShipCity": "Genève",
  "ShipRegion": "",
  "ShipPostalCode": "1204",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352623"),
  "OrderID": 10667,
  "CustomerID": "ERNSH",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-09-12T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-10T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-19T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 78.09,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352624"),
  "OrderID": 10668,
  "CustomerID": "WANDK",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-09-15T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-13T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-23T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 47.22,
  "ShipName": "Die Wandernde Kuh",
  "ShipAddress": "Adenauerallee 900",
  "ShipCity": "Stuttgart",
  "ShipRegion": "",
  "ShipPostalCode": "70563",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352625"),
  "OrderID": 10669,
  "CustomerID": "SIMOB",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-09-15T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-13T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-22T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 24.39,
  "ShipName": "Simons bistro",
  "ShipAddress": "Vinbæltet 34",
  "ShipCity": "København",
  "ShipRegion": "",
  "ShipPostalCode": "1734",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352626"),
  "OrderID": 10670,
  "CustomerID": "FRANK",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-09-16T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-14T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-18T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 203.48,
  "ShipName": "Frankenversand",
  "ShipAddress": "Berliner Platz 43",
  "ShipCity": "München",
  "ShipRegion": "",
  "ShipPostalCode": "80805",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352627"),
  "OrderID": 10671,
  "CustomerID": "FRANR",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-09-17T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-15T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-24T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 30.34,
  "ShipName": "France restauration",
  "ShipAddress": "54, rue Royale",
  "ShipCity": "Nantes",
  "ShipRegion": "",
  "ShipPostalCode": "44000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352628"),
  "OrderID": 10672,
  "CustomerID": "BERGS",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-09-17T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-01T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-26T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 95.75,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352629"),
  "OrderID": 10673,
  "CustomerID": "WILMK",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-09-18T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-19T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 22.76,
  "ShipName": "Wilman Kala",
  "ShipAddress": "Keskuskatu 45",
  "ShipCity": "Helsinki",
  "ShipRegion": "",
  "ShipPostalCode": "21240",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635262a"),
  "OrderID": 10674,
  "CustomerID": "ISLAT",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-09-18T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-30T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 0.9,
  "ShipName": "Island Trading",
  "ShipAddress": "Garden House\nCrowther Way",
  "ShipCity": "Cowes",
  "ShipRegion": "Isle of Wight",
  "ShipPostalCode": "PO31 7PJ",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635262b"),
  "OrderID": 10675,
  "CustomerID": "FRANK",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-09-19T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-17T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-23T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 31.85,
  "ShipName": "Frankenversand",
  "ShipAddress": "Berliner Platz 43",
  "ShipCity": "München",
  "ShipRegion": "",
  "ShipPostalCode": "80805",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635262c"),
  "OrderID": 10676,
  "CustomerID": "TORTU",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-09-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-20T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-29T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 2.01,
  "ShipName": "Tortuga Restaurante",
  "ShipAddress": "Avda. Azteca 123",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05033",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635262d"),
  "OrderID": 10677,
  "CustomerID": "ANTON",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-09-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-20T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-26T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 4.03,
  "ShipName": "Antonio Moreno Taquería",
  "ShipAddress": "Mataderos  2312",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05023",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635262e"),
  "OrderID": 10678,
  "CustomerID": "SAVEA",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-09-23T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-21T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-16T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 388.98,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635262f"),
  "OrderID": 10679,
  "CustomerID": "BLONP",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-09-23T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-21T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-30T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 27.94,
  "ShipName": "Blondel père et fils",
  "ShipAddress": "24, place Kléber",
  "ShipCity": "Strasbourg",
  "ShipRegion": "",
  "ShipPostalCode": "67000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352630"),
  "OrderID": 10680,
  "CustomerID": "OLDWO",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-09-24T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-22T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-26T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 26.61,
  "ShipName": "Old World Delicatessen",
  "ShipAddress": "2743 Bering St.",
  "ShipCity": "Anchorage",
  "ShipRegion": "AK",
  "ShipPostalCode": "99508",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352631"),
  "OrderID": 10681,
  "CustomerID": "GREAL",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-09-25T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-23T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-30T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 76.13,
  "ShipName": "Great Lakes Food Market",
  "ShipAddress": "2732 Baker Blvd.",
  "ShipCity": "Eugene",
  "ShipRegion": "OR",
  "ShipPostalCode": "97403",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352632"),
  "OrderID": 10682,
  "CustomerID": "ANTON",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-09-25T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-23T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-01T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 36.13,
  "ShipName": "Antonio Moreno Taquería",
  "ShipAddress": "Mataderos  2312",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05023",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352633"),
  "OrderID": 10683,
  "CustomerID": "DUMON",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-09-26T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-24T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-01T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 4.4,
  "ShipName": "Du monde entier",
  "ShipAddress": "67, rue des Cinquante Otages",
  "ShipCity": "Nantes",
  "ShipRegion": "",
  "ShipPostalCode": "44000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352634"),
  "OrderID": 10684,
  "CustomerID": "OTTIK",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-09-26T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-24T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-09-30T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 145.63,
  "ShipName": "Ottilies Käseladen",
  "ShipAddress": "Mehrheimerstr. 369",
  "ShipCity": "Köln",
  "ShipRegion": "",
  "ShipPostalCode": "50739",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352635"),
  "OrderID": 10685,
  "CustomerID": "GOURL",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-09-29T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-13T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-03T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 33.75,
  "ShipName": "Gourmet Lanchonetes",
  "ShipAddress": "Av. Brasil, 442",
  "ShipCity": "Campinas",
  "ShipRegion": "SP",
  "ShipPostalCode": "04876-786",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352636"),
  "OrderID": 10686,
  "CustomerID": "PICCO",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-09-30T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-28T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-08T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 96.5,
  "ShipName": "Piccolo und mehr",
  "ShipAddress": "Geislweg 14",
  "ShipCity": "Salzburg",
  "ShipRegion": "",
  "ShipPostalCode": "5020",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352637"),
  "OrderID": 10687,
  "CustomerID": "HUNGO",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-09-30T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-28T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-30T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 296.43,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352638"),
  "OrderID": 10688,
  "CustomerID": "VAFFE",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-10-01T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-15T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-07T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 299.09,
  "ShipName": "Vaffeljernet",
  "ShipAddress": "Smagsløget 45",
  "ShipCity": "Århus",
  "ShipRegion": "",
  "ShipPostalCode": "8200",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352639"),
  "OrderID": 10689,
  "CustomerID": "BERGS",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-10-01T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-29T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-07T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 13.42,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635263a"),
  "OrderID": 10690,
  "CustomerID": "HANAR",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-10-02T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-30T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-03T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 15.8,
  "ShipName": "Hanari Carnes",
  "ShipAddress": "Rua do Paço, 67",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "05454-876",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635263b"),
  "OrderID": 10691,
  "CustomerID": "QUICK",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-10-03T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-14T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-22T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 810.05,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635263c"),
  "OrderID": 10692,
  "CustomerID": "ALFKI",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-10-03T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-31T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-13T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 61.02,
  "ShipName": "Alfreds Futterkiste",
  "ShipAddress": "Obere Str. 57",
  "ShipCity": "Berlin",
  "ShipRegion": "",
  "ShipPostalCode": "12209",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635263d"),
  "OrderID": 10693,
  "CustomerID": "WHITC",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-10-06T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-20T04:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-10T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 139.34,
  "ShipName": "White Clover Markets",
  "ShipAddress": "1029 - 12th Ave. S.",
  "ShipCity": "Seattle",
  "ShipRegion": "WA",
  "ShipPostalCode": "98124",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635263e"),
  "OrderID": 10694,
  "CustomerID": "QUICK",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-10-06T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-03T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-09T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 398.36,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635263f"),
  "OrderID": 10695,
  "CustomerID": "WILMK",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-10-07T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-18T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-14T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 16.72,
  "ShipName": "Wilman Kala",
  "ShipAddress": "Keskuskatu 45",
  "ShipCity": "Helsinki",
  "ShipRegion": "",
  "ShipPostalCode": "21240",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352640"),
  "OrderID": 10696,
  "CustomerID": "WHITC",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-10-08T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-19T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-14T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 102.55,
  "ShipName": "White Clover Markets",
  "ShipAddress": "1029 - 12th Ave. S.",
  "ShipCity": "Seattle",
  "ShipRegion": "WA",
  "ShipPostalCode": "98124",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352641"),
  "OrderID": 10697,
  "CustomerID": "LINOD",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-10-08T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-05T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-14T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 45.52,
  "ShipName": "LINO-Delicateses",
  "ShipAddress": "Ave. 5 de Mayo Porlamar",
  "ShipCity": "I. de Margarita",
  "ShipRegion": "Nueva Esparta",
  "ShipPostalCode": "4980",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352642"),
  "OrderID": 10698,
  "CustomerID": "ERNSH",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-10-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-17T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 272.47,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352643"),
  "OrderID": 10699,
  "CustomerID": "MORGK",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-10-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-13T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 0.58,
  "ShipName": "Morgenstern Gesundkost",
  "ShipAddress": "Heerstr. 22",
  "ShipCity": "Leipzig",
  "ShipRegion": "",
  "ShipPostalCode": "04179",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352644"),
  "OrderID": 10700,
  "CustomerID": "SAVEA",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-10-10T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-07T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-16T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 65.1,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352645"),
  "OrderID": 10701,
  "CustomerID": "HUNGO",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-10-13T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-27T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-15T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 220.31,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352646"),
  "OrderID": 10702,
  "CustomerID": "ALFKI",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-10-13T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-21T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 23.94,
  "ShipName": "Alfreds Futterkiste",
  "ShipAddress": "Obere Str. 57",
  "ShipCity": "Berlin",
  "ShipRegion": "",
  "ShipPostalCode": "12209",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352647"),
  "OrderID": 10703,
  "CustomerID": "FOLKO",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-10-14T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-11T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-20T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 152.3,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352648"),
  "OrderID": 10704,
  "CustomerID": "QUEEN",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-10-14T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-11T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-07T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 4.78,
  "ShipName": "Queen Cozinha",
  "ShipAddress": "Alameda dos Canàrios, 891",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05487-020",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352649"),
  "OrderID": 10705,
  "CustomerID": "HILAA",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-10-15T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-12T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-18T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 3.52,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635264a"),
  "OrderID": 10706,
  "CustomerID": "OLDWO",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-10-16T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-21T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 135.63,
  "ShipName": "Old World Delicatessen",
  "ShipAddress": "2743 Bering St.",
  "ShipCity": "Anchorage",
  "ShipRegion": "AK",
  "ShipPostalCode": "99508",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635264b"),
  "OrderID": 10707,
  "CustomerID": "AROUT",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-10-16T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-10-30T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-23T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 21.74,
  "ShipName": "Around the Horn",
  "ShipAddress": "Brook Farm\nStratford St. Mary",
  "ShipCity": "Colchester",
  "ShipRegion": "Essex",
  "ShipPostalCode": "CO7 6JX",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635264c"),
  "OrderID": 10708,
  "CustomerID": "THEBI",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-10-17T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-28T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-05T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 2.96,
  "ShipName": "The Big Cheese",
  "ShipAddress": "89 Jefferson Way\nSuite 2",
  "ShipCity": "Portland",
  "ShipRegion": "OR",
  "ShipPostalCode": "97201",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635264d"),
  "OrderID": 10709,
  "CustomerID": "GOURL",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-10-17T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-14T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-20T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 210.8,
  "ShipName": "Gourmet Lanchonetes",
  "ShipAddress": "Av. Brasil, 442",
  "ShipCity": "Campinas",
  "ShipRegion": "SP",
  "ShipPostalCode": "04876-786",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635264e"),
  "OrderID": 10710,
  "CustomerID": "FRANS",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-10-20T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-17T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-23T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 4.98,
  "ShipName": "Franchi S.p.A.",
  "ShipAddress": "Via Monte Bianco 34",
  "ShipCity": "Torino",
  "ShipRegion": "",
  "ShipPostalCode": "10100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635264f"),
  "OrderID": 10711,
  "CustomerID": "SAVEA",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-10-21T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-29T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 52.41,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352650"),
  "OrderID": 10712,
  "CustomerID": "HUNGO",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-10-21T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-18T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-31T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 89.93,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352651"),
  "OrderID": 10713,
  "CustomerID": "SAVEA",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-10-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-19T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-24T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 167.05,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352652"),
  "OrderID": 10714,
  "CustomerID": "SAVEA",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-10-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-19T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-27T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 24.49,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352653"),
  "OrderID": 10715,
  "CustomerID": "BONAP",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-10-23T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-29T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 63.2,
  "ShipName": "Bon app'",
  "ShipAddress": "12, rue des Bouchers",
  "ShipCity": "Marseille",
  "ShipRegion": "",
  "ShipPostalCode": "13008",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352654"),
  "OrderID": 10716,
  "CustomerID": "RANCH",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-10-24T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-21T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-27T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 22.57,
  "ShipName": "Rancho grande",
  "ShipAddress": "Av. del Libertador 900",
  "ShipCity": "Buenos Aires",
  "ShipRegion": "",
  "ShipPostalCode": "1010",
  "ShipCountry": "Argentina"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352655"),
  "OrderID": 10717,
  "CustomerID": "FRANK",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-10-24T04:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-21T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-29T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 59.25,
  "ShipName": "Frankenversand",
  "ShipAddress": "Berliner Platz 43",
  "ShipCity": "München",
  "ShipRegion": "",
  "ShipPostalCode": "80805",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352656"),
  "OrderID": 10718,
  "CustomerID": "KOENE",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-10-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-29T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 170.88,
  "ShipName": "Königlich Essen",
  "ShipAddress": "Maubelstr. 90",
  "ShipCity": "Brandenburg",
  "ShipRegion": "",
  "ShipPostalCode": "14776",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352657"),
  "OrderID": 10719,
  "CustomerID": "LETSS",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-10-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-05T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 51.44,
  "ShipName": "Let's Stop N Shop",
  "ShipAddress": "87 Polk St.\nSuite 5",
  "ShipCity": "San Francisco",
  "ShipRegion": "CA",
  "ShipPostalCode": "94117",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352658"),
  "OrderID": 10720,
  "CustomerID": "QUEDE",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-10-28T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-11T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-05T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 9.53,
  "ShipName": "Que Delícia",
  "ShipAddress": "Rua da Panificadora, 12",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-673",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352659"),
  "OrderID": 10721,
  "CustomerID": "QUICK",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-10-29T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-10-31T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 48.92,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635265a"),
  "OrderID": 10722,
  "CustomerID": "SAVEA",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-10-29T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-10T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-04T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 74.58,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635265b"),
  "OrderID": 10723,
  "CustomerID": "WHITC",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-10-30T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-27T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-25T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 21.72,
  "ShipName": "White Clover Markets",
  "ShipAddress": "1029 - 12th Ave. S.",
  "ShipCity": "Seattle",
  "ShipRegion": "WA",
  "ShipPostalCode": "98124",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635265c"),
  "OrderID": 10724,
  "CustomerID": "MEREP",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-10-30T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-11T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-05T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 57.75,
  "ShipName": "Mère Paillarde",
  "ShipAddress": "43 rue St. Laurent",
  "ShipCity": "Montréal",
  "ShipRegion": "Québec",
  "ShipPostalCode": "H1J 1C3",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635265d"),
  "OrderID": 10725,
  "CustomerID": "FAMIA",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-10-31T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-28T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-05T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 10.83,
  "ShipName": "Familia Arquibaldo",
  "ShipAddress": "Rua Orós, 92",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05442-030",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635265e"),
  "OrderID": 10726,
  "CustomerID": "EASTC",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-11-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-17T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-05T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 16.56,
  "ShipName": "Eastern Connection",
  "ShipAddress": "35 King George",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "WX3 6FW",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635265f"),
  "OrderID": 10727,
  "CustomerID": "REGGC",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-11-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-01T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-05T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 89.9,
  "ShipName": "Reggiani Caseifici",
  "ShipAddress": "Strada Provinciale 124",
  "ShipCity": "Reggio Emilia",
  "ShipRegion": "",
  "ShipPostalCode": "42100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352660"),
  "OrderID": 10728,
  "CustomerID": "QUEEN",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-11-04T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-11T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 58.33,
  "ShipName": "Queen Cozinha",
  "ShipAddress": "Alameda dos Canàrios, 891",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05487-020",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352661"),
  "OrderID": 10729,
  "CustomerID": "LINOD",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-11-04T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-16T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-14T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 141.06,
  "ShipName": "LINO-Delicateses",
  "ShipAddress": "Ave. 5 de Mayo Porlamar",
  "ShipCity": "I. de Margarita",
  "ShipRegion": "Nueva Esparta",
  "ShipPostalCode": "4980",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352662"),
  "OrderID": 10730,
  "CustomerID": "BONAP",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-11-05T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-03T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-14T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 20.12,
  "ShipName": "Bon app'",
  "ShipAddress": "12, rue des Bouchers",
  "ShipCity": "Marseille",
  "ShipRegion": "",
  "ShipPostalCode": "13008",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352663"),
  "OrderID": 10731,
  "CustomerID": "CHOPS",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-11-06T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-04T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-14T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 96.65,
  "ShipName": "Chop-suey Chinese",
  "ShipAddress": "Hauptstr. 31",
  "ShipCity": "Bern",
  "ShipRegion": "",
  "ShipPostalCode": "3012",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352664"),
  "OrderID": 10732,
  "CustomerID": "BONAP",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-11-06T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-04T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-07T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 16.97,
  "ShipName": "Bon app'",
  "ShipAddress": "12, rue des Bouchers",
  "ShipCity": "Marseille",
  "ShipRegion": "",
  "ShipPostalCode": "13008",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352665"),
  "OrderID": 10733,
  "CustomerID": "BERGS",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-11-07T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-05T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-10T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 110.11,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352666"),
  "OrderID": 10734,
  "CustomerID": "GOURL",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-11-07T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-05T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-12T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 1.63,
  "ShipName": "Gourmet Lanchonetes",
  "ShipAddress": "Av. Brasil, 442",
  "ShipCity": "Campinas",
  "ShipRegion": "SP",
  "ShipPostalCode": "04876-786",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352667"),
  "OrderID": 10735,
  "CustomerID": "LETSS",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-11-10T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-08T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-21T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 45.97,
  "ShipName": "Let's Stop N Shop",
  "ShipAddress": "87 Polk St.\nSuite 5",
  "ShipCity": "San Francisco",
  "ShipRegion": "CA",
  "ShipPostalCode": "94117",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352668"),
  "OrderID": 10736,
  "CustomerID": "HUNGO",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-11-11T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-09T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-21T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 44.1,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352669"),
  "OrderID": 10737,
  "CustomerID": "VINET",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-11-11T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-09T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-18T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 7.79,
  "ShipName": "Vins et alcools Chevalier",
  "ShipAddress": "59 rue de l'Abbaye",
  "ShipCity": "Reims",
  "ShipRegion": "",
  "ShipPostalCode": "51100",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635266a"),
  "OrderID": 10738,
  "CustomerID": "SPECD",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-11-12T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-10T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-18T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 2.91,
  "ShipName": "Spécialités du monde",
  "ShipAddress": "25, rue Lauriston",
  "ShipCity": "Paris",
  "ShipRegion": "",
  "ShipPostalCode": "75016",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635266b"),
  "OrderID": 10739,
  "CustomerID": "VINET",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-11-12T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-10T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-17T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 11.08,
  "ShipName": "Vins et alcools Chevalier",
  "ShipAddress": "59 rue de l'Abbaye",
  "ShipCity": "Reims",
  "ShipRegion": "",
  "ShipPostalCode": "51100",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635266c"),
  "OrderID": 10740,
  "CustomerID": "WHITC",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-11-13T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-11T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-25T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 81.88,
  "ShipName": "White Clover Markets",
  "ShipAddress": "1029 - 12th Ave. S.",
  "ShipCity": "Seattle",
  "ShipRegion": "WA",
  "ShipPostalCode": "98124",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635266d"),
  "OrderID": 10741,
  "CustomerID": "AROUT",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-11-14T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-11-28T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-18T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 10.96,
  "ShipName": "Around the Horn",
  "ShipAddress": "Brook Farm\nStratford St. Mary",
  "ShipCity": "Colchester",
  "ShipRegion": "Essex",
  "ShipPostalCode": "CO7 6JX",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635266e"),
  "OrderID": 10742,
  "CustomerID": "BOTTM",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-11-14T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-12T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-18T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 243.73,
  "ShipName": "Bottom-Dollar Markets",
  "ShipAddress": "23 Tsawassen Blvd.",
  "ShipCity": "Tsawassen",
  "ShipRegion": "BC",
  "ShipPostalCode": "T2F 8M4",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635266f"),
  "OrderID": 10743,
  "CustomerID": "AROUT",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-11-17T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-15T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-21T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 23.72,
  "ShipName": "Around the Horn",
  "ShipAddress": "Brook Farm\nStratford St. Mary",
  "ShipCity": "Colchester",
  "ShipRegion": "Essex",
  "ShipPostalCode": "CO7 6JX",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352670"),
  "OrderID": 10744,
  "CustomerID": "VAFFE",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-11-17T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-15T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-24T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 69.19,
  "ShipName": "Vaffeljernet",
  "ShipAddress": "Smagsløget 45",
  "ShipCity": "Århus",
  "ShipRegion": "",
  "ShipPostalCode": "8200",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352671"),
  "OrderID": 10745,
  "CustomerID": "QUICK",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-11-18T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-16T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-27T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 3.52,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352672"),
  "OrderID": 10746,
  "CustomerID": "CHOPS",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-11-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-17T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-21T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 31.43,
  "ShipName": "Chop-suey Chinese",
  "ShipAddress": "Hauptstr. 31",
  "ShipCity": "Bern",
  "ShipRegion": "",
  "ShipPostalCode": "3012",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352673"),
  "OrderID": 10747,
  "CustomerID": "PICCO",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-11-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-17T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-26T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 117.33,
  "ShipName": "Piccolo und mehr",
  "ShipAddress": "Geislweg 14",
  "ShipCity": "Salzburg",
  "ShipRegion": "",
  "ShipPostalCode": "5020",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352674"),
  "OrderID": 10748,
  "CustomerID": "SAVEA",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-11-20T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-18T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-28T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 232.55,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352675"),
  "OrderID": 10749,
  "CustomerID": "ISLAT",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-11-20T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-18T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-19T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 61.53,
  "ShipName": "Island Trading",
  "ShipAddress": "Garden House\nCrowther Way",
  "ShipCity": "Cowes",
  "ShipRegion": "Isle of Wight",
  "ShipPostalCode": "PO31 7PJ",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352676"),
  "OrderID": 10750,
  "CustomerID": "WARTH",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-11-21T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-19T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-24T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 79.3,
  "ShipName": "Wartian Herkku",
  "ShipAddress": "Torikatu 38",
  "ShipCity": "Oulu",
  "ShipRegion": "",
  "ShipPostalCode": "90110",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352677"),
  "OrderID": 10751,
  "CustomerID": "RICSU",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-11-24T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-22T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-03T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 130.79,
  "ShipName": "Richter Supermarkt",
  "ShipAddress": "Starenweg 5",
  "ShipCity": "Genève",
  "ShipRegion": "",
  "ShipPostalCode": "1204",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352678"),
  "OrderID": 10752,
  "CustomerID": "NORTS",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-11-24T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-22T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-28T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 1.39,
  "ShipName": "North/South",
  "ShipAddress": "South House\n300 Queensbridge",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "SW7 1RZ",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352679"),
  "OrderID": 10753,
  "CustomerID": "FRANS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-11-25T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-23T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-27T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 7.7,
  "ShipName": "Franchi S.p.A.",
  "ShipAddress": "Via Monte Bianco 34",
  "ShipCity": "Torino",
  "ShipRegion": "",
  "ShipPostalCode": "10100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635267a"),
  "OrderID": 10754,
  "CustomerID": "MAGAA",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-11-25T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-23T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-27T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 2.38,
  "ShipName": "Magazzini Alimentari Riuniti",
  "ShipAddress": "Via Ludovico il Moro 22",
  "ShipCity": "Bergamo",
  "ShipRegion": "",
  "ShipPostalCode": "24100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635267b"),
  "OrderID": 10755,
  "CustomerID": "BONAP",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-11-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-11-28T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 16.71,
  "ShipName": "Bon app'",
  "ShipAddress": "12, rue des Bouchers",
  "ShipCity": "Marseille",
  "ShipRegion": "",
  "ShipPostalCode": "13008",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635267c"),
  "OrderID": 10756,
  "CustomerID": "SPLIR",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-11-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-25T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-02T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 73.21,
  "ShipName": "Split Rail Beer & Ale",
  "ShipAddress": "P.O. Box 555",
  "ShipCity": "Lander",
  "ShipRegion": "WY",
  "ShipPostalCode": "82520",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635267d"),
  "OrderID": 10757,
  "CustomerID": "SAVEA",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-11-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-25T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-15T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 8.19,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635267e"),
  "OrderID": 10758,
  "CustomerID": "RICSU",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-11-28T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-04T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 138.17,
  "ShipName": "Richter Supermarkt",
  "ShipAddress": "Starenweg 5",
  "ShipCity": "Genève",
  "ShipRegion": "",
  "ShipPostalCode": "1204",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635267f"),
  "OrderID": 10759,
  "CustomerID": "ANATR",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-11-28T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-12T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 11.99,
  "ShipName": "Ana Trujillo Emparedados y helados",
  "ShipAddress": "Avda. de la Constitución 2222",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05021",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352680"),
  "OrderID": 10760,
  "CustomerID": "MAISD",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-12-01T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-29T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-10T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 155.64,
  "ShipName": "Maison Dewey",
  "ShipAddress": "Rue Joseph-Bens 532",
  "ShipCity": "Bruxelles",
  "ShipRegion": "",
  "ShipPostalCode": "B-1180",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352681"),
  "OrderID": 10761,
  "CustomerID": "RATTC",
  "EmployeeID": 5,
  "OrderDate": ISODate("1997-12-02T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-30T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-08T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 18.66,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352682"),
  "OrderID": 10762,
  "CustomerID": "FOLKO",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-12-02T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-30T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-09T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 328.74,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352683"),
  "OrderID": 10763,
  "CustomerID": "FOLIG",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-12-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-31T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-08T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 37.35,
  "ShipName": "Folies gourmandes",
  "ShipAddress": "184, chaussée de Tournai",
  "ShipCity": "Lille",
  "ShipRegion": "",
  "ShipPostalCode": "59000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352684"),
  "OrderID": 10764,
  "CustomerID": "ERNSH",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-12-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-31T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-08T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 145.45,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352685"),
  "OrderID": 10765,
  "CustomerID": "QUICK",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-12-04T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-01T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-09T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 42.74,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352686"),
  "OrderID": 10766,
  "CustomerID": "OTTIK",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-12-05T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-09T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 157.55,
  "ShipName": "Ottilies Käseladen",
  "ShipAddress": "Mehrheimerstr. 369",
  "ShipCity": "Köln",
  "ShipRegion": "",
  "ShipPostalCode": "50739",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352687"),
  "OrderID": 10767,
  "CustomerID": "SUPRD",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-12-05T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-15T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 1.59,
  "ShipName": "Suprêmes délices",
  "ShipAddress": "Boulevard Tirou, 255",
  "ShipCity": "Charleroi",
  "ShipRegion": "",
  "ShipPostalCode": "B-6000",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352688"),
  "OrderID": 10768,
  "CustomerID": "AROUT",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-12-08T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-05T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-15T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 146.32,
  "ShipName": "Around the Horn",
  "ShipAddress": "Brook Farm\nStratford St. Mary",
  "ShipCity": "Colchester",
  "ShipRegion": "Essex",
  "ShipPostalCode": "CO7 6JX",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352689"),
  "OrderID": 10769,
  "CustomerID": "VAFFE",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-12-08T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-05T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-12T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 65.06,
  "ShipName": "Vaffeljernet",
  "ShipAddress": "Smagsløget 45",
  "ShipCity": "Århus",
  "ShipRegion": "",
  "ShipPostalCode": "8200",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635268a"),
  "OrderID": 10770,
  "CustomerID": "HANAR",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-12-09T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-17T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 5.32,
  "ShipName": "Hanari Carnes",
  "ShipAddress": "Rua do Paço, 67",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "05454-876",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635268b"),
  "OrderID": 10771,
  "CustomerID": "ERNSH",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-12-10T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-07T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-02T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 11.19,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635268c"),
  "OrderID": 10772,
  "CustomerID": "LEHMS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-12-10T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-07T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-19T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 91.28,
  "ShipName": "Lehmanns Marktstand",
  "ShipAddress": "Magazinweg 7",
  "ShipCity": "Frankfurt a.M.",
  "ShipRegion": "",
  "ShipPostalCode": "60528",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635268d"),
  "OrderID": 10773,
  "CustomerID": "ERNSH",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-12-11T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-08T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-16T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 96.43,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635268e"),
  "OrderID": 10774,
  "CustomerID": "FOLKO",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-12-11T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-25T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-12T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 48.2,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635268f"),
  "OrderID": 10775,
  "CustomerID": "THECR",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-12-12T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-09T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-26T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 20.25,
  "ShipName": "The Cracker Box",
  "ShipAddress": "55 Grizzly Peak Rd.",
  "ShipCity": "Butte",
  "ShipRegion": "MT",
  "ShipPostalCode": "59801",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352690"),
  "OrderID": 10776,
  "CustomerID": "ERNSH",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-12-15T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-12T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-18T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 351.53,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352691"),
  "OrderID": 10777,
  "CustomerID": "GOURL",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-12-15T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-29T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-21T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 3.01,
  "ShipName": "Gourmet Lanchonetes",
  "ShipAddress": "Av. Brasil, 442",
  "ShipCity": "Campinas",
  "ShipRegion": "SP",
  "ShipPostalCode": "04876-786",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352692"),
  "OrderID": 10778,
  "CustomerID": "BERGS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-12-16T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-24T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 6.79,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352693"),
  "OrderID": 10779,
  "CustomerID": "MORGK",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-12-16T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-14T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 58.13,
  "ShipName": "Morgenstern Gesundkost",
  "ShipAddress": "Heerstr. 22",
  "ShipCity": "Leipzig",
  "ShipRegion": "",
  "ShipPostalCode": "04179",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352694"),
  "OrderID": 10780,
  "CustomerID": "LILAS",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-12-16T05:00:00.0Z"),
  "RequiredDate": ISODate("1997-12-30T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-25T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 42.13,
  "ShipName": "LILA-Supermercado",
  "ShipAddress": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
  "ShipCity": "Barquisimeto",
  "ShipRegion": "Lara",
  "ShipPostalCode": "3508",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352695"),
  "OrderID": 10781,
  "CustomerID": "WARTH",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-12-17T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-14T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-19T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 73.16,
  "ShipName": "Wartian Herkku",
  "ShipAddress": "Torikatu 38",
  "ShipCity": "Oulu",
  "ShipRegion": "",
  "ShipPostalCode": "90110",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352696"),
  "OrderID": 10782,
  "CustomerID": "CACTU",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-12-17T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-14T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-22T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 1.1,
  "ShipName": "Cactus Comidas para llevar",
  "ShipAddress": "Cerrito 333",
  "ShipCity": "Buenos Aires",
  "ShipRegion": "",
  "ShipPostalCode": "1010",
  "ShipCountry": "Argentina"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352697"),
  "OrderID": 10783,
  "CustomerID": "HANAR",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-12-18T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-15T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-19T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 124.98,
  "ShipName": "Hanari Carnes",
  "ShipAddress": "Rua do Paço, 67",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "05454-876",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352698"),
  "OrderID": 10784,
  "CustomerID": "MAGAA",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-12-18T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-15T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-22T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 70.09,
  "ShipName": "Magazzini Alimentari Riuniti",
  "ShipAddress": "Via Ludovico il Moro 22",
  "ShipCity": "Bergamo",
  "ShipRegion": "",
  "ShipPostalCode": "24100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352699"),
  "OrderID": 10785,
  "CustomerID": "GROSR",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-12-18T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-15T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-24T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 1.51,
  "ShipName": "GROSELLA-Restaurante",
  "ShipAddress": "5ª Ave. Los Palos Grandes",
  "ShipCity": "Caracas",
  "ShipRegion": "DF",
  "ShipPostalCode": "1081",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635269a"),
  "OrderID": 10786,
  "CustomerID": "QUEEN",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-12-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-16T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-23T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 110.87,
  "ShipName": "Queen Cozinha",
  "ShipAddress": "Alameda dos Canàrios, 891",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05487-020",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635269b"),
  "OrderID": 10787,
  "CustomerID": "LAMAI",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-12-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-26T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 249.93,
  "ShipName": "La maison d'Asie",
  "ShipAddress": "1 rue Alsace-Lorraine",
  "ShipCity": "Toulouse",
  "ShipRegion": "",
  "ShipPostalCode": "31000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635269c"),
  "OrderID": 10788,
  "CustomerID": "QUICK",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-12-22T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-19T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-19T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 42.7,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635269d"),
  "OrderID": 10789,
  "CustomerID": "FOLIG",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-12-22T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-19T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-31T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 100.6,
  "ShipName": "Folies gourmandes",
  "ShipAddress": "184, chaussée de Tournai",
  "ShipCity": "Lille",
  "ShipRegion": "",
  "ShipPostalCode": "59000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635269e"),
  "OrderID": 10790,
  "CustomerID": "GOURL",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-12-22T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-19T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-26T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 28.23,
  "ShipName": "Gourmet Lanchonetes",
  "ShipAddress": "Av. Brasil, 442",
  "ShipCity": "Campinas",
  "ShipRegion": "SP",
  "ShipPostalCode": "04876-786",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635269f"),
  "OrderID": 10791,
  "CustomerID": "FRANK",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-12-23T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-20T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-01T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 16.85,
  "ShipName": "Frankenversand",
  "ShipAddress": "Berliner Platz 43",
  "ShipCity": "München",
  "ShipRegion": "",
  "ShipPostalCode": "80805",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526a0"),
  "OrderID": 10792,
  "CustomerID": "WOLZA",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-12-23T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-20T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-31T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 23.79,
  "ShipName": "Wolski Zajazd",
  "ShipAddress": "ul. Filtrowa 68",
  "ShipCity": "Warszawa",
  "ShipRegion": "",
  "ShipPostalCode": "01-012",
  "ShipCountry": "Poland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526a1"),
  "OrderID": 10793,
  "CustomerID": "AROUT",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-12-24T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-21T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-08T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 4.52,
  "ShipName": "Around the Horn",
  "ShipAddress": "Brook Farm\nStratford St. Mary",
  "ShipCity": "Colchester",
  "ShipRegion": "Essex",
  "ShipPostalCode": "CO7 6JX",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526a2"),
  "OrderID": 10794,
  "CustomerID": "QUEDE",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-12-24T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-21T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-02T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 21.49,
  "ShipName": "Que Delícia",
  "ShipAddress": "Rua da Panificadora, 12",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-673",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526a3"),
  "OrderID": 10795,
  "CustomerID": "ERNSH",
  "EmployeeID": 8,
  "OrderDate": ISODate("1997-12-24T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-21T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-20T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 126.66,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526a4"),
  "OrderID": 10796,
  "CustomerID": "HILAA",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-12-25T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-22T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-14T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 26.52,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526a5"),
  "OrderID": 10797,
  "CustomerID": "DRACD",
  "EmployeeID": 7,
  "OrderDate": ISODate("1997-12-25T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-22T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-05T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 33.35,
  "ShipName": "Drachenblut Delikatessen",
  "ShipAddress": "Walserweg 21",
  "ShipCity": "Aachen",
  "ShipRegion": "",
  "ShipPostalCode": "52066",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526a6"),
  "OrderID": 10798,
  "CustomerID": "ISLAT",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-12-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-23T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-05T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 2.33,
  "ShipName": "Island Trading",
  "ShipAddress": "Garden House\nCrowther Way",
  "ShipCity": "Cowes",
  "ShipRegion": "Isle of Wight",
  "ShipPostalCode": "PO31 7PJ",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526a7"),
  "OrderID": 10799,
  "CustomerID": "KOENE",
  "EmployeeID": 9,
  "OrderDate": ISODate("1997-12-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-05T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 30.76,
  "ShipName": "Königlich Essen",
  "ShipAddress": "Maubelstr. 90",
  "ShipCity": "Brandenburg",
  "ShipRegion": "",
  "ShipPostalCode": "14776",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526a8"),
  "OrderID": 10800,
  "CustomerID": "SEVES",
  "EmployeeID": 1,
  "OrderDate": ISODate("1997-12-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-23T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-05T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 137.44,
  "ShipName": "Seven Seas Imports",
  "ShipAddress": "90 Wadhurst Rd.",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "OX15 4NB",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526a9"),
  "OrderID": 10801,
  "CustomerID": "BOLID",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-12-29T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1997-12-31T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 97.09,
  "ShipName": "Bólido Comidas preparadas",
  "ShipAddress": "C/ Araquil, 67",
  "ShipCity": "Madrid",
  "ShipRegion": "",
  "ShipPostalCode": "28023",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526aa"),
  "OrderID": 10802,
  "CustomerID": "SIMOB",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-12-29T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-02T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 257.26,
  "ShipName": "Simons bistro",
  "ShipAddress": "Vinbæltet 34",
  "ShipCity": "København",
  "ShipRegion": "",
  "ShipPostalCode": "1734",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526ab"),
  "OrderID": 10803,
  "CustomerID": "WELLI",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-12-30T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-27T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-06T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 55.23,
  "ShipName": "Wellington Importadora",
  "ShipAddress": "Rua do Mercado, 12",
  "ShipCity": "Resende",
  "ShipRegion": "SP",
  "ShipPostalCode": "08737-363",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526ac"),
  "OrderID": 10804,
  "CustomerID": "SEVES",
  "EmployeeID": 6,
  "OrderDate": ISODate("1997-12-30T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-27T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-07T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 27.33,
  "ShipName": "Seven Seas Imports",
  "ShipAddress": "90 Wadhurst Rd.",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "OX15 4NB",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526ad"),
  "OrderID": 10805,
  "CustomerID": "THEBI",
  "EmployeeID": 2,
  "OrderDate": ISODate("1997-12-30T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-27T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-09T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 237.34,
  "ShipName": "The Big Cheese",
  "ShipAddress": "89 Jefferson Way\nSuite 2",
  "ShipCity": "Portland",
  "ShipRegion": "OR",
  "ShipPostalCode": "97201",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526ae"),
  "OrderID": 10806,
  "CustomerID": "VICTE",
  "EmployeeID": 3,
  "OrderDate": ISODate("1997-12-31T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-28T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-05T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 22.11,
  "ShipName": "Victuailles en stock",
  "ShipAddress": "2, rue du Commerce",
  "ShipCity": "Lyon",
  "ShipRegion": "",
  "ShipPostalCode": "69004",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526af"),
  "OrderID": 10807,
  "CustomerID": "FRANS",
  "EmployeeID": 4,
  "OrderDate": ISODate("1997-12-31T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-28T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-30T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 1.36,
  "ShipName": "Franchi S.p.A.",
  "ShipAddress": "Via Monte Bianco 34",
  "ShipCity": "Torino",
  "ShipRegion": "",
  "ShipPostalCode": "10100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526b0"),
  "OrderID": 10808,
  "CustomerID": "PRINI",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-01-01T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-29T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-09T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 45.53,
  "ShipName": "Old World Delicatessen",
  "ShipAddress": "2743 Bering St.",
  "ShipCity": "Anchorage",
  "ShipRegion": "AK",
  "ShipPostalCode": "99508",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526b1"),
  "OrderID": 10809,
  "CustomerID": "WELLI",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-01-01T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-29T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-07T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 4.87,
  "ShipName": "Wellington Importadora",
  "ShipAddress": "Rua do Mercado, 12",
  "ShipCity": "Resende",
  "ShipRegion": "SP",
  "ShipPostalCode": "08737-363",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526b2"),
  "OrderID": 10810,
  "CustomerID": "LAUGB",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-01-01T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-29T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-07T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 4.33,
  "ShipName": "Laughing Bacchus Wine Cellars",
  "ShipAddress": "2319 Elm St.",
  "ShipCity": "Vancouver",
  "ShipRegion": "BC",
  "ShipPostalCode": "V3F 2K1",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526b3"),
  "OrderID": 10811,
  "CustomerID": "LINOD",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-01-02T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-30T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-08T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 31.22,
  "ShipName": "LINO-Delicateses",
  "ShipAddress": "Ave. 5 de Mayo Porlamar",
  "ShipCity": "I. de Margarita",
  "ShipRegion": "Nueva Esparta",
  "ShipPostalCode": "4980",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526b4"),
  "OrderID": 10812,
  "CustomerID": "REGGC",
  "EmployeeID": 5,
  "OrderDate": ISODate("1998-01-02T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-30T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-12T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 59.78,
  "ShipName": "Reggiani Caseifici",
  "ShipAddress": "Strada Provinciale 124",
  "ShipCity": "Reggio Emilia",
  "ShipRegion": "",
  "ShipPostalCode": "42100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526b5"),
  "OrderID": 10813,
  "CustomerID": "RICAR",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-01-05T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-09T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 47.38,
  "ShipName": "Ricardo Adocicados",
  "ShipAddress": "Av. Copacabana, 267",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-890",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526b6"),
  "OrderID": 10814,
  "CustomerID": "VICTE",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-01-05T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-14T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 130.94,
  "ShipName": "Victuailles en stock",
  "ShipAddress": "2, rue du Commerce",
  "ShipCity": "Lyon",
  "ShipRegion": "",
  "ShipPostalCode": "69004",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526b7"),
  "OrderID": 10815,
  "CustomerID": "SAVEA",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-01-05T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-14T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 14.62,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526b8"),
  "OrderID": 10816,
  "CustomerID": "GREAL",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-01-06T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-03T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-04T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 719.78,
  "ShipName": "Great Lakes Food Market",
  "ShipAddress": "2732 Baker Blvd.",
  "ShipCity": "Eugene",
  "ShipRegion": "OR",
  "ShipPostalCode": "97403",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526b9"),
  "OrderID": 10817,
  "CustomerID": "KOENE",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-01-06T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-20T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-13T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 306.07,
  "ShipName": "Königlich Essen",
  "ShipAddress": "Maubelstr. 90",
  "ShipCity": "Brandenburg",
  "ShipRegion": "",
  "ShipPostalCode": "14776",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526ba"),
  "OrderID": 10818,
  "CustomerID": "MAGAA",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-01-07T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-04T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-12T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 65.48,
  "ShipName": "Magazzini Alimentari Riuniti",
  "ShipAddress": "Via Ludovico il Moro 22",
  "ShipCity": "Bergamo",
  "ShipRegion": "",
  "ShipPostalCode": "24100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526bb"),
  "OrderID": 10819,
  "CustomerID": "CACTU",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-01-07T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-04T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-16T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 19.76,
  "ShipName": "Cactus Comidas para llevar",
  "ShipAddress": "Cerrito 333",
  "ShipCity": "Buenos Aires",
  "ShipRegion": "",
  "ShipPostalCode": "1010",
  "ShipCountry": "Argentina"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526bc"),
  "OrderID": 10820,
  "CustomerID": "RATTC",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-01-07T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-04T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-13T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 37.52,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526bd"),
  "OrderID": 10821,
  "CustomerID": "SPLIR",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-01-08T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-05T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-15T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 36.68,
  "ShipName": "Split Rail Beer & Ale",
  "ShipAddress": "P.O. Box 555",
  "ShipCity": "Lander",
  "ShipRegion": "WY",
  "ShipPostalCode": "82520",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526be"),
  "OrderID": 10822,
  "CustomerID": "TRAIH",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-01-08T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-05T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-16T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 7,
  "ShipName": "Trail's Head Gourmet Provisioners",
  "ShipAddress": "722 DaVinci Blvd.",
  "ShipCity": "Kirkland",
  "ShipRegion": "WA",
  "ShipPostalCode": "98034",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526bf"),
  "OrderID": 10823,
  "CustomerID": "LILAS",
  "EmployeeID": 5,
  "OrderDate": ISODate("1998-01-09T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-13T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 163.97,
  "ShipName": "LILA-Supermercado",
  "ShipAddress": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
  "ShipCity": "Barquisimeto",
  "ShipRegion": "Lara",
  "ShipPostalCode": "3508",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526c0"),
  "OrderID": 10824,
  "CustomerID": "FOLKO",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-01-09T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-30T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 1.23,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526c1"),
  "OrderID": 10825,
  "CustomerID": "DRACD",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-01-09T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-14T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 79.25,
  "ShipName": "Drachenblut Delikatessen",
  "ShipAddress": "Walserweg 21",
  "ShipCity": "Aachen",
  "ShipRegion": "",
  "ShipPostalCode": "52066",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526c2"),
  "OrderID": 10826,
  "CustomerID": "BLONP",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-01-12T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-09T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-06T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 7.09,
  "ShipName": "Blondel père et fils",
  "ShipAddress": "24, place Kléber",
  "ShipCity": "Strasbourg",
  "ShipRegion": "",
  "ShipPostalCode": "67000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526c3"),
  "OrderID": 10827,
  "CustomerID": "BONAP",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-01-12T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-06T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 63.54,
  "ShipName": "Bon app'",
  "ShipAddress": "12, rue des Bouchers",
  "ShipCity": "Marseille",
  "ShipRegion": "",
  "ShipPostalCode": "13008",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526c4"),
  "OrderID": 10828,
  "CustomerID": "RANCH",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-01-13T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-01-27T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-04T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 90.85,
  "ShipName": "Rancho grande",
  "ShipAddress": "Av. del Libertador 900",
  "ShipCity": "Buenos Aires",
  "ShipRegion": "",
  "ShipPostalCode": "1010",
  "ShipCountry": "Argentina"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526c5"),
  "OrderID": 10829,
  "CustomerID": "ISLAT",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-01-13T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-10T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-23T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 154.72,
  "ShipName": "Island Trading",
  "ShipAddress": "Garden House\nCrowther Way",
  "ShipCity": "Cowes",
  "ShipRegion": "Isle of Wight",
  "ShipPostalCode": "PO31 7PJ",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526c6"),
  "OrderID": 10830,
  "CustomerID": "TRADH",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-01-13T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-21T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 81.83,
  "ShipName": "Tradição Hipermercados",
  "ShipAddress": "Av. Inês de Castro, 414",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05634-030",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526c7"),
  "OrderID": 10831,
  "CustomerID": "SANTG",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-01-14T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-11T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-23T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 72.19,
  "ShipName": "Santé Gourmet",
  "ShipAddress": "Erling Skakkes gate 78",
  "ShipCity": "Stavern",
  "ShipRegion": "",
  "ShipPostalCode": "4110",
  "ShipCountry": "Norway"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526c8"),
  "OrderID": 10832,
  "CustomerID": "LAMAI",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-01-14T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-11T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-19T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 43.26,
  "ShipName": "La maison d'Asie",
  "ShipAddress": "1 rue Alsace-Lorraine",
  "ShipCity": "Toulouse",
  "ShipRegion": "",
  "ShipPostalCode": "31000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526c9"),
  "OrderID": 10833,
  "CustomerID": "OTTIK",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-01-15T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-12T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-23T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 71.49,
  "ShipName": "Ottilies Käseladen",
  "ShipAddress": "Mehrheimerstr. 369",
  "ShipCity": "Köln",
  "ShipRegion": "",
  "ShipPostalCode": "50739",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526ca"),
  "OrderID": 10834,
  "CustomerID": "TRADH",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-01-15T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-12T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-19T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 29.78,
  "ShipName": "Tradição Hipermercados",
  "ShipAddress": "Av. Inês de Castro, 414",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05634-030",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526cb"),
  "OrderID": 10835,
  "CustomerID": "ALFKI",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-01-15T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-12T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-21T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 69.53,
  "ShipName": "Alfreds Futterkiste",
  "ShipAddress": "Obere Str. 57",
  "ShipCity": "Berlin",
  "ShipRegion": "",
  "ShipPostalCode": "12209",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526cc"),
  "OrderID": 10836,
  "CustomerID": "ERNSH",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-01-16T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-21T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 411.88,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526cd"),
  "OrderID": 10837,
  "CustomerID": "BERGS",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-01-16T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-23T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 13.32,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526ce"),
  "OrderID": 10838,
  "CustomerID": "LINOD",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-01-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-16T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-23T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 59.28,
  "ShipName": "LINO-Delicateses",
  "ShipAddress": "Ave. 5 de Mayo Porlamar",
  "ShipCity": "I. de Margarita",
  "ShipRegion": "Nueva Esparta",
  "ShipPostalCode": "4980",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526cf"),
  "OrderID": 10839,
  "CustomerID": "TRADH",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-01-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-16T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-22T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 35.43,
  "ShipName": "Tradição Hipermercados",
  "ShipAddress": "Av. Inês de Castro, 414",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05634-030",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526d0"),
  "OrderID": 10840,
  "CustomerID": "LINOD",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-01-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-16T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 2.71,
  "ShipName": "LINO-Delicateses",
  "ShipAddress": "Ave. 5 de Mayo Porlamar",
  "ShipCity": "I. de Margarita",
  "ShipRegion": "Nueva Esparta",
  "ShipPostalCode": "4980",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526d1"),
  "OrderID": 10841,
  "CustomerID": "SUPRD",
  "EmployeeID": 5,
  "OrderDate": ISODate("1998-01-20T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-17T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-29T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 424.3,
  "ShipName": "Suprêmes délices",
  "ShipAddress": "Boulevard Tirou, 255",
  "ShipCity": "Charleroi",
  "ShipRegion": "",
  "ShipPostalCode": "B-6000",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526d2"),
  "OrderID": 10842,
  "CustomerID": "TORTU",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-01-20T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-17T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-29T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 54.42,
  "ShipName": "Tortuga Restaurante",
  "ShipAddress": "Avda. Azteca 123",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05033",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526d3"),
  "OrderID": 10843,
  "CustomerID": "VICTE",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-01-21T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-18T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-26T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 9.26,
  "ShipName": "Victuailles en stock",
  "ShipAddress": "2, rue du Commerce",
  "ShipCity": "Lyon",
  "ShipRegion": "",
  "ShipPostalCode": "69004",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526d4"),
  "OrderID": 10844,
  "CustomerID": "PICCO",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-01-21T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-18T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-26T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 25.22,
  "ShipName": "Piccolo und mehr",
  "ShipAddress": "Geislweg 14",
  "ShipCity": "Salzburg",
  "ShipRegion": "",
  "ShipPostalCode": "5020",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526d5"),
  "OrderID": 10845,
  "CustomerID": "QUICK",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-01-21T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-04T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-30T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 212.98,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526d6"),
  "OrderID": 10846,
  "CustomerID": "SUPRD",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-01-22T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-05T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-23T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 56.46,
  "ShipName": "Suprêmes délices",
  "ShipAddress": "Boulevard Tirou, 255",
  "ShipCity": "Charleroi",
  "ShipRegion": "",
  "ShipPostalCode": "B-6000",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526d7"),
  "OrderID": 10847,
  "CustomerID": "SAVEA",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-01-22T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-05T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-10T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 487.57,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526d8"),
  "OrderID": 10848,
  "CustomerID": "CONSH",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-01-23T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-20T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-29T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 38.24,
  "ShipName": "Consolidated Holdings",
  "ShipAddress": "Berkeley Gardens\n12  Brewery",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "WX1 6LT",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526d9"),
  "OrderID": 10849,
  "CustomerID": "KOENE",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-01-23T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-20T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-30T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 0.56,
  "ShipName": "Königlich Essen",
  "ShipAddress": "Maubelstr. 90",
  "ShipCity": "Brandenburg",
  "ShipRegion": "",
  "ShipPostalCode": "14776",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526da"),
  "OrderID": 10850,
  "CustomerID": "VICTE",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-01-23T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-30T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 49.19,
  "ShipName": "Victuailles en stock",
  "ShipAddress": "2, rue du Commerce",
  "ShipCity": "Lyon",
  "ShipRegion": "",
  "ShipPostalCode": "69004",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526db"),
  "OrderID": 10851,
  "CustomerID": "RICAR",
  "EmployeeID": 5,
  "OrderDate": ISODate("1998-01-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-23T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-02T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 160.55,
  "ShipName": "Ricardo Adocicados",
  "ShipAddress": "Av. Copacabana, 267",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-890",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526dc"),
  "OrderID": 10852,
  "CustomerID": "RATTC",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-01-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-09T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-01-30T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 174.05,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526dd"),
  "OrderID": 10853,
  "CustomerID": "BLAUS",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-01-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-03T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 53.83,
  "ShipName": "Blauer See Delikatessen",
  "ShipAddress": "Forsterstr. 57",
  "ShipCity": "Mannheim",
  "ShipRegion": "",
  "ShipPostalCode": "68306",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526de"),
  "OrderID": 10854,
  "CustomerID": "ERNSH",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-01-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-05T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 100.22,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526df"),
  "OrderID": 10855,
  "CustomerID": "OLDWO",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-01-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-04T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 170.97,
  "ShipName": "Old World Delicatessen",
  "ShipAddress": "2743 Bering St.",
  "ShipCity": "Anchorage",
  "ShipRegion": "AK",
  "ShipPostalCode": "99508",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526e0"),
  "OrderID": 10856,
  "CustomerID": "ANTON",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-01-28T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-25T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-10T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 58.43,
  "ShipName": "Antonio Moreno Taquería",
  "ShipAddress": "Mataderos  2312",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05023",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526e1"),
  "OrderID": 10857,
  "CustomerID": "BERGS",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-01-28T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-25T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-06T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 188.85,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526e2"),
  "OrderID": 10858,
  "CustomerID": "LACOR",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-01-29T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-03T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 52.51,
  "ShipName": "La corne d'abondance",
  "ShipAddress": "67, avenue de l'Europe",
  "ShipCity": "Versailles",
  "ShipRegion": "",
  "ShipPostalCode": "78000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526e3"),
  "OrderID": 10859,
  "CustomerID": "FRANK",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-01-29T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-02T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 76.1,
  "ShipName": "Frankenversand",
  "ShipAddress": "Berliner Platz 43",
  "ShipCity": "München",
  "ShipRegion": "",
  "ShipPostalCode": "80805",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526e4"),
  "OrderID": 10860,
  "CustomerID": "FRANR",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-01-29T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-04T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 19.26,
  "ShipName": "France restauration",
  "ShipAddress": "54, rue Royale",
  "ShipCity": "Nantes",
  "ShipRegion": "",
  "ShipPostalCode": "44000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526e5"),
  "OrderID": 10861,
  "CustomerID": "WHITC",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-01-30T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-27T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-17T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 14.93,
  "ShipName": "White Clover Markets",
  "ShipAddress": "1029 - 12th Ave. S.",
  "ShipCity": "Seattle",
  "ShipRegion": "WA",
  "ShipPostalCode": "98124",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526e6"),
  "OrderID": 10862,
  "CustomerID": "LEHMS",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-01-30T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-02T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 53.23,
  "ShipName": "Lehmanns Marktstand",
  "ShipAddress": "Magazinweg 7",
  "ShipCity": "Frankfurt a.M.",
  "ShipRegion": "",
  "ShipPostalCode": "60528",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526e7"),
  "OrderID": 10863,
  "CustomerID": "HILAA",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-02-02T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-17T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 30.26,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526e8"),
  "OrderID": 10864,
  "CustomerID": "AROUT",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-02-02T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-09T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 3.04,
  "ShipName": "Around the Horn",
  "ShipAddress": "Brook Farm\nStratford St. Mary",
  "ShipCity": "Colchester",
  "ShipRegion": "Essex",
  "ShipPostalCode": "CO7 6JX",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526e9"),
  "OrderID": 10865,
  "CustomerID": "QUICK",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-02-02T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-02-16T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-12T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 348.14,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526ea"),
  "OrderID": 10866,
  "CustomerID": "BERGS",
  "EmployeeID": 5,
  "OrderDate": ISODate("1998-02-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-03T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-12T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 109.11,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526eb"),
  "OrderID": 10867,
  "CustomerID": "LONEP",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-02-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-17T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-11T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 1.93,
  "ShipName": "Lonesome Pine Restaurant",
  "ShipAddress": "89 Chiaroscuro Rd.",
  "ShipCity": "Portland",
  "ShipRegion": "OR",
  "ShipPostalCode": "97219",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526ec"),
  "OrderID": 10868,
  "CustomerID": "QUEEN",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-02-04T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-04T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-23T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 191.27,
  "ShipName": "Queen Cozinha",
  "ShipAddress": "Alameda dos Canàrios, 891",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05487-020",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526ed"),
  "OrderID": 10869,
  "CustomerID": "SEVES",
  "EmployeeID": 5,
  "OrderDate": ISODate("1998-02-04T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-04T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-09T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 143.28,
  "ShipName": "Seven Seas Imports",
  "ShipAddress": "90 Wadhurst Rd.",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "OX15 4NB",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526ee"),
  "OrderID": 10870,
  "CustomerID": "WOLZA",
  "EmployeeID": 5,
  "OrderDate": ISODate("1998-02-04T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-04T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-13T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 12.04,
  "ShipName": "Wolski Zajazd",
  "ShipAddress": "ul. Filtrowa 68",
  "ShipCity": "Warszawa",
  "ShipRegion": "",
  "ShipPostalCode": "01-012",
  "ShipCountry": "Poland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526ef"),
  "OrderID": 10871,
  "CustomerID": "BONAP",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-02-05T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-05T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-10T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 112.27,
  "ShipName": "Bon app'",
  "ShipAddress": "12, rue des Bouchers",
  "ShipCity": "Marseille",
  "ShipRegion": "",
  "ShipPostalCode": "13008",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526f0"),
  "OrderID": 10872,
  "CustomerID": "GODOS",
  "EmployeeID": 5,
  "OrderDate": ISODate("1998-02-05T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-05T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-09T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 175.32,
  "ShipName": "Godos Cocina Típica",
  "ShipAddress": "C/ Romero, 33",
  "ShipCity": "Sevilla",
  "ShipRegion": "",
  "ShipPostalCode": "41101",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526f1"),
  "OrderID": 10873,
  "CustomerID": "WILMK",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-02-06T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-09T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 0.82,
  "ShipName": "Wilman Kala",
  "ShipAddress": "Keskuskatu 45",
  "ShipCity": "Helsinki",
  "ShipRegion": "",
  "ShipPostalCode": "21240",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526f2"),
  "OrderID": 10874,
  "CustomerID": "GODOS",
  "EmployeeID": 5,
  "OrderDate": ISODate("1998-02-06T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-11T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 19.58,
  "ShipName": "Godos Cocina Típica",
  "ShipAddress": "C/ Romero, 33",
  "ShipCity": "Sevilla",
  "ShipRegion": "",
  "ShipPostalCode": "41101",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526f3"),
  "OrderID": 10875,
  "CustomerID": "BERGS",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-02-06T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-06T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-03T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 32.37,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526f4"),
  "OrderID": 10876,
  "CustomerID": "BONAP",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-02-09T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-09T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-12T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 60.42,
  "ShipName": "Bon app'",
  "ShipAddress": "12, rue des Bouchers",
  "ShipCity": "Marseille",
  "ShipRegion": "",
  "ShipPostalCode": "13008",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526f5"),
  "OrderID": 10877,
  "CustomerID": "RICAR",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-02-09T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-09T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-19T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 38.06,
  "ShipName": "Ricardo Adocicados",
  "ShipAddress": "Av. Copacabana, 267",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-890",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526f6"),
  "OrderID": 10878,
  "CustomerID": "QUICK",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-02-10T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-10T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-12T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 46.69,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526f7"),
  "OrderID": 10879,
  "CustomerID": "WILMK",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-02-10T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-10T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-12T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 8.5,
  "ShipName": "Wilman Kala",
  "ShipAddress": "Keskuskatu 45",
  "ShipCity": "Helsinki",
  "ShipRegion": "",
  "ShipPostalCode": "21240",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526f8"),
  "OrderID": 10880,
  "CustomerID": "FOLKO",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-02-10T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-18T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 88.01,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526f9"),
  "OrderID": 10881,
  "CustomerID": "CACTU",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-02-11T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-11T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-18T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 2.84,
  "ShipName": "Cactus Comidas para llevar",
  "ShipAddress": "Cerrito 333",
  "ShipCity": "Buenos Aires",
  "ShipRegion": "",
  "ShipPostalCode": "1010",
  "ShipCountry": "Argentina"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526fa"),
  "OrderID": 10882,
  "CustomerID": "SAVEA",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-02-11T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-11T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-20T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 23.1,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526fb"),
  "OrderID": 10883,
  "CustomerID": "LONEP",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-02-12T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-12T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-20T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 0.53,
  "ShipName": "Lonesome Pine Restaurant",
  "ShipAddress": "89 Chiaroscuro Rd.",
  "ShipCity": "Portland",
  "ShipRegion": "OR",
  "ShipPostalCode": "97219",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526fc"),
  "OrderID": 10884,
  "CustomerID": "LETSS",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-02-12T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-12T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-13T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 90.97,
  "ShipName": "Let's Stop N Shop",
  "ShipAddress": "87 Polk St.\nSuite 5",
  "ShipCity": "San Francisco",
  "ShipRegion": "CA",
  "ShipPostalCode": "94117",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526fd"),
  "OrderID": 10885,
  "CustomerID": "SUPRD",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-02-12T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-12T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-18T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 5.64,
  "ShipName": "Suprêmes délices",
  "ShipAddress": "Boulevard Tirou, 255",
  "ShipCity": "Charleroi",
  "ShipRegion": "",
  "ShipPostalCode": "B-6000",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526fe"),
  "OrderID": 10886,
  "CustomerID": "HANAR",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-02-13T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-02T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 4.99,
  "ShipName": "Hanari Carnes",
  "ShipAddress": "Rua do Paço, 67",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "05454-876",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b94333163526ff"),
  "OrderID": 10887,
  "CustomerID": "GALED",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-02-13T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-13T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-16T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 1.25,
  "ShipName": "Galería del gastronómo",
  "ShipAddress": "Rambla de Cataluña, 23",
  "ShipCity": "Barcelona",
  "ShipRegion": "",
  "ShipPostalCode": "8022",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352700"),
  "OrderID": 10888,
  "CustomerID": "GODOS",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-02-16T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-16T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-23T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 51.87,
  "ShipName": "Godos Cocina Típica",
  "ShipAddress": "C/ Romero, 33",
  "ShipCity": "Sevilla",
  "ShipRegion": "",
  "ShipPostalCode": "41101",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352701"),
  "OrderID": 10889,
  "CustomerID": "RATTC",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-02-16T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-16T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-23T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 280.61,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352702"),
  "OrderID": 10890,
  "CustomerID": "DUMON",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-02-16T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-16T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-18T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 32.76,
  "ShipName": "Du monde entier",
  "ShipAddress": "67, rue des Cinquante Otages",
  "ShipCity": "Nantes",
  "ShipRegion": "",
  "ShipPostalCode": "44000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352703"),
  "OrderID": 10891,
  "CustomerID": "LEHMS",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-02-17T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-17T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-19T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 20.37,
  "ShipName": "Lehmanns Marktstand",
  "ShipAddress": "Magazinweg 7",
  "ShipCity": "Frankfurt a.M.",
  "ShipRegion": "",
  "ShipPostalCode": "60528",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352704"),
  "OrderID": 10892,
  "CustomerID": "MAISD",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-02-17T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-17T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-19T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 120.27,
  "ShipName": "Maison Dewey",
  "ShipAddress": "Rue Joseph-Bens 532",
  "ShipCity": "Bruxelles",
  "ShipRegion": "",
  "ShipPostalCode": "B-1180",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352705"),
  "OrderID": 10893,
  "CustomerID": "KOENE",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-02-18T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-18T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-20T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 77.78,
  "ShipName": "Königlich Essen",
  "ShipAddress": "Maubelstr. 90",
  "ShipCity": "Brandenburg",
  "ShipRegion": "",
  "ShipPostalCode": "14776",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352706"),
  "OrderID": 10894,
  "CustomerID": "SAVEA",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-02-18T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-18T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-20T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 116.13,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352707"),
  "OrderID": 10895,
  "CustomerID": "ERNSH",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-02-18T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-18T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-23T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 162.75,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352708"),
  "OrderID": 10896,
  "CustomerID": "MAISD",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-02-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-19T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-27T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 32.45,
  "ShipName": "Maison Dewey",
  "ShipAddress": "Rue Joseph-Bens 532",
  "ShipCity": "Bruxelles",
  "ShipRegion": "",
  "ShipPostalCode": "B-1180",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352709"),
  "OrderID": 10897,
  "CustomerID": "HUNGO",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-02-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-19T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-25T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 603.54,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635270a"),
  "OrderID": 10898,
  "CustomerID": "OCEAN",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-02-20T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-20T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-06T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 1.27,
  "ShipName": "Océano Atlántico Ltda.",
  "ShipAddress": "Ing. Gustavo Moncada 8585\nPiso 20-A",
  "ShipCity": "Buenos Aires",
  "ShipRegion": "",
  "ShipPostalCode": "1010",
  "ShipCountry": "Argentina"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635270b"),
  "OrderID": 10899,
  "CustomerID": "LILAS",
  "EmployeeID": 5,
  "OrderDate": ISODate("1998-02-20T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-20T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-26T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 1.21,
  "ShipName": "LILA-Supermercado",
  "ShipAddress": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
  "ShipCity": "Barquisimeto",
  "ShipRegion": "Lara",
  "ShipPostalCode": "3508",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635270c"),
  "OrderID": 10900,
  "CustomerID": "WELLI",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-02-20T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-20T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-04T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 1.66,
  "ShipName": "Wellington Importadora",
  "ShipAddress": "Rua do Mercado, 12",
  "ShipCity": "Resende",
  "ShipRegion": "SP",
  "ShipPostalCode": "08737-363",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635270d"),
  "OrderID": 10901,
  "CustomerID": "HILAA",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-02-23T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-23T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-26T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 62.09,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635270e"),
  "OrderID": 10902,
  "CustomerID": "FOLKO",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-02-23T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-23T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-03T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 44.15,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635270f"),
  "OrderID": 10903,
  "CustomerID": "HANAR",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-02-24T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-04T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 36.71,
  "ShipName": "Hanari Carnes",
  "ShipAddress": "Rua do Paço, 67",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "05454-876",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352710"),
  "OrderID": 10904,
  "CustomerID": "WHITC",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-02-24T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-27T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 162.95,
  "ShipName": "White Clover Markets",
  "ShipAddress": "1029 - 12th Ave. S.",
  "ShipCity": "Seattle",
  "ShipRegion": "WA",
  "ShipPostalCode": "98124",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352711"),
  "OrderID": 10905,
  "CustomerID": "WELLI",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-02-24T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-06T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 13.72,
  "ShipName": "Wellington Importadora",
  "ShipAddress": "Rua do Mercado, 12",
  "ShipCity": "Resende",
  "ShipRegion": "SP",
  "ShipPostalCode": "08737-363",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352712"),
  "OrderID": 10906,
  "CustomerID": "WOLZA",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-02-25T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-11T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-03T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 26.29,
  "ShipName": "Wolski Zajazd",
  "ShipAddress": "ul. Filtrowa 68",
  "ShipCity": "Warszawa",
  "ShipRegion": "",
  "ShipPostalCode": "01-012",
  "ShipCountry": "Poland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352713"),
  "OrderID": 10907,
  "CustomerID": "SPECD",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-02-25T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-25T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-02-27T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 9.19,
  "ShipName": "Spécialités du monde",
  "ShipAddress": "25, rue Lauriston",
  "ShipCity": "Paris",
  "ShipRegion": "",
  "ShipPostalCode": "75016",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352714"),
  "OrderID": 10908,
  "CustomerID": "REGGC",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-02-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-06T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 32.96,
  "ShipName": "Reggiani Caseifici",
  "ShipAddress": "Strada Provinciale 124",
  "ShipCity": "Reggio Emilia",
  "ShipRegion": "",
  "ShipPostalCode": "42100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352715"),
  "OrderID": 10909,
  "CustomerID": "SANTG",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-02-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-10T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 53.05,
  "ShipName": "Santé Gourmet",
  "ShipAddress": "Erling Skakkes gate 78",
  "ShipCity": "Stavern",
  "ShipRegion": "",
  "ShipPostalCode": "4110",
  "ShipCountry": "Norway"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352716"),
  "OrderID": 10910,
  "CustomerID": "WILMK",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-02-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-04T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 38.11,
  "ShipName": "Wilman Kala",
  "ShipAddress": "Keskuskatu 45",
  "ShipCity": "Helsinki",
  "ShipRegion": "",
  "ShipPostalCode": "21240",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352717"),
  "OrderID": 10911,
  "CustomerID": "GODOS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-02-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-05T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 38.19,
  "ShipName": "Godos Cocina Típica",
  "ShipAddress": "C/ Romero, 33",
  "ShipCity": "Sevilla",
  "ShipRegion": "",
  "ShipPostalCode": "41101",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352718"),
  "OrderID": 10912,
  "CustomerID": "HUNGO",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-02-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-18T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 580.91,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b9433316352719"),
  "OrderID": 10913,
  "CustomerID": "QUEEN",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-02-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-04T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 33.05,
  "ShipName": "Queen Cozinha",
  "ShipAddress": "Alameda dos Canàrios, 891",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05487-020",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635271a"),
  "OrderID": 10914,
  "CustomerID": "QUEEN",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-02-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-27T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-02T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 21.19,
  "ShipName": "Queen Cozinha",
  "ShipAddress": "Alameda dos Canàrios, 891",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05487-020",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635271b"),
  "OrderID": 10915,
  "CustomerID": "TORTU",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-02-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-27T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-02T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 3.51,
  "ShipName": "Tortuga Restaurante",
  "ShipAddress": "Avda. Azteca 123",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05033",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635271c"),
  "OrderID": 10916,
  "CustomerID": "RANCH",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-02-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-27T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-09T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 63.77,
  "ShipName": "Rancho grande",
  "ShipAddress": "Av. del Libertador 900",
  "ShipCity": "Buenos Aires",
  "ShipRegion": "",
  "ShipPostalCode": "1010",
  "ShipCountry": "Argentina"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fb99b943331635271d"),
  "OrderID": 10917,
  "CustomerID": "ROMEY",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-03-02T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-30T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-11T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 8.29,
  "ShipName": "Romero y tomillo",
  "ShipAddress": "Gran Vía, 1",
  "ShipCity": "Madrid",
  "ShipRegion": "",
  "ShipPostalCode": "28001",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635271e"),
  "OrderID": 10918,
  "CustomerID": "BOTTM",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-03-02T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-30T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-11T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 48.83,
  "ShipName": "Bottom-Dollar Markets",
  "ShipAddress": "23 Tsawassen Blvd.",
  "ShipCity": "Tsawassen",
  "ShipRegion": "BC",
  "ShipPostalCode": "T2F 8M4",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635271f"),
  "OrderID": 10919,
  "CustomerID": "LINOD",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-03-02T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-30T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-04T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 19.8,
  "ShipName": "LINO-Delicateses",
  "ShipAddress": "Ave. 5 de Mayo Porlamar",
  "ShipCity": "I. de Margarita",
  "ShipRegion": "Nueva Esparta",
  "ShipPostalCode": "4980",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352720"),
  "OrderID": 10920,
  "CustomerID": "AROUT",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-03-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-31T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-09T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 29.61,
  "ShipName": "Around the Horn",
  "ShipAddress": "Brook Farm\nStratford St. Mary",
  "ShipCity": "Colchester",
  "ShipRegion": "Essex",
  "ShipPostalCode": "CO7 6JX",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352721"),
  "OrderID": 10921,
  "CustomerID": "VAFFE",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-03-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-14T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-09T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 176.48,
  "ShipName": "Vaffeljernet",
  "ShipAddress": "Smagsløget 45",
  "ShipCity": "Århus",
  "ShipRegion": "",
  "ShipPostalCode": "8200",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352722"),
  "OrderID": 10922,
  "CustomerID": "HANAR",
  "EmployeeID": 5,
  "OrderDate": ISODate("1998-03-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-31T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-05T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 62.74,
  "ShipName": "Hanari Carnes",
  "ShipAddress": "Rua do Paço, 67",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "05454-876",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352723"),
  "OrderID": 10923,
  "CustomerID": "LAMAI",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-03-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-14T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-13T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 68.26,
  "ShipName": "La maison d'Asie",
  "ShipAddress": "1 rue Alsace-Lorraine",
  "ShipCity": "Toulouse",
  "ShipRegion": "",
  "ShipPostalCode": "31000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352724"),
  "OrderID": 10924,
  "CustomerID": "BERGS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-03-04T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-01T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-08T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 151.52,
  "ShipName": "Berglunds snabbköp",
  "ShipAddress": "Berguvsvägen  8",
  "ShipCity": "Luleå",
  "ShipRegion": "",
  "ShipPostalCode": "S-958 22",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352725"),
  "OrderID": 10925,
  "CustomerID": "HANAR",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-03-04T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-01T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-13T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 2.27,
  "ShipName": "Hanari Carnes",
  "ShipAddress": "Rua do Paço, 67",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "05454-876",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352726"),
  "OrderID": 10926,
  "CustomerID": "ANATR",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-03-04T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-01T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-11T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 39.92,
  "ShipName": "Ana Trujillo Emparedados y helados",
  "ShipAddress": "Avda. de la Constitución 2222",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05021",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352727"),
  "OrderID": 10927,
  "CustomerID": "LACOR",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-03-05T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-08T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 19.79,
  "ShipName": "La corne d'abondance",
  "ShipAddress": "67, avenue de l'Europe",
  "ShipCity": "Versailles",
  "ShipRegion": "",
  "ShipPostalCode": "78000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352728"),
  "OrderID": 10928,
  "CustomerID": "GALED",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-03-05T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-18T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 1.36,
  "ShipName": "Galería del gastronómo",
  "ShipAddress": "Rambla de Cataluña, 23",
  "ShipCity": "Barcelona",
  "ShipRegion": "",
  "ShipPostalCode": "8022",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352729"),
  "OrderID": 10929,
  "CustomerID": "FRANK",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-03-05T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-12T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 33.93,
  "ShipName": "Frankenversand",
  "ShipAddress": "Berliner Platz 43",
  "ShipCity": "München",
  "ShipRegion": "",
  "ShipPostalCode": "80805",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635272a"),
  "OrderID": 10930,
  "CustomerID": "SUPRD",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-03-06T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-17T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-18T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 15.55,
  "ShipName": "Suprêmes délices",
  "ShipAddress": "Boulevard Tirou, 255",
  "ShipCity": "Charleroi",
  "ShipRegion": "",
  "ShipPostalCode": "B-6000",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635272b"),
  "OrderID": 10931,
  "CustomerID": "RICSU",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-03-06T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-20T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-19T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 13.6,
  "ShipName": "Richter Supermarkt",
  "ShipAddress": "Starenweg 5",
  "ShipCity": "Genève",
  "ShipRegion": "",
  "ShipPostalCode": "1204",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635272c"),
  "OrderID": 10932,
  "CustomerID": "BONAP",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-03-06T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-03T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-24T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 134.64,
  "ShipName": "Bon app'",
  "ShipAddress": "12, rue des Bouchers",
  "ShipCity": "Marseille",
  "ShipRegion": "",
  "ShipPostalCode": "13008",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635272d"),
  "OrderID": 10933,
  "CustomerID": "ISLAT",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-03-06T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-03T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-16T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 54.15,
  "ShipName": "Island Trading",
  "ShipAddress": "Garden House\nCrowther Way",
  "ShipCity": "Cowes",
  "ShipRegion": "Isle of Wight",
  "ShipPostalCode": "PO31 7PJ",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635272e"),
  "OrderID": 10934,
  "CustomerID": "LEHMS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-03-09T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-06T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-12T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 32.01,
  "ShipName": "Lehmanns Marktstand",
  "ShipAddress": "Magazinweg 7",
  "ShipCity": "Frankfurt a.M.",
  "ShipRegion": "",
  "ShipPostalCode": "60528",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635272f"),
  "OrderID": 10935,
  "CustomerID": "WELLI",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-03-09T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-06T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-18T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 47.59,
  "ShipName": "Wellington Importadora",
  "ShipAddress": "Rua do Mercado, 12",
  "ShipCity": "Resende",
  "ShipRegion": "SP",
  "ShipPostalCode": "08737-363",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352730"),
  "OrderID": 10936,
  "CustomerID": "GREAL",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-03-09T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-06T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-18T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 33.68,
  "ShipName": "Great Lakes Food Market",
  "ShipAddress": "2732 Baker Blvd.",
  "ShipCity": "Eugene",
  "ShipRegion": "OR",
  "ShipPostalCode": "97403",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352731"),
  "OrderID": 10937,
  "CustomerID": "CACTU",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-03-10T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-24T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-13T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 31.51,
  "ShipName": "Cactus Comidas para llevar",
  "ShipAddress": "Cerrito 333",
  "ShipCity": "Buenos Aires",
  "ShipRegion": "",
  "ShipPostalCode": "1010",
  "ShipCountry": "Argentina"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352732"),
  "OrderID": 10938,
  "CustomerID": "QUICK",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-03-10T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-16T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 31.89,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352733"),
  "OrderID": 10939,
  "CustomerID": "MAGAA",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-03-10T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-13T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 76.33,
  "ShipName": "Magazzini Alimentari Riuniti",
  "ShipAddress": "Via Ludovico il Moro 22",
  "ShipCity": "Bergamo",
  "ShipRegion": "",
  "ShipPostalCode": "24100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352734"),
  "OrderID": 10940,
  "CustomerID": "BONAP",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-03-11T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-23T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 19.77,
  "ShipName": "Bon app'",
  "ShipAddress": "12, rue des Bouchers",
  "ShipCity": "Marseille",
  "ShipRegion": "",
  "ShipPostalCode": "13008",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352735"),
  "OrderID": 10941,
  "CustomerID": "SAVEA",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-03-11T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-20T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 400.81,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352736"),
  "OrderID": 10942,
  "CustomerID": "REGGC",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-03-11T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-18T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 17.95,
  "ShipName": "Reggiani Caseifici",
  "ShipAddress": "Strada Provinciale 124",
  "ShipCity": "Reggio Emilia",
  "ShipRegion": "",
  "ShipPostalCode": "42100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352737"),
  "OrderID": 10943,
  "CustomerID": "BSBEV",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-03-11T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-19T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 2.17,
  "ShipName": "B's Beverages",
  "ShipAddress": "Fauntleroy Circus",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "EC2 5NT",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352738"),
  "OrderID": 10944,
  "CustomerID": "BOTTM",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-03-12T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-26T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-13T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 52.92,
  "ShipName": "Bottom-Dollar Markets",
  "ShipAddress": "23 Tsawassen Blvd.",
  "ShipCity": "Tsawassen",
  "ShipRegion": "BC",
  "ShipPostalCode": "T2F 8M4",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352739"),
  "OrderID": 10945,
  "CustomerID": "MORGK",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-03-12T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-09T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-18T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 10.22,
  "ShipName": "Morgenstern Gesundkost",
  "ShipAddress": "Heerstr. 22",
  "ShipCity": "Leipzig",
  "ShipRegion": "",
  "ShipPostalCode": "04179",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635273a"),
  "OrderID": 10946,
  "CustomerID": "VAFFE",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-03-12T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-09T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-19T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 27.2,
  "ShipName": "Vaffeljernet",
  "ShipAddress": "Smagsløget 45",
  "ShipCity": "Århus",
  "ShipRegion": "",
  "ShipPostalCode": "8200",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635273b"),
  "OrderID": 10947,
  "CustomerID": "BSBEV",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-03-13T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-10T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-16T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 3.26,
  "ShipName": "B's Beverages",
  "ShipAddress": "Fauntleroy Circus",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "EC2 5NT",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635273c"),
  "OrderID": 10948,
  "CustomerID": "GODOS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-03-13T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-10T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-19T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 23.39,
  "ShipName": "Godos Cocina Típica",
  "ShipAddress": "C/ Romero, 33",
  "ShipCity": "Sevilla",
  "ShipRegion": "",
  "ShipPostalCode": "41101",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635273d"),
  "OrderID": 10949,
  "CustomerID": "BOTTM",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-03-13T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-10T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-17T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 74.44,
  "ShipName": "Bottom-Dollar Markets",
  "ShipAddress": "23 Tsawassen Blvd.",
  "ShipCity": "Tsawassen",
  "ShipRegion": "BC",
  "ShipPostalCode": "T2F 8M4",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635273e"),
  "OrderID": 10950,
  "CustomerID": "MAGAA",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-03-16T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-13T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-23T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 2.5,
  "ShipName": "Magazzini Alimentari Riuniti",
  "ShipAddress": "Via Ludovico il Moro 22",
  "ShipCity": "Bergamo",
  "ShipRegion": "",
  "ShipPostalCode": "24100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635273f"),
  "OrderID": 10951,
  "CustomerID": "RICSU",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-03-16T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-27T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-07T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 30.85,
  "ShipName": "Richter Supermarkt",
  "ShipAddress": "Starenweg 5",
  "ShipCity": "Genève",
  "ShipRegion": "",
  "ShipPostalCode": "1204",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352740"),
  "OrderID": 10952,
  "CustomerID": "ALFKI",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-03-16T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-27T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-24T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 40.42,
  "ShipName": "Alfreds Futterkiste",
  "ShipAddress": "Obere Str. 57",
  "ShipCity": "Berlin",
  "ShipRegion": "",
  "ShipPostalCode": "12209",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352741"),
  "OrderID": 10953,
  "CustomerID": "AROUT",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-03-16T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-03-30T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-25T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 23.72,
  "ShipName": "Around the Horn",
  "ShipAddress": "Brook Farm\nStratford St. Mary",
  "ShipCity": "Colchester",
  "ShipRegion": "Essex",
  "ShipPostalCode": "CO7 6JX",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352742"),
  "OrderID": 10954,
  "CustomerID": "LINOD",
  "EmployeeID": 5,
  "OrderDate": ISODate("1998-03-17T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-28T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-20T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 27.91,
  "ShipName": "LINO-Delicateses",
  "ShipAddress": "Ave. 5 de Mayo Porlamar",
  "ShipCity": "I. de Margarita",
  "ShipRegion": "Nueva Esparta",
  "ShipPostalCode": "4980",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352743"),
  "OrderID": 10955,
  "CustomerID": "FOLKO",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-03-17T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-14T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-20T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 3.26,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352744"),
  "OrderID": 10956,
  "CustomerID": "BLAUS",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-03-17T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-28T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-20T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 44.65,
  "ShipName": "Blauer See Delikatessen",
  "ShipAddress": "Forsterstr. 57",
  "ShipCity": "Mannheim",
  "ShipRegion": "",
  "ShipPostalCode": "68306",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352745"),
  "OrderID": 10957,
  "CustomerID": "HILAA",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-03-18T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-15T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-27T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 105.36,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352746"),
  "OrderID": 10958,
  "CustomerID": "OCEAN",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-03-18T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-15T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-27T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 49.56,
  "ShipName": "Océano Atlántico Ltda.",
  "ShipAddress": "Ing. Gustavo Moncada 8585\nPiso 20-A",
  "ShipCity": "Buenos Aires",
  "ShipRegion": "",
  "ShipPostalCode": "1010",
  "ShipCountry": "Argentina"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352747"),
  "OrderID": 10959,
  "CustomerID": "GOURL",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-03-18T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-29T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-23T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 4.98,
  "ShipName": "Gourmet Lanchonetes",
  "ShipAddress": "Av. Brasil, 442",
  "ShipCity": "Campinas",
  "ShipRegion": "SP",
  "ShipPostalCode": "04876-786",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352748"),
  "OrderID": 10960,
  "CustomerID": "HILAA",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-03-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-02T05:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-08T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 2.08,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352749"),
  "OrderID": 10961,
  "CustomerID": "QUEEN",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-03-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-30T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 104.47,
  "ShipName": "Queen Cozinha",
  "ShipAddress": "Alameda dos Canàrios, 891",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05487-020",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635274a"),
  "OrderID": 10962,
  "CustomerID": "QUICK",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-03-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-23T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 275.79,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635274b"),
  "OrderID": 10963,
  "CustomerID": "FURIB",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-03-19T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-26T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 2.7,
  "ShipName": "Furia Bacalhau e Frutos do Mar",
  "ShipAddress": "Jardim das rosas n. 32",
  "ShipCity": "Lisboa",
  "ShipRegion": "",
  "ShipPostalCode": "1675",
  "ShipCountry": "Portugal"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635274c"),
  "OrderID": 10964,
  "CustomerID": "SPECD",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-03-20T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-17T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-24T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 87.38,
  "ShipName": "Spécialités du monde",
  "ShipAddress": "25, rue Lauriston",
  "ShipCity": "Paris",
  "ShipRegion": "",
  "ShipPostalCode": "75016",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635274d"),
  "OrderID": 10965,
  "CustomerID": "OLDWO",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-03-20T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-17T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-30T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 144.38,
  "ShipName": "Old World Delicatessen",
  "ShipAddress": "2743 Bering St.",
  "ShipCity": "Anchorage",
  "ShipRegion": "AK",
  "ShipPostalCode": "99508",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635274e"),
  "OrderID": 10966,
  "CustomerID": "CHOPS",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-03-20T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-17T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-08T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 27.19,
  "ShipName": "Chop-suey Chinese",
  "ShipAddress": "Hauptstr. 31",
  "ShipCity": "Bern",
  "ShipRegion": "",
  "ShipPostalCode": "3012",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635274f"),
  "OrderID": 10967,
  "CustomerID": "TOMSP",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-03-23T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-20T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-02T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 62.22,
  "ShipName": "Toms Spezialitäten",
  "ShipAddress": "Luisenstr. 48",
  "ShipCity": "Münster",
  "ShipRegion": "",
  "ShipPostalCode": "44087",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352750"),
  "OrderID": 10968,
  "CustomerID": "ERNSH",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-03-23T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-20T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-01T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 74.6,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352751"),
  "OrderID": 10969,
  "CustomerID": "COMMI",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-03-23T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-20T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-30T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 0.21,
  "ShipName": "Comércio Mineiro",
  "ShipAddress": "Av. dos Lusíadas, 23",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05432-043",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352752"),
  "OrderID": 10970,
  "CustomerID": "BOLID",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-03-24T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-24T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 16.16,
  "ShipName": "Bólido Comidas preparadas",
  "ShipAddress": "C/ Araquil, 67",
  "ShipCity": "Madrid",
  "ShipRegion": "",
  "ShipPostalCode": "28023",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352753"),
  "OrderID": 10971,
  "CustomerID": "FRANR",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-03-24T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-21T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-02T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 121.82,
  "ShipName": "France restauration",
  "ShipAddress": "54, rue Royale",
  "ShipCity": "Nantes",
  "ShipRegion": "",
  "ShipPostalCode": "44000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352754"),
  "OrderID": 10972,
  "CustomerID": "LACOR",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-03-24T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-21T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-26T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 0.02,
  "ShipName": "La corne d'abondance",
  "ShipAddress": "67, avenue de l'Europe",
  "ShipCity": "Versailles",
  "ShipRegion": "",
  "ShipPostalCode": "78000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352755"),
  "OrderID": 10973,
  "CustomerID": "LACOR",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-03-24T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-21T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-27T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 15.17,
  "ShipName": "La corne d'abondance",
  "ShipAddress": "67, avenue de l'Europe",
  "ShipCity": "Versailles",
  "ShipRegion": "",
  "ShipPostalCode": "78000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352756"),
  "OrderID": 10974,
  "CustomerID": "SPLIR",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-03-25T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-03T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 12.96,
  "ShipName": "Split Rail Beer & Ale",
  "ShipAddress": "P.O. Box 555",
  "ShipCity": "Lander",
  "ShipRegion": "WY",
  "ShipPostalCode": "82520",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352757"),
  "OrderID": 10975,
  "CustomerID": "BOTTM",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-03-25T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-22T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-27T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 32.27,
  "ShipName": "Bottom-Dollar Markets",
  "ShipAddress": "23 Tsawassen Blvd.",
  "ShipCity": "Tsawassen",
  "ShipRegion": "BC",
  "ShipPostalCode": "T2F 8M4",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352758"),
  "OrderID": 10976,
  "CustomerID": "HILAA",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-03-25T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-06T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-03T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 37.97,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352759"),
  "OrderID": 10977,
  "CustomerID": "FOLKO",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-03-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-23T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-10T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 208.5,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635275a"),
  "OrderID": 10978,
  "CustomerID": "MAISD",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-03-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-23T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-23T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 32.82,
  "ShipName": "Maison Dewey",
  "ShipAddress": "Rue Joseph-Bens 532",
  "ShipCity": "Bruxelles",
  "ShipRegion": "",
  "ShipPostalCode": "B-1180",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635275b"),
  "OrderID": 10979,
  "CustomerID": "ERNSH",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-03-26T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-23T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-03-31T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 353.07,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635275c"),
  "OrderID": 10980,
  "CustomerID": "FOLKO",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-03-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-17T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 1.26,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635275d"),
  "OrderID": 10981,
  "CustomerID": "HANAR",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-03-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-24T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-02T05:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 193.37,
  "ShipName": "Hanari Carnes",
  "ShipAddress": "Rua do Paço, 67",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "05454-876",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635275e"),
  "OrderID": 10982,
  "CustomerID": "BOTTM",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-03-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-24T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-08T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 14.01,
  "ShipName": "Bottom-Dollar Markets",
  "ShipAddress": "23 Tsawassen Blvd.",
  "ShipCity": "Tsawassen",
  "ShipRegion": "BC",
  "ShipPostalCode": "T2F 8M4",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635275f"),
  "OrderID": 10983,
  "CustomerID": "SAVEA",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-03-27T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-24T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-06T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 657.54,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352760"),
  "OrderID": 10984,
  "CustomerID": "SAVEA",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-03-30T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-27T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-03T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 211.22,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352761"),
  "OrderID": 10985,
  "CustomerID": "HUNGO",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-03-30T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-27T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-02T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 91.51,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352762"),
  "OrderID": 10986,
  "CustomerID": "OCEAN",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-03-30T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-27T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-21T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 217.86,
  "ShipName": "Océano Atlántico Ltda.",
  "ShipAddress": "Ing. Gustavo Moncada 8585\nPiso 20-A",
  "ShipCity": "Buenos Aires",
  "ShipRegion": "",
  "ShipPostalCode": "1010",
  "ShipCountry": "Argentina"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352763"),
  "OrderID": 10987,
  "CustomerID": "EASTC",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-03-31T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-28T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-06T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 185.48,
  "ShipName": "Eastern Connection",
  "ShipAddress": "35 King George",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "WX3 6FW",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352764"),
  "OrderID": 10988,
  "CustomerID": "RATTC",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-03-31T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-28T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-10T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 61.14,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352765"),
  "OrderID": 10989,
  "CustomerID": "QUEDE",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-03-31T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-28T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-02T05:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 34.76,
  "ShipName": "Que Delícia",
  "ShipAddress": "Rua da Panificadora, 12",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-673",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352766"),
  "OrderID": 10990,
  "CustomerID": "ERNSH",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-01T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-13T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-07T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 117.61,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352767"),
  "OrderID": 10991,
  "CustomerID": "QUICK",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-04-01T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-29T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-07T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 38.51,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352768"),
  "OrderID": 10992,
  "CustomerID": "THEBI",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-04-01T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-29T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-03T05:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 4.27,
  "ShipName": "The Big Cheese",
  "ShipAddress": "89 Jefferson Way\nSuite 2",
  "ShipCity": "Portland",
  "ShipRegion": "OR",
  "ShipPostalCode": "97201",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352769"),
  "OrderID": 10993,
  "CustomerID": "FOLKO",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-04-01T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-29T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-10T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 8.81,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635276a"),
  "OrderID": 10994,
  "CustomerID": "VAFFE",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-02T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-16T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-09T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 65.53,
  "ShipName": "Vaffeljernet",
  "ShipAddress": "Smagsløget 45",
  "ShipCity": "Århus",
  "ShipRegion": "",
  "ShipPostalCode": "8200",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635276b"),
  "OrderID": 10995,
  "CustomerID": "PERIC",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-04-02T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-30T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-06T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 46,
  "ShipName": "Pericles Comidas clásicas",
  "ShipAddress": "Calle Dr. Jorge Cash 321",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05033",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635276c"),
  "OrderID": 10996,
  "CustomerID": "QUICK",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-04-02T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-30T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-10T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 1.12,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635276d"),
  "OrderID": 10997,
  "CustomerID": "LILAS",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-04-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-15T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-13T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 73.91,
  "ShipName": "LILA-Supermercado",
  "ShipAddress": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
  "ShipCity": "Barquisimeto",
  "ShipRegion": "Lara",
  "ShipPostalCode": "3508",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635276e"),
  "OrderID": 10998,
  "CustomerID": "WOLZA",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-04-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-17T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-17T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 20.31,
  "ShipName": "Wolski Zajazd",
  "ShipAddress": "ul. Filtrowa 68",
  "ShipCity": "Warszawa",
  "ShipRegion": "",
  "ShipPostalCode": "01-012",
  "ShipCountry": "Poland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635276f"),
  "OrderID": 10999,
  "CustomerID": "OTTIK",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-04-03T05:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-01T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-10T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 96.35,
  "ShipName": "Ottilies Käseladen",
  "ShipAddress": "Mehrheimerstr. 369",
  "ShipCity": "Köln",
  "ShipRegion": "",
  "ShipPostalCode": "50739",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352770"),
  "OrderID": 11000,
  "CustomerID": "RATTC",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-06T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-04T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-14T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 55.12,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352771"),
  "OrderID": 11001,
  "CustomerID": "FOLKO",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-06T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-04T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-14T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 197.3,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352772"),
  "OrderID": 11002,
  "CustomerID": "SAVEA",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-04-06T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-04T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-16T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 141.16,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352773"),
  "OrderID": 11003,
  "CustomerID": "THECR",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-04-06T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-04T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-08T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 14.91,
  "ShipName": "The Cracker Box",
  "ShipAddress": "55 Grizzly Peak Rd.",
  "ShipCity": "Butte",
  "ShipRegion": "MT",
  "ShipPostalCode": "59801",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352774"),
  "OrderID": 11004,
  "CustomerID": "MAISD",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-04-07T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-05T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-20T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 44.84,
  "ShipName": "Maison Dewey",
  "ShipAddress": "Rue Joseph-Bens 532",
  "ShipCity": "Bruxelles",
  "ShipRegion": "",
  "ShipPostalCode": "B-1180",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352775"),
  "OrderID": 11005,
  "CustomerID": "WILMK",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-07T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-05T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-10T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 0.75,
  "ShipName": "Wilman Kala",
  "ShipAddress": "Keskuskatu 45",
  "ShipCity": "Helsinki",
  "ShipRegion": "",
  "ShipPostalCode": "21240",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352776"),
  "OrderID": 11006,
  "CustomerID": "GREAL",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-04-07T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-05T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-15T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 25.19,
  "ShipName": "Great Lakes Food Market",
  "ShipAddress": "2732 Baker Blvd.",
  "ShipCity": "Eugene",
  "ShipRegion": "OR",
  "ShipPostalCode": "97403",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352777"),
  "OrderID": 11007,
  "CustomerID": "PRINI",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-04-08T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-06T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-13T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 202.24,
  "ShipName": "Princesa Isabel Vinhos",
  "ShipAddress": "Estrada da saúde n. 58",
  "ShipCity": "Lisboa",
  "ShipRegion": "",
  "ShipPostalCode": "1756",
  "ShipCountry": "Portugal"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352778"),
  "OrderID": 11008,
  "CustomerID": "ERNSH",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-04-08T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-06T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 3,
  "Freight": 79.46,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352779"),
  "OrderID": 11009,
  "CustomerID": "GODOS",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-08T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-06T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-10T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 59.11,
  "ShipName": "Godos Cocina Típica",
  "ShipAddress": "C/ Romero, 33",
  "ShipCity": "Sevilla",
  "ShipRegion": "",
  "ShipPostalCode": "41101",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635277a"),
  "OrderID": 11010,
  "CustomerID": "REGGC",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-21T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 28.71,
  "ShipName": "Reggiani Caseifici",
  "ShipAddress": "Strada Provinciale 124",
  "ShipCity": "Reggio Emilia",
  "ShipRegion": "",
  "ShipPostalCode": "42100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635277b"),
  "OrderID": 11011,
  "CustomerID": "ALFKI",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-04-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-13T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 1.21,
  "ShipName": "Alfreds Futterkiste",
  "ShipAddress": "Obere Str. 57",
  "ShipCity": "Berlin",
  "ShipRegion": "",
  "ShipPostalCode": "12209",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635277c"),
  "OrderID": 11012,
  "CustomerID": "FRANK",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-04-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-23T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-17T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 242.95,
  "ShipName": "Frankenversand",
  "ShipAddress": "Berliner Platz 43",
  "ShipCity": "München",
  "ShipRegion": "",
  "ShipPostalCode": "80805",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635277d"),
  "OrderID": 11013,
  "CustomerID": "ROMEY",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-09T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-07T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-10T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 32.99,
  "ShipName": "Romero y tomillo",
  "ShipAddress": "Gran Vía, 1",
  "ShipCity": "Madrid",
  "ShipRegion": "",
  "ShipPostalCode": "28001",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635277e"),
  "OrderID": 11014,
  "CustomerID": "LINOD",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-10T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-15T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 23.6,
  "ShipName": "LINO-Delicateses",
  "ShipAddress": "Ave. 5 de Mayo Porlamar",
  "ShipCity": "I. de Margarita",
  "ShipRegion": "Nueva Esparta",
  "ShipPostalCode": "4980",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635277f"),
  "OrderID": 11015,
  "CustomerID": "SANTG",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-10T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-24T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-20T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 4.62,
  "ShipName": "Santé Gourmet",
  "ShipAddress": "Erling Skakkes gate 78",
  "ShipCity": "Stavern",
  "ShipRegion": "",
  "ShipPostalCode": "4110",
  "ShipCountry": "Norway"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352780"),
  "OrderID": 11016,
  "CustomerID": "AROUT",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-04-10T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-08T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-13T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 33.8,
  "ShipName": "Around the Horn",
  "ShipAddress": "Brook Farm\nStratford St. Mary",
  "ShipCity": "Colchester",
  "ShipRegion": "Essex",
  "ShipPostalCode": "CO7 6JX",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352781"),
  "OrderID": 11017,
  "CustomerID": "ERNSH",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-04-13T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-11T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-20T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 754.26,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352782"),
  "OrderID": 11018,
  "CustomerID": "LONEP",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-04-13T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-11T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-16T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 11.65,
  "ShipName": "Lonesome Pine Restaurant",
  "ShipAddress": "89 Chiaroscuro Rd.",
  "ShipCity": "Portland",
  "ShipRegion": "OR",
  "ShipPostalCode": "97219",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352783"),
  "OrderID": 11019,
  "CustomerID": "RANCH",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-04-13T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-11T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 3,
  "Freight": 3.17,
  "ShipName": "Rancho grande",
  "ShipAddress": "Av. del Libertador 900",
  "ShipCity": "Buenos Aires",
  "ShipRegion": "",
  "ShipPostalCode": "1010",
  "ShipCountry": "Argentina"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352784"),
  "OrderID": 11020,
  "CustomerID": "OTTIK",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-14T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-12T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-16T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 43.3,
  "ShipName": "Ottilies Käseladen",
  "ShipAddress": "Mehrheimerstr. 369",
  "ShipCity": "Köln",
  "ShipRegion": "",
  "ShipPostalCode": "50739",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352785"),
  "OrderID": 11021,
  "CustomerID": "QUICK",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-04-14T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-12T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-21T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 297.18,
  "ShipName": "QUICK-Stop",
  "ShipAddress": "Taucherstraße 10",
  "ShipCity": "Cunewalde",
  "ShipRegion": "",
  "ShipPostalCode": "01307",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352786"),
  "OrderID": 11022,
  "CustomerID": "HANAR",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-04-14T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-12T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-05-04T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 6.27,
  "ShipName": "Hanari Carnes",
  "ShipAddress": "Rua do Paço, 67",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "05454-876",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352787"),
  "OrderID": 11023,
  "CustomerID": "BSBEV",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-04-14T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-04-28T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-24T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 123.83,
  "ShipName": "B's Beverages",
  "ShipAddress": "Fauntleroy Circus",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "EC2 5NT",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352788"),
  "OrderID": 11024,
  "CustomerID": "EASTC",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-04-15T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-13T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-20T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 74.36,
  "ShipName": "Eastern Connection",
  "ShipAddress": "35 King George",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "WX3 6FW",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352789"),
  "OrderID": 11025,
  "CustomerID": "WARTH",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-04-15T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-13T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-24T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 29.17,
  "ShipName": "Wartian Herkku",
  "ShipAddress": "Torikatu 38",
  "ShipCity": "Oulu",
  "ShipRegion": "",
  "ShipPostalCode": "90110",
  "ShipCountry": "Finland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635278a"),
  "OrderID": 11026,
  "CustomerID": "FRANS",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-04-15T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-13T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-28T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 47.09,
  "ShipName": "Franchi S.p.A.",
  "ShipAddress": "Via Monte Bianco 34",
  "ShipCity": "Torino",
  "ShipRegion": "",
  "ShipPostalCode": "10100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635278b"),
  "OrderID": 11027,
  "CustomerID": "BOTTM",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-04-16T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-14T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-20T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 52.52,
  "ShipName": "Bottom-Dollar Markets",
  "ShipAddress": "23 Tsawassen Blvd.",
  "ShipCity": "Tsawassen",
  "ShipRegion": "BC",
  "ShipPostalCode": "T2F 8M4",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635278c"),
  "OrderID": 11028,
  "CustomerID": "KOENE",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-16T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-14T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-22T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 29.59,
  "ShipName": "Königlich Essen",
  "ShipAddress": "Maubelstr. 90",
  "ShipCity": "Brandenburg",
  "ShipRegion": "",
  "ShipPostalCode": "14776",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635278d"),
  "OrderID": 11029,
  "CustomerID": "CHOPS",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-04-16T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-14T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-27T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 47.84,
  "ShipName": "Chop-suey Chinese",
  "ShipAddress": "Hauptstr. 31",
  "ShipCity": "Bern",
  "ShipRegion": "",
  "ShipPostalCode": "3012",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635278e"),
  "OrderID": 11030,
  "CustomerID": "SAVEA",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-04-17T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-15T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-27T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 830.75,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635278f"),
  "OrderID": 11031,
  "CustomerID": "SAVEA",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-04-17T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-15T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-24T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 227.22,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352790"),
  "OrderID": 11032,
  "CustomerID": "WHITC",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-17T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-15T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-23T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 606.19,
  "ShipName": "White Clover Markets",
  "ShipAddress": "1029 - 12th Ave. S.",
  "ShipCity": "Seattle",
  "ShipRegion": "WA",
  "ShipPostalCode": "98124",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352791"),
  "OrderID": 11033,
  "CustomerID": "RICSU",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-04-17T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-15T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-23T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 84.74,
  "ShipName": "Richter Supermarkt",
  "ShipAddress": "Starenweg 5",
  "ShipCity": "Genève",
  "ShipRegion": "",
  "ShipPostalCode": "1204",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352792"),
  "OrderID": 11034,
  "CustomerID": "OLDWO",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-04-20T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-06-01T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-27T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 40.32,
  "ShipName": "Old World Delicatessen",
  "ShipAddress": "2743 Bering St.",
  "ShipCity": "Anchorage",
  "ShipRegion": "AK",
  "ShipPostalCode": "99508",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352793"),
  "OrderID": 11035,
  "CustomerID": "SUPRD",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-20T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-18T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-24T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 0.17,
  "ShipName": "Suprêmes délices",
  "ShipAddress": "Boulevard Tirou, 255",
  "ShipCity": "Charleroi",
  "ShipRegion": "",
  "ShipPostalCode": "B-6000",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352794"),
  "OrderID": 11036,
  "CustomerID": "DRACD",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-04-20T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-18T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-22T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 149.47,
  "ShipName": "Drachenblut Delikatessen",
  "ShipAddress": "Walserweg 21",
  "ShipCity": "Aachen",
  "ShipRegion": "",
  "ShipPostalCode": "52066",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352795"),
  "OrderID": 11037,
  "CustomerID": "GODOS",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-04-21T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-19T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-27T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 3.2,
  "ShipName": "Godos Cocina Típica",
  "ShipAddress": "C/ Romero, 33",
  "ShipCity": "Sevilla",
  "ShipRegion": "",
  "ShipPostalCode": "41101",
  "ShipCountry": "Spain"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352796"),
  "OrderID": 11038,
  "CustomerID": "SUPRD",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-04-21T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-19T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-30T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 29.59,
  "ShipName": "Suprêmes délices",
  "ShipAddress": "Boulevard Tirou, 255",
  "ShipCity": "Charleroi",
  "ShipRegion": "",
  "ShipPostalCode": "B-6000",
  "ShipCountry": "Belgium"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352797"),
  "OrderID": 11039,
  "CustomerID": "LINOD",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-04-21T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-19T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 2,
  "Freight": 65,
  "ShipName": "LINO-Delicateses",
  "ShipAddress": "Ave. 5 de Mayo Porlamar",
  "ShipCity": "I. de Margarita",
  "ShipRegion": "Nueva Esparta",
  "ShipPostalCode": "4980",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352798"),
  "OrderID": 11040,
  "CustomerID": "GREAL",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-04-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-20T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 3,
  "Freight": 18.84,
  "ShipName": "Great Lakes Food Market",
  "ShipAddress": "2732 Baker Blvd.",
  "ShipCity": "Eugene",
  "ShipRegion": "OR",
  "ShipPostalCode": "97403",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b9433316352799"),
  "OrderID": 11041,
  "CustomerID": "CHOPS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-04-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-20T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-28T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 48.22,
  "ShipName": "Chop-suey Chinese",
  "ShipAddress": "Hauptstr. 31",
  "ShipCity": "Bern",
  "ShipRegion": "",
  "ShipPostalCode": "3012",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635279a"),
  "OrderID": 11042,
  "CustomerID": "COMMI",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-06T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-05-01T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 29.99,
  "ShipName": "Comércio Mineiro",
  "ShipAddress": "Av. dos Lusíadas, 23",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05432-043",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635279b"),
  "OrderID": 11043,
  "CustomerID": "SPECD",
  "EmployeeID": 5,
  "OrderDate": ISODate("1998-04-22T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-20T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-29T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 8.8,
  "ShipName": "Spécialités du monde",
  "ShipAddress": "25, rue Lauriston",
  "ShipCity": "Paris",
  "ShipRegion": "",
  "ShipPostalCode": "75016",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635279c"),
  "OrderID": 11044,
  "CustomerID": "WOLZA",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-04-23T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-21T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-05-01T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 8.72,
  "ShipName": "Wolski Zajazd",
  "ShipAddress": "ul. Filtrowa 68",
  "ShipCity": "Warszawa",
  "ShipRegion": "",
  "ShipPostalCode": "01-012",
  "ShipCountry": "Poland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635279d"),
  "OrderID": 11045,
  "CustomerID": "BOTTM",
  "EmployeeID": 6,
  "OrderDate": ISODate("1998-04-23T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-21T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 2,
  "Freight": 70.58,
  "ShipName": "Bottom-Dollar Markets",
  "ShipAddress": "23 Tsawassen Blvd.",
  "ShipCity": "Tsawassen",
  "ShipRegion": "BC",
  "ShipPostalCode": "T2F 8M4",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635279e"),
  "OrderID": 11046,
  "CustomerID": "WANDK",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-04-23T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-21T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-24T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 71.64,
  "ShipName": "Die Wandernde Kuh",
  "ShipAddress": "Adenauerallee 900",
  "ShipCity": "Stuttgart",
  "ShipRegion": "",
  "ShipPostalCode": "70563",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b943331635279f"),
  "OrderID": 11047,
  "CustomerID": "EASTC",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-04-24T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-22T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-05-01T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 46.62,
  "ShipName": "Eastern Connection",
  "ShipAddress": "35 King George",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "WX3 6FW",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527a0"),
  "OrderID": 11048,
  "CustomerID": "BOTTM",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-04-24T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-22T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-30T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 24.12,
  "ShipName": "Bottom-Dollar Markets",
  "ShipAddress": "23 Tsawassen Blvd.",
  "ShipCity": "Tsawassen",
  "ShipRegion": "BC",
  "ShipPostalCode": "T2F 8M4",
  "ShipCountry": "Canada"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527a1"),
  "OrderID": 11049,
  "CustomerID": "GOURL",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-04-24T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-22T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-05-04T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 8.34,
  "ShipName": "Gourmet Lanchonetes",
  "ShipAddress": "Av. Brasil, 442",
  "ShipCity": "Campinas",
  "ShipRegion": "SP",
  "ShipPostalCode": "04876-786",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527a2"),
  "OrderID": 11050,
  "CustomerID": "FOLKO",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-04-27T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-25T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-05-05T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 59.41,
  "ShipName": "Folk och fä HB",
  "ShipAddress": "Åkergatan 24",
  "ShipCity": "Bräcke",
  "ShipRegion": "",
  "ShipPostalCode": "S-844 67",
  "ShipCountry": "Sweden"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527a3"),
  "OrderID": 11051,
  "CustomerID": "LAMAI",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-04-27T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-25T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 3,
  "Freight": 2.79,
  "ShipName": "La maison d'Asie",
  "ShipAddress": "1 rue Alsace-Lorraine",
  "ShipCity": "Toulouse",
  "ShipRegion": "",
  "ShipPostalCode": "31000",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527a4"),
  "OrderID": 11052,
  "CustomerID": "HANAR",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-04-27T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-25T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-05-01T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 67.26,
  "ShipName": "Hanari Carnes",
  "ShipAddress": "Rua do Paço, 67",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "05454-876",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527a5"),
  "OrderID": 11053,
  "CustomerID": "PICCO",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-27T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-25T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-04-29T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 53.05,
  "ShipName": "Piccolo und mehr",
  "ShipAddress": "Geislweg 14",
  "ShipCity": "Salzburg",
  "ShipRegion": "",
  "ShipPostalCode": "5020",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527a6"),
  "OrderID": 11054,
  "CustomerID": "CACTU",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-04-28T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-26T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 1,
  "Freight": 0.33,
  "ShipName": "Cactus Comidas para llevar",
  "ShipAddress": "Cerrito 333",
  "ShipCity": "Buenos Aires",
  "ShipRegion": "",
  "ShipPostalCode": "1010",
  "ShipCountry": "Argentina"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527a7"),
  "OrderID": 11055,
  "CustomerID": "HILAA",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-04-28T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-26T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-05-05T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 120.92,
  "ShipName": "HILARIÓN-Abastos",
  "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
  "ShipCity": "San Cristóbal",
  "ShipRegion": "Táchira",
  "ShipPostalCode": "5022",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527a8"),
  "OrderID": 11056,
  "CustomerID": "EASTC",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-04-28T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-12T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-05-01T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 278.96,
  "ShipName": "Eastern Connection",
  "ShipAddress": "35 King George",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "WX3 6FW",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527a9"),
  "OrderID": 11057,
  "CustomerID": "NORTS",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-04-29T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-27T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-05-01T04:00:00.0Z"),
  "ShipVia": 3,
  "Freight": 4.13,
  "ShipName": "North/South",
  "ShipAddress": "South House\n300 Queensbridge",
  "ShipCity": "London",
  "ShipRegion": "",
  "ShipPostalCode": "SW7 1RZ",
  "ShipCountry": "UK"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527aa"),
  "OrderID": 11058,
  "CustomerID": "BLAUS",
  "EmployeeID": 9,
  "OrderDate": ISODate("1998-04-29T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-27T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 3,
  "Freight": 31.14,
  "ShipName": "Blauer See Delikatessen",
  "ShipAddress": "Forsterstr. 57",
  "ShipCity": "Mannheim",
  "ShipRegion": "",
  "ShipPostalCode": "68306",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527ab"),
  "OrderID": 11059,
  "CustomerID": "RICAR",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-29T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-06-10T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 2,
  "Freight": 85.8,
  "ShipName": "Ricardo Adocicados",
  "ShipAddress": "Av. Copacabana, 267",
  "ShipCity": "Rio de Janeiro",
  "ShipRegion": "RJ",
  "ShipPostalCode": "02389-890",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527ac"),
  "OrderID": 11060,
  "CustomerID": "FRANS",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-04-30T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-28T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-05-04T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 10.98,
  "ShipName": "Franchi S.p.A.",
  "ShipAddress": "Via Monte Bianco 34",
  "ShipCity": "Torino",
  "ShipRegion": "",
  "ShipPostalCode": "10100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527ad"),
  "OrderID": 11061,
  "CustomerID": "GREAL",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-04-30T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-06-11T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 3,
  "Freight": 14.01,
  "ShipName": "Great Lakes Food Market",
  "ShipAddress": "2732 Baker Blvd.",
  "ShipCity": "Eugene",
  "ShipRegion": "OR",
  "ShipPostalCode": "97403",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527ae"),
  "OrderID": 11062,
  "CustomerID": "REGGC",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-04-30T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-28T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 2,
  "Freight": 29.93,
  "ShipName": "Reggiani Caseifici",
  "ShipAddress": "Strada Provinciale 124",
  "ShipCity": "Reggio Emilia",
  "ShipRegion": "",
  "ShipPostalCode": "42100",
  "ShipCountry": "Italy"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527af"),
  "OrderID": 11063,
  "CustomerID": "HUNGO",
  "EmployeeID": 3,
  "OrderDate": ISODate("1998-04-30T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-28T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-05-06T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 81.73,
  "ShipName": "Hungry Owl All-Night Grocers",
  "ShipAddress": "8 Johnstown Road",
  "ShipCity": "Cork",
  "ShipRegion": "Co. Cork",
  "ShipPostalCode": "",
  "ShipCountry": "Ireland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527b0"),
  "OrderID": 11064,
  "CustomerID": "SAVEA",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-05-01T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-29T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-05-04T04:00:00.0Z"),
  "ShipVia": 1,
  "Freight": 30.09,
  "ShipName": "Save-a-lot Markets",
  "ShipAddress": "187 Suffolk Ln.",
  "ShipCity": "Boise",
  "ShipRegion": "ID",
  "ShipPostalCode": "83720",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527b1"),
  "OrderID": 11065,
  "CustomerID": "LILAS",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-05-01T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-29T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 1,
  "Freight": 12.91,
  "ShipName": "LILA-Supermercado",
  "ShipAddress": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
  "ShipCity": "Barquisimeto",
  "ShipRegion": "Lara",
  "ShipPostalCode": "3508",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527b2"),
  "OrderID": 11066,
  "CustomerID": "WHITC",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-05-01T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-29T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-05-04T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 44.72,
  "ShipName": "White Clover Markets",
  "ShipAddress": "1029 - 12th Ave. S.",
  "ShipCity": "Seattle",
  "ShipRegion": "WA",
  "ShipPostalCode": "98124",
  "ShipCountry": "USA"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527b3"),
  "OrderID": 11067,
  "CustomerID": "DRACD",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-05-04T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-05-18T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-05-06T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 7.98,
  "ShipName": "Drachenblut Delikatessen",
  "ShipAddress": "Walserweg 21",
  "ShipCity": "Aachen",
  "ShipRegion": "",
  "ShipPostalCode": "52066",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527b4"),
  "OrderID": 11068,
  "CustomerID": "QUEEN",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-05-04T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-06-01T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 2,
  "Freight": 81.75,
  "ShipName": "Queen Cozinha",
  "ShipAddress": "Alameda dos Canàrios, 891",
  "ShipCity": "São Paulo",
  "ShipRegion": "SP",
  "ShipPostalCode": "05487-020",
  "ShipCountry": "Brazil"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527b5"),
  "OrderID": 11069,
  "CustomerID": "TORTU",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-05-04T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-06-01T04:00:00.0Z"),
  "ShippedDate": ISODate("1998-05-06T04:00:00.0Z"),
  "ShipVia": 2,
  "Freight": 15.67,
  "ShipName": "Tortuga Restaurante",
  "ShipAddress": "Avda. Azteca 123",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05033",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527b6"),
  "OrderID": 11070,
  "CustomerID": "LEHMS",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-05-05T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-06-02T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 1,
  "Freight": 136,
  "ShipName": "Lehmanns Marktstand",
  "ShipAddress": "Magazinweg 7",
  "ShipCity": "Frankfurt a.M.",
  "ShipRegion": "",
  "ShipPostalCode": "60528",
  "ShipCountry": "Germany"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527b7"),
  "OrderID": 11071,
  "CustomerID": "LILAS",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-05-05T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-06-02T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 1,
  "Freight": 0.93,
  "ShipName": "LILA-Supermercado",
  "ShipAddress": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
  "ShipCity": "Barquisimeto",
  "ShipRegion": "Lara",
  "ShipPostalCode": "3508",
  "ShipCountry": "Venezuela"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527b8"),
  "OrderID": 11072,
  "CustomerID": "ERNSH",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-05-05T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-06-02T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 2,
  "Freight": 258.64,
  "ShipName": "Ernst Handel",
  "ShipAddress": "Kirchgasse 6",
  "ShipCity": "Graz",
  "ShipRegion": "",
  "ShipPostalCode": "8010",
  "ShipCountry": "Austria"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527b9"),
  "OrderID": 11073,
  "CustomerID": "PERIC",
  "EmployeeID": 2,
  "OrderDate": ISODate("1998-05-05T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-06-02T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 2,
  "Freight": 24.95,
  "ShipName": "Pericles Comidas clásicas",
  "ShipAddress": "Calle Dr. Jorge Cash 321",
  "ShipCity": "México D.F.",
  "ShipRegion": "",
  "ShipPostalCode": "05033",
  "ShipCountry": "Mexico"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527ba"),
  "OrderID": 11074,
  "CustomerID": "SIMOB",
  "EmployeeID": 7,
  "OrderDate": ISODate("1998-05-06T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-06-03T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 2,
  "Freight": 18.44,
  "ShipName": "Simons bistro",
  "ShipAddress": "Vinbæltet 34",
  "ShipCity": "København",
  "ShipRegion": "",
  "ShipPostalCode": "1734",
  "ShipCountry": "Denmark"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527bb"),
  "OrderID": 11075,
  "CustomerID": "RICSU",
  "EmployeeID": 8,
  "OrderDate": ISODate("1998-05-06T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-06-03T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 2,
  "Freight": 6.19,
  "ShipName": "Richter Supermarkt",
  "ShipAddress": "Starenweg 5",
  "ShipCity": "Genève",
  "ShipRegion": "",
  "ShipPostalCode": "1204",
  "ShipCountry": "Switzerland"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527bc"),
  "OrderID": 11076,
  "CustomerID": "BONAP",
  "EmployeeID": 4,
  "OrderDate": ISODate("1998-05-06T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-06-03T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 2,
  "Freight": 38.28,
  "ShipName": "Bon app'",
  "ShipAddress": "12, rue des Bouchers",
  "ShipCity": "Marseille",
  "ShipRegion": "",
  "ShipPostalCode": "13008",
  "ShipCountry": "France"
});
db.getCollection("order").insert({
  "_id": ObjectId("568379fc99b94333163527bd"),
  "OrderID": 11077,
  "CustomerID": "RATTC",
  "EmployeeID": 1,
  "OrderDate": ISODate("1998-05-06T04:00:00.0Z"),
  "RequiredDate": ISODate("1998-06-03T04:00:00.0Z"),
  "ShippedDate": ISODate("-292275055-05-16T16:47:05.0Z"),
  "ShipVia": 2,
  "Freight": 8.53,
  "ShipName": "Rattlesnake Canyon Grocery",
  "ShipAddress": "2817 Milton Dr.",
  "ShipCity": "Albuquerque",
  "ShipRegion": "NM",
  "ShipPostalCode": "87110",
  "ShipCountry": "USA"
});

/** orderDetail records **/
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635186a"),
  "OrderID": 10248,
  "ProductID": 11,
  "UnitPrice": 14,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635186b"),
  "OrderID": 10248,
  "ProductID": 42,
  "UnitPrice": 9.8,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635186c"),
  "OrderID": 10248,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635186d"),
  "OrderID": 10249,
  "ProductID": 14,
  "UnitPrice": 18.6,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635186e"),
  "OrderID": 10249,
  "ProductID": 51,
  "UnitPrice": 42.4,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635186f"),
  "OrderID": 10250,
  "ProductID": 41,
  "UnitPrice": 7.7,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351870"),
  "OrderID": 10250,
  "ProductID": 51,
  "UnitPrice": 42.4,
  "Quantity": 35,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351871"),
  "OrderID": 10250,
  "ProductID": 65,
  "UnitPrice": 16.8,
  "Quantity": 15,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351872"),
  "OrderID": 10251,
  "ProductID": 22,
  "UnitPrice": 16.8,
  "Quantity": 6,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351873"),
  "OrderID": 10251,
  "ProductID": 57,
  "UnitPrice": 15.6,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351874"),
  "OrderID": 10251,
  "ProductID": 65,
  "UnitPrice": 16.8,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351875"),
  "OrderID": 10252,
  "ProductID": 20,
  "UnitPrice": 64.8,
  "Quantity": 40,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351876"),
  "OrderID": 10252,
  "ProductID": 33,
  "UnitPrice": 2,
  "Quantity": 25,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351877"),
  "OrderID": 10252,
  "ProductID": 60,
  "UnitPrice": 27.2,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351878"),
  "OrderID": 10253,
  "ProductID": 31,
  "UnitPrice": 10,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351879"),
  "OrderID": 10253,
  "ProductID": 39,
  "UnitPrice": 14.4,
  "Quantity": 42,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635187a"),
  "OrderID": 10253,
  "ProductID": 49,
  "UnitPrice": 16,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635187b"),
  "OrderID": 10254,
  "ProductID": 24,
  "UnitPrice": 3.6,
  "Quantity": 15,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635187c"),
  "OrderID": 10254,
  "ProductID": 55,
  "UnitPrice": 19.2,
  "Quantity": 21,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635187d"),
  "OrderID": 10254,
  "ProductID": 74,
  "UnitPrice": 8,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635187e"),
  "OrderID": 10255,
  "ProductID": 2,
  "UnitPrice": 15.2,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635187f"),
  "OrderID": 10255,
  "ProductID": 16,
  "UnitPrice": 13.9,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351880"),
  "OrderID": 10255,
  "ProductID": 36,
  "UnitPrice": 15.2,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351881"),
  "OrderID": 10255,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351882"),
  "OrderID": 10256,
  "ProductID": 53,
  "UnitPrice": 26.2,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351883"),
  "OrderID": 10256,
  "ProductID": 77,
  "UnitPrice": 10.4,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351884"),
  "OrderID": 10257,
  "ProductID": 27,
  "UnitPrice": 35.1,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351885"),
  "OrderID": 10257,
  "ProductID": 39,
  "UnitPrice": 14.4,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351886"),
  "OrderID": 10257,
  "ProductID": 77,
  "UnitPrice": 10.4,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351887"),
  "OrderID": 10258,
  "ProductID": 2,
  "UnitPrice": 15.2,
  "Quantity": 50,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351888"),
  "OrderID": 10258,
  "ProductID": 5,
  "UnitPrice": 17,
  "Quantity": 65,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351889"),
  "OrderID": 10258,
  "ProductID": 32,
  "UnitPrice": 25.6,
  "Quantity": 6,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635188a"),
  "OrderID": 10259,
  "ProductID": 21,
  "UnitPrice": 8,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635188b"),
  "OrderID": 10259,
  "ProductID": 37,
  "UnitPrice": 20.8,
  "Quantity": 1,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635188c"),
  "OrderID": 10260,
  "ProductID": 41,
  "UnitPrice": 7.7,
  "Quantity": 16,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635188d"),
  "OrderID": 10260,
  "ProductID": 57,
  "UnitPrice": 15.6,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635188e"),
  "OrderID": 10260,
  "ProductID": 62,
  "UnitPrice": 39.4,
  "Quantity": 15,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635188f"),
  "OrderID": 10260,
  "ProductID": 70,
  "UnitPrice": 12,
  "Quantity": 21,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351890"),
  "OrderID": 10261,
  "ProductID": 21,
  "UnitPrice": 8,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351891"),
  "OrderID": 10261,
  "ProductID": 35,
  "UnitPrice": 14.4,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351892"),
  "OrderID": 10262,
  "ProductID": 5,
  "UnitPrice": 17,
  "Quantity": 12,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351893"),
  "OrderID": 10262,
  "ProductID": 7,
  "UnitPrice": 24,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351894"),
  "OrderID": 10262,
  "ProductID": 56,
  "UnitPrice": 30.4,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351895"),
  "OrderID": 10263,
  "ProductID": 16,
  "UnitPrice": 13.9,
  "Quantity": 60,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351896"),
  "OrderID": 10263,
  "ProductID": 24,
  "UnitPrice": 3.6,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351897"),
  "OrderID": 10263,
  "ProductID": 30,
  "UnitPrice": 20.7,
  "Quantity": 60,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351898"),
  "OrderID": 10263,
  "ProductID": 74,
  "UnitPrice": 8,
  "Quantity": 36,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351899"),
  "OrderID": 10264,
  "ProductID": 2,
  "UnitPrice": 15.2,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635189a"),
  "OrderID": 10264,
  "ProductID": 41,
  "UnitPrice": 7.7,
  "Quantity": 25,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635189b"),
  "OrderID": 10265,
  "ProductID": 17,
  "UnitPrice": 31.2,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635189c"),
  "OrderID": 10265,
  "ProductID": 70,
  "UnitPrice": 12,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635189d"),
  "OrderID": 10266,
  "ProductID": 12,
  "UnitPrice": 30.4,
  "Quantity": 12,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635189e"),
  "OrderID": 10267,
  "ProductID": 40,
  "UnitPrice": 14.7,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635189f"),
  "OrderID": 10267,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 70,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518a0"),
  "OrderID": 10267,
  "ProductID": 76,
  "UnitPrice": 14.4,
  "Quantity": 15,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518a1"),
  "OrderID": 10268,
  "ProductID": 29,
  "UnitPrice": 99,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518a2"),
  "OrderID": 10268,
  "ProductID": 72,
  "UnitPrice": 27.8,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518a3"),
  "OrderID": 10269,
  "ProductID": 33,
  "UnitPrice": 2,
  "Quantity": 60,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518a4"),
  "OrderID": 10269,
  "ProductID": 72,
  "UnitPrice": 27.8,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518a5"),
  "OrderID": 10270,
  "ProductID": 36,
  "UnitPrice": 15.2,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518a6"),
  "OrderID": 10270,
  "ProductID": 43,
  "UnitPrice": 36.8,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518a7"),
  "OrderID": 10271,
  "ProductID": 33,
  "UnitPrice": 2,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518a8"),
  "OrderID": 10272,
  "ProductID": 20,
  "UnitPrice": 64.8,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518a9"),
  "OrderID": 10272,
  "ProductID": 31,
  "UnitPrice": 10,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518aa"),
  "OrderID": 10272,
  "ProductID": 72,
  "UnitPrice": 27.8,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518ab"),
  "OrderID": 10273,
  "ProductID": 10,
  "UnitPrice": 24.8,
  "Quantity": 24,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518ac"),
  "OrderID": 10273,
  "ProductID": 31,
  "UnitPrice": 10,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518ad"),
  "OrderID": 10273,
  "ProductID": 33,
  "UnitPrice": 2,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518ae"),
  "OrderID": 10273,
  "ProductID": 40,
  "UnitPrice": 14.7,
  "Quantity": 60,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518af"),
  "OrderID": 10273,
  "ProductID": 76,
  "UnitPrice": 14.4,
  "Quantity": 33,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518b0"),
  "OrderID": 10274,
  "ProductID": 71,
  "UnitPrice": 17.2,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518b1"),
  "OrderID": 10274,
  "ProductID": 72,
  "UnitPrice": 27.8,
  "Quantity": 7,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518b2"),
  "OrderID": 10275,
  "ProductID": 24,
  "UnitPrice": 3.6,
  "Quantity": 12,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518b3"),
  "OrderID": 10275,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 6,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518b4"),
  "OrderID": 10276,
  "ProductID": 10,
  "UnitPrice": 24.8,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518b5"),
  "OrderID": 10276,
  "ProductID": 13,
  "UnitPrice": 4.8,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518b6"),
  "OrderID": 10277,
  "ProductID": 28,
  "UnitPrice": 36.4,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518b7"),
  "OrderID": 10277,
  "ProductID": 62,
  "UnitPrice": 39.4,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518b8"),
  "OrderID": 10278,
  "ProductID": 44,
  "UnitPrice": 15.5,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518b9"),
  "OrderID": 10278,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518ba"),
  "OrderID": 10278,
  "ProductID": 63,
  "UnitPrice": 35.1,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518bb"),
  "OrderID": 10278,
  "ProductID": 73,
  "UnitPrice": 12,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518bc"),
  "OrderID": 10279,
  "ProductID": 17,
  "UnitPrice": 31.2,
  "Quantity": 15,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518bd"),
  "OrderID": 10280,
  "ProductID": 24,
  "UnitPrice": 3.6,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518be"),
  "OrderID": 10280,
  "ProductID": 55,
  "UnitPrice": 19.2,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518bf"),
  "OrderID": 10280,
  "ProductID": 75,
  "UnitPrice": 6.2,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518c0"),
  "OrderID": 10281,
  "ProductID": 19,
  "UnitPrice": 7.3,
  "Quantity": 1,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518c1"),
  "OrderID": 10281,
  "ProductID": 24,
  "UnitPrice": 3.6,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518c2"),
  "OrderID": 10281,
  "ProductID": 35,
  "UnitPrice": 14.4,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518c3"),
  "OrderID": 10282,
  "ProductID": 30,
  "UnitPrice": 20.7,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518c4"),
  "OrderID": 10282,
  "ProductID": 57,
  "UnitPrice": 15.6,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518c5"),
  "OrderID": 10283,
  "ProductID": 15,
  "UnitPrice": 12.4,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518c6"),
  "OrderID": 10283,
  "ProductID": 19,
  "UnitPrice": 7.3,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518c7"),
  "OrderID": 10283,
  "ProductID": 60,
  "UnitPrice": 27.2,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518c8"),
  "OrderID": 10283,
  "ProductID": 72,
  "UnitPrice": 27.8,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518c9"),
  "OrderID": 10284,
  "ProductID": 27,
  "UnitPrice": 35.1,
  "Quantity": 15,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518ca"),
  "OrderID": 10284,
  "ProductID": 44,
  "UnitPrice": 15.5,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518cb"),
  "OrderID": 10284,
  "ProductID": 60,
  "UnitPrice": 27.2,
  "Quantity": 20,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518cc"),
  "OrderID": 10284,
  "ProductID": 67,
  "UnitPrice": 11.2,
  "Quantity": 5,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518cd"),
  "OrderID": 10285,
  "ProductID": 1,
  "UnitPrice": 14.4,
  "Quantity": 45,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518ce"),
  "OrderID": 10285,
  "ProductID": 40,
  "UnitPrice": 14.7,
  "Quantity": 40,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518cf"),
  "OrderID": 10285,
  "ProductID": 53,
  "UnitPrice": 26.2,
  "Quantity": 36,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518d0"),
  "OrderID": 10286,
  "ProductID": 35,
  "UnitPrice": 14.4,
  "Quantity": 100,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518d1"),
  "OrderID": 10286,
  "ProductID": 62,
  "UnitPrice": 39.4,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518d2"),
  "OrderID": 10287,
  "ProductID": 16,
  "UnitPrice": 13.9,
  "Quantity": 40,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518d3"),
  "OrderID": 10287,
  "ProductID": 34,
  "UnitPrice": 11.2,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518d4"),
  "OrderID": 10287,
  "ProductID": 46,
  "UnitPrice": 9.6,
  "Quantity": 15,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518d5"),
  "OrderID": 10288,
  "ProductID": 54,
  "UnitPrice": 5.9,
  "Quantity": 10,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518d6"),
  "OrderID": 10288,
  "ProductID": 68,
  "UnitPrice": 10,
  "Quantity": 3,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518d7"),
  "OrderID": 10289,
  "ProductID": 3,
  "UnitPrice": 8,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518d8"),
  "OrderID": 10289,
  "ProductID": 64,
  "UnitPrice": 26.6,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518d9"),
  "OrderID": 10290,
  "ProductID": 5,
  "UnitPrice": 17,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518da"),
  "OrderID": 10290,
  "ProductID": 29,
  "UnitPrice": 99,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518db"),
  "OrderID": 10290,
  "ProductID": 49,
  "UnitPrice": 16,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518dc"),
  "OrderID": 10290,
  "ProductID": 77,
  "UnitPrice": 10.4,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518dd"),
  "OrderID": 10291,
  "ProductID": 13,
  "UnitPrice": 4.8,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518de"),
  "OrderID": 10291,
  "ProductID": 44,
  "UnitPrice": 15.5,
  "Quantity": 24,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518df"),
  "OrderID": 10291,
  "ProductID": 51,
  "UnitPrice": 42.4,
  "Quantity": 2,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518e0"),
  "OrderID": 10292,
  "ProductID": 20,
  "UnitPrice": 64.8,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518e1"),
  "OrderID": 10293,
  "ProductID": 18,
  "UnitPrice": 50,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518e2"),
  "OrderID": 10293,
  "ProductID": 24,
  "UnitPrice": 3.6,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518e3"),
  "OrderID": 10293,
  "ProductID": 63,
  "UnitPrice": 35.1,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518e4"),
  "OrderID": 10293,
  "ProductID": 75,
  "UnitPrice": 6.2,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518e5"),
  "OrderID": 10294,
  "ProductID": 1,
  "UnitPrice": 14.4,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518e6"),
  "OrderID": 10294,
  "ProductID": 17,
  "UnitPrice": 31.2,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518e7"),
  "OrderID": 10294,
  "ProductID": 43,
  "UnitPrice": 36.8,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518e8"),
  "OrderID": 10294,
  "ProductID": 60,
  "UnitPrice": 27.2,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518e9"),
  "OrderID": 10294,
  "ProductID": 75,
  "UnitPrice": 6.2,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518ea"),
  "OrderID": 10295,
  "ProductID": 56,
  "UnitPrice": 30.4,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518eb"),
  "OrderID": 10296,
  "ProductID": 11,
  "UnitPrice": 16.8,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518ec"),
  "OrderID": 10296,
  "ProductID": 16,
  "UnitPrice": 13.9,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518ed"),
  "OrderID": 10296,
  "ProductID": 69,
  "UnitPrice": 28.8,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518ee"),
  "OrderID": 10297,
  "ProductID": 39,
  "UnitPrice": 14.4,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518ef"),
  "OrderID": 10297,
  "ProductID": 72,
  "UnitPrice": 27.8,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518f0"),
  "OrderID": 10298,
  "ProductID": 2,
  "UnitPrice": 15.2,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518f1"),
  "OrderID": 10298,
  "ProductID": 36,
  "UnitPrice": 15.2,
  "Quantity": 40,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518f2"),
  "OrderID": 10298,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518f3"),
  "OrderID": 10298,
  "ProductID": 62,
  "UnitPrice": 39.4,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518f4"),
  "OrderID": 10299,
  "ProductID": 19,
  "UnitPrice": 7.3,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518f5"),
  "OrderID": 10299,
  "ProductID": 70,
  "UnitPrice": 12,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518f6"),
  "OrderID": 10300,
  "ProductID": 66,
  "UnitPrice": 13.6,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518f7"),
  "OrderID": 10300,
  "ProductID": 68,
  "UnitPrice": 10,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518f8"),
  "OrderID": 10301,
  "ProductID": 40,
  "UnitPrice": 14.7,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518f9"),
  "OrderID": 10301,
  "ProductID": 56,
  "UnitPrice": 30.4,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518fa"),
  "OrderID": 10302,
  "ProductID": 17,
  "UnitPrice": 31.2,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518fb"),
  "OrderID": 10302,
  "ProductID": 28,
  "UnitPrice": 36.4,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518fc"),
  "OrderID": 10302,
  "ProductID": 43,
  "UnitPrice": 36.8,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518fd"),
  "OrderID": 10303,
  "ProductID": 40,
  "UnitPrice": 14.7,
  "Quantity": 40,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518fe"),
  "OrderID": 10303,
  "ProductID": 65,
  "UnitPrice": 16.8,
  "Quantity": 30,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b94333163518ff"),
  "OrderID": 10303,
  "ProductID": 68,
  "UnitPrice": 10,
  "Quantity": 15,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351900"),
  "OrderID": 10304,
  "ProductID": 49,
  "UnitPrice": 16,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351901"),
  "OrderID": 10304,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351902"),
  "OrderID": 10304,
  "ProductID": 71,
  "UnitPrice": 17.2,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351903"),
  "OrderID": 10305,
  "ProductID": 18,
  "UnitPrice": 50,
  "Quantity": 25,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351904"),
  "OrderID": 10305,
  "ProductID": 29,
  "UnitPrice": 99,
  "Quantity": 25,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351905"),
  "OrderID": 10305,
  "ProductID": 39,
  "UnitPrice": 14.4,
  "Quantity": 30,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351906"),
  "OrderID": 10306,
  "ProductID": 30,
  "UnitPrice": 20.7,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351907"),
  "OrderID": 10306,
  "ProductID": 53,
  "UnitPrice": 26.2,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351908"),
  "OrderID": 10306,
  "ProductID": 54,
  "UnitPrice": 5.9,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351909"),
  "OrderID": 10307,
  "ProductID": 62,
  "UnitPrice": 39.4,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635190a"),
  "OrderID": 10307,
  "ProductID": 68,
  "UnitPrice": 10,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635190b"),
  "OrderID": 10308,
  "ProductID": 69,
  "UnitPrice": 28.8,
  "Quantity": 1,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635190c"),
  "OrderID": 10308,
  "ProductID": 70,
  "UnitPrice": 12,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635190d"),
  "OrderID": 10309,
  "ProductID": 4,
  "UnitPrice": 17.6,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635190e"),
  "OrderID": 10309,
  "ProductID": 6,
  "UnitPrice": 20,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635190f"),
  "OrderID": 10309,
  "ProductID": 42,
  "UnitPrice": 11.2,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351910"),
  "OrderID": 10309,
  "ProductID": 43,
  "UnitPrice": 36.8,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351911"),
  "OrderID": 10309,
  "ProductID": 71,
  "UnitPrice": 17.2,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351912"),
  "OrderID": 10310,
  "ProductID": 16,
  "UnitPrice": 13.9,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351913"),
  "OrderID": 10310,
  "ProductID": 62,
  "UnitPrice": 39.4,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351914"),
  "OrderID": 10311,
  "ProductID": 42,
  "UnitPrice": 11.2,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351915"),
  "OrderID": 10311,
  "ProductID": 69,
  "UnitPrice": 28.8,
  "Quantity": 7,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351916"),
  "OrderID": 10312,
  "ProductID": 28,
  "UnitPrice": 36.4,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351917"),
  "OrderID": 10312,
  "ProductID": 43,
  "UnitPrice": 36.8,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351918"),
  "OrderID": 10312,
  "ProductID": 53,
  "UnitPrice": 26.2,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351919"),
  "OrderID": 10312,
  "ProductID": 75,
  "UnitPrice": 6.2,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635191a"),
  "OrderID": 10313,
  "ProductID": 36,
  "UnitPrice": 15.2,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635191b"),
  "OrderID": 10314,
  "ProductID": 32,
  "UnitPrice": 25.6,
  "Quantity": 40,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635191c"),
  "OrderID": 10314,
  "ProductID": 58,
  "UnitPrice": 10.6,
  "Quantity": 30,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635191d"),
  "OrderID": 10314,
  "ProductID": 62,
  "UnitPrice": 39.4,
  "Quantity": 25,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635191e"),
  "OrderID": 10315,
  "ProductID": 34,
  "UnitPrice": 11.2,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635191f"),
  "OrderID": 10315,
  "ProductID": 70,
  "UnitPrice": 12,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351920"),
  "OrderID": 10316,
  "ProductID": 41,
  "UnitPrice": 7.7,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351921"),
  "OrderID": 10316,
  "ProductID": 62,
  "UnitPrice": 39.4,
  "Quantity": 70,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351922"),
  "OrderID": 10317,
  "ProductID": 1,
  "UnitPrice": 14.4,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351923"),
  "OrderID": 10318,
  "ProductID": 41,
  "UnitPrice": 7.7,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351924"),
  "OrderID": 10318,
  "ProductID": 76,
  "UnitPrice": 14.4,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351925"),
  "OrderID": 10319,
  "ProductID": 17,
  "UnitPrice": 31.2,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351926"),
  "OrderID": 10319,
  "ProductID": 28,
  "UnitPrice": 36.4,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351927"),
  "OrderID": 10319,
  "ProductID": 76,
  "UnitPrice": 14.4,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351928"),
  "OrderID": 10320,
  "ProductID": 71,
  "UnitPrice": 17.2,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351929"),
  "OrderID": 10321,
  "ProductID": 35,
  "UnitPrice": 14.4,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635192a"),
  "OrderID": 10322,
  "ProductID": 52,
  "UnitPrice": 5.6,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635192b"),
  "OrderID": 10323,
  "ProductID": 15,
  "UnitPrice": 12.4,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635192c"),
  "OrderID": 10323,
  "ProductID": 25,
  "UnitPrice": 11.2,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635192d"),
  "OrderID": 10323,
  "ProductID": 39,
  "UnitPrice": 14.4,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635192e"),
  "OrderID": 10324,
  "ProductID": 16,
  "UnitPrice": 13.9,
  "Quantity": 21,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635192f"),
  "OrderID": 10324,
  "ProductID": 35,
  "UnitPrice": 14.4,
  "Quantity": 70,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351930"),
  "OrderID": 10324,
  "ProductID": 46,
  "UnitPrice": 9.6,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351931"),
  "OrderID": 10324,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 40,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351932"),
  "OrderID": 10324,
  "ProductID": 63,
  "UnitPrice": 35.1,
  "Quantity": 80,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351933"),
  "OrderID": 10325,
  "ProductID": 6,
  "UnitPrice": 20,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351934"),
  "OrderID": 10325,
  "ProductID": 13,
  "UnitPrice": 4.8,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351935"),
  "OrderID": 10325,
  "ProductID": 14,
  "UnitPrice": 18.6,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351936"),
  "OrderID": 10325,
  "ProductID": 31,
  "UnitPrice": 10,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351937"),
  "OrderID": 10325,
  "ProductID": 72,
  "UnitPrice": 27.8,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351938"),
  "OrderID": 10326,
  "ProductID": 4,
  "UnitPrice": 17.6,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351939"),
  "OrderID": 10326,
  "ProductID": 57,
  "UnitPrice": 15.6,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635193a"),
  "OrderID": 10326,
  "ProductID": 75,
  "UnitPrice": 6.2,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635193b"),
  "OrderID": 10327,
  "ProductID": 2,
  "UnitPrice": 15.2,
  "Quantity": 25,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635193c"),
  "OrderID": 10327,
  "ProductID": 11,
  "UnitPrice": 16.8,
  "Quantity": 50,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635193d"),
  "OrderID": 10327,
  "ProductID": 30,
  "UnitPrice": 20.7,
  "Quantity": 35,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635193e"),
  "OrderID": 10327,
  "ProductID": 58,
  "UnitPrice": 10.6,
  "Quantity": 30,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635193f"),
  "OrderID": 10328,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351940"),
  "OrderID": 10328,
  "ProductID": 65,
  "UnitPrice": 16.8,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351941"),
  "OrderID": 10328,
  "ProductID": 68,
  "UnitPrice": 10,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351942"),
  "OrderID": 10329,
  "ProductID": 19,
  "UnitPrice": 7.3,
  "Quantity": 10,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351943"),
  "OrderID": 10329,
  "ProductID": 30,
  "UnitPrice": 20.7,
  "Quantity": 8,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351944"),
  "OrderID": 10329,
  "ProductID": 38,
  "UnitPrice": 210.8,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351945"),
  "OrderID": 10329,
  "ProductID": 56,
  "UnitPrice": 30.4,
  "Quantity": 12,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351946"),
  "OrderID": 10330,
  "ProductID": 26,
  "UnitPrice": 24.9,
  "Quantity": 50,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351947"),
  "OrderID": 10330,
  "ProductID": 72,
  "UnitPrice": 27.8,
  "Quantity": 25,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351948"),
  "OrderID": 10331,
  "ProductID": 54,
  "UnitPrice": 5.9,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351949"),
  "OrderID": 10332,
  "ProductID": 18,
  "UnitPrice": 50,
  "Quantity": 40,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635194a"),
  "OrderID": 10332,
  "ProductID": 42,
  "UnitPrice": 11.2,
  "Quantity": 10,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635194b"),
  "OrderID": 10332,
  "ProductID": 47,
  "UnitPrice": 7.6,
  "Quantity": 16,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635194c"),
  "OrderID": 10333,
  "ProductID": 14,
  "UnitPrice": 18.6,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635194d"),
  "OrderID": 10333,
  "ProductID": 21,
  "UnitPrice": 8,
  "Quantity": 10,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635194e"),
  "OrderID": 10333,
  "ProductID": 71,
  "UnitPrice": 17.2,
  "Quantity": 40,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635194f"),
  "OrderID": 10334,
  "ProductID": 52,
  "UnitPrice": 5.6,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351950"),
  "OrderID": 10334,
  "ProductID": 68,
  "UnitPrice": 10,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351951"),
  "OrderID": 10335,
  "ProductID": 2,
  "UnitPrice": 15.2,
  "Quantity": 7,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351952"),
  "OrderID": 10335,
  "ProductID": 31,
  "UnitPrice": 10,
  "Quantity": 25,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351953"),
  "OrderID": 10335,
  "ProductID": 32,
  "UnitPrice": 25.6,
  "Quantity": 6,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351954"),
  "OrderID": 10335,
  "ProductID": 51,
  "UnitPrice": 42.4,
  "Quantity": 48,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351955"),
  "OrderID": 10336,
  "ProductID": 4,
  "UnitPrice": 17.6,
  "Quantity": 18,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351956"),
  "OrderID": 10337,
  "ProductID": 23,
  "UnitPrice": 7.2,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351957"),
  "OrderID": 10337,
  "ProductID": 26,
  "UnitPrice": 24.9,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351958"),
  "OrderID": 10337,
  "ProductID": 36,
  "UnitPrice": 15.2,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351959"),
  "OrderID": 10337,
  "ProductID": 37,
  "UnitPrice": 20.8,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635195a"),
  "OrderID": 10337,
  "ProductID": 72,
  "UnitPrice": 27.8,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635195b"),
  "OrderID": 10338,
  "ProductID": 17,
  "UnitPrice": 31.2,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635195c"),
  "OrderID": 10338,
  "ProductID": 30,
  "UnitPrice": 20.7,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635195d"),
  "OrderID": 10339,
  "ProductID": 4,
  "UnitPrice": 17.6,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635195e"),
  "OrderID": 10339,
  "ProductID": 17,
  "UnitPrice": 31.2,
  "Quantity": 70,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635195f"),
  "OrderID": 10339,
  "ProductID": 62,
  "UnitPrice": 39.4,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351960"),
  "OrderID": 10340,
  "ProductID": 18,
  "UnitPrice": 50,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351961"),
  "OrderID": 10340,
  "ProductID": 41,
  "UnitPrice": 7.7,
  "Quantity": 12,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351962"),
  "OrderID": 10340,
  "ProductID": 43,
  "UnitPrice": 36.8,
  "Quantity": 40,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351963"),
  "OrderID": 10341,
  "ProductID": 33,
  "UnitPrice": 2,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351964"),
  "OrderID": 10341,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 9,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351965"),
  "OrderID": 10342,
  "ProductID": 2,
  "UnitPrice": 15.2,
  "Quantity": 24,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351966"),
  "OrderID": 10342,
  "ProductID": 31,
  "UnitPrice": 10,
  "Quantity": 56,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351967"),
  "OrderID": 10342,
  "ProductID": 36,
  "UnitPrice": 15.2,
  "Quantity": 40,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351968"),
  "OrderID": 10342,
  "ProductID": 55,
  "UnitPrice": 19.2,
  "Quantity": 40,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b9433316351969"),
  "OrderID": 10343,
  "ProductID": 64,
  "UnitPrice": 26.6,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635196a"),
  "OrderID": 10343,
  "ProductID": 68,
  "UnitPrice": 10,
  "Quantity": 4,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635196b"),
  "OrderID": 10343,
  "ProductID": 76,
  "UnitPrice": 14.4,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c399b943331635196c"),
  "OrderID": 10344,
  "ProductID": 4,
  "UnitPrice": 17.6,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635196d"),
  "OrderID": 10344,
  "ProductID": 8,
  "UnitPrice": 32,
  "Quantity": 70,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635196e"),
  "OrderID": 10345,
  "ProductID": 8,
  "UnitPrice": 32,
  "Quantity": 70,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635196f"),
  "OrderID": 10345,
  "ProductID": 19,
  "UnitPrice": 7.3,
  "Quantity": 80,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351970"),
  "OrderID": 10345,
  "ProductID": 42,
  "UnitPrice": 11.2,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351971"),
  "OrderID": 10346,
  "ProductID": 17,
  "UnitPrice": 31.2,
  "Quantity": 36,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351972"),
  "OrderID": 10346,
  "ProductID": 56,
  "UnitPrice": 30.4,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351973"),
  "OrderID": 10347,
  "ProductID": 25,
  "UnitPrice": 11.2,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351974"),
  "OrderID": 10347,
  "ProductID": 39,
  "UnitPrice": 14.4,
  "Quantity": 50,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351975"),
  "OrderID": 10347,
  "ProductID": 40,
  "UnitPrice": 14.7,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351976"),
  "OrderID": 10347,
  "ProductID": 75,
  "UnitPrice": 6.2,
  "Quantity": 6,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351977"),
  "OrderID": 10348,
  "ProductID": 1,
  "UnitPrice": 14.4,
  "Quantity": 15,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351978"),
  "OrderID": 10348,
  "ProductID": 23,
  "UnitPrice": 7.2,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351979"),
  "OrderID": 10349,
  "ProductID": 54,
  "UnitPrice": 5.9,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635197a"),
  "OrderID": 10350,
  "ProductID": 50,
  "UnitPrice": 13,
  "Quantity": 15,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635197b"),
  "OrderID": 10350,
  "ProductID": 69,
  "UnitPrice": 28.8,
  "Quantity": 18,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635197c"),
  "OrderID": 10351,
  "ProductID": 38,
  "UnitPrice": 210.8,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635197d"),
  "OrderID": 10351,
  "ProductID": 41,
  "UnitPrice": 7.7,
  "Quantity": 13,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635197e"),
  "OrderID": 10351,
  "ProductID": 44,
  "UnitPrice": 15.5,
  "Quantity": 77,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635197f"),
  "OrderID": 10351,
  "ProductID": 65,
  "UnitPrice": 16.8,
  "Quantity": 10,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351980"),
  "OrderID": 10352,
  "ProductID": 24,
  "UnitPrice": 3.6,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351981"),
  "OrderID": 10352,
  "ProductID": 54,
  "UnitPrice": 5.9,
  "Quantity": 20,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351982"),
  "OrderID": 10353,
  "ProductID": 11,
  "UnitPrice": 16.8,
  "Quantity": 12,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351983"),
  "OrderID": 10353,
  "ProductID": 38,
  "UnitPrice": 210.8,
  "Quantity": 50,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351984"),
  "OrderID": 10354,
  "ProductID": 1,
  "UnitPrice": 14.4,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351985"),
  "OrderID": 10354,
  "ProductID": 29,
  "UnitPrice": 99,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351986"),
  "OrderID": 10355,
  "ProductID": 24,
  "UnitPrice": 3.6,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351987"),
  "OrderID": 10355,
  "ProductID": 57,
  "UnitPrice": 15.6,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351988"),
  "OrderID": 10356,
  "ProductID": 31,
  "UnitPrice": 10,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351989"),
  "OrderID": 10356,
  "ProductID": 55,
  "UnitPrice": 19.2,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635198a"),
  "OrderID": 10356,
  "ProductID": 69,
  "UnitPrice": 28.8,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635198b"),
  "OrderID": 10357,
  "ProductID": 10,
  "UnitPrice": 24.8,
  "Quantity": 30,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635198c"),
  "OrderID": 10357,
  "ProductID": 26,
  "UnitPrice": 24.9,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635198d"),
  "OrderID": 10357,
  "ProductID": 60,
  "UnitPrice": 27.2,
  "Quantity": 8,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635198e"),
  "OrderID": 10358,
  "ProductID": 24,
  "UnitPrice": 3.6,
  "Quantity": 10,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635198f"),
  "OrderID": 10358,
  "ProductID": 34,
  "UnitPrice": 11.2,
  "Quantity": 10,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351990"),
  "OrderID": 10358,
  "ProductID": 36,
  "UnitPrice": 15.2,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351991"),
  "OrderID": 10359,
  "ProductID": 16,
  "UnitPrice": 13.9,
  "Quantity": 56,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351992"),
  "OrderID": 10359,
  "ProductID": 31,
  "UnitPrice": 10,
  "Quantity": 70,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351993"),
  "OrderID": 10359,
  "ProductID": 60,
  "UnitPrice": 27.2,
  "Quantity": 80,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351994"),
  "OrderID": 10360,
  "ProductID": 28,
  "UnitPrice": 36.4,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351995"),
  "OrderID": 10360,
  "ProductID": 29,
  "UnitPrice": 99,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351996"),
  "OrderID": 10360,
  "ProductID": 38,
  "UnitPrice": 210.8,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351997"),
  "OrderID": 10360,
  "ProductID": 49,
  "UnitPrice": 16,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351998"),
  "OrderID": 10360,
  "ProductID": 54,
  "UnitPrice": 5.9,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351999"),
  "OrderID": 10361,
  "ProductID": 39,
  "UnitPrice": 14.4,
  "Quantity": 54,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635199a"),
  "OrderID": 10361,
  "ProductID": 60,
  "UnitPrice": 27.2,
  "Quantity": 55,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635199b"),
  "OrderID": 10362,
  "ProductID": 25,
  "UnitPrice": 11.2,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635199c"),
  "OrderID": 10362,
  "ProductID": 51,
  "UnitPrice": 42.4,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635199d"),
  "OrderID": 10362,
  "ProductID": 54,
  "UnitPrice": 5.9,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635199e"),
  "OrderID": 10363,
  "ProductID": 31,
  "UnitPrice": 10,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b943331635199f"),
  "OrderID": 10363,
  "ProductID": 75,
  "UnitPrice": 6.2,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519a0"),
  "OrderID": 10363,
  "ProductID": 76,
  "UnitPrice": 14.4,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519a1"),
  "OrderID": 10364,
  "ProductID": 69,
  "UnitPrice": 28.8,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519a2"),
  "OrderID": 10364,
  "ProductID": 71,
  "UnitPrice": 17.2,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519a3"),
  "OrderID": 10365,
  "ProductID": 11,
  "UnitPrice": 16.8,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519a4"),
  "OrderID": 10366,
  "ProductID": 65,
  "UnitPrice": 16.8,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519a5"),
  "OrderID": 10366,
  "ProductID": 77,
  "UnitPrice": 10.4,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519a6"),
  "OrderID": 10367,
  "ProductID": 34,
  "UnitPrice": 11.2,
  "Quantity": 36,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519a7"),
  "OrderID": 10367,
  "ProductID": 54,
  "UnitPrice": 5.9,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519a8"),
  "OrderID": 10367,
  "ProductID": 65,
  "UnitPrice": 16.8,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519a9"),
  "OrderID": 10367,
  "ProductID": 77,
  "UnitPrice": 10.4,
  "Quantity": 7,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519aa"),
  "OrderID": 10368,
  "ProductID": 21,
  "UnitPrice": 8,
  "Quantity": 5,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519ab"),
  "OrderID": 10368,
  "ProductID": 28,
  "UnitPrice": 36.4,
  "Quantity": 13,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519ac"),
  "OrderID": 10368,
  "ProductID": 57,
  "UnitPrice": 15.6,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519ad"),
  "OrderID": 10368,
  "ProductID": 64,
  "UnitPrice": 26.6,
  "Quantity": 35,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519ae"),
  "OrderID": 10369,
  "ProductID": 29,
  "UnitPrice": 99,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519af"),
  "OrderID": 10369,
  "ProductID": 56,
  "UnitPrice": 30.4,
  "Quantity": 18,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519b0"),
  "OrderID": 10370,
  "ProductID": 1,
  "UnitPrice": 14.4,
  "Quantity": 15,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519b1"),
  "OrderID": 10370,
  "ProductID": 64,
  "UnitPrice": 26.6,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519b2"),
  "OrderID": 10370,
  "ProductID": 74,
  "UnitPrice": 8,
  "Quantity": 20,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519b3"),
  "OrderID": 10371,
  "ProductID": 36,
  "UnitPrice": 15.2,
  "Quantity": 6,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519b4"),
  "OrderID": 10372,
  "ProductID": 20,
  "UnitPrice": 64.8,
  "Quantity": 12,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519b5"),
  "OrderID": 10372,
  "ProductID": 38,
  "UnitPrice": 210.8,
  "Quantity": 40,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519b6"),
  "OrderID": 10372,
  "ProductID": 60,
  "UnitPrice": 27.2,
  "Quantity": 70,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519b7"),
  "OrderID": 10372,
  "ProductID": 72,
  "UnitPrice": 27.8,
  "Quantity": 42,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519b8"),
  "OrderID": 10373,
  "ProductID": 58,
  "UnitPrice": 10.6,
  "Quantity": 80,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519b9"),
  "OrderID": 10373,
  "ProductID": 71,
  "UnitPrice": 17.2,
  "Quantity": 50,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519ba"),
  "OrderID": 10374,
  "ProductID": 31,
  "UnitPrice": 10,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519bb"),
  "OrderID": 10374,
  "ProductID": 58,
  "UnitPrice": 10.6,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519bc"),
  "OrderID": 10375,
  "ProductID": 14,
  "UnitPrice": 18.6,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519bd"),
  "OrderID": 10375,
  "ProductID": 54,
  "UnitPrice": 5.9,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519be"),
  "OrderID": 10376,
  "ProductID": 31,
  "UnitPrice": 10,
  "Quantity": 42,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519bf"),
  "OrderID": 10377,
  "ProductID": 28,
  "UnitPrice": 36.4,
  "Quantity": 20,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519c0"),
  "OrderID": 10377,
  "ProductID": 39,
  "UnitPrice": 14.4,
  "Quantity": 20,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519c1"),
  "OrderID": 10378,
  "ProductID": 71,
  "UnitPrice": 17.2,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519c2"),
  "OrderID": 10379,
  "ProductID": 41,
  "UnitPrice": 7.7,
  "Quantity": 8,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519c3"),
  "OrderID": 10379,
  "ProductID": 63,
  "UnitPrice": 35.1,
  "Quantity": 16,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519c4"),
  "OrderID": 10379,
  "ProductID": 65,
  "UnitPrice": 16.8,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519c5"),
  "OrderID": 10380,
  "ProductID": 30,
  "UnitPrice": 20.7,
  "Quantity": 18,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519c6"),
  "OrderID": 10380,
  "ProductID": 53,
  "UnitPrice": 26.2,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519c7"),
  "OrderID": 10380,
  "ProductID": 60,
  "UnitPrice": 27.2,
  "Quantity": 6,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519c8"),
  "OrderID": 10380,
  "ProductID": 70,
  "UnitPrice": 12,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519c9"),
  "OrderID": 10381,
  "ProductID": 74,
  "UnitPrice": 8,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519ca"),
  "OrderID": 10382,
  "ProductID": 5,
  "UnitPrice": 17,
  "Quantity": 32,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519cb"),
  "OrderID": 10382,
  "ProductID": 18,
  "UnitPrice": 50,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519cc"),
  "OrderID": 10382,
  "ProductID": 29,
  "UnitPrice": 99,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519cd"),
  "OrderID": 10382,
  "ProductID": 33,
  "UnitPrice": 2,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519ce"),
  "OrderID": 10382,
  "ProductID": 74,
  "UnitPrice": 8,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519cf"),
  "OrderID": 10383,
  "ProductID": 13,
  "UnitPrice": 4.8,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519d0"),
  "OrderID": 10383,
  "ProductID": 50,
  "UnitPrice": 13,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519d1"),
  "OrderID": 10383,
  "ProductID": 56,
  "UnitPrice": 30.4,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519d2"),
  "OrderID": 10384,
  "ProductID": 20,
  "UnitPrice": 64.8,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519d3"),
  "OrderID": 10384,
  "ProductID": 60,
  "UnitPrice": 27.2,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519d4"),
  "OrderID": 10385,
  "ProductID": 7,
  "UnitPrice": 24,
  "Quantity": 10,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519d5"),
  "OrderID": 10385,
  "ProductID": 60,
  "UnitPrice": 27.2,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519d6"),
  "OrderID": 10385,
  "ProductID": 68,
  "UnitPrice": 10,
  "Quantity": 8,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519d7"),
  "OrderID": 10386,
  "ProductID": 24,
  "UnitPrice": 3.6,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519d8"),
  "OrderID": 10386,
  "ProductID": 34,
  "UnitPrice": 11.2,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519d9"),
  "OrderID": 10387,
  "ProductID": 24,
  "UnitPrice": 3.6,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519da"),
  "OrderID": 10387,
  "ProductID": 28,
  "UnitPrice": 36.4,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519db"),
  "OrderID": 10387,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519dc"),
  "OrderID": 10387,
  "ProductID": 71,
  "UnitPrice": 17.2,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519dd"),
  "OrderID": 10388,
  "ProductID": 45,
  "UnitPrice": 7.6,
  "Quantity": 15,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519de"),
  "OrderID": 10388,
  "ProductID": 52,
  "UnitPrice": 5.6,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519df"),
  "OrderID": 10388,
  "ProductID": 53,
  "UnitPrice": 26.2,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519e0"),
  "OrderID": 10389,
  "ProductID": 10,
  "UnitPrice": 24.8,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519e1"),
  "OrderID": 10389,
  "ProductID": 55,
  "UnitPrice": 19.2,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519e2"),
  "OrderID": 10389,
  "ProductID": 62,
  "UnitPrice": 39.4,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519e3"),
  "OrderID": 10389,
  "ProductID": 70,
  "UnitPrice": 12,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519e4"),
  "OrderID": 10390,
  "ProductID": 31,
  "UnitPrice": 10,
  "Quantity": 60,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519e5"),
  "OrderID": 10390,
  "ProductID": 35,
  "UnitPrice": 14.4,
  "Quantity": 40,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519e6"),
  "OrderID": 10390,
  "ProductID": 46,
  "UnitPrice": 9.6,
  "Quantity": 45,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519e7"),
  "OrderID": 10390,
  "ProductID": 72,
  "UnitPrice": 27.8,
  "Quantity": 24,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519e8"),
  "OrderID": 10391,
  "ProductID": 13,
  "UnitPrice": 4.8,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519e9"),
  "OrderID": 10392,
  "ProductID": 69,
  "UnitPrice": 28.8,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519ea"),
  "OrderID": 10393,
  "ProductID": 2,
  "UnitPrice": 15.2,
  "Quantity": 25,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519eb"),
  "OrderID": 10393,
  "ProductID": 14,
  "UnitPrice": 18.6,
  "Quantity": 42,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519ec"),
  "OrderID": 10393,
  "ProductID": 25,
  "UnitPrice": 11.2,
  "Quantity": 7,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519ed"),
  "OrderID": 10393,
  "ProductID": 26,
  "UnitPrice": 24.9,
  "Quantity": 70,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519ee"),
  "OrderID": 10393,
  "ProductID": 31,
  "UnitPrice": 10,
  "Quantity": 32,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519ef"),
  "OrderID": 10394,
  "ProductID": 13,
  "UnitPrice": 4.8,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519f0"),
  "OrderID": 10394,
  "ProductID": 62,
  "UnitPrice": 39.4,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519f1"),
  "OrderID": 10395,
  "ProductID": 46,
  "UnitPrice": 9.6,
  "Quantity": 28,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519f2"),
  "OrderID": 10395,
  "ProductID": 53,
  "UnitPrice": 26.2,
  "Quantity": 70,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519f3"),
  "OrderID": 10395,
  "ProductID": 69,
  "UnitPrice": 28.8,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519f4"),
  "OrderID": 10396,
  "ProductID": 23,
  "UnitPrice": 7.2,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519f5"),
  "OrderID": 10396,
  "ProductID": 71,
  "UnitPrice": 17.2,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519f6"),
  "OrderID": 10396,
  "ProductID": 72,
  "UnitPrice": 27.8,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519f7"),
  "OrderID": 10397,
  "ProductID": 21,
  "UnitPrice": 8,
  "Quantity": 10,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519f8"),
  "OrderID": 10397,
  "ProductID": 51,
  "UnitPrice": 42.4,
  "Quantity": 18,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519f9"),
  "OrderID": 10398,
  "ProductID": 35,
  "UnitPrice": 14.4,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519fa"),
  "OrderID": 10398,
  "ProductID": 55,
  "UnitPrice": 19.2,
  "Quantity": 120,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519fb"),
  "OrderID": 10399,
  "ProductID": 68,
  "UnitPrice": 10,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519fc"),
  "OrderID": 10399,
  "ProductID": 71,
  "UnitPrice": 17.2,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519fd"),
  "OrderID": 10399,
  "ProductID": 76,
  "UnitPrice": 14.4,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519fe"),
  "OrderID": 10399,
  "ProductID": 77,
  "UnitPrice": 10.4,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b94333163519ff"),
  "OrderID": 10400,
  "ProductID": 29,
  "UnitPrice": 99,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a00"),
  "OrderID": 10400,
  "ProductID": 35,
  "UnitPrice": 14.4,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a01"),
  "OrderID": 10400,
  "ProductID": 49,
  "UnitPrice": 16,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a02"),
  "OrderID": 10401,
  "ProductID": 30,
  "UnitPrice": 20.7,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a03"),
  "OrderID": 10401,
  "ProductID": 56,
  "UnitPrice": 30.4,
  "Quantity": 70,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a04"),
  "OrderID": 10401,
  "ProductID": 65,
  "UnitPrice": 16.8,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a05"),
  "OrderID": 10401,
  "ProductID": 71,
  "UnitPrice": 17.2,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a06"),
  "OrderID": 10402,
  "ProductID": 23,
  "UnitPrice": 7.2,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a07"),
  "OrderID": 10402,
  "ProductID": 63,
  "UnitPrice": 35.1,
  "Quantity": 65,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a08"),
  "OrderID": 10403,
  "ProductID": 16,
  "UnitPrice": 13.9,
  "Quantity": 21,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a09"),
  "OrderID": 10403,
  "ProductID": 48,
  "UnitPrice": 10.2,
  "Quantity": 70,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a0a"),
  "OrderID": 10404,
  "ProductID": 26,
  "UnitPrice": 24.9,
  "Quantity": 30,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a0b"),
  "OrderID": 10404,
  "ProductID": 42,
  "UnitPrice": 11.2,
  "Quantity": 40,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a0c"),
  "OrderID": 10404,
  "ProductID": 49,
  "UnitPrice": 16,
  "Quantity": 30,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a0d"),
  "OrderID": 10405,
  "ProductID": 3,
  "UnitPrice": 8,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a0e"),
  "OrderID": 10406,
  "ProductID": 1,
  "UnitPrice": 14.4,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a0f"),
  "OrderID": 10406,
  "ProductID": 21,
  "UnitPrice": 8,
  "Quantity": 30,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a10"),
  "OrderID": 10406,
  "ProductID": 28,
  "UnitPrice": 36.4,
  "Quantity": 42,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a11"),
  "OrderID": 10406,
  "ProductID": 36,
  "UnitPrice": 15.2,
  "Quantity": 5,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a12"),
  "OrderID": 10406,
  "ProductID": 40,
  "UnitPrice": 14.7,
  "Quantity": 2,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a13"),
  "OrderID": 10407,
  "ProductID": 11,
  "UnitPrice": 16.8,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a14"),
  "OrderID": 10407,
  "ProductID": 69,
  "UnitPrice": 28.8,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a15"),
  "OrderID": 10407,
  "ProductID": 71,
  "UnitPrice": 17.2,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a16"),
  "OrderID": 10408,
  "ProductID": 37,
  "UnitPrice": 20.8,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a17"),
  "OrderID": 10408,
  "ProductID": 54,
  "UnitPrice": 5.9,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a18"),
  "OrderID": 10408,
  "ProductID": 62,
  "UnitPrice": 39.4,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a19"),
  "OrderID": 10409,
  "ProductID": 14,
  "UnitPrice": 18.6,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a1a"),
  "OrderID": 10409,
  "ProductID": 21,
  "UnitPrice": 8,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a1b"),
  "OrderID": 10410,
  "ProductID": 33,
  "UnitPrice": 2,
  "Quantity": 49,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a1c"),
  "OrderID": 10410,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a1d"),
  "OrderID": 10411,
  "ProductID": 41,
  "UnitPrice": 7.7,
  "Quantity": 25,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a1e"),
  "OrderID": 10411,
  "ProductID": 44,
  "UnitPrice": 15.5,
  "Quantity": 40,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a1f"),
  "OrderID": 10411,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 9,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a20"),
  "OrderID": 10412,
  "ProductID": 14,
  "UnitPrice": 18.6,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a21"),
  "OrderID": 10413,
  "ProductID": 1,
  "UnitPrice": 14.4,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a22"),
  "OrderID": 10413,
  "ProductID": 62,
  "UnitPrice": 39.4,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a23"),
  "OrderID": 10413,
  "ProductID": 76,
  "UnitPrice": 14.4,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a24"),
  "OrderID": 10414,
  "ProductID": 19,
  "UnitPrice": 7.3,
  "Quantity": 18,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a25"),
  "OrderID": 10414,
  "ProductID": 33,
  "UnitPrice": 2,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a26"),
  "OrderID": 10415,
  "ProductID": 17,
  "UnitPrice": 31.2,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a27"),
  "OrderID": 10415,
  "ProductID": 33,
  "UnitPrice": 2,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a28"),
  "OrderID": 10416,
  "ProductID": 19,
  "UnitPrice": 7.3,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a29"),
  "OrderID": 10416,
  "ProductID": 53,
  "UnitPrice": 26.2,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a2a"),
  "OrderID": 10416,
  "ProductID": 57,
  "UnitPrice": 15.6,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a2b"),
  "OrderID": 10417,
  "ProductID": 38,
  "UnitPrice": 210.8,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a2c"),
  "OrderID": 10417,
  "ProductID": 46,
  "UnitPrice": 9.6,
  "Quantity": 2,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a2d"),
  "OrderID": 10417,
  "ProductID": 68,
  "UnitPrice": 10,
  "Quantity": 36,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a2e"),
  "OrderID": 10417,
  "ProductID": 77,
  "UnitPrice": 10.4,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a2f"),
  "OrderID": 10418,
  "ProductID": 2,
  "UnitPrice": 15.2,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a30"),
  "OrderID": 10418,
  "ProductID": 47,
  "UnitPrice": 7.6,
  "Quantity": 55,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a31"),
  "OrderID": 10418,
  "ProductID": 61,
  "UnitPrice": 22.8,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a32"),
  "OrderID": 10418,
  "ProductID": 74,
  "UnitPrice": 8,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a33"),
  "OrderID": 10419,
  "ProductID": 60,
  "UnitPrice": 27.2,
  "Quantity": 60,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a34"),
  "OrderID": 10419,
  "ProductID": 69,
  "UnitPrice": 28.8,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a35"),
  "OrderID": 10420,
  "ProductID": 9,
  "UnitPrice": 77.6,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a36"),
  "OrderID": 10420,
  "ProductID": 13,
  "UnitPrice": 4.8,
  "Quantity": 2,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a37"),
  "OrderID": 10420,
  "ProductID": 70,
  "UnitPrice": 12,
  "Quantity": 8,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a38"),
  "OrderID": 10420,
  "ProductID": 73,
  "UnitPrice": 12,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a39"),
  "OrderID": 10421,
  "ProductID": 19,
  "UnitPrice": 7.3,
  "Quantity": 4,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a3a"),
  "OrderID": 10421,
  "ProductID": 26,
  "UnitPrice": 24.9,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a3b"),
  "OrderID": 10421,
  "ProductID": 53,
  "UnitPrice": 26.2,
  "Quantity": 15,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a3c"),
  "OrderID": 10421,
  "ProductID": 77,
  "UnitPrice": 10.4,
  "Quantity": 10,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a3d"),
  "OrderID": 10422,
  "ProductID": 26,
  "UnitPrice": 24.9,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a3e"),
  "OrderID": 10423,
  "ProductID": 31,
  "UnitPrice": 10,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a3f"),
  "OrderID": 10423,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a40"),
  "OrderID": 10424,
  "ProductID": 35,
  "UnitPrice": 14.4,
  "Quantity": 60,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a41"),
  "OrderID": 10424,
  "ProductID": 38,
  "UnitPrice": 210.8,
  "Quantity": 49,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a42"),
  "OrderID": 10424,
  "ProductID": 68,
  "UnitPrice": 10,
  "Quantity": 30,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a43"),
  "OrderID": 10425,
  "ProductID": 55,
  "UnitPrice": 19.2,
  "Quantity": 10,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a44"),
  "OrderID": 10425,
  "ProductID": 76,
  "UnitPrice": 14.4,
  "Quantity": 20,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a45"),
  "OrderID": 10426,
  "ProductID": 56,
  "UnitPrice": 30.4,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a46"),
  "OrderID": 10426,
  "ProductID": 64,
  "UnitPrice": 26.6,
  "Quantity": 7,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a47"),
  "OrderID": 10427,
  "ProductID": 14,
  "UnitPrice": 18.6,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a48"),
  "OrderID": 10428,
  "ProductID": 46,
  "UnitPrice": 9.6,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a49"),
  "OrderID": 10429,
  "ProductID": 50,
  "UnitPrice": 13,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a4a"),
  "OrderID": 10429,
  "ProductID": 63,
  "UnitPrice": 35.1,
  "Quantity": 35,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a4b"),
  "OrderID": 10430,
  "ProductID": 17,
  "UnitPrice": 31.2,
  "Quantity": 45,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a4c"),
  "OrderID": 10430,
  "ProductID": 21,
  "UnitPrice": 8,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a4d"),
  "OrderID": 10430,
  "ProductID": 56,
  "UnitPrice": 30.4,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a4e"),
  "OrderID": 10430,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 70,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a4f"),
  "OrderID": 10431,
  "ProductID": 17,
  "UnitPrice": 31.2,
  "Quantity": 50,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a50"),
  "OrderID": 10431,
  "ProductID": 40,
  "UnitPrice": 14.7,
  "Quantity": 50,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a51"),
  "OrderID": 10431,
  "ProductID": 47,
  "UnitPrice": 7.6,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a52"),
  "OrderID": 10432,
  "ProductID": 26,
  "UnitPrice": 24.9,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a53"),
  "OrderID": 10432,
  "ProductID": 54,
  "UnitPrice": 5.9,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a54"),
  "OrderID": 10433,
  "ProductID": 56,
  "UnitPrice": 30.4,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a55"),
  "OrderID": 10434,
  "ProductID": 11,
  "UnitPrice": 16.8,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a56"),
  "OrderID": 10434,
  "ProductID": 76,
  "UnitPrice": 14.4,
  "Quantity": 18,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a57"),
  "OrderID": 10435,
  "ProductID": 2,
  "UnitPrice": 15.2,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a58"),
  "OrderID": 10435,
  "ProductID": 22,
  "UnitPrice": 16.8,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a59"),
  "OrderID": 10435,
  "ProductID": 72,
  "UnitPrice": 27.8,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a5a"),
  "OrderID": 10436,
  "ProductID": 46,
  "UnitPrice": 9.6,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a5b"),
  "OrderID": 10436,
  "ProductID": 56,
  "UnitPrice": 30.4,
  "Quantity": 40,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a5c"),
  "OrderID": 10436,
  "ProductID": 64,
  "UnitPrice": 26.6,
  "Quantity": 30,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a5d"),
  "OrderID": 10436,
  "ProductID": 75,
  "UnitPrice": 6.2,
  "Quantity": 24,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a5e"),
  "OrderID": 10437,
  "ProductID": 53,
  "UnitPrice": 26.2,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a5f"),
  "OrderID": 10438,
  "ProductID": 19,
  "UnitPrice": 7.3,
  "Quantity": 15,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a60"),
  "OrderID": 10438,
  "ProductID": 34,
  "UnitPrice": 11.2,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a61"),
  "OrderID": 10438,
  "ProductID": 57,
  "UnitPrice": 15.6,
  "Quantity": 15,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a62"),
  "OrderID": 10439,
  "ProductID": 12,
  "UnitPrice": 30.4,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a63"),
  "OrderID": 10439,
  "ProductID": 16,
  "UnitPrice": 13.9,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a64"),
  "OrderID": 10439,
  "ProductID": 64,
  "UnitPrice": 26.6,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a65"),
  "OrderID": 10439,
  "ProductID": 74,
  "UnitPrice": 8,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a66"),
  "OrderID": 10440,
  "ProductID": 2,
  "UnitPrice": 15.2,
  "Quantity": 45,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a67"),
  "OrderID": 10440,
  "ProductID": 16,
  "UnitPrice": 13.9,
  "Quantity": 49,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a68"),
  "OrderID": 10440,
  "ProductID": 29,
  "UnitPrice": 99,
  "Quantity": 24,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a69"),
  "OrderID": 10440,
  "ProductID": 61,
  "UnitPrice": 22.8,
  "Quantity": 90,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a6a"),
  "OrderID": 10441,
  "ProductID": 27,
  "UnitPrice": 35.1,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a6b"),
  "OrderID": 10442,
  "ProductID": 11,
  "UnitPrice": 16.8,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a6c"),
  "OrderID": 10442,
  "ProductID": 54,
  "UnitPrice": 5.9,
  "Quantity": 80,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a6d"),
  "OrderID": 10442,
  "ProductID": 66,
  "UnitPrice": 13.6,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a6e"),
  "OrderID": 10443,
  "ProductID": 11,
  "UnitPrice": 16.8,
  "Quantity": 6,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a6f"),
  "OrderID": 10443,
  "ProductID": 28,
  "UnitPrice": 36.4,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a70"),
  "OrderID": 10444,
  "ProductID": 17,
  "UnitPrice": 31.2,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a71"),
  "OrderID": 10444,
  "ProductID": 26,
  "UnitPrice": 24.9,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a72"),
  "OrderID": 10444,
  "ProductID": 35,
  "UnitPrice": 14.4,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a73"),
  "OrderID": 10444,
  "ProductID": 41,
  "UnitPrice": 7.7,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a74"),
  "OrderID": 10445,
  "ProductID": 39,
  "UnitPrice": 14.4,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a75"),
  "OrderID": 10445,
  "ProductID": 54,
  "UnitPrice": 5.9,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a76"),
  "OrderID": 10446,
  "ProductID": 19,
  "UnitPrice": 7.3,
  "Quantity": 12,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a77"),
  "OrderID": 10446,
  "ProductID": 24,
  "UnitPrice": 3.6,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a78"),
  "OrderID": 10446,
  "ProductID": 31,
  "UnitPrice": 10,
  "Quantity": 3,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a79"),
  "OrderID": 10446,
  "ProductID": 52,
  "UnitPrice": 5.6,
  "Quantity": 15,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a7a"),
  "OrderID": 10447,
  "ProductID": 19,
  "UnitPrice": 7.3,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a7b"),
  "OrderID": 10447,
  "ProductID": 65,
  "UnitPrice": 16.8,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a7c"),
  "OrderID": 10447,
  "ProductID": 71,
  "UnitPrice": 17.2,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a7d"),
  "OrderID": 10448,
  "ProductID": 26,
  "UnitPrice": 24.9,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a7e"),
  "OrderID": 10448,
  "ProductID": 40,
  "UnitPrice": 14.7,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a7f"),
  "OrderID": 10449,
  "ProductID": 10,
  "UnitPrice": 24.8,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a80"),
  "OrderID": 10449,
  "ProductID": 52,
  "UnitPrice": 5.6,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a81"),
  "OrderID": 10449,
  "ProductID": 62,
  "UnitPrice": 39.4,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a82"),
  "OrderID": 10450,
  "ProductID": 10,
  "UnitPrice": 24.8,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a83"),
  "OrderID": 10450,
  "ProductID": 54,
  "UnitPrice": 5.9,
  "Quantity": 6,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a84"),
  "OrderID": 10451,
  "ProductID": 55,
  "UnitPrice": 19.2,
  "Quantity": 120,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a85"),
  "OrderID": 10451,
  "ProductID": 64,
  "UnitPrice": 26.6,
  "Quantity": 35,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a86"),
  "OrderID": 10451,
  "ProductID": 65,
  "UnitPrice": 16.8,
  "Quantity": 28,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a87"),
  "OrderID": 10451,
  "ProductID": 77,
  "UnitPrice": 10.4,
  "Quantity": 55,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a88"),
  "OrderID": 10452,
  "ProductID": 28,
  "UnitPrice": 36.4,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a89"),
  "OrderID": 10452,
  "ProductID": 44,
  "UnitPrice": 15.5,
  "Quantity": 100,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a8a"),
  "OrderID": 10453,
  "ProductID": 48,
  "UnitPrice": 10.2,
  "Quantity": 15,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a8b"),
  "OrderID": 10453,
  "ProductID": 70,
  "UnitPrice": 12,
  "Quantity": 25,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a8c"),
  "OrderID": 10454,
  "ProductID": 16,
  "UnitPrice": 13.9,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a8d"),
  "OrderID": 10454,
  "ProductID": 33,
  "UnitPrice": 2,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a8e"),
  "OrderID": 10454,
  "ProductID": 46,
  "UnitPrice": 9.6,
  "Quantity": 10,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a8f"),
  "OrderID": 10455,
  "ProductID": 39,
  "UnitPrice": 14.4,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a90"),
  "OrderID": 10455,
  "ProductID": 53,
  "UnitPrice": 26.2,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a91"),
  "OrderID": 10455,
  "ProductID": 61,
  "UnitPrice": 22.8,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a92"),
  "OrderID": 10455,
  "ProductID": 71,
  "UnitPrice": 17.2,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a93"),
  "OrderID": 10456,
  "ProductID": 21,
  "UnitPrice": 8,
  "Quantity": 40,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a94"),
  "OrderID": 10456,
  "ProductID": 49,
  "UnitPrice": 16,
  "Quantity": 21,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a95"),
  "OrderID": 10457,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 36,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a96"),
  "OrderID": 10458,
  "ProductID": 26,
  "UnitPrice": 24.9,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a97"),
  "OrderID": 10458,
  "ProductID": 28,
  "UnitPrice": 36.4,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a98"),
  "OrderID": 10458,
  "ProductID": 43,
  "UnitPrice": 36.8,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a99"),
  "OrderID": 10458,
  "ProductID": 56,
  "UnitPrice": 30.4,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a9a"),
  "OrderID": 10458,
  "ProductID": 71,
  "UnitPrice": 17.2,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a9b"),
  "OrderID": 10459,
  "ProductID": 7,
  "UnitPrice": 24,
  "Quantity": 16,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a9c"),
  "OrderID": 10459,
  "ProductID": 46,
  "UnitPrice": 9.6,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a9d"),
  "OrderID": 10459,
  "ProductID": 72,
  "UnitPrice": 27.8,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a9e"),
  "OrderID": 10460,
  "ProductID": 68,
  "UnitPrice": 10,
  "Quantity": 21,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351a9f"),
  "OrderID": 10460,
  "ProductID": 75,
  "UnitPrice": 6.2,
  "Quantity": 4,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aa0"),
  "OrderID": 10461,
  "ProductID": 21,
  "UnitPrice": 8,
  "Quantity": 40,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aa1"),
  "OrderID": 10461,
  "ProductID": 30,
  "UnitPrice": 20.7,
  "Quantity": 28,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aa2"),
  "OrderID": 10461,
  "ProductID": 55,
  "UnitPrice": 19.2,
  "Quantity": 60,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aa3"),
  "OrderID": 10462,
  "ProductID": 13,
  "UnitPrice": 4.8,
  "Quantity": 1,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aa4"),
  "OrderID": 10462,
  "ProductID": 23,
  "UnitPrice": 7.2,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aa5"),
  "OrderID": 10463,
  "ProductID": 19,
  "UnitPrice": 7.3,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aa6"),
  "OrderID": 10463,
  "ProductID": 42,
  "UnitPrice": 11.2,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aa7"),
  "OrderID": 10464,
  "ProductID": 4,
  "UnitPrice": 17.6,
  "Quantity": 16,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aa8"),
  "OrderID": 10464,
  "ProductID": 43,
  "UnitPrice": 36.8,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aa9"),
  "OrderID": 10464,
  "ProductID": 56,
  "UnitPrice": 30.4,
  "Quantity": 30,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aaa"),
  "OrderID": 10464,
  "ProductID": 60,
  "UnitPrice": 27.2,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aab"),
  "OrderID": 10465,
  "ProductID": 24,
  "UnitPrice": 3.6,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aac"),
  "OrderID": 10465,
  "ProductID": 29,
  "UnitPrice": 99,
  "Quantity": 18,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aad"),
  "OrderID": 10465,
  "ProductID": 40,
  "UnitPrice": 14.7,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aae"),
  "OrderID": 10465,
  "ProductID": 45,
  "UnitPrice": 7.6,
  "Quantity": 30,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aaf"),
  "OrderID": 10465,
  "ProductID": 50,
  "UnitPrice": 13,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ab0"),
  "OrderID": 10466,
  "ProductID": 11,
  "UnitPrice": 16.8,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ab1"),
  "OrderID": 10466,
  "ProductID": 46,
  "UnitPrice": 9.6,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ab2"),
  "OrderID": 10467,
  "ProductID": 24,
  "UnitPrice": 3.6,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ab3"),
  "OrderID": 10467,
  "ProductID": 25,
  "UnitPrice": 11.2,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ab4"),
  "OrderID": 10468,
  "ProductID": 30,
  "UnitPrice": 20.7,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ab5"),
  "OrderID": 10468,
  "ProductID": 43,
  "UnitPrice": 36.8,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ab6"),
  "OrderID": 10469,
  "ProductID": 2,
  "UnitPrice": 15.2,
  "Quantity": 40,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ab7"),
  "OrderID": 10469,
  "ProductID": 16,
  "UnitPrice": 13.9,
  "Quantity": 35,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ab8"),
  "OrderID": 10469,
  "ProductID": 44,
  "UnitPrice": 15.5,
  "Quantity": 2,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ab9"),
  "OrderID": 10470,
  "ProductID": 18,
  "UnitPrice": 50,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aba"),
  "OrderID": 10470,
  "ProductID": 23,
  "UnitPrice": 7.2,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351abb"),
  "OrderID": 10470,
  "ProductID": 64,
  "UnitPrice": 26.6,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351abc"),
  "OrderID": 10471,
  "ProductID": 7,
  "UnitPrice": 24,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351abd"),
  "OrderID": 10471,
  "ProductID": 56,
  "UnitPrice": 30.4,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351abe"),
  "OrderID": 10472,
  "ProductID": 24,
  "UnitPrice": 3.6,
  "Quantity": 80,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351abf"),
  "OrderID": 10472,
  "ProductID": 51,
  "UnitPrice": 42.4,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ac0"),
  "OrderID": 10473,
  "ProductID": 33,
  "UnitPrice": 2,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ac1"),
  "OrderID": 10473,
  "ProductID": 71,
  "UnitPrice": 17.2,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ac2"),
  "OrderID": 10474,
  "ProductID": 14,
  "UnitPrice": 18.6,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ac3"),
  "OrderID": 10474,
  "ProductID": 28,
  "UnitPrice": 36.4,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ac4"),
  "OrderID": 10474,
  "ProductID": 40,
  "UnitPrice": 14.7,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ac5"),
  "OrderID": 10474,
  "ProductID": 75,
  "UnitPrice": 6.2,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ac6"),
  "OrderID": 10475,
  "ProductID": 31,
  "UnitPrice": 10,
  "Quantity": 35,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ac7"),
  "OrderID": 10475,
  "ProductID": 66,
  "UnitPrice": 13.6,
  "Quantity": 60,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ac8"),
  "OrderID": 10475,
  "ProductID": 76,
  "UnitPrice": 14.4,
  "Quantity": 42,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ac9"),
  "OrderID": 10476,
  "ProductID": 55,
  "UnitPrice": 19.2,
  "Quantity": 2,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aca"),
  "OrderID": 10476,
  "ProductID": 70,
  "UnitPrice": 12,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351acb"),
  "OrderID": 10477,
  "ProductID": 1,
  "UnitPrice": 14.4,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351acc"),
  "OrderID": 10477,
  "ProductID": 21,
  "UnitPrice": 8,
  "Quantity": 21,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351acd"),
  "OrderID": 10477,
  "ProductID": 39,
  "UnitPrice": 14.4,
  "Quantity": 20,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ace"),
  "OrderID": 10478,
  "ProductID": 10,
  "UnitPrice": 24.8,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351acf"),
  "OrderID": 10479,
  "ProductID": 38,
  "UnitPrice": 210.8,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ad0"),
  "OrderID": 10479,
  "ProductID": 53,
  "UnitPrice": 26.2,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ad1"),
  "OrderID": 10479,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ad2"),
  "OrderID": 10479,
  "ProductID": 64,
  "UnitPrice": 26.6,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ad3"),
  "OrderID": 10480,
  "ProductID": 47,
  "UnitPrice": 7.6,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ad4"),
  "OrderID": 10480,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ad5"),
  "OrderID": 10481,
  "ProductID": 49,
  "UnitPrice": 16,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ad6"),
  "OrderID": 10481,
  "ProductID": 60,
  "UnitPrice": 27.2,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ad7"),
  "OrderID": 10482,
  "ProductID": 40,
  "UnitPrice": 14.7,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ad8"),
  "OrderID": 10483,
  "ProductID": 34,
  "UnitPrice": 11.2,
  "Quantity": 35,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ad9"),
  "OrderID": 10483,
  "ProductID": 77,
  "UnitPrice": 10.4,
  "Quantity": 30,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ada"),
  "OrderID": 10484,
  "ProductID": 21,
  "UnitPrice": 8,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351adb"),
  "OrderID": 10484,
  "ProductID": 40,
  "UnitPrice": 14.7,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351adc"),
  "OrderID": 10484,
  "ProductID": 51,
  "UnitPrice": 42.4,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351add"),
  "OrderID": 10485,
  "ProductID": 2,
  "UnitPrice": 15.2,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ade"),
  "OrderID": 10485,
  "ProductID": 3,
  "UnitPrice": 8,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351adf"),
  "OrderID": 10485,
  "ProductID": 55,
  "UnitPrice": 19.2,
  "Quantity": 30,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ae0"),
  "OrderID": 10485,
  "ProductID": 70,
  "UnitPrice": 12,
  "Quantity": 60,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ae1"),
  "OrderID": 10486,
  "ProductID": 11,
  "UnitPrice": 16.8,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ae2"),
  "OrderID": 10486,
  "ProductID": 51,
  "UnitPrice": 42.4,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ae3"),
  "OrderID": 10486,
  "ProductID": 74,
  "UnitPrice": 8,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ae4"),
  "OrderID": 10487,
  "ProductID": 19,
  "UnitPrice": 7.3,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ae5"),
  "OrderID": 10487,
  "ProductID": 26,
  "UnitPrice": 24.9,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ae6"),
  "OrderID": 10487,
  "ProductID": 54,
  "UnitPrice": 5.9,
  "Quantity": 24,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ae7"),
  "OrderID": 10488,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ae8"),
  "OrderID": 10488,
  "ProductID": 73,
  "UnitPrice": 12,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ae9"),
  "OrderID": 10489,
  "ProductID": 11,
  "UnitPrice": 16.8,
  "Quantity": 15,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aea"),
  "OrderID": 10489,
  "ProductID": 16,
  "UnitPrice": 13.9,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aeb"),
  "OrderID": 10490,
  "ProductID": 59,
  "UnitPrice": 44,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aec"),
  "OrderID": 10490,
  "ProductID": 68,
  "UnitPrice": 10,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aed"),
  "OrderID": 10490,
  "ProductID": 75,
  "UnitPrice": 6.2,
  "Quantity": 36,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aee"),
  "OrderID": 10491,
  "ProductID": 44,
  "UnitPrice": 15.5,
  "Quantity": 15,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aef"),
  "OrderID": 10491,
  "ProductID": 77,
  "UnitPrice": 10.4,
  "Quantity": 7,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351af0"),
  "OrderID": 10492,
  "ProductID": 25,
  "UnitPrice": 11.2,
  "Quantity": 60,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351af1"),
  "OrderID": 10492,
  "ProductID": 42,
  "UnitPrice": 11.2,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351af2"),
  "OrderID": 10493,
  "ProductID": 65,
  "UnitPrice": 16.8,
  "Quantity": 15,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351af3"),
  "OrderID": 10493,
  "ProductID": 66,
  "UnitPrice": 13.6,
  "Quantity": 10,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351af4"),
  "OrderID": 10493,
  "ProductID": 69,
  "UnitPrice": 28.8,
  "Quantity": 10,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351af5"),
  "OrderID": 10494,
  "ProductID": 56,
  "UnitPrice": 30.4,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351af6"),
  "OrderID": 10495,
  "ProductID": 23,
  "UnitPrice": 7.2,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351af7"),
  "OrderID": 10495,
  "ProductID": 41,
  "UnitPrice": 7.7,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351af8"),
  "OrderID": 10495,
  "ProductID": 77,
  "UnitPrice": 10.4,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351af9"),
  "OrderID": 10496,
  "ProductID": 31,
  "UnitPrice": 10,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351afa"),
  "OrderID": 10497,
  "ProductID": 56,
  "UnitPrice": 30.4,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351afb"),
  "OrderID": 10497,
  "ProductID": 72,
  "UnitPrice": 27.8,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351afc"),
  "OrderID": 10497,
  "ProductID": 77,
  "UnitPrice": 10.4,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351afd"),
  "OrderID": 10498,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351afe"),
  "OrderID": 10498,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351aff"),
  "OrderID": 10498,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b00"),
  "OrderID": 10499,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b01"),
  "OrderID": 10499,
  "ProductID": 49,
  "UnitPrice": 20,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b02"),
  "OrderID": 10500,
  "ProductID": 15,
  "UnitPrice": 15.5,
  "Quantity": 12,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b03"),
  "OrderID": 10500,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 8,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b04"),
  "OrderID": 10501,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b05"),
  "OrderID": 10502,
  "ProductID": 45,
  "UnitPrice": 9.5,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b06"),
  "OrderID": 10502,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b07"),
  "OrderID": 10502,
  "ProductID": 67,
  "UnitPrice": 14,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b08"),
  "OrderID": 10503,
  "ProductID": 14,
  "UnitPrice": 23.25,
  "Quantity": 70,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b09"),
  "OrderID": 10503,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b0a"),
  "OrderID": 10504,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b0b"),
  "OrderID": 10504,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b0c"),
  "OrderID": 10504,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b0d"),
  "OrderID": 10504,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b0e"),
  "OrderID": 10505,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b0f"),
  "OrderID": 10506,
  "ProductID": 25,
  "UnitPrice": 14,
  "Quantity": 18,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b10"),
  "OrderID": 10506,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 14,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b11"),
  "OrderID": 10507,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 15,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b12"),
  "OrderID": 10507,
  "ProductID": 48,
  "UnitPrice": 12.75,
  "Quantity": 15,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b13"),
  "OrderID": 10508,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b14"),
  "OrderID": 10508,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b15"),
  "OrderID": 10509,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b16"),
  "OrderID": 10510,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 36,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b17"),
  "OrderID": 10510,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 36,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b18"),
  "OrderID": 10511,
  "ProductID": 4,
  "UnitPrice": 22,
  "Quantity": 50,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b19"),
  "OrderID": 10511,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 50,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b1a"),
  "OrderID": 10511,
  "ProductID": 8,
  "UnitPrice": 40,
  "Quantity": 10,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b1b"),
  "OrderID": 10512,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 10,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b1c"),
  "OrderID": 10512,
  "ProductID": 46,
  "UnitPrice": 12,
  "Quantity": 9,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b1d"),
  "OrderID": 10512,
  "ProductID": 47,
  "UnitPrice": 9.5,
  "Quantity": 6,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b1e"),
  "OrderID": 10512,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 12,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b1f"),
  "OrderID": 10513,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 40,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b20"),
  "OrderID": 10513,
  "ProductID": 32,
  "UnitPrice": 32,
  "Quantity": 50,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b21"),
  "OrderID": 10513,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 15,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b22"),
  "OrderID": 10514,
  "ProductID": 20,
  "UnitPrice": 81,
  "Quantity": 39,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b23"),
  "OrderID": 10514,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b24"),
  "OrderID": 10514,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 70,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b25"),
  "OrderID": 10514,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 39,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b26"),
  "OrderID": 10514,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b27"),
  "OrderID": 10515,
  "ProductID": 9,
  "UnitPrice": 97,
  "Quantity": 16,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b28"),
  "OrderID": 10515,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b29"),
  "OrderID": 10515,
  "ProductID": 27,
  "UnitPrice": 43.9,
  "Quantity": 120,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b2a"),
  "OrderID": 10515,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 16,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b2b"),
  "OrderID": 10515,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 84,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b2c"),
  "OrderID": 10516,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 25,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b2d"),
  "OrderID": 10516,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 80,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b2e"),
  "OrderID": 10516,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b2f"),
  "OrderID": 10517,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b30"),
  "OrderID": 10517,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b31"),
  "OrderID": 10517,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b32"),
  "OrderID": 10518,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b33"),
  "OrderID": 10518,
  "ProductID": 38,
  "UnitPrice": 263.5,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b34"),
  "OrderID": 10518,
  "ProductID": 44,
  "UnitPrice": 19.45,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b35"),
  "OrderID": 10519,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 16,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b36"),
  "OrderID": 10519,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b37"),
  "OrderID": 10519,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 10,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b38"),
  "OrderID": 10520,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b39"),
  "OrderID": 10520,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b3a"),
  "OrderID": 10521,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b3b"),
  "OrderID": 10521,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b3c"),
  "OrderID": 10521,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b3d"),
  "OrderID": 10522,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 40,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b3e"),
  "OrderID": 10522,
  "ProductID": 8,
  "UnitPrice": 40,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b3f"),
  "OrderID": 10522,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b40"),
  "OrderID": 10522,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 25,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b41"),
  "OrderID": 10523,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 25,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b42"),
  "OrderID": 10523,
  "ProductID": 20,
  "UnitPrice": 81,
  "Quantity": 15,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b43"),
  "OrderID": 10523,
  "ProductID": 37,
  "UnitPrice": 26,
  "Quantity": 18,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b44"),
  "OrderID": 10523,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 6,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b45"),
  "OrderID": 10524,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b46"),
  "OrderID": 10524,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b47"),
  "OrderID": 10524,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b48"),
  "OrderID": 10524,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b49"),
  "OrderID": 10525,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b4a"),
  "OrderID": 10525,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 15,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b4b"),
  "OrderID": 10526,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 8,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b4c"),
  "OrderID": 10526,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b4d"),
  "OrderID": 10526,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 30,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b4e"),
  "OrderID": 10527,
  "ProductID": 4,
  "UnitPrice": 22,
  "Quantity": 50,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b4f"),
  "OrderID": 10527,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 30,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b50"),
  "OrderID": 10528,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b51"),
  "OrderID": 10528,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 8,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b52"),
  "OrderID": 10528,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b53"),
  "OrderID": 10529,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b54"),
  "OrderID": 10529,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b55"),
  "OrderID": 10529,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b56"),
  "OrderID": 10530,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b57"),
  "OrderID": 10530,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b58"),
  "OrderID": 10530,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b59"),
  "OrderID": 10530,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b5a"),
  "OrderID": 10531,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b5b"),
  "OrderID": 10532,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b5c"),
  "OrderID": 10532,
  "ProductID": 66,
  "UnitPrice": 17,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b5d"),
  "OrderID": 10533,
  "ProductID": 4,
  "UnitPrice": 22,
  "Quantity": 50,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b5e"),
  "OrderID": 10533,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b5f"),
  "OrderID": 10533,
  "ProductID": 73,
  "UnitPrice": 15,
  "Quantity": 24,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b60"),
  "OrderID": 10534,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b61"),
  "OrderID": 10534,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 10,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b62"),
  "OrderID": 10534,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 10,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b63"),
  "OrderID": 10535,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 50,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b64"),
  "OrderID": 10535,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 10,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b65"),
  "OrderID": 10535,
  "ProductID": 57,
  "UnitPrice": 19.5,
  "Quantity": 5,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b66"),
  "OrderID": 10535,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 15,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b67"),
  "OrderID": 10536,
  "ProductID": 12,
  "UnitPrice": 38,
  "Quantity": 15,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b68"),
  "OrderID": 10536,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b69"),
  "OrderID": 10536,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b6a"),
  "OrderID": 10536,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 35,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b6b"),
  "OrderID": 10537,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b6c"),
  "OrderID": 10537,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b6d"),
  "OrderID": 10537,
  "ProductID": 58,
  "UnitPrice": 13.25,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b6e"),
  "OrderID": 10537,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b6f"),
  "OrderID": 10537,
  "ProductID": 73,
  "UnitPrice": 15,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b70"),
  "OrderID": 10538,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 7,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b71"),
  "OrderID": 10538,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 1,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b72"),
  "OrderID": 10539,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b73"),
  "OrderID": 10539,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b74"),
  "OrderID": 10539,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b75"),
  "OrderID": 10539,
  "ProductID": 49,
  "UnitPrice": 20,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b76"),
  "OrderID": 10540,
  "ProductID": 3,
  "UnitPrice": 10,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b77"),
  "OrderID": 10540,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b78"),
  "OrderID": 10540,
  "ProductID": 38,
  "UnitPrice": 263.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b79"),
  "OrderID": 10540,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b7a"),
  "OrderID": 10541,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 35,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b7b"),
  "OrderID": 10541,
  "ProductID": 38,
  "UnitPrice": 263.5,
  "Quantity": 4,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b7c"),
  "OrderID": 10541,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 36,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b7d"),
  "OrderID": 10541,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 9,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b7e"),
  "OrderID": 10542,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b7f"),
  "OrderID": 10542,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 24,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b80"),
  "OrderID": 10543,
  "ProductID": 12,
  "UnitPrice": 38,
  "Quantity": 30,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b81"),
  "OrderID": 10543,
  "ProductID": 23,
  "UnitPrice": 9,
  "Quantity": 70,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b82"),
  "OrderID": 10544,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 7,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b83"),
  "OrderID": 10544,
  "ProductID": 67,
  "UnitPrice": 14,
  "Quantity": 7,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b84"),
  "OrderID": 10545,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b85"),
  "OrderID": 10546,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b86"),
  "OrderID": 10546,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b87"),
  "OrderID": 10546,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b88"),
  "OrderID": 10547,
  "ProductID": 32,
  "UnitPrice": 32,
  "Quantity": 24,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b89"),
  "OrderID": 10547,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b8a"),
  "OrderID": 10548,
  "ProductID": 34,
  "UnitPrice": 14,
  "Quantity": 10,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b8b"),
  "OrderID": 10548,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b8c"),
  "OrderID": 10549,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 55,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b8d"),
  "OrderID": 10549,
  "ProductID": 45,
  "UnitPrice": 9.5,
  "Quantity": 100,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b8e"),
  "OrderID": 10549,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 48,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b8f"),
  "OrderID": 10550,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 8,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b90"),
  "OrderID": 10550,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b91"),
  "OrderID": 10550,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 6,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b92"),
  "OrderID": 10550,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 10,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b93"),
  "OrderID": 10551,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 40,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b94"),
  "OrderID": 10551,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 20,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b95"),
  "OrderID": 10551,
  "ProductID": 44,
  "UnitPrice": 19.45,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b96"),
  "OrderID": 10552,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b97"),
  "OrderID": 10552,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b98"),
  "OrderID": 10553,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b99"),
  "OrderID": 10553,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b9a"),
  "OrderID": 10553,
  "ProductID": 22,
  "UnitPrice": 21,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b9b"),
  "OrderID": 10553,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b9c"),
  "OrderID": 10553,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b9d"),
  "OrderID": 10554,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 30,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b9e"),
  "OrderID": 10554,
  "ProductID": 23,
  "UnitPrice": 9,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351b9f"),
  "OrderID": 10554,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ba0"),
  "OrderID": 10554,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 10,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ba1"),
  "OrderID": 10555,
  "ProductID": 14,
  "UnitPrice": 23.25,
  "Quantity": 30,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ba2"),
  "OrderID": 10555,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 35,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ba3"),
  "OrderID": 10555,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 18,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ba4"),
  "OrderID": 10555,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ba5"),
  "OrderID": 10555,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 40,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ba6"),
  "OrderID": 10556,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ba7"),
  "OrderID": 10557,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ba8"),
  "OrderID": 10557,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351ba9"),
  "OrderID": 10558,
  "ProductID": 47,
  "UnitPrice": 9.5,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351baa"),
  "OrderID": 10558,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bab"),
  "OrderID": 10558,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bac"),
  "OrderID": 10558,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bad"),
  "OrderID": 10558,
  "ProductID": 73,
  "UnitPrice": 15,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bae"),
  "OrderID": 10559,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 12,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351baf"),
  "OrderID": 10559,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 18,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bb0"),
  "OrderID": 10560,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bb1"),
  "OrderID": 10560,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 15,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bb2"),
  "OrderID": 10561,
  "ProductID": 44,
  "UnitPrice": 19.45,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bb3"),
  "OrderID": 10561,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bb4"),
  "OrderID": 10562,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bb5"),
  "OrderID": 10562,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 10,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bb6"),
  "OrderID": 10563,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bb7"),
  "OrderID": 10563,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 70,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bb8"),
  "OrderID": 10564,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 16,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bb9"),
  "OrderID": 10564,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 6,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bba"),
  "OrderID": 10564,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 25,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bbb"),
  "OrderID": 10565,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 25,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bbc"),
  "OrderID": 10565,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 18,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bbd"),
  "OrderID": 10566,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 35,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bbe"),
  "OrderID": 10566,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 18,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bbf"),
  "OrderID": 10566,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bc0"),
  "OrderID": 10567,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 60,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bc1"),
  "OrderID": 10567,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bc2"),
  "OrderID": 10567,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 40,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bc3"),
  "OrderID": 10568,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c499b9433316351bc4"),
  "OrderID": 10569,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 35,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bc5"),
  "OrderID": 10569,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bc6"),
  "OrderID": 10570,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bc7"),
  "OrderID": 10570,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 60,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bc8"),
  "OrderID": 10571,
  "ProductID": 14,
  "UnitPrice": 23.25,
  "Quantity": 11,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bc9"),
  "OrderID": 10571,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 28,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bca"),
  "OrderID": 10572,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 12,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bcb"),
  "OrderID": 10572,
  "ProductID": 32,
  "UnitPrice": 32,
  "Quantity": 10,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bcc"),
  "OrderID": 10572,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bcd"),
  "OrderID": 10572,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 15,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bce"),
  "OrderID": 10573,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bcf"),
  "OrderID": 10573,
  "ProductID": 34,
  "UnitPrice": 14,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bd0"),
  "OrderID": 10573,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bd1"),
  "OrderID": 10574,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bd2"),
  "OrderID": 10574,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bd3"),
  "OrderID": 10574,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bd4"),
  "OrderID": 10574,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bd5"),
  "OrderID": 10575,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bd6"),
  "OrderID": 10575,
  "ProductID": 63,
  "UnitPrice": 43.9,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bd7"),
  "OrderID": 10575,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bd8"),
  "OrderID": 10575,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bd9"),
  "OrderID": 10576,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bda"),
  "OrderID": 10576,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bdb"),
  "OrderID": 10576,
  "ProductID": 44,
  "UnitPrice": 19.45,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bdc"),
  "OrderID": 10577,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bdd"),
  "OrderID": 10577,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bde"),
  "OrderID": 10577,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bdf"),
  "OrderID": 10578,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351be0"),
  "OrderID": 10578,
  "ProductID": 57,
  "UnitPrice": 19.5,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351be1"),
  "OrderID": 10579,
  "ProductID": 15,
  "UnitPrice": 15.5,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351be2"),
  "OrderID": 10579,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351be3"),
  "OrderID": 10580,
  "ProductID": 14,
  "UnitPrice": 23.25,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351be4"),
  "OrderID": 10580,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 9,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351be5"),
  "OrderID": 10580,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 30,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351be6"),
  "OrderID": 10581,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 50,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351be7"),
  "OrderID": 10582,
  "ProductID": 57,
  "UnitPrice": 19.5,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351be8"),
  "OrderID": 10582,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351be9"),
  "OrderID": 10583,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bea"),
  "OrderID": 10583,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 24,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351beb"),
  "OrderID": 10583,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 10,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bec"),
  "OrderID": 10584,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 50,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bed"),
  "OrderID": 10585,
  "ProductID": 47,
  "UnitPrice": 9.5,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bee"),
  "OrderID": 10586,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 4,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bef"),
  "OrderID": 10587,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bf0"),
  "OrderID": 10587,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bf1"),
  "OrderID": 10587,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bf2"),
  "OrderID": 10588,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 40,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bf3"),
  "OrderID": 10588,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 100,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bf4"),
  "OrderID": 10589,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bf5"),
  "OrderID": 10590,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bf6"),
  "OrderID": 10590,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 60,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bf7"),
  "OrderID": 10591,
  "ProductID": 3,
  "UnitPrice": 10,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bf8"),
  "OrderID": 10591,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bf9"),
  "OrderID": 10591,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bfa"),
  "OrderID": 10592,
  "ProductID": 15,
  "UnitPrice": 15.5,
  "Quantity": 25,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bfb"),
  "OrderID": 10592,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 5,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bfc"),
  "OrderID": 10593,
  "ProductID": 20,
  "UnitPrice": 81,
  "Quantity": 21,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bfd"),
  "OrderID": 10593,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bfe"),
  "OrderID": 10593,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 4,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351bff"),
  "OrderID": 10594,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c00"),
  "OrderID": 10594,
  "ProductID": 58,
  "UnitPrice": 13.25,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c01"),
  "OrderID": 10595,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c02"),
  "OrderID": 10595,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 120,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c03"),
  "OrderID": 10595,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 65,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c04"),
  "OrderID": 10596,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 5,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c05"),
  "OrderID": 10596,
  "ProductID": 63,
  "UnitPrice": 43.9,
  "Quantity": 24,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c06"),
  "OrderID": 10596,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 30,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c07"),
  "OrderID": 10597,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 35,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c08"),
  "OrderID": 10597,
  "ProductID": 57,
  "UnitPrice": 19.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c09"),
  "OrderID": 10597,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 12,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c0a"),
  "OrderID": 10598,
  "ProductID": 27,
  "UnitPrice": 43.9,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c0b"),
  "OrderID": 10598,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c0c"),
  "OrderID": 10599,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c0d"),
  "OrderID": 10600,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c0e"),
  "OrderID": 10600,
  "ProductID": 73,
  "UnitPrice": 15,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c0f"),
  "OrderID": 10601,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c10"),
  "OrderID": 10601,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c11"),
  "OrderID": 10602,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 5,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c12"),
  "OrderID": 10603,
  "ProductID": 22,
  "UnitPrice": 21,
  "Quantity": 48,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c13"),
  "OrderID": 10603,
  "ProductID": 49,
  "UnitPrice": 20,
  "Quantity": 25,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c14"),
  "OrderID": 10604,
  "ProductID": 48,
  "UnitPrice": 12.75,
  "Quantity": 6,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c15"),
  "OrderID": 10604,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 10,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c16"),
  "OrderID": 10605,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 30,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c17"),
  "OrderID": 10605,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c18"),
  "OrderID": 10605,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 70,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c19"),
  "OrderID": 10605,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c1a"),
  "OrderID": 10606,
  "ProductID": 4,
  "UnitPrice": 22,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c1b"),
  "OrderID": 10606,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c1c"),
  "OrderID": 10606,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 10,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c1d"),
  "OrderID": 10607,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 45,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c1e"),
  "OrderID": 10607,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 100,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c1f"),
  "OrderID": 10607,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c20"),
  "OrderID": 10607,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 42,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c21"),
  "OrderID": 10607,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c22"),
  "OrderID": 10608,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c23"),
  "OrderID": 10609,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c24"),
  "OrderID": 10609,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c25"),
  "OrderID": 10609,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c26"),
  "OrderID": 10610,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 21,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c27"),
  "OrderID": 10611,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c28"),
  "OrderID": 10611,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c29"),
  "OrderID": 10611,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c2a"),
  "OrderID": 10612,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 70,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c2b"),
  "OrderID": 10612,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 55,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c2c"),
  "OrderID": 10612,
  "ProductID": 49,
  "UnitPrice": 20,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c2d"),
  "OrderID": 10612,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c2e"),
  "OrderID": 10612,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 80,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c2f"),
  "OrderID": 10613,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 8,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c30"),
  "OrderID": 10613,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c31"),
  "OrderID": 10614,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c32"),
  "OrderID": 10614,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c33"),
  "OrderID": 10614,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c34"),
  "OrderID": 10615,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c35"),
  "OrderID": 10616,
  "ProductID": 38,
  "UnitPrice": 263.5,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c36"),
  "OrderID": 10616,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c37"),
  "OrderID": 10616,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c38"),
  "OrderID": 10616,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c39"),
  "OrderID": 10617,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 30,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c3a"),
  "OrderID": 10618,
  "ProductID": 6,
  "UnitPrice": 25,
  "Quantity": 70,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c3b"),
  "OrderID": 10618,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c3c"),
  "OrderID": 10618,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c3d"),
  "OrderID": 10619,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 42,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c3e"),
  "OrderID": 10619,
  "ProductID": 22,
  "UnitPrice": 21,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c3f"),
  "OrderID": 10620,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c40"),
  "OrderID": 10620,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c41"),
  "OrderID": 10621,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c42"),
  "OrderID": 10621,
  "ProductID": 23,
  "UnitPrice": 9,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c43"),
  "OrderID": 10621,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c44"),
  "OrderID": 10621,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c45"),
  "OrderID": 10622,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c46"),
  "OrderID": 10622,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 18,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c47"),
  "OrderID": 10623,
  "ProductID": 14,
  "UnitPrice": 23.25,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c48"),
  "OrderID": 10623,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 15,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c49"),
  "OrderID": 10623,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 25,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c4a"),
  "OrderID": 10623,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c4b"),
  "OrderID": 10623,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 30,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c4c"),
  "OrderID": 10624,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c4d"),
  "OrderID": 10624,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c4e"),
  "OrderID": 10624,
  "ProductID": 44,
  "UnitPrice": 19.45,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c4f"),
  "OrderID": 10625,
  "ProductID": 14,
  "UnitPrice": 23.25,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c50"),
  "OrderID": 10625,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c51"),
  "OrderID": 10625,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c52"),
  "OrderID": 10626,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c53"),
  "OrderID": 10626,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c54"),
  "OrderID": 10626,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c55"),
  "OrderID": 10627,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c56"),
  "OrderID": 10627,
  "ProductID": 73,
  "UnitPrice": 15,
  "Quantity": 35,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c57"),
  "OrderID": 10628,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c58"),
  "OrderID": 10629,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c59"),
  "OrderID": 10629,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c5a"),
  "OrderID": 10630,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 12,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c5b"),
  "OrderID": 10630,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c5c"),
  "OrderID": 10631,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 8,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c5d"),
  "OrderID": 10632,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 30,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c5e"),
  "OrderID": 10632,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c5f"),
  "OrderID": 10633,
  "ProductID": 12,
  "UnitPrice": 38,
  "Quantity": 36,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c60"),
  "OrderID": 10633,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 13,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c61"),
  "OrderID": 10633,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 35,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c62"),
  "OrderID": 10633,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 80,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c63"),
  "OrderID": 10634,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c64"),
  "OrderID": 10634,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c65"),
  "OrderID": 10634,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c66"),
  "OrderID": 10634,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c67"),
  "OrderID": 10635,
  "ProductID": 4,
  "UnitPrice": 22,
  "Quantity": 10,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c68"),
  "OrderID": 10635,
  "ProductID": 5,
  "UnitPrice": 21.35,
  "Quantity": 15,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c69"),
  "OrderID": 10635,
  "ProductID": 22,
  "UnitPrice": 21,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c6a"),
  "OrderID": 10636,
  "ProductID": 4,
  "UnitPrice": 22,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c6b"),
  "OrderID": 10636,
  "ProductID": 58,
  "UnitPrice": 13.25,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c6c"),
  "OrderID": 10637,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c6d"),
  "OrderID": 10637,
  "ProductID": 50,
  "UnitPrice": 16.25,
  "Quantity": 25,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c6e"),
  "OrderID": 10637,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 60,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c6f"),
  "OrderID": 10638,
  "ProductID": 45,
  "UnitPrice": 9.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c70"),
  "OrderID": 10638,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c71"),
  "OrderID": 10638,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c72"),
  "OrderID": 10639,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c73"),
  "OrderID": 10640,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 20,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c74"),
  "OrderID": 10640,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 15,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c75"),
  "OrderID": 10641,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c76"),
  "OrderID": 10641,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c77"),
  "OrderID": 10642,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 30,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c78"),
  "OrderID": 10642,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c79"),
  "OrderID": 10643,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 15,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c7a"),
  "OrderID": 10643,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 21,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c7b"),
  "OrderID": 10643,
  "ProductID": 46,
  "UnitPrice": 12,
  "Quantity": 2,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c7c"),
  "OrderID": 10644,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 4,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c7d"),
  "OrderID": 10644,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c7e"),
  "OrderID": 10644,
  "ProductID": 46,
  "UnitPrice": 12,
  "Quantity": 21,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c7f"),
  "OrderID": 10645,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c80"),
  "OrderID": 10645,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c81"),
  "OrderID": 10646,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 15,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c82"),
  "OrderID": 10646,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 18,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c83"),
  "OrderID": 10646,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c84"),
  "OrderID": 10646,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 35,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c85"),
  "OrderID": 10647,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c86"),
  "OrderID": 10647,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c87"),
  "OrderID": 10648,
  "ProductID": 22,
  "UnitPrice": 21,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c88"),
  "OrderID": 10648,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 15,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c89"),
  "OrderID": 10649,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c8a"),
  "OrderID": 10649,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c8b"),
  "OrderID": 10650,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c8c"),
  "OrderID": 10650,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 25,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c8d"),
  "OrderID": 10650,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c8e"),
  "OrderID": 10651,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 12,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c8f"),
  "OrderID": 10651,
  "ProductID": 22,
  "UnitPrice": 21,
  "Quantity": 20,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c90"),
  "OrderID": 10652,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 2,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c91"),
  "OrderID": 10652,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c92"),
  "OrderID": 10653,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 30,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c93"),
  "OrderID": 10653,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c94"),
  "OrderID": 10654,
  "ProductID": 4,
  "UnitPrice": 22,
  "Quantity": 12,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c95"),
  "OrderID": 10654,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c96"),
  "OrderID": 10654,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 6,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c97"),
  "OrderID": 10655,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c98"),
  "OrderID": 10656,
  "ProductID": 14,
  "UnitPrice": 23.25,
  "Quantity": 3,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c99"),
  "OrderID": 10656,
  "ProductID": 44,
  "UnitPrice": 19.45,
  "Quantity": 28,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c9a"),
  "OrderID": 10656,
  "ProductID": 47,
  "UnitPrice": 9.5,
  "Quantity": 6,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c9b"),
  "OrderID": 10657,
  "ProductID": 15,
  "UnitPrice": 15.5,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c9c"),
  "OrderID": 10657,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c9d"),
  "OrderID": 10657,
  "ProductID": 46,
  "UnitPrice": 12,
  "Quantity": 45,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c9e"),
  "OrderID": 10657,
  "ProductID": 47,
  "UnitPrice": 9.5,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351c9f"),
  "OrderID": 10657,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 45,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ca0"),
  "OrderID": 10657,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ca1"),
  "OrderID": 10658,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ca2"),
  "OrderID": 10658,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 70,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ca3"),
  "OrderID": 10658,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 55,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ca4"),
  "OrderID": 10658,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 70,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ca5"),
  "OrderID": 10659,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ca6"),
  "OrderID": 10659,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 24,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ca7"),
  "OrderID": 10659,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 40,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ca8"),
  "OrderID": 10660,
  "ProductID": 20,
  "UnitPrice": 81,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ca9"),
  "OrderID": 10661,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 3,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351caa"),
  "OrderID": 10661,
  "ProductID": 58,
  "UnitPrice": 13.25,
  "Quantity": 49,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cab"),
  "OrderID": 10662,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cac"),
  "OrderID": 10663,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 30,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cad"),
  "OrderID": 10663,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 30,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cae"),
  "OrderID": 10663,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351caf"),
  "OrderID": 10664,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 24,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cb0"),
  "OrderID": 10664,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 12,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cb1"),
  "OrderID": 10664,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 15,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cb2"),
  "OrderID": 10665,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cb3"),
  "OrderID": 10665,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 1,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cb4"),
  "OrderID": 10665,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cb5"),
  "OrderID": 10666,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 36,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cb6"),
  "OrderID": 10666,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cb7"),
  "OrderID": 10667,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 45,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cb8"),
  "OrderID": 10667,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 14,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cb9"),
  "OrderID": 10668,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 8,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cba"),
  "OrderID": 10668,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 4,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cbb"),
  "OrderID": 10668,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 15,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cbc"),
  "OrderID": 10669,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cbd"),
  "OrderID": 10670,
  "ProductID": 23,
  "UnitPrice": 9,
  "Quantity": 32,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cbe"),
  "OrderID": 10670,
  "ProductID": 46,
  "UnitPrice": 12,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cbf"),
  "OrderID": 10670,
  "ProductID": 67,
  "UnitPrice": 14,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cc0"),
  "OrderID": 10670,
  "ProductID": 73,
  "UnitPrice": 15,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cc1"),
  "OrderID": 10670,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cc2"),
  "OrderID": 10671,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cc3"),
  "OrderID": 10671,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cc4"),
  "OrderID": 10671,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cc5"),
  "OrderID": 10672,
  "ProductID": 38,
  "UnitPrice": 263.5,
  "Quantity": 15,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cc6"),
  "OrderID": 10672,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cc7"),
  "OrderID": 10673,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cc8"),
  "OrderID": 10673,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cc9"),
  "OrderID": 10673,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cca"),
  "OrderID": 10674,
  "ProductID": 23,
  "UnitPrice": 9,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ccb"),
  "OrderID": 10675,
  "ProductID": 14,
  "UnitPrice": 23.25,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ccc"),
  "OrderID": 10675,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ccd"),
  "OrderID": 10675,
  "ProductID": 58,
  "UnitPrice": 13.25,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cce"),
  "OrderID": 10676,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ccf"),
  "OrderID": 10676,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 7,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cd0"),
  "OrderID": 10676,
  "ProductID": 44,
  "UnitPrice": 19.45,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cd1"),
  "OrderID": 10677,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 30,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cd2"),
  "OrderID": 10677,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 8,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cd3"),
  "OrderID": 10678,
  "ProductID": 12,
  "UnitPrice": 38,
  "Quantity": 100,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cd4"),
  "OrderID": 10678,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cd5"),
  "OrderID": 10678,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 120,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cd6"),
  "OrderID": 10678,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cd7"),
  "OrderID": 10679,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cd8"),
  "OrderID": 10680,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 50,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cd9"),
  "OrderID": 10680,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 20,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cda"),
  "OrderID": 10680,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 40,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cdb"),
  "OrderID": 10681,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 30,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cdc"),
  "OrderID": 10681,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 12,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cdd"),
  "OrderID": 10681,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cde"),
  "OrderID": 10682,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cdf"),
  "OrderID": 10682,
  "ProductID": 66,
  "UnitPrice": 17,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ce0"),
  "OrderID": 10682,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ce1"),
  "OrderID": 10683,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ce2"),
  "OrderID": 10684,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ce3"),
  "OrderID": 10684,
  "ProductID": 47,
  "UnitPrice": 9.5,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ce4"),
  "OrderID": 10684,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ce5"),
  "OrderID": 10685,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ce6"),
  "OrderID": 10685,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ce7"),
  "OrderID": 10685,
  "ProductID": 47,
  "UnitPrice": 9.5,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ce8"),
  "OrderID": 10686,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 30,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ce9"),
  "OrderID": 10686,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cea"),
  "OrderID": 10687,
  "ProductID": 9,
  "UnitPrice": 97,
  "Quantity": 50,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ceb"),
  "OrderID": 10687,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cec"),
  "OrderID": 10687,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 6,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ced"),
  "OrderID": 10688,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 18,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cee"),
  "OrderID": 10688,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 60,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cef"),
  "OrderID": 10688,
  "ProductID": 34,
  "UnitPrice": 14,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cf0"),
  "OrderID": 10689,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 35,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cf1"),
  "OrderID": 10690,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 20,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cf2"),
  "OrderID": 10690,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cf3"),
  "OrderID": 10691,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cf4"),
  "OrderID": 10691,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cf5"),
  "OrderID": 10691,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cf6"),
  "OrderID": 10691,
  "ProductID": 44,
  "UnitPrice": 19.45,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cf7"),
  "OrderID": 10691,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 48,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cf8"),
  "OrderID": 10692,
  "ProductID": 63,
  "UnitPrice": 43.9,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cf9"),
  "OrderID": 10693,
  "ProductID": 9,
  "UnitPrice": 97,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cfa"),
  "OrderID": 10693,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 60,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cfb"),
  "OrderID": 10693,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 30,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cfc"),
  "OrderID": 10693,
  "ProductID": 73,
  "UnitPrice": 15,
  "Quantity": 15,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cfd"),
  "OrderID": 10694,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 90,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cfe"),
  "OrderID": 10694,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351cff"),
  "OrderID": 10694,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d00"),
  "OrderID": 10695,
  "ProductID": 8,
  "UnitPrice": 40,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d01"),
  "OrderID": 10695,
  "ProductID": 12,
  "UnitPrice": 38,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d02"),
  "OrderID": 10695,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d03"),
  "OrderID": 10696,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d04"),
  "OrderID": 10696,
  "ProductID": 46,
  "UnitPrice": 12,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d05"),
  "OrderID": 10697,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 7,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d06"),
  "OrderID": 10697,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 9,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d07"),
  "OrderID": 10697,
  "ProductID": 58,
  "UnitPrice": 13.25,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d08"),
  "OrderID": 10697,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d09"),
  "OrderID": 10698,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d0a"),
  "OrderID": 10698,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 8,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d0b"),
  "OrderID": 10698,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 12,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d0c"),
  "OrderID": 10698,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 65,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d0d"),
  "OrderID": 10698,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 8,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d0e"),
  "OrderID": 10699,
  "ProductID": 47,
  "UnitPrice": 9.5,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d0f"),
  "OrderID": 10700,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 5,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d10"),
  "OrderID": 10700,
  "ProductID": 34,
  "UnitPrice": 14,
  "Quantity": 12,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d11"),
  "OrderID": 10700,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 40,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d12"),
  "OrderID": 10700,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 60,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d13"),
  "OrderID": 10701,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 42,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d14"),
  "OrderID": 10701,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 20,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d15"),
  "OrderID": 10701,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 35,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d16"),
  "OrderID": 10702,
  "ProductID": 3,
  "UnitPrice": 10,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d17"),
  "OrderID": 10702,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d18"),
  "OrderID": 10703,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d19"),
  "OrderID": 10703,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d1a"),
  "OrderID": 10703,
  "ProductID": 73,
  "UnitPrice": 15,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d1b"),
  "OrderID": 10704,
  "ProductID": 4,
  "UnitPrice": 22,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d1c"),
  "OrderID": 10704,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d1d"),
  "OrderID": 10704,
  "ProductID": 48,
  "UnitPrice": 12.75,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d1e"),
  "OrderID": 10705,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d1f"),
  "OrderID": 10705,
  "ProductID": 32,
  "UnitPrice": 32,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d20"),
  "OrderID": 10706,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d21"),
  "OrderID": 10706,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d22"),
  "OrderID": 10706,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d23"),
  "OrderID": 10707,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d24"),
  "OrderID": 10707,
  "ProductID": 57,
  "UnitPrice": 19.5,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d25"),
  "OrderID": 10707,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 28,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d26"),
  "OrderID": 10708,
  "ProductID": 5,
  "UnitPrice": 21.35,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d27"),
  "OrderID": 10708,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d28"),
  "OrderID": 10709,
  "ProductID": 8,
  "UnitPrice": 40,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d29"),
  "OrderID": 10709,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d2a"),
  "OrderID": 10709,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d2b"),
  "OrderID": 10710,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d2c"),
  "OrderID": 10710,
  "ProductID": 47,
  "UnitPrice": 9.5,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d2d"),
  "OrderID": 10711,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d2e"),
  "OrderID": 10711,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 42,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d2f"),
  "OrderID": 10711,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 120,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d30"),
  "OrderID": 10712,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 3,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d31"),
  "OrderID": 10712,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d32"),
  "OrderID": 10713,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d33"),
  "OrderID": 10713,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d34"),
  "OrderID": 10713,
  "ProductID": 45,
  "UnitPrice": 9.5,
  "Quantity": 110,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d35"),
  "OrderID": 10713,
  "ProductID": 46,
  "UnitPrice": 12,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d36"),
  "OrderID": 10714,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d37"),
  "OrderID": 10714,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 27,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d38"),
  "OrderID": 10714,
  "ProductID": 47,
  "UnitPrice": 9.5,
  "Quantity": 50,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d39"),
  "OrderID": 10714,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 18,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d3a"),
  "OrderID": 10714,
  "ProductID": 58,
  "UnitPrice": 13.25,
  "Quantity": 12,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d3b"),
  "OrderID": 10715,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d3c"),
  "OrderID": 10715,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d3d"),
  "OrderID": 10716,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d3e"),
  "OrderID": 10716,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 7,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d3f"),
  "OrderID": 10716,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d40"),
  "OrderID": 10717,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 32,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d41"),
  "OrderID": 10717,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d42"),
  "OrderID": 10717,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 25,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d43"),
  "OrderID": 10718,
  "ProductID": 12,
  "UnitPrice": 38,
  "Quantity": 36,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d44"),
  "OrderID": 10718,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d45"),
  "OrderID": 10718,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d46"),
  "OrderID": 10718,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d47"),
  "OrderID": 10719,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 12,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d48"),
  "OrderID": 10719,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 3,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d49"),
  "OrderID": 10719,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 40,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d4a"),
  "OrderID": 10720,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d4b"),
  "OrderID": 10720,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d4c"),
  "OrderID": 10721,
  "ProductID": 44,
  "UnitPrice": 19.45,
  "Quantity": 50,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d4d"),
  "OrderID": 10722,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d4e"),
  "OrderID": 10722,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d4f"),
  "OrderID": 10722,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 45,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d50"),
  "OrderID": 10722,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 42,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d51"),
  "OrderID": 10723,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d52"),
  "OrderID": 10724,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d53"),
  "OrderID": 10724,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d54"),
  "OrderID": 10725,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d55"),
  "OrderID": 10725,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d56"),
  "OrderID": 10725,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d57"),
  "OrderID": 10726,
  "ProductID": 4,
  "UnitPrice": 22,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d58"),
  "OrderID": 10726,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d59"),
  "OrderID": 10727,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d5a"),
  "OrderID": 10727,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 10,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d5b"),
  "OrderID": 10727,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 10,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d5c"),
  "OrderID": 10728,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d5d"),
  "OrderID": 10728,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d5e"),
  "OrderID": 10728,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d5f"),
  "OrderID": 10728,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d60"),
  "OrderID": 10729,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d61"),
  "OrderID": 10729,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d62"),
  "OrderID": 10729,
  "ProductID": 50,
  "UnitPrice": 16.25,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d63"),
  "OrderID": 10730,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d64"),
  "OrderID": 10730,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 3,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d65"),
  "OrderID": 10730,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 10,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d66"),
  "OrderID": 10731,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 40,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d67"),
  "OrderID": 10731,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 30,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d68"),
  "OrderID": 10732,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d69"),
  "OrderID": 10733,
  "ProductID": 14,
  "UnitPrice": 23.25,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d6a"),
  "OrderID": 10733,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d6b"),
  "OrderID": 10733,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d6c"),
  "OrderID": 10734,
  "ProductID": 6,
  "UnitPrice": 25,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d6d"),
  "OrderID": 10734,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d6e"),
  "OrderID": 10734,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d6f"),
  "OrderID": 10735,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d70"),
  "OrderID": 10735,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 2,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d71"),
  "OrderID": 10736,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d72"),
  "OrderID": 10736,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d73"),
  "OrderID": 10737,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d74"),
  "OrderID": 10737,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d75"),
  "OrderID": 10738,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d76"),
  "OrderID": 10739,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d77"),
  "OrderID": 10739,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d78"),
  "OrderID": 10740,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 5,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d79"),
  "OrderID": 10740,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 35,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d7a"),
  "OrderID": 10740,
  "ProductID": 45,
  "UnitPrice": 9.5,
  "Quantity": 40,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d7b"),
  "OrderID": 10740,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 14,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d7c"),
  "OrderID": 10741,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 15,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d7d"),
  "OrderID": 10742,
  "ProductID": 3,
  "UnitPrice": 10,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d7e"),
  "OrderID": 10742,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d7f"),
  "OrderID": 10742,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d80"),
  "OrderID": 10743,
  "ProductID": 46,
  "UnitPrice": 12,
  "Quantity": 28,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d81"),
  "OrderID": 10744,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 50,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d82"),
  "OrderID": 10745,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d83"),
  "OrderID": 10745,
  "ProductID": 44,
  "UnitPrice": 19.45,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d84"),
  "OrderID": 10745,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 45,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d85"),
  "OrderID": 10745,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 7,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d86"),
  "OrderID": 10746,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d87"),
  "OrderID": 10746,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d88"),
  "OrderID": 10746,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d89"),
  "OrderID": 10746,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d8a"),
  "OrderID": 10747,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d8b"),
  "OrderID": 10747,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d8c"),
  "OrderID": 10747,
  "ProductID": 63,
  "UnitPrice": 43.9,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d8d"),
  "OrderID": 10747,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d8e"),
  "OrderID": 10748,
  "ProductID": 23,
  "UnitPrice": 9,
  "Quantity": 44,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d8f"),
  "OrderID": 10748,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d90"),
  "OrderID": 10748,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d91"),
  "OrderID": 10749,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d92"),
  "OrderID": 10749,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d93"),
  "OrderID": 10749,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d94"),
  "OrderID": 10750,
  "ProductID": 14,
  "UnitPrice": 23.25,
  "Quantity": 5,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d95"),
  "OrderID": 10750,
  "ProductID": 45,
  "UnitPrice": 9.5,
  "Quantity": 40,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d96"),
  "OrderID": 10750,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 25,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d97"),
  "OrderID": 10751,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 12,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d98"),
  "OrderID": 10751,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d99"),
  "OrderID": 10751,
  "ProductID": 50,
  "UnitPrice": 16.25,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d9a"),
  "OrderID": 10751,
  "ProductID": 73,
  "UnitPrice": 15,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d9b"),
  "OrderID": 10752,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d9c"),
  "OrderID": 10752,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d9d"),
  "OrderID": 10753,
  "ProductID": 45,
  "UnitPrice": 9.5,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d9e"),
  "OrderID": 10753,
  "ProductID": 74,
  "UnitPrice": 10,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351d9f"),
  "OrderID": 10754,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351da0"),
  "OrderID": 10755,
  "ProductID": 47,
  "UnitPrice": 9.5,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351da1"),
  "OrderID": 10755,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351da2"),
  "OrderID": 10755,
  "ProductID": 57,
  "UnitPrice": 19.5,
  "Quantity": 14,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351da3"),
  "OrderID": 10755,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 25,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351da4"),
  "OrderID": 10756,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 21,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351da5"),
  "OrderID": 10756,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351da6"),
  "OrderID": 10756,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 6,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351da7"),
  "OrderID": 10756,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351da8"),
  "OrderID": 10757,
  "ProductID": 34,
  "UnitPrice": 14,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351da9"),
  "OrderID": 10757,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 7,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351daa"),
  "OrderID": 10757,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dab"),
  "OrderID": 10757,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dac"),
  "OrderID": 10758,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dad"),
  "OrderID": 10758,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dae"),
  "OrderID": 10758,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351daf"),
  "OrderID": 10759,
  "ProductID": 32,
  "UnitPrice": 32,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351db0"),
  "OrderID": 10760,
  "ProductID": 25,
  "UnitPrice": 14,
  "Quantity": 12,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351db1"),
  "OrderID": 10760,
  "ProductID": 27,
  "UnitPrice": 43.9,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351db2"),
  "OrderID": 10760,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351db3"),
  "OrderID": 10761,
  "ProductID": 25,
  "UnitPrice": 14,
  "Quantity": 35,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351db4"),
  "OrderID": 10761,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351db5"),
  "OrderID": 10762,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351db6"),
  "OrderID": 10762,
  "ProductID": 47,
  "UnitPrice": 9.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351db7"),
  "OrderID": 10762,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351db8"),
  "OrderID": 10762,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351db9"),
  "OrderID": 10763,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dba"),
  "OrderID": 10763,
  "ProductID": 22,
  "UnitPrice": 21,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dbb"),
  "OrderID": 10763,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dbc"),
  "OrderID": 10764,
  "ProductID": 3,
  "UnitPrice": 10,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dbd"),
  "OrderID": 10764,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 130,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dbe"),
  "OrderID": 10765,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 80,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dbf"),
  "OrderID": 10766,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dc0"),
  "OrderID": 10766,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dc1"),
  "OrderID": 10766,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dc2"),
  "OrderID": 10767,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dc3"),
  "OrderID": 10768,
  "ProductID": 22,
  "UnitPrice": 21,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dc4"),
  "OrderID": 10768,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dc5"),
  "OrderID": 10768,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dc6"),
  "OrderID": 10768,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dc7"),
  "OrderID": 10769,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 30,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dc8"),
  "OrderID": 10769,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dc9"),
  "OrderID": 10769,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dca"),
  "OrderID": 10769,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dcb"),
  "OrderID": 10770,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 15,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dcc"),
  "OrderID": 10771,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dcd"),
  "OrderID": 10772,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dce"),
  "OrderID": 10772,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dcf"),
  "OrderID": 10773,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 33,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dd0"),
  "OrderID": 10773,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 70,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dd1"),
  "OrderID": 10773,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 7,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dd2"),
  "OrderID": 10774,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 2,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dd3"),
  "OrderID": 10774,
  "ProductID": 66,
  "UnitPrice": 17,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dd4"),
  "OrderID": 10775,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dd5"),
  "OrderID": 10775,
  "ProductID": 67,
  "UnitPrice": 14,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dd6"),
  "OrderID": 10776,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 16,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dd7"),
  "OrderID": 10776,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 12,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dd8"),
  "OrderID": 10776,
  "ProductID": 45,
  "UnitPrice": 9.5,
  "Quantity": 27,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dd9"),
  "OrderID": 10776,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 120,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dda"),
  "OrderID": 10777,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ddb"),
  "OrderID": 10778,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ddc"),
  "OrderID": 10779,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ddd"),
  "OrderID": 10779,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dde"),
  "OrderID": 10780,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ddf"),
  "OrderID": 10780,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351de0"),
  "OrderID": 10781,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 3,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351de1"),
  "OrderID": 10781,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351de2"),
  "OrderID": 10781,
  "ProductID": 74,
  "UnitPrice": 10,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351de3"),
  "OrderID": 10782,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 1,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351de4"),
  "OrderID": 10783,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351de5"),
  "OrderID": 10783,
  "ProductID": 38,
  "UnitPrice": 263.5,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351de6"),
  "OrderID": 10784,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351de7"),
  "OrderID": 10784,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 2,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351de8"),
  "OrderID": 10784,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 30,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351de9"),
  "OrderID": 10785,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dea"),
  "OrderID": 10785,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351deb"),
  "OrderID": 10786,
  "ProductID": 8,
  "UnitPrice": 40,
  "Quantity": 30,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dec"),
  "OrderID": 10786,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 15,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351ded"),
  "OrderID": 10786,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 42,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dee"),
  "OrderID": 10787,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351def"),
  "OrderID": 10787,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351df0"),
  "OrderID": 10788,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 50,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351df1"),
  "OrderID": 10788,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 40,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351df2"),
  "OrderID": 10789,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351df3"),
  "OrderID": 10789,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351df4"),
  "OrderID": 10789,
  "ProductID": 63,
  "UnitPrice": 43.9,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351df5"),
  "OrderID": 10789,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351df6"),
  "OrderID": 10790,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 3,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351df7"),
  "OrderID": 10790,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 20,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351df8"),
  "OrderID": 10791,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 14,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351df9"),
  "OrderID": 10791,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dfa"),
  "OrderID": 10792,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dfb"),
  "OrderID": 10792,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dfc"),
  "OrderID": 10792,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dfd"),
  "OrderID": 10793,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dfe"),
  "OrderID": 10793,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351dff"),
  "OrderID": 10794,
  "ProductID": 14,
  "UnitPrice": 23.25,
  "Quantity": 15,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e00"),
  "OrderID": 10794,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 6,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e01"),
  "OrderID": 10795,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 65,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e02"),
  "OrderID": 10795,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 35,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e03"),
  "OrderID": 10796,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 21,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e04"),
  "OrderID": 10796,
  "ProductID": 44,
  "UnitPrice": 19.45,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e05"),
  "OrderID": 10796,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 35,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e06"),
  "OrderID": 10796,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 24,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e07"),
  "OrderID": 10797,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e08"),
  "OrderID": 10798,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e09"),
  "OrderID": 10798,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e0a"),
  "OrderID": 10799,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 20,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e0b"),
  "OrderID": 10799,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 20,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e0c"),
  "OrderID": 10799,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e0d"),
  "OrderID": 10800,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 50,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e0e"),
  "OrderID": 10800,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 10,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e0f"),
  "OrderID": 10800,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 7,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e10"),
  "OrderID": 10801,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 40,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e11"),
  "OrderID": 10801,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 20,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e12"),
  "OrderID": 10802,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 25,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e13"),
  "OrderID": 10802,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e14"),
  "OrderID": 10802,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 60,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e15"),
  "OrderID": 10802,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 5,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e16"),
  "OrderID": 10803,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 24,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e17"),
  "OrderID": 10803,
  "ProductID": 25,
  "UnitPrice": 14,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e18"),
  "OrderID": 10803,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e19"),
  "OrderID": 10804,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 36,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e1a"),
  "OrderID": 10804,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e1b"),
  "OrderID": 10804,
  "ProductID": 49,
  "UnitPrice": 20,
  "Quantity": 4,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e1c"),
  "OrderID": 10805,
  "ProductID": 34,
  "UnitPrice": 14,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e1d"),
  "OrderID": 10805,
  "ProductID": 38,
  "UnitPrice": 263.5,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e1e"),
  "OrderID": 10806,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 20,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e1f"),
  "OrderID": 10806,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e20"),
  "OrderID": 10806,
  "ProductID": 74,
  "UnitPrice": 10,
  "Quantity": 15,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e21"),
  "OrderID": 10807,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 1,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e22"),
  "OrderID": 10808,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 20,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e23"),
  "OrderID": 10808,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 50,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e24"),
  "OrderID": 10809,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e25"),
  "OrderID": 10810,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 7,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e26"),
  "OrderID": 10810,
  "ProductID": 25,
  "UnitPrice": 14,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e27"),
  "OrderID": 10810,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e28"),
  "OrderID": 10811,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e29"),
  "OrderID": 10811,
  "ProductID": 23,
  "UnitPrice": 9,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e2a"),
  "OrderID": 10811,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e2b"),
  "OrderID": 10812,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 16,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e2c"),
  "OrderID": 10812,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 40,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e2d"),
  "OrderID": 10812,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e2e"),
  "OrderID": 10813,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 12,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e2f"),
  "OrderID": 10813,
  "ProductID": 46,
  "UnitPrice": 12,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e30"),
  "OrderID": 10814,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e31"),
  "OrderID": 10814,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 20,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e32"),
  "OrderID": 10814,
  "ProductID": 48,
  "UnitPrice": 12.75,
  "Quantity": 8,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e33"),
  "OrderID": 10814,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 30,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e34"),
  "OrderID": 10815,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e35"),
  "OrderID": 10816,
  "ProductID": 38,
  "UnitPrice": 263.5,
  "Quantity": 30,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e36"),
  "OrderID": 10816,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e37"),
  "OrderID": 10817,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 40,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e38"),
  "OrderID": 10817,
  "ProductID": 38,
  "UnitPrice": 263.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e39"),
  "OrderID": 10817,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 60,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e3a"),
  "OrderID": 10817,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 25,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e3b"),
  "OrderID": 10818,
  "ProductID": 32,
  "UnitPrice": 32,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e3c"),
  "OrderID": 10818,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e3d"),
  "OrderID": 10819,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 7,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e3e"),
  "OrderID": 10819,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e3f"),
  "OrderID": 10820,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c599b9433316351e40"),
  "OrderID": 10821,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e41"),
  "OrderID": 10821,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e42"),
  "OrderID": 10822,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e43"),
  "OrderID": 10822,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e44"),
  "OrderID": 10823,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e45"),
  "OrderID": 10823,
  "ProductID": 57,
  "UnitPrice": 19.5,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e46"),
  "OrderID": 10823,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 40,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e47"),
  "OrderID": 10823,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 15,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e48"),
  "OrderID": 10824,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e49"),
  "OrderID": 10824,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e4a"),
  "OrderID": 10825,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e4b"),
  "OrderID": 10825,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e4c"),
  "OrderID": 10826,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e4d"),
  "OrderID": 10826,
  "ProductID": 57,
  "UnitPrice": 19.5,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e4e"),
  "OrderID": 10827,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e4f"),
  "OrderID": 10827,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e50"),
  "OrderID": 10828,
  "ProductID": 20,
  "UnitPrice": 81,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e51"),
  "OrderID": 10828,
  "ProductID": 38,
  "UnitPrice": 263.5,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e52"),
  "OrderID": 10829,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e53"),
  "OrderID": 10829,
  "ProductID": 8,
  "UnitPrice": 40,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e54"),
  "OrderID": 10829,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e55"),
  "OrderID": 10829,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e56"),
  "OrderID": 10830,
  "ProductID": 6,
  "UnitPrice": 25,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e57"),
  "OrderID": 10830,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e58"),
  "OrderID": 10830,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e59"),
  "OrderID": 10830,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e5a"),
  "OrderID": 10831,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e5b"),
  "OrderID": 10831,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e5c"),
  "OrderID": 10831,
  "ProductID": 38,
  "UnitPrice": 263.5,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e5d"),
  "OrderID": 10831,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e5e"),
  "OrderID": 10832,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 3,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e5f"),
  "OrderID": 10832,
  "ProductID": 25,
  "UnitPrice": 14,
  "Quantity": 10,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e60"),
  "OrderID": 10832,
  "ProductID": 44,
  "UnitPrice": 19.45,
  "Quantity": 16,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e61"),
  "OrderID": 10832,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e62"),
  "OrderID": 10833,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e63"),
  "OrderID": 10833,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 9,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e64"),
  "OrderID": 10833,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 9,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e65"),
  "OrderID": 10834,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 8,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e66"),
  "OrderID": 10834,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e67"),
  "OrderID": 10835,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e68"),
  "OrderID": 10835,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 2,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e69"),
  "OrderID": 10836,
  "ProductID": 22,
  "UnitPrice": 21,
  "Quantity": 52,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e6a"),
  "OrderID": 10836,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e6b"),
  "OrderID": 10836,
  "ProductID": 57,
  "UnitPrice": 19.5,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e6c"),
  "OrderID": 10836,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e6d"),
  "OrderID": 10836,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e6e"),
  "OrderID": 10837,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e6f"),
  "OrderID": 10837,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e70"),
  "OrderID": 10837,
  "ProductID": 47,
  "UnitPrice": 9.5,
  "Quantity": 40,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e71"),
  "OrderID": 10837,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 21,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e72"),
  "OrderID": 10838,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 4,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e73"),
  "OrderID": 10838,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 25,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e74"),
  "OrderID": 10838,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 50,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e75"),
  "OrderID": 10839,
  "ProductID": 58,
  "UnitPrice": 13.25,
  "Quantity": 30,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e76"),
  "OrderID": 10839,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 15,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e77"),
  "OrderID": 10840,
  "ProductID": 25,
  "UnitPrice": 14,
  "Quantity": 6,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e78"),
  "OrderID": 10840,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 10,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e79"),
  "OrderID": 10841,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e7a"),
  "OrderID": 10841,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e7b"),
  "OrderID": 10841,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e7c"),
  "OrderID": 10841,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e7d"),
  "OrderID": 10842,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e7e"),
  "OrderID": 10842,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e7f"),
  "OrderID": 10842,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e80"),
  "OrderID": 10842,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e81"),
  "OrderID": 10843,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 4,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e82"),
  "OrderID": 10844,
  "ProductID": 22,
  "UnitPrice": 21,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e83"),
  "OrderID": 10845,
  "ProductID": 23,
  "UnitPrice": 9,
  "Quantity": 70,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e84"),
  "OrderID": 10845,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 25,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e85"),
  "OrderID": 10845,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 42,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e86"),
  "OrderID": 10845,
  "ProductID": 58,
  "UnitPrice": 13.25,
  "Quantity": 60,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e87"),
  "OrderID": 10845,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 48,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e88"),
  "OrderID": 10846,
  "ProductID": 4,
  "UnitPrice": 22,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e89"),
  "OrderID": 10846,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e8a"),
  "OrderID": 10846,
  "ProductID": 74,
  "UnitPrice": 10,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e8b"),
  "OrderID": 10847,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 80,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e8c"),
  "OrderID": 10847,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 12,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e8d"),
  "OrderID": 10847,
  "ProductID": 37,
  "UnitPrice": 26,
  "Quantity": 60,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e8e"),
  "OrderID": 10847,
  "ProductID": 45,
  "UnitPrice": 9.5,
  "Quantity": 36,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e8f"),
  "OrderID": 10847,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 45,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e90"),
  "OrderID": 10847,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 55,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e91"),
  "OrderID": 10848,
  "ProductID": 5,
  "UnitPrice": 21.35,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e92"),
  "OrderID": 10848,
  "ProductID": 9,
  "UnitPrice": 97,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e93"),
  "OrderID": 10849,
  "ProductID": 3,
  "UnitPrice": 10,
  "Quantity": 49,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e94"),
  "OrderID": 10849,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 18,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e95"),
  "OrderID": 10850,
  "ProductID": 25,
  "UnitPrice": 14,
  "Quantity": 20,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e96"),
  "OrderID": 10850,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 4,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e97"),
  "OrderID": 10850,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 30,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e98"),
  "OrderID": 10851,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 5,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e99"),
  "OrderID": 10851,
  "ProductID": 25,
  "UnitPrice": 14,
  "Quantity": 10,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e9a"),
  "OrderID": 10851,
  "ProductID": 57,
  "UnitPrice": 19.5,
  "Quantity": 10,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e9b"),
  "OrderID": 10851,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 42,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e9c"),
  "OrderID": 10852,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e9d"),
  "OrderID": 10852,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e9e"),
  "OrderID": 10852,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351e9f"),
  "OrderID": 10853,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ea0"),
  "OrderID": 10854,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 100,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ea1"),
  "OrderID": 10854,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 65,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ea2"),
  "OrderID": 10855,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ea3"),
  "OrderID": 10855,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ea4"),
  "OrderID": 10855,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ea5"),
  "OrderID": 10855,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 15,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ea6"),
  "OrderID": 10856,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ea7"),
  "OrderID": 10856,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ea8"),
  "OrderID": 10857,
  "ProductID": 3,
  "UnitPrice": 10,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ea9"),
  "OrderID": 10857,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 35,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eaa"),
  "OrderID": 10857,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 10,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eab"),
  "OrderID": 10858,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eac"),
  "OrderID": 10858,
  "ProductID": 27,
  "UnitPrice": 43.9,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ead"),
  "OrderID": 10858,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eae"),
  "OrderID": 10859,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 40,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eaf"),
  "OrderID": 10859,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 35,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eb0"),
  "OrderID": 10859,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eb1"),
  "OrderID": 10860,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eb2"),
  "OrderID": 10860,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eb3"),
  "OrderID": 10861,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 42,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eb4"),
  "OrderID": 10861,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eb5"),
  "OrderID": 10861,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eb6"),
  "OrderID": 10861,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eb7"),
  "OrderID": 10861,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eb8"),
  "OrderID": 10862,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eb9"),
  "OrderID": 10862,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eba"),
  "OrderID": 10863,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 20,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ebb"),
  "OrderID": 10863,
  "ProductID": 58,
  "UnitPrice": 13.25,
  "Quantity": 12,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ebc"),
  "OrderID": 10864,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ebd"),
  "OrderID": 10864,
  "ProductID": 67,
  "UnitPrice": 14,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ebe"),
  "OrderID": 10865,
  "ProductID": 38,
  "UnitPrice": 263.5,
  "Quantity": 60,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ebf"),
  "OrderID": 10865,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 80,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ec0"),
  "OrderID": 10866,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 21,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ec1"),
  "OrderID": 10866,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 6,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ec2"),
  "OrderID": 10866,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 40,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ec3"),
  "OrderID": 10867,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ec4"),
  "OrderID": 10868,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ec5"),
  "OrderID": 10868,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ec6"),
  "OrderID": 10868,
  "ProductID": 49,
  "UnitPrice": 20,
  "Quantity": 42,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ec7"),
  "OrderID": 10869,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ec8"),
  "OrderID": 10869,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ec9"),
  "OrderID": 10869,
  "ProductID": 23,
  "UnitPrice": 9,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eca"),
  "OrderID": 10869,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ecb"),
  "OrderID": 10870,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ecc"),
  "OrderID": 10870,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ecd"),
  "OrderID": 10871,
  "ProductID": 6,
  "UnitPrice": 25,
  "Quantity": 50,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ece"),
  "OrderID": 10871,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 12,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ecf"),
  "OrderID": 10871,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 16,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ed0"),
  "OrderID": 10872,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 10,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ed1"),
  "OrderID": 10872,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ed2"),
  "OrderID": 10872,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ed3"),
  "OrderID": 10872,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 21,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ed4"),
  "OrderID": 10873,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ed5"),
  "OrderID": 10873,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ed6"),
  "OrderID": 10874,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ed7"),
  "OrderID": 10875,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ed8"),
  "OrderID": 10875,
  "ProductID": 47,
  "UnitPrice": 9.5,
  "Quantity": 21,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ed9"),
  "OrderID": 10875,
  "ProductID": 49,
  "UnitPrice": 20,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eda"),
  "OrderID": 10876,
  "ProductID": 46,
  "UnitPrice": 12,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351edb"),
  "OrderID": 10876,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351edc"),
  "OrderID": 10877,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351edd"),
  "OrderID": 10877,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ede"),
  "OrderID": 10878,
  "ProductID": 20,
  "UnitPrice": 81,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351edf"),
  "OrderID": 10879,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ee0"),
  "OrderID": 10879,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ee1"),
  "OrderID": 10879,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ee2"),
  "OrderID": 10880,
  "ProductID": 23,
  "UnitPrice": 9,
  "Quantity": 30,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ee3"),
  "OrderID": 10880,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 30,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ee4"),
  "OrderID": 10880,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 50,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ee5"),
  "OrderID": 10881,
  "ProductID": 73,
  "UnitPrice": 15,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ee6"),
  "OrderID": 10882,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ee7"),
  "OrderID": 10882,
  "ProductID": 49,
  "UnitPrice": 20,
  "Quantity": 20,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ee8"),
  "OrderID": 10882,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 32,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ee9"),
  "OrderID": 10883,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eea"),
  "OrderID": 10884,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 40,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eeb"),
  "OrderID": 10884,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 21,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eec"),
  "OrderID": 10884,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 12,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eed"),
  "OrderID": 10885,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eee"),
  "OrderID": 10885,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eef"),
  "OrderID": 10885,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ef0"),
  "OrderID": 10885,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ef1"),
  "OrderID": 10886,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 70,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ef2"),
  "OrderID": 10886,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ef3"),
  "OrderID": 10886,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ef4"),
  "OrderID": 10887,
  "ProductID": 25,
  "UnitPrice": 14,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ef5"),
  "OrderID": 10888,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ef6"),
  "OrderID": 10888,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ef7"),
  "OrderID": 10889,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ef8"),
  "OrderID": 10889,
  "ProductID": 38,
  "UnitPrice": 263.5,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ef9"),
  "OrderID": 10890,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351efa"),
  "OrderID": 10890,
  "ProductID": 34,
  "UnitPrice": 14,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351efb"),
  "OrderID": 10890,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351efc"),
  "OrderID": 10891,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351efd"),
  "OrderID": 10892,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 40,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351efe"),
  "OrderID": 10893,
  "ProductID": 8,
  "UnitPrice": 40,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351eff"),
  "OrderID": 10893,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f00"),
  "OrderID": 10893,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f01"),
  "OrderID": 10893,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f02"),
  "OrderID": 10893,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f03"),
  "OrderID": 10894,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 28,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f04"),
  "OrderID": 10894,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 50,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f05"),
  "OrderID": 10894,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 120,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f06"),
  "OrderID": 10895,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 110,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f07"),
  "OrderID": 10895,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 45,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f08"),
  "OrderID": 10895,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 91,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f09"),
  "OrderID": 10895,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 100,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f0a"),
  "OrderID": 10896,
  "ProductID": 45,
  "UnitPrice": 9.5,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f0b"),
  "OrderID": 10896,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f0c"),
  "OrderID": 10897,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 80,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f0d"),
  "OrderID": 10897,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 36,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f0e"),
  "OrderID": 10898,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f0f"),
  "OrderID": 10899,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 8,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f10"),
  "OrderID": 10900,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 3,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f11"),
  "OrderID": 10901,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f12"),
  "OrderID": 10901,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f13"),
  "OrderID": 10902,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 30,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f14"),
  "OrderID": 10902,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 6,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f15"),
  "OrderID": 10903,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f16"),
  "OrderID": 10903,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f17"),
  "OrderID": 10903,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f18"),
  "OrderID": 10904,
  "ProductID": 58,
  "UnitPrice": 13.25,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f19"),
  "OrderID": 10904,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f1a"),
  "OrderID": 10905,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f1b"),
  "OrderID": 10906,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f1c"),
  "OrderID": 10907,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f1d"),
  "OrderID": 10908,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f1e"),
  "OrderID": 10908,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 14,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f1f"),
  "OrderID": 10909,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f20"),
  "OrderID": 10909,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f21"),
  "OrderID": 10909,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f22"),
  "OrderID": 10910,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f23"),
  "OrderID": 10910,
  "ProductID": 49,
  "UnitPrice": 20,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f24"),
  "OrderID": 10910,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f25"),
  "OrderID": 10911,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f26"),
  "OrderID": 10911,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f27"),
  "OrderID": 10911,
  "ProductID": 67,
  "UnitPrice": 14,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f28"),
  "OrderID": 10912,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 40,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f29"),
  "OrderID": 10912,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 60,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f2a"),
  "OrderID": 10913,
  "ProductID": 4,
  "UnitPrice": 22,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f2b"),
  "OrderID": 10913,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 40,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f2c"),
  "OrderID": 10913,
  "ProductID": 58,
  "UnitPrice": 13.25,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f2d"),
  "OrderID": 10914,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f2e"),
  "OrderID": 10915,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f2f"),
  "OrderID": 10915,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f30"),
  "OrderID": 10915,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f31"),
  "OrderID": 10916,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f32"),
  "OrderID": 10916,
  "ProductID": 32,
  "UnitPrice": 32,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f33"),
  "OrderID": 10916,
  "ProductID": 57,
  "UnitPrice": 19.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f34"),
  "OrderID": 10917,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 1,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f35"),
  "OrderID": 10917,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f36"),
  "OrderID": 10918,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 60,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f37"),
  "OrderID": 10918,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 25,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f38"),
  "OrderID": 10919,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f39"),
  "OrderID": 10919,
  "ProductID": 25,
  "UnitPrice": 14,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f3a"),
  "OrderID": 10919,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f3b"),
  "OrderID": 10920,
  "ProductID": 50,
  "UnitPrice": 16.25,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f3c"),
  "OrderID": 10921,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f3d"),
  "OrderID": 10921,
  "ProductID": 63,
  "UnitPrice": 43.9,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f3e"),
  "OrderID": 10922,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f3f"),
  "OrderID": 10922,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f40"),
  "OrderID": 10923,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 10,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f41"),
  "OrderID": 10923,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 10,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f42"),
  "OrderID": 10923,
  "ProductID": 67,
  "UnitPrice": 14,
  "Quantity": 24,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f43"),
  "OrderID": 10924,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f44"),
  "OrderID": 10924,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 30,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f45"),
  "OrderID": 10924,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f46"),
  "OrderID": 10925,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 25,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f47"),
  "OrderID": 10925,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 12,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f48"),
  "OrderID": 10926,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f49"),
  "OrderID": 10926,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f4a"),
  "OrderID": 10926,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 7,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f4b"),
  "OrderID": 10926,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f4c"),
  "OrderID": 10927,
  "ProductID": 20,
  "UnitPrice": 81,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f4d"),
  "OrderID": 10927,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f4e"),
  "OrderID": 10927,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f4f"),
  "OrderID": 10928,
  "ProductID": 47,
  "UnitPrice": 9.5,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f50"),
  "OrderID": 10928,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f51"),
  "OrderID": 10929,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f52"),
  "OrderID": 10929,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 49,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f53"),
  "OrderID": 10929,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f54"),
  "OrderID": 10930,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 36,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f55"),
  "OrderID": 10930,
  "ProductID": 27,
  "UnitPrice": 43.9,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f56"),
  "OrderID": 10930,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 25,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f57"),
  "OrderID": 10930,
  "ProductID": 58,
  "UnitPrice": 13.25,
  "Quantity": 30,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f58"),
  "OrderID": 10931,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 42,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f59"),
  "OrderID": 10931,
  "ProductID": 57,
  "UnitPrice": 19.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f5a"),
  "OrderID": 10932,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 30,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f5b"),
  "OrderID": 10932,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 14,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f5c"),
  "OrderID": 10932,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f5d"),
  "OrderID": 10932,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f5e"),
  "OrderID": 10933,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f5f"),
  "OrderID": 10933,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f60"),
  "OrderID": 10934,
  "ProductID": 6,
  "UnitPrice": 25,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f61"),
  "OrderID": 10935,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f62"),
  "OrderID": 10935,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 4,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f63"),
  "OrderID": 10935,
  "ProductID": 23,
  "UnitPrice": 9,
  "Quantity": 8,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f64"),
  "OrderID": 10936,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 30,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f65"),
  "OrderID": 10937,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f66"),
  "OrderID": 10937,
  "ProductID": 34,
  "UnitPrice": 14,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f67"),
  "OrderID": 10938,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 20,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f68"),
  "OrderID": 10938,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 24,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f69"),
  "OrderID": 10938,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 49,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f6a"),
  "OrderID": 10938,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 35,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f6b"),
  "OrderID": 10939,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 10,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f6c"),
  "OrderID": 10939,
  "ProductID": 67,
  "UnitPrice": 14,
  "Quantity": 40,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f6d"),
  "OrderID": 10940,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f6e"),
  "OrderID": 10940,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f6f"),
  "OrderID": 10941,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 44,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f70"),
  "OrderID": 10941,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f71"),
  "OrderID": 10941,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 80,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f72"),
  "OrderID": 10941,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f73"),
  "OrderID": 10942,
  "ProductID": 49,
  "UnitPrice": 20,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f74"),
  "OrderID": 10943,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f75"),
  "OrderID": 10943,
  "ProductID": 22,
  "UnitPrice": 21,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f76"),
  "OrderID": 10943,
  "ProductID": 46,
  "UnitPrice": 12,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f77"),
  "OrderID": 10944,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 5,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f78"),
  "OrderID": 10944,
  "ProductID": 44,
  "UnitPrice": 19.45,
  "Quantity": 18,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f79"),
  "OrderID": 10944,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f7a"),
  "OrderID": 10945,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f7b"),
  "OrderID": 10945,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f7c"),
  "OrderID": 10946,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f7d"),
  "OrderID": 10946,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f7e"),
  "OrderID": 10946,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f7f"),
  "OrderID": 10947,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f80"),
  "OrderID": 10948,
  "ProductID": 50,
  "UnitPrice": 16.25,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f81"),
  "OrderID": 10948,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f82"),
  "OrderID": 10948,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f83"),
  "OrderID": 10949,
  "ProductID": 6,
  "UnitPrice": 25,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f84"),
  "OrderID": 10949,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f85"),
  "OrderID": 10949,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f86"),
  "OrderID": 10949,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f87"),
  "OrderID": 10950,
  "ProductID": 4,
  "UnitPrice": 22,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f88"),
  "OrderID": 10951,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f89"),
  "OrderID": 10951,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 6,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f8a"),
  "OrderID": 10951,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 50,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f8b"),
  "OrderID": 10952,
  "ProductID": 6,
  "UnitPrice": 25,
  "Quantity": 16,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f8c"),
  "OrderID": 10952,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f8d"),
  "OrderID": 10953,
  "ProductID": 20,
  "UnitPrice": 81,
  "Quantity": 50,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f8e"),
  "OrderID": 10953,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 50,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f8f"),
  "OrderID": 10954,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 28,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f90"),
  "OrderID": 10954,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 25,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f91"),
  "OrderID": 10954,
  "ProductID": 45,
  "UnitPrice": 9.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f92"),
  "OrderID": 10954,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 24,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f93"),
  "OrderID": 10955,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 12,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f94"),
  "OrderID": 10956,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f95"),
  "OrderID": 10956,
  "ProductID": 47,
  "UnitPrice": 9.5,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f96"),
  "OrderID": 10956,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f97"),
  "OrderID": 10957,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f98"),
  "OrderID": 10957,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f99"),
  "OrderID": 10957,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f9a"),
  "OrderID": 10958,
  "ProductID": 5,
  "UnitPrice": 21.35,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f9b"),
  "OrderID": 10958,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f9c"),
  "OrderID": 10958,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f9d"),
  "OrderID": 10959,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 20,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f9e"),
  "OrderID": 10960,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 10,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351f9f"),
  "OrderID": 10960,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fa0"),
  "OrderID": 10961,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 6,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fa1"),
  "OrderID": 10961,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fa2"),
  "OrderID": 10962,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 45,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fa3"),
  "OrderID": 10962,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 77,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fa4"),
  "OrderID": 10962,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fa5"),
  "OrderID": 10962,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fa6"),
  "OrderID": 10962,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 44,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fa7"),
  "OrderID": 10963,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 2,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fa8"),
  "OrderID": 10964,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fa9"),
  "OrderID": 10964,
  "ProductID": 38,
  "UnitPrice": 263.5,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351faa"),
  "OrderID": 10964,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fab"),
  "OrderID": 10965,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fac"),
  "OrderID": 10966,
  "ProductID": 37,
  "UnitPrice": 26,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fad"),
  "OrderID": 10966,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 12,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fae"),
  "OrderID": 10966,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 12,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351faf"),
  "OrderID": 10967,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fb0"),
  "OrderID": 10967,
  "ProductID": 49,
  "UnitPrice": 20,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fb1"),
  "OrderID": 10968,
  "ProductID": 12,
  "UnitPrice": 38,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fb2"),
  "OrderID": 10968,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fb3"),
  "OrderID": 10968,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fb4"),
  "OrderID": 10969,
  "ProductID": 46,
  "UnitPrice": 12,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fb5"),
  "OrderID": 10970,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 40,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fb6"),
  "OrderID": 10971,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fb7"),
  "OrderID": 10972,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fb8"),
  "OrderID": 10972,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 7,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fb9"),
  "OrderID": 10973,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fba"),
  "OrderID": 10973,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fbb"),
  "OrderID": 10973,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fbc"),
  "OrderID": 10974,
  "ProductID": 63,
  "UnitPrice": 43.9,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fbd"),
  "OrderID": 10975,
  "ProductID": 8,
  "UnitPrice": 40,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fbe"),
  "OrderID": 10975,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fbf"),
  "OrderID": 10976,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fc0"),
  "OrderID": 10977,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fc1"),
  "OrderID": 10977,
  "ProductID": 47,
  "UnitPrice": 9.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fc2"),
  "OrderID": 10977,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fc3"),
  "OrderID": 10977,
  "ProductID": 63,
  "UnitPrice": 43.9,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fc4"),
  "OrderID": 10978,
  "ProductID": 8,
  "UnitPrice": 40,
  "Quantity": 20,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fc5"),
  "OrderID": 10978,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 40,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fc6"),
  "OrderID": 10978,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fc7"),
  "OrderID": 10978,
  "ProductID": 44,
  "UnitPrice": 19.45,
  "Quantity": 6,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fc8"),
  "OrderID": 10979,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fc9"),
  "OrderID": 10979,
  "ProductID": 12,
  "UnitPrice": 38,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fca"),
  "OrderID": 10979,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 80,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fcb"),
  "OrderID": 10979,
  "ProductID": 27,
  "UnitPrice": 43.9,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fcc"),
  "OrderID": 10979,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fcd"),
  "OrderID": 10979,
  "ProductID": 63,
  "UnitPrice": 43.9,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fce"),
  "OrderID": 10980,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 40,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fcf"),
  "OrderID": 10981,
  "ProductID": 38,
  "UnitPrice": 263.5,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fd0"),
  "OrderID": 10982,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fd1"),
  "OrderID": 10982,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fd2"),
  "OrderID": 10983,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 84,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fd3"),
  "OrderID": 10983,
  "ProductID": 57,
  "UnitPrice": 19.5,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fd4"),
  "OrderID": 10984,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 55,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fd5"),
  "OrderID": 10984,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fd6"),
  "OrderID": 10984,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fd7"),
  "OrderID": 10985,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 36,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fd8"),
  "OrderID": 10985,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 8,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fd9"),
  "OrderID": 10985,
  "ProductID": 32,
  "UnitPrice": 32,
  "Quantity": 35,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fda"),
  "OrderID": 10986,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fdb"),
  "OrderID": 10986,
  "ProductID": 20,
  "UnitPrice": 81,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fdc"),
  "OrderID": 10986,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fdd"),
  "OrderID": 10986,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fde"),
  "OrderID": 10987,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fdf"),
  "OrderID": 10987,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fe0"),
  "OrderID": 10987,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fe1"),
  "OrderID": 10988,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fe2"),
  "OrderID": 10988,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 40,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fe3"),
  "OrderID": 10989,
  "ProductID": 6,
  "UnitPrice": 25,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fe4"),
  "OrderID": 10989,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fe5"),
  "OrderID": 10989,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fe6"),
  "OrderID": 10990,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 65,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fe7"),
  "OrderID": 10990,
  "ProductID": 34,
  "UnitPrice": 14,
  "Quantity": 60,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fe8"),
  "OrderID": 10990,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 65,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fe9"),
  "OrderID": 10990,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 66,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fea"),
  "OrderID": 10991,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 50,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351feb"),
  "OrderID": 10991,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 20,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fec"),
  "OrderID": 10991,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 90,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fed"),
  "OrderID": 10992,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fee"),
  "OrderID": 10993,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 50,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fef"),
  "OrderID": 10993,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 35,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ff0"),
  "OrderID": 10994,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 18,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ff1"),
  "OrderID": 10995,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ff2"),
  "OrderID": 10995,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ff3"),
  "OrderID": 10996,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ff4"),
  "OrderID": 10997,
  "ProductID": 32,
  "UnitPrice": 32,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ff5"),
  "OrderID": 10997,
  "ProductID": 46,
  "UnitPrice": 12,
  "Quantity": 20,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ff6"),
  "OrderID": 10997,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 20,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ff7"),
  "OrderID": 10998,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ff8"),
  "OrderID": 10998,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 7,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ff9"),
  "OrderID": 10998,
  "ProductID": 74,
  "UnitPrice": 10,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ffa"),
  "OrderID": 10998,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ffb"),
  "OrderID": 10999,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ffc"),
  "OrderID": 10999,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ffd"),
  "OrderID": 10999,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 21,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351ffe"),
  "OrderID": 11000,
  "ProductID": 4,
  "UnitPrice": 22,
  "Quantity": 25,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316351fff"),
  "OrderID": 11000,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352000"),
  "OrderID": 11000,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352001"),
  "OrderID": 11001,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352002"),
  "OrderID": 11001,
  "ProductID": 22,
  "UnitPrice": 21,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352003"),
  "OrderID": 11001,
  "ProductID": 46,
  "UnitPrice": 12,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352004"),
  "OrderID": 11001,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352005"),
  "OrderID": 11002,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 56,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352006"),
  "OrderID": 11002,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 15,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352007"),
  "OrderID": 11002,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 24,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352008"),
  "OrderID": 11002,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352009"),
  "OrderID": 11003,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635200a"),
  "OrderID": 11003,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635200b"),
  "OrderID": 11003,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635200c"),
  "OrderID": 11004,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635200d"),
  "OrderID": 11004,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635200e"),
  "OrderID": 11005,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635200f"),
  "OrderID": 11005,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352010"),
  "OrderID": 11006,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352011"),
  "OrderID": 11006,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 2,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352012"),
  "OrderID": 11007,
  "ProductID": 8,
  "UnitPrice": 40,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352013"),
  "OrderID": 11007,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352014"),
  "OrderID": 11007,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 14,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352015"),
  "OrderID": 11008,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 70,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352016"),
  "OrderID": 11008,
  "ProductID": 34,
  "UnitPrice": 14,
  "Quantity": 90,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352017"),
  "OrderID": 11008,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352018"),
  "OrderID": 11009,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352019"),
  "OrderID": 11009,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 18,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635201a"),
  "OrderID": 11009,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635201b"),
  "OrderID": 11010,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635201c"),
  "OrderID": 11010,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635201d"),
  "OrderID": 11011,
  "ProductID": 58,
  "UnitPrice": 13.25,
  "Quantity": 40,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635201e"),
  "OrderID": 11011,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635201f"),
  "OrderID": 11012,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 50,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352020"),
  "OrderID": 11012,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 36,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352021"),
  "OrderID": 11012,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 60,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352022"),
  "OrderID": 11013,
  "ProductID": 23,
  "UnitPrice": 9,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352023"),
  "OrderID": 11013,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352024"),
  "OrderID": 11013,
  "ProductID": 45,
  "UnitPrice": 9.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352025"),
  "OrderID": 11013,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352026"),
  "OrderID": 11014,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 28,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352027"),
  "OrderID": 11015,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352028"),
  "OrderID": 11015,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 18,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352029"),
  "OrderID": 11016,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635202a"),
  "OrderID": 11016,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635202b"),
  "OrderID": 11017,
  "ProductID": 3,
  "UnitPrice": 10,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635202c"),
  "OrderID": 11017,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 110,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635202d"),
  "OrderID": 11017,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635202e"),
  "OrderID": 11018,
  "ProductID": 12,
  "UnitPrice": 38,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635202f"),
  "OrderID": 11018,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352030"),
  "OrderID": 11018,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 5,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352031"),
  "OrderID": 11019,
  "ProductID": 46,
  "UnitPrice": 12,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352032"),
  "OrderID": 11019,
  "ProductID": 49,
  "UnitPrice": 20,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352033"),
  "OrderID": 11020,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 24,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352034"),
  "OrderID": 11021,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 11,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352035"),
  "OrderID": 11021,
  "ProductID": 20,
  "UnitPrice": 81,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352036"),
  "OrderID": 11021,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 63,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352037"),
  "OrderID": 11021,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 44,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352038"),
  "OrderID": 11021,
  "ProductID": 72,
  "UnitPrice": 34.8,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352039"),
  "OrderID": 11022,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635203a"),
  "OrderID": 11022,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635203b"),
  "OrderID": 11023,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635203c"),
  "OrderID": 11023,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635203d"),
  "OrderID": 11024,
  "ProductID": 26,
  "UnitPrice": 31.23,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635203e"),
  "OrderID": 11024,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635203f"),
  "OrderID": 11024,
  "ProductID": 65,
  "UnitPrice": 21.05,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352040"),
  "OrderID": 11024,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352041"),
  "OrderID": 11025,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 10,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352042"),
  "OrderID": 11025,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 20,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352043"),
  "OrderID": 11026,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352044"),
  "OrderID": 11026,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352045"),
  "OrderID": 11027,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352046"),
  "OrderID": 11027,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 21,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352047"),
  "OrderID": 11028,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352048"),
  "OrderID": 11028,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352049"),
  "OrderID": 11029,
  "ProductID": 56,
  "UnitPrice": 38,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635204a"),
  "OrderID": 11029,
  "ProductID": 63,
  "UnitPrice": 43.9,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635204b"),
  "OrderID": 11030,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 100,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635204c"),
  "OrderID": 11030,
  "ProductID": 5,
  "UnitPrice": 21.35,
  "Quantity": 70,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635204d"),
  "OrderID": 11030,
  "ProductID": 29,
  "UnitPrice": 123.79,
  "Quantity": 60,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635204e"),
  "OrderID": 11030,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 100,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635204f"),
  "OrderID": 11031,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 45,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352050"),
  "OrderID": 11031,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 80,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352051"),
  "OrderID": 11031,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352052"),
  "OrderID": 11031,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352053"),
  "OrderID": 11031,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 16,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352054"),
  "OrderID": 11032,
  "ProductID": 36,
  "UnitPrice": 19,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352055"),
  "OrderID": 11032,
  "ProductID": 38,
  "UnitPrice": 263.5,
  "Quantity": 25,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352056"),
  "OrderID": 11032,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352057"),
  "OrderID": 11033,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 70,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352058"),
  "OrderID": 11033,
  "ProductID": 69,
  "UnitPrice": 36,
  "Quantity": 36,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352059"),
  "OrderID": 11034,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 15,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635205a"),
  "OrderID": 11034,
  "ProductID": 44,
  "UnitPrice": 19.45,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635205b"),
  "OrderID": 11034,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 6,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635205c"),
  "OrderID": 11035,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635205d"),
  "OrderID": 11035,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635205e"),
  "OrderID": 11035,
  "ProductID": 42,
  "UnitPrice": 14,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635205f"),
  "OrderID": 11035,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352060"),
  "OrderID": 11036,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 7,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352061"),
  "OrderID": 11036,
  "ProductID": 59,
  "UnitPrice": 55,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352062"),
  "OrderID": 11037,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352063"),
  "OrderID": 11038,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 5,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352064"),
  "OrderID": 11038,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352065"),
  "OrderID": 11038,
  "ProductID": 71,
  "UnitPrice": 21.5,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352066"),
  "OrderID": 11039,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352067"),
  "OrderID": 11039,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352068"),
  "OrderID": 11039,
  "ProductID": 49,
  "UnitPrice": 20,
  "Quantity": 60,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352069"),
  "OrderID": 11039,
  "ProductID": 57,
  "UnitPrice": 19.5,
  "Quantity": 28,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635206a"),
  "OrderID": 11040,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635206b"),
  "OrderID": 11041,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 30,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635206c"),
  "OrderID": 11041,
  "ProductID": 63,
  "UnitPrice": 43.9,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635206d"),
  "OrderID": 11042,
  "ProductID": 44,
  "UnitPrice": 19.45,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635206e"),
  "OrderID": 11042,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635206f"),
  "OrderID": 11043,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352070"),
  "OrderID": 11044,
  "ProductID": 62,
  "UnitPrice": 49.3,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352071"),
  "OrderID": 11045,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352072"),
  "OrderID": 11045,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 24,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352073"),
  "OrderID": 11046,
  "ProductID": 12,
  "UnitPrice": 38,
  "Quantity": 20,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352074"),
  "OrderID": 11046,
  "ProductID": 32,
  "UnitPrice": 32,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352075"),
  "OrderID": 11046,
  "ProductID": 35,
  "UnitPrice": 18,
  "Quantity": 18,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352076"),
  "OrderID": 11047,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 25,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352077"),
  "OrderID": 11047,
  "ProductID": 5,
  "UnitPrice": 21.35,
  "Quantity": 30,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352078"),
  "OrderID": 11048,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 42,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352079"),
  "OrderID": 11049,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 10,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635207a"),
  "OrderID": 11049,
  "ProductID": 12,
  "UnitPrice": 38,
  "Quantity": 4,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635207b"),
  "OrderID": 11050,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 50,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635207c"),
  "OrderID": 11051,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 10,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635207d"),
  "OrderID": 11052,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 30,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635207e"),
  "OrderID": 11052,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 10,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635207f"),
  "OrderID": 11053,
  "ProductID": 18,
  "UnitPrice": 62.5,
  "Quantity": 35,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352080"),
  "OrderID": 11053,
  "ProductID": 32,
  "UnitPrice": 32,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352081"),
  "OrderID": 11053,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 25,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352082"),
  "OrderID": 11054,
  "ProductID": 33,
  "UnitPrice": 2.5,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352083"),
  "OrderID": 11054,
  "ProductID": 67,
  "UnitPrice": 14,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352084"),
  "OrderID": 11055,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352085"),
  "OrderID": 11055,
  "ProductID": 25,
  "UnitPrice": 14,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352086"),
  "OrderID": 11055,
  "ProductID": 51,
  "UnitPrice": 53,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352087"),
  "OrderID": 11055,
  "ProductID": 57,
  "UnitPrice": 19.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352088"),
  "OrderID": 11056,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352089"),
  "OrderID": 11056,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635208a"),
  "OrderID": 11056,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 50,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635208b"),
  "OrderID": 11057,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635208c"),
  "OrderID": 11058,
  "ProductID": 21,
  "UnitPrice": 10,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635208d"),
  "OrderID": 11058,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 21,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635208e"),
  "OrderID": 11058,
  "ProductID": 61,
  "UnitPrice": 28.5,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635208f"),
  "OrderID": 11059,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352090"),
  "OrderID": 11059,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352091"),
  "OrderID": 11059,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352092"),
  "OrderID": 11060,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352093"),
  "OrderID": 11060,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352094"),
  "OrderID": 11061,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 15,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352095"),
  "OrderID": 11062,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 10,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352096"),
  "OrderID": 11062,
  "ProductID": 70,
  "UnitPrice": 15,
  "Quantity": 12,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352097"),
  "OrderID": 11063,
  "ProductID": 34,
  "UnitPrice": 14,
  "Quantity": 30,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352098"),
  "OrderID": 11063,
  "ProductID": 40,
  "UnitPrice": 18.4,
  "Quantity": 40,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b9433316352099"),
  "OrderID": 11063,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 30,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635209a"),
  "OrderID": 11064,
  "ProductID": 17,
  "UnitPrice": 39,
  "Quantity": 77,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635209b"),
  "OrderID": 11064,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 12,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635209c"),
  "OrderID": 11064,
  "ProductID": 53,
  "UnitPrice": 32.8,
  "Quantity": 25,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635209d"),
  "OrderID": 11064,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 4,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635209e"),
  "OrderID": 11064,
  "ProductID": 68,
  "UnitPrice": 12.5,
  "Quantity": 55,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b943331635209f"),
  "OrderID": 11065,
  "ProductID": 30,
  "UnitPrice": 25.89,
  "Quantity": 4,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b94333163520a0"),
  "OrderID": 11065,
  "ProductID": 54,
  "UnitPrice": 7.45,
  "Quantity": 20,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b94333163520a1"),
  "OrderID": 11066,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b94333163520a2"),
  "OrderID": 11066,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 42,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b94333163520a3"),
  "OrderID": 11066,
  "ProductID": 34,
  "UnitPrice": 14,
  "Quantity": 35,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b94333163520a4"),
  "OrderID": 11067,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 9,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b94333163520a5"),
  "OrderID": 11068,
  "ProductID": 28,
  "UnitPrice": 45.6,
  "Quantity": 8,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b94333163520a6"),
  "OrderID": 11068,
  "ProductID": 43,
  "UnitPrice": 46,
  "Quantity": 36,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b94333163520a7"),
  "OrderID": 11068,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 28,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b94333163520a8"),
  "OrderID": 11069,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b94333163520a9"),
  "OrderID": 11070,
  "ProductID": 1,
  "UnitPrice": 18,
  "Quantity": 40,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b94333163520aa"),
  "OrderID": 11070,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 20,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b94333163520ab"),
  "OrderID": 11070,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 30,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b94333163520ac"),
  "OrderID": 11070,
  "ProductID": 31,
  "UnitPrice": 12.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b94333163520ad"),
  "OrderID": 11071,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 15,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b94333163520ae"),
  "OrderID": 11071,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 10,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b94333163520af"),
  "OrderID": 11072,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 8,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c699b94333163520b0"),
  "OrderID": 11072,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 40,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520b1"),
  "OrderID": 11072,
  "ProductID": 50,
  "UnitPrice": 16.25,
  "Quantity": 22,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520b2"),
  "OrderID": 11072,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 130,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520b3"),
  "OrderID": 11073,
  "ProductID": 11,
  "UnitPrice": 21,
  "Quantity": 10,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520b4"),
  "OrderID": 11073,
  "ProductID": 24,
  "UnitPrice": 4.5,
  "Quantity": 20,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520b5"),
  "OrderID": 11074,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 14,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520b6"),
  "OrderID": 11075,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 10,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520b7"),
  "OrderID": 11075,
  "ProductID": 46,
  "UnitPrice": 12,
  "Quantity": 30,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520b8"),
  "OrderID": 11075,
  "ProductID": 76,
  "UnitPrice": 18,
  "Quantity": 2,
  "Discount": 0.150000006
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520b9"),
  "OrderID": 11076,
  "ProductID": 6,
  "UnitPrice": 25,
  "Quantity": 20,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520ba"),
  "OrderID": 11076,
  "ProductID": 14,
  "UnitPrice": 23.25,
  "Quantity": 20,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520bb"),
  "OrderID": 11076,
  "ProductID": 19,
  "UnitPrice": 9.2,
  "Quantity": 10,
  "Discount": 0.25
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520bc"),
  "OrderID": 11077,
  "ProductID": 2,
  "UnitPrice": 19,
  "Quantity": 24,
  "Discount": 0.200000003
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520bd"),
  "OrderID": 11077,
  "ProductID": 3,
  "UnitPrice": 10,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520be"),
  "OrderID": 11077,
  "ProductID": 4,
  "UnitPrice": 22,
  "Quantity": 1,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520bf"),
  "OrderID": 11077,
  "ProductID": 6,
  "UnitPrice": 25,
  "Quantity": 1,
  "Discount": 0.02
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520c0"),
  "OrderID": 11077,
  "ProductID": 7,
  "UnitPrice": 30,
  "Quantity": 1,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520c1"),
  "OrderID": 11077,
  "ProductID": 8,
  "UnitPrice": 40,
  "Quantity": 2,
  "Discount": 0.100000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520c2"),
  "OrderID": 11077,
  "ProductID": 10,
  "UnitPrice": 31,
  "Quantity": 1,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520c3"),
  "OrderID": 11077,
  "ProductID": 12,
  "UnitPrice": 38,
  "Quantity": 2,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520c4"),
  "OrderID": 11077,
  "ProductID": 13,
  "UnitPrice": 6,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520c5"),
  "OrderID": 11077,
  "ProductID": 14,
  "UnitPrice": 23.25,
  "Quantity": 1,
  "Discount": 0.029999999
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520c6"),
  "OrderID": 11077,
  "ProductID": 16,
  "UnitPrice": 17.45,
  "Quantity": 2,
  "Discount": 0.029999999
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520c7"),
  "OrderID": 11077,
  "ProductID": 20,
  "UnitPrice": 81,
  "Quantity": 1,
  "Discount": 0.039999999
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520c8"),
  "OrderID": 11077,
  "ProductID": 23,
  "UnitPrice": 9,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520c9"),
  "OrderID": 11077,
  "ProductID": 32,
  "UnitPrice": 32,
  "Quantity": 1,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520ca"),
  "OrderID": 11077,
  "ProductID": 39,
  "UnitPrice": 18,
  "Quantity": 2,
  "Discount": 0.050000001
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520cb"),
  "OrderID": 11077,
  "ProductID": 41,
  "UnitPrice": 9.65,
  "Quantity": 3,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520cc"),
  "OrderID": 11077,
  "ProductID": 46,
  "UnitPrice": 12,
  "Quantity": 3,
  "Discount": 0.02
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520cd"),
  "OrderID": 11077,
  "ProductID": 52,
  "UnitPrice": 7,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520ce"),
  "OrderID": 11077,
  "ProductID": 55,
  "UnitPrice": 24,
  "Quantity": 2,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520cf"),
  "OrderID": 11077,
  "ProductID": 60,
  "UnitPrice": 34,
  "Quantity": 2,
  "Discount": 0.059999999
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520d0"),
  "OrderID": 11077,
  "ProductID": 64,
  "UnitPrice": 33.25,
  "Quantity": 2,
  "Discount": 0.029999999
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520d1"),
  "OrderID": 11077,
  "ProductID": 66,
  "UnitPrice": 17,
  "Quantity": 1,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520d2"),
  "OrderID": 11077,
  "ProductID": 73,
  "UnitPrice": 15,
  "Quantity": 2,
  "Discount": 0.01
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520d3"),
  "OrderID": 11077,
  "ProductID": 75,
  "UnitPrice": 7.75,
  "Quantity": 4,
  "Discount": 0
});
db.getCollection("orderDetail").insert({
  "_id": ObjectId("568371c799b94333163520d4"),
  "OrderID": 11077,
  "ProductID": 77,
  "UnitPrice": 13,
  "Quantity": 2,
  "Discount": 0
});

/** product records **/
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520d5"),
  "ProductID": 1,
  "ProductName": "Chai",
  "SupplierID": 1,
  "CategoryID": 1,
  "QuantityPerUnit": "10 boxes x 20 bags",
  "UnitPrice": 18,
  "UnitsInStock": 39,
  "UnitsOnOrder": 0,
  "ReorderLevel": 10,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520d6"),
  "ProductID": 2,
  "ProductName": "Chang",
  "SupplierID": 1,
  "CategoryID": 1,
  "QuantityPerUnit": "24 - 12 oz bottles",
  "UnitPrice": 19,
  "UnitsInStock": 17,
  "UnitsOnOrder": 40,
  "ReorderLevel": 25,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520d7"),
  "ProductID": 3,
  "ProductName": "Aniseed Syrup",
  "SupplierID": 1,
  "CategoryID": 2,
  "QuantityPerUnit": "12 - 550 ml bottles",
  "UnitPrice": 10,
  "UnitsInStock": 13,
  "UnitsOnOrder": 70,
  "ReorderLevel": 25,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520d8"),
  "ProductID": 4,
  "ProductName": "Chef Anton's Cajun Seasoning",
  "SupplierID": 2,
  "CategoryID": 2,
  "QuantityPerUnit": "48 - 6 oz jars",
  "UnitPrice": 22,
  "UnitsInStock": 53,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520d9"),
  "ProductID": 5,
  "ProductName": "Chef Anton's Gumbo Mix",
  "SupplierID": 2,
  "CategoryID": 2,
  "QuantityPerUnit": "36 boxes",
  "UnitPrice": 21.35,
  "UnitsInStock": 0,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "TRUE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520da"),
  "ProductID": 6,
  "ProductName": "Grandma's Boysenberry Spread",
  "SupplierID": 3,
  "CategoryID": 2,
  "QuantityPerUnit": "12 - 8 oz jars",
  "UnitPrice": 25,
  "UnitsInStock": 120,
  "UnitsOnOrder": 0,
  "ReorderLevel": 25,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520db"),
  "ProductID": 7,
  "ProductName": "Uncle Bob's Organic Dried Pears",
  "SupplierID": 3,
  "CategoryID": 7,
  "QuantityPerUnit": "12 - 1 lb pkgs.",
  "UnitPrice": 30,
  "UnitsInStock": 15,
  "UnitsOnOrder": 0,
  "ReorderLevel": 10,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520dc"),
  "ProductID": 8,
  "ProductName": "Northwoods Cranberry Sauce",
  "SupplierID": 3,
  "CategoryID": 2,
  "QuantityPerUnit": "12 - 12 oz jars",
  "UnitPrice": 40,
  "UnitsInStock": 6,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520dd"),
  "ProductID": 9,
  "ProductName": "Mishi Kobe Niku",
  "SupplierID": 4,
  "CategoryID": 6,
  "QuantityPerUnit": "18 - 500 g pkgs.",
  "UnitPrice": 97,
  "UnitsInStock": 29,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "TRUE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520de"),
  "ProductID": 10,
  "ProductName": "Ikura",
  "SupplierID": 4,
  "CategoryID": 8,
  "QuantityPerUnit": "12 - 200 ml jars",
  "UnitPrice": 31,
  "UnitsInStock": 31,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520df"),
  "ProductID": 11,
  "ProductName": "Queso Cabrales",
  "SupplierID": 5,
  "CategoryID": 4,
  "QuantityPerUnit": "1 kg pkg.",
  "UnitPrice": 21,
  "UnitsInStock": 22,
  "UnitsOnOrder": 30,
  "ReorderLevel": 30,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520e0"),
  "ProductID": 12,
  "ProductName": "Queso Manchego La Pastora",
  "SupplierID": 5,
  "CategoryID": 4,
  "QuantityPerUnit": "10 - 500 g pkgs.",
  "UnitPrice": 38,
  "UnitsInStock": 86,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520e1"),
  "ProductID": 13,
  "ProductName": "Konbu",
  "SupplierID": 6,
  "CategoryID": 8,
  "QuantityPerUnit": "2 kg box",
  "UnitPrice": 6,
  "UnitsInStock": 24,
  "UnitsOnOrder": 0,
  "ReorderLevel": 5,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520e2"),
  "ProductID": 14,
  "ProductName": "Tofu",
  "SupplierID": 6,
  "CategoryID": 7,
  "QuantityPerUnit": "40 - 100 g pkgs.",
  "UnitPrice": 23.25,
  "UnitsInStock": 35,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520e3"),
  "ProductID": 15,
  "ProductName": "Genen Shouyu",
  "SupplierID": 6,
  "CategoryID": 2,
  "QuantityPerUnit": "24 - 250 ml bottles",
  "UnitPrice": 15.5,
  "UnitsInStock": 39,
  "UnitsOnOrder": 0,
  "ReorderLevel": 5,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520e4"),
  "ProductID": 16,
  "ProductName": "Pavlova",
  "SupplierID": 7,
  "CategoryID": 3,
  "QuantityPerUnit": "32 - 500 g boxes",
  "UnitPrice": 17.45,
  "UnitsInStock": 29,
  "UnitsOnOrder": 0,
  "ReorderLevel": 10,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520e5"),
  "ProductID": 17,
  "ProductName": "Alice Mutton",
  "SupplierID": 7,
  "CategoryID": 6,
  "QuantityPerUnit": "20 - 1 kg tins",
  "UnitPrice": 39,
  "UnitsInStock": 0,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "TRUE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520e6"),
  "ProductID": 18,
  "ProductName": "Carnarvon Tigers",
  "SupplierID": 7,
  "CategoryID": 8,
  "QuantityPerUnit": "16 kg pkg.",
  "UnitPrice": 62.5,
  "UnitsInStock": 42,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520e7"),
  "ProductID": 19,
  "ProductName": "Teatime Chocolate Biscuits",
  "SupplierID": 8,
  "CategoryID": 3,
  "QuantityPerUnit": "10 boxes x 12 pieces",
  "UnitPrice": 9.2,
  "UnitsInStock": 25,
  "UnitsOnOrder": 0,
  "ReorderLevel": 5,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520e8"),
  "ProductID": 20,
  "ProductName": "Sir Rodney's Marmalade",
  "SupplierID": 8,
  "CategoryID": 3,
  "QuantityPerUnit": "30 gift boxes",
  "UnitPrice": 81,
  "UnitsInStock": 40,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520e9"),
  "ProductID": 21,
  "ProductName": "Sir Rodney's Scones",
  "SupplierID": 8,
  "CategoryID": 3,
  "QuantityPerUnit": "24 pkgs. x 4 pieces",
  "UnitPrice": 10,
  "UnitsInStock": 3,
  "UnitsOnOrder": 40,
  "ReorderLevel": 5,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520ea"),
  "ProductID": 22,
  "ProductName": "Gustaf's Knäckebröd",
  "SupplierID": 9,
  "CategoryID": 5,
  "QuantityPerUnit": "24 - 500 g pkgs.",
  "UnitPrice": 21,
  "UnitsInStock": 104,
  "UnitsOnOrder": 0,
  "ReorderLevel": 25,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520eb"),
  "ProductID": 23,
  "ProductName": "Tunnbröd",
  "SupplierID": 9,
  "CategoryID": 5,
  "QuantityPerUnit": "12 - 250 g pkgs.",
  "UnitPrice": 9,
  "UnitsInStock": 61,
  "UnitsOnOrder": 0,
  "ReorderLevel": 25,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520ec"),
  "ProductID": 24,
  "ProductName": "Guaraná Fantástica",
  "SupplierID": 10,
  "CategoryID": 1,
  "QuantityPerUnit": "12 - 355 ml cans",
  "UnitPrice": 4.5,
  "UnitsInStock": 20,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "TRUE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520ed"),
  "ProductID": 25,
  "ProductName": "NuNuCa Nuß-Nougat-Creme",
  "SupplierID": 11,
  "CategoryID": 3,
  "QuantityPerUnit": "20 - 450 g glasses",
  "UnitPrice": 14,
  "UnitsInStock": 76,
  "UnitsOnOrder": 0,
  "ReorderLevel": 30,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520ee"),
  "ProductID": 26,
  "ProductName": "Gumbär Gummibärchen",
  "SupplierID": 11,
  "CategoryID": 3,
  "QuantityPerUnit": "100 - 250 g bags",
  "UnitPrice": 31.23,
  "UnitsInStock": 15,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520ef"),
  "ProductID": 27,
  "ProductName": "Schoggi Schokolade",
  "SupplierID": 11,
  "CategoryID": 3,
  "QuantityPerUnit": "100 - 100 g pieces",
  "UnitPrice": 43.9,
  "UnitsInStock": 49,
  "UnitsOnOrder": 0,
  "ReorderLevel": 30,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520f0"),
  "ProductID": 28,
  "ProductName": "Rössle Sauerkraut",
  "SupplierID": 12,
  "CategoryID": 7,
  "QuantityPerUnit": "25 - 825 g cans",
  "UnitPrice": 45.6,
  "UnitsInStock": 26,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "TRUE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520f1"),
  "ProductID": 29,
  "ProductName": "Thüringer Rostbratwurst",
  "SupplierID": 12,
  "CategoryID": 6,
  "QuantityPerUnit": "50 bags x 30 sausgs.",
  "UnitPrice": 123.79,
  "UnitsInStock": 0,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "TRUE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520f2"),
  "ProductID": 30,
  "ProductName": "Nord-Ost Matjeshering",
  "SupplierID": 13,
  "CategoryID": 8,
  "QuantityPerUnit": "10 - 200 g glasses",
  "UnitPrice": 25.89,
  "UnitsInStock": 10,
  "UnitsOnOrder": 0,
  "ReorderLevel": 15,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520f3"),
  "ProductID": 31,
  "ProductName": "Gorgonzola Telino",
  "SupplierID": 14,
  "CategoryID": 4,
  "QuantityPerUnit": "12 - 100 g pkgs",
  "UnitPrice": 12.5,
  "UnitsInStock": 0,
  "UnitsOnOrder": 70,
  "ReorderLevel": 20,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520f4"),
  "ProductID": 32,
  "ProductName": "Mascarpone Fabioli",
  "SupplierID": 14,
  "CategoryID": 4,
  "QuantityPerUnit": "24 - 200 g pkgs.",
  "UnitPrice": 32,
  "UnitsInStock": 9,
  "UnitsOnOrder": 40,
  "ReorderLevel": 25,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520f5"),
  "ProductID": 33,
  "ProductName": "Geitost",
  "SupplierID": 15,
  "CategoryID": 4,
  "QuantityPerUnit": "500 g",
  "UnitPrice": 2.5,
  "UnitsInStock": 112,
  "UnitsOnOrder": 0,
  "ReorderLevel": 20,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520f6"),
  "ProductID": 34,
  "ProductName": "Sasquatch Ale",
  "SupplierID": 16,
  "CategoryID": 1,
  "QuantityPerUnit": "24 - 12 oz bottles",
  "UnitPrice": 14,
  "UnitsInStock": 111,
  "UnitsOnOrder": 0,
  "ReorderLevel": 15,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520f7"),
  "ProductID": 35,
  "ProductName": "Steeleye Stout",
  "SupplierID": 16,
  "CategoryID": 1,
  "QuantityPerUnit": "24 - 12 oz bottles",
  "UnitPrice": 18,
  "UnitsInStock": 20,
  "UnitsOnOrder": 0,
  "ReorderLevel": 15,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520f8"),
  "ProductID": 36,
  "ProductName": "Inlagd Sill",
  "SupplierID": 17,
  "CategoryID": 8,
  "QuantityPerUnit": "24 - 250 g  jars",
  "UnitPrice": 19,
  "UnitsInStock": 112,
  "UnitsOnOrder": 0,
  "ReorderLevel": 20,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520f9"),
  "ProductID": 37,
  "ProductName": "Gravad lax",
  "SupplierID": 17,
  "CategoryID": 8,
  "QuantityPerUnit": "12 - 500 g pkgs.",
  "UnitPrice": 26,
  "UnitsInStock": 11,
  "UnitsOnOrder": 50,
  "ReorderLevel": 25,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520fa"),
  "ProductID": 38,
  "ProductName": "Côte de Blaye",
  "SupplierID": 18,
  "CategoryID": 1,
  "QuantityPerUnit": "12 - 75 cl bottles",
  "UnitPrice": 263.5,
  "UnitsInStock": 17,
  "UnitsOnOrder": 0,
  "ReorderLevel": 15,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520fb"),
  "ProductID": 39,
  "ProductName": "Chartreuse verte",
  "SupplierID": 18,
  "CategoryID": 1,
  "QuantityPerUnit": "750 cc per bottle",
  "UnitPrice": 18,
  "UnitsInStock": 69,
  "UnitsOnOrder": 0,
  "ReorderLevel": 5,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520fc"),
  "ProductID": 40,
  "ProductName": "Boston Crab Meat",
  "SupplierID": 19,
  "CategoryID": 8,
  "QuantityPerUnit": "24 - 4 oz tins",
  "UnitPrice": 18.4,
  "UnitsInStock": 123,
  "UnitsOnOrder": 0,
  "ReorderLevel": 30,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520fd"),
  "ProductID": 41,
  "ProductName": "Jack's New England Clam Chowder",
  "SupplierID": 19,
  "CategoryID": 8,
  "QuantityPerUnit": "12 - 12 oz cans",
  "UnitPrice": 9.65,
  "UnitsInStock": 85,
  "UnitsOnOrder": 0,
  "ReorderLevel": 10,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520fe"),
  "ProductID": 42,
  "ProductName": "Singaporean Hokkien Fried Mee",
  "SupplierID": 20,
  "CategoryID": 5,
  "QuantityPerUnit": "32 - 1 kg pkgs.",
  "UnitPrice": 14,
  "UnitsInStock": 26,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "TRUE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b94333163520ff"),
  "ProductID": 43,
  "ProductName": "Ipoh Coffee",
  "SupplierID": 20,
  "CategoryID": 1,
  "QuantityPerUnit": "16 - 500 g tins",
  "UnitPrice": 46,
  "UnitsInStock": 17,
  "UnitsOnOrder": 10,
  "ReorderLevel": 25,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352100"),
  "ProductID": 44,
  "ProductName": "Gula Malacca",
  "SupplierID": 20,
  "CategoryID": 2,
  "QuantityPerUnit": "20 - 2 kg bags",
  "UnitPrice": 19.45,
  "UnitsInStock": 27,
  "UnitsOnOrder": 0,
  "ReorderLevel": 15,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352101"),
  "ProductID": 45,
  "ProductName": "Røgede sild",
  "SupplierID": 21,
  "CategoryID": 8,
  "QuantityPerUnit": "1k pkg.",
  "UnitPrice": 9.5,
  "UnitsInStock": 5,
  "UnitsOnOrder": 70,
  "ReorderLevel": 15,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352102"),
  "ProductID": 46,
  "ProductName": "Spegesild",
  "SupplierID": 21,
  "CategoryID": 8,
  "QuantityPerUnit": "4 - 450 g glasses",
  "UnitPrice": 12,
  "UnitsInStock": 95,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352103"),
  "ProductID": 47,
  "ProductName": "Zaanse koeken",
  "SupplierID": 22,
  "CategoryID": 3,
  "QuantityPerUnit": "10 - 4 oz boxes",
  "UnitPrice": 9.5,
  "UnitsInStock": 36,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352104"),
  "ProductID": 48,
  "ProductName": "Chocolade",
  "SupplierID": 22,
  "CategoryID": 3,
  "QuantityPerUnit": "10 pkgs.",
  "UnitPrice": 12.75,
  "UnitsInStock": 15,
  "UnitsOnOrder": 70,
  "ReorderLevel": 25,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352105"),
  "ProductID": 49,
  "ProductName": "Maxilaku",
  "SupplierID": 23,
  "CategoryID": 3,
  "QuantityPerUnit": "24 - 50 g pkgs.",
  "UnitPrice": 20,
  "UnitsInStock": 10,
  "UnitsOnOrder": 60,
  "ReorderLevel": 15,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352106"),
  "ProductID": 50,
  "ProductName": "Valkoinen suklaa",
  "SupplierID": 23,
  "CategoryID": 3,
  "QuantityPerUnit": "12 - 100 g bars",
  "UnitPrice": 16.25,
  "UnitsInStock": 65,
  "UnitsOnOrder": 0,
  "ReorderLevel": 30,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352107"),
  "ProductID": 51,
  "ProductName": "Manjimup Dried Apples",
  "SupplierID": 24,
  "CategoryID": 7,
  "QuantityPerUnit": "50 - 300 g pkgs.",
  "UnitPrice": 53,
  "UnitsInStock": 20,
  "UnitsOnOrder": 0,
  "ReorderLevel": 10,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352108"),
  "ProductID": 52,
  "ProductName": "Filo Mix",
  "SupplierID": 24,
  "CategoryID": 5,
  "QuantityPerUnit": "16 - 2 kg boxes",
  "UnitPrice": 7,
  "UnitsInStock": 38,
  "UnitsOnOrder": 0,
  "ReorderLevel": 25,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352109"),
  "ProductID": 53,
  "ProductName": "Perth Pasties",
  "SupplierID": 24,
  "CategoryID": 6,
  "QuantityPerUnit": "48 pieces",
  "UnitPrice": 32.8,
  "UnitsInStock": 0,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "TRUE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b943331635210a"),
  "ProductID": 54,
  "ProductName": "Tourtière",
  "SupplierID": 25,
  "CategoryID": 6,
  "QuantityPerUnit": "16 pies",
  "UnitPrice": 7.45,
  "UnitsInStock": 21,
  "UnitsOnOrder": 0,
  "ReorderLevel": 10,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b943331635210b"),
  "ProductID": 55,
  "ProductName": "Pâté chinois",
  "SupplierID": 25,
  "CategoryID": 6,
  "QuantityPerUnit": "24 boxes x 2 pies",
  "UnitPrice": 24,
  "UnitsInStock": 115,
  "UnitsOnOrder": 0,
  "ReorderLevel": 20,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b943331635210c"),
  "ProductID": 56,
  "ProductName": "Gnocchi di nonna Alice",
  "SupplierID": 26,
  "CategoryID": 5,
  "QuantityPerUnit": "24 - 250 g pkgs.",
  "UnitPrice": 38,
  "UnitsInStock": 21,
  "UnitsOnOrder": 10,
  "ReorderLevel": 30,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b943331635210d"),
  "ProductID": 57,
  "ProductName": "Ravioli Angelo",
  "SupplierID": 26,
  "CategoryID": 5,
  "QuantityPerUnit": "24 - 250 g pkgs.",
  "UnitPrice": 19.5,
  "UnitsInStock": 36,
  "UnitsOnOrder": 0,
  "ReorderLevel": 20,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b943331635210e"),
  "ProductID": 58,
  "ProductName": "Escargots de Bourgogne",
  "SupplierID": 27,
  "CategoryID": 8,
  "QuantityPerUnit": "24 pieces",
  "UnitPrice": 13.25,
  "UnitsInStock": 62,
  "UnitsOnOrder": 0,
  "ReorderLevel": 20,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b943331635210f"),
  "ProductID": 59,
  "ProductName": "Raclette Courdavault",
  "SupplierID": 28,
  "CategoryID": 4,
  "QuantityPerUnit": "5 kg pkg.",
  "UnitPrice": 55,
  "UnitsInStock": 79,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352110"),
  "ProductID": 60,
  "ProductName": "Camembert Pierrot",
  "SupplierID": 28,
  "CategoryID": 4,
  "QuantityPerUnit": "15 - 300 g rounds",
  "UnitPrice": 34,
  "UnitsInStock": 19,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352111"),
  "ProductID": 61,
  "ProductName": "Sirop d'érable",
  "SupplierID": 29,
  "CategoryID": 2,
  "QuantityPerUnit": "24 - 500 ml bottles",
  "UnitPrice": 28.5,
  "UnitsInStock": 113,
  "UnitsOnOrder": 0,
  "ReorderLevel": 25,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352112"),
  "ProductID": 62,
  "ProductName": "Tarte au sucre",
  "SupplierID": 29,
  "CategoryID": 3,
  "QuantityPerUnit": "48 pies",
  "UnitPrice": 49.3,
  "UnitsInStock": 17,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352113"),
  "ProductID": 63,
  "ProductName": "Vegie-spread",
  "SupplierID": 7,
  "CategoryID": 2,
  "QuantityPerUnit": "15 - 625 g jars",
  "UnitPrice": 43.9,
  "UnitsInStock": 24,
  "UnitsOnOrder": 0,
  "ReorderLevel": 5,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352114"),
  "ProductID": 64,
  "ProductName": "Wimmers gute Semmelknödel",
  "SupplierID": 12,
  "CategoryID": 5,
  "QuantityPerUnit": "20 bags x 4 pieces",
  "UnitPrice": 33.25,
  "UnitsInStock": 22,
  "UnitsOnOrder": 80,
  "ReorderLevel": 30,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352115"),
  "ProductID": 65,
  "ProductName": "Louisiana Fiery Hot Pepper Sauce",
  "SupplierID": 2,
  "CategoryID": 2,
  "QuantityPerUnit": "32 - 8 oz bottles",
  "UnitPrice": 21.05,
  "UnitsInStock": 76,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352116"),
  "ProductID": 66,
  "ProductName": "Louisiana Hot Spiced Okra",
  "SupplierID": 2,
  "CategoryID": 2,
  "QuantityPerUnit": "24 - 8 oz jars",
  "UnitPrice": 17,
  "UnitsInStock": 4,
  "UnitsOnOrder": 100,
  "ReorderLevel": 20,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352117"),
  "ProductID": 67,
  "ProductName": "Laughing Lumberjack Lager",
  "SupplierID": 16,
  "CategoryID": 1,
  "QuantityPerUnit": "24 - 12 oz bottles",
  "UnitPrice": 14,
  "UnitsInStock": 52,
  "UnitsOnOrder": 0,
  "ReorderLevel": 10,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352118"),
  "ProductID": 68,
  "ProductName": "Scottish Longbreads",
  "SupplierID": 8,
  "CategoryID": 3,
  "QuantityPerUnit": "10 boxes x 8 pieces",
  "UnitPrice": 12.5,
  "UnitsInStock": 6,
  "UnitsOnOrder": 10,
  "ReorderLevel": 15,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352119"),
  "ProductID": 69,
  "ProductName": "Gudbrandsdalsost",
  "SupplierID": 15,
  "CategoryID": 4,
  "QuantityPerUnit": "10 kg pkg.",
  "UnitPrice": 36,
  "UnitsInStock": 26,
  "UnitsOnOrder": 0,
  "ReorderLevel": 15,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b943331635211a"),
  "ProductID": 70,
  "ProductName": "Outback Lager",
  "SupplierID": 7,
  "CategoryID": 1,
  "QuantityPerUnit": "24 - 355 ml bottles",
  "UnitPrice": 15,
  "UnitsInStock": 15,
  "UnitsOnOrder": 10,
  "ReorderLevel": 30,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b943331635211b"),
  "ProductID": 71,
  "ProductName": "Fløtemysost",
  "SupplierID": 15,
  "CategoryID": 4,
  "QuantityPerUnit": "10 - 500 g pkgs.",
  "UnitPrice": 21.5,
  "UnitsInStock": 26,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b943331635211c"),
  "ProductID": 72,
  "ProductName": "Mozzarella di Giovanni",
  "SupplierID": 14,
  "CategoryID": 4,
  "QuantityPerUnit": "24 - 200 g pkgs.",
  "UnitPrice": 34.8,
  "UnitsInStock": 14,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b943331635211d"),
  "ProductID": 73,
  "ProductName": "Röd Kaviar",
  "SupplierID": 17,
  "CategoryID": 8,
  "QuantityPerUnit": "24 - 150 g jars",
  "UnitPrice": 15,
  "UnitsInStock": 101,
  "UnitsOnOrder": 0,
  "ReorderLevel": 5,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b943331635211e"),
  "ProductID": 74,
  "ProductName": "Longlife Tofu",
  "SupplierID": 4,
  "CategoryID": 7,
  "QuantityPerUnit": "5 kg pkg.",
  "UnitPrice": 10,
  "UnitsInStock": 4,
  "UnitsOnOrder": 20,
  "ReorderLevel": 5,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b943331635211f"),
  "ProductID": 75,
  "ProductName": "Rhönbräu Klosterbier",
  "SupplierID": 12,
  "CategoryID": 1,
  "QuantityPerUnit": "24 - 0.5 l bottles",
  "UnitPrice": 7.75,
  "UnitsInStock": 125,
  "UnitsOnOrder": 0,
  "ReorderLevel": 25,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352120"),
  "ProductID": 76,
  "ProductName": "Lakkalikööri",
  "SupplierID": 23,
  "CategoryID": 1,
  "QuantityPerUnit": "500 ml",
  "UnitPrice": 18,
  "UnitsInStock": 57,
  "UnitsOnOrder": 0,
  "ReorderLevel": 20,
  "Discontinued": "FALSE"
});
db.getCollection("product").insert({
  "_id": ObjectId("5683720199b9433316352121"),
  "ProductID": 77,
  "ProductName": "Original Frankfurter grüne Soße",
  "SupplierID": 12,
  "CategoryID": 2,
  "QuantityPerUnit": "12 boxes",
  "UnitPrice": 13,
  "UnitsInStock": 32,
  "UnitsOnOrder": 0,
  "ReorderLevel": 15,
  "Discontinued": "FALSE"
});

/** shipper records **/
db.getCollection("shipper").insert({
  "_id": ObjectId("5683723299b9433316352122"),
  "ShipperID": 1,
  "CompanyName": "Speedy Express",
  "Phone": "(503) 555-9831"
});
db.getCollection("shipper").insert({
  "_id": ObjectId("5683723299b9433316352123"),
  "ShipperID": 2,
  "CompanyName": "United Package",
  "Phone": "(503) 555-3199"
});
db.getCollection("shipper").insert({
  "_id": ObjectId("5683723299b9433316352124"),
  "ShipperID": 3,
  "CompanyName": "Federal Shipping",
  "Phone": "(503) 555-9931"
});

/** supplier records **/
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b9433316352125"),
  "SupplierID": 1,
  "CompanyName": "Exotic Liquids",
  "ContactName": "Charlotte Cooper",
  "ContactTitle": "Purchasing Manager",
  "Address": "49 Gilbert St.",
  "City": "London",
  "Region": "",
  "PostalCode": "EC1 4SD",
  "Country": "UK",
  "Phone": "(171) 555-2222",
  "Fax": "",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b9433316352126"),
  "SupplierID": 2,
  "CompanyName": "New Orleans Cajun Delights",
  "ContactName": "Shelley Burke",
  "ContactTitle": "Order Administrator",
  "Address": "P.O. Box 78934",
  "City": "New Orleans",
  "Region": "LA",
  "PostalCode": "70117",
  "Country": "USA",
  "Phone": "(100) 555-4822",
  "Fax": "",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b9433316352127"),
  "SupplierID": 3,
  "CompanyName": "Grandma Kelly's Homestead",
  "ContactName": "Regina Murphy",
  "ContactTitle": "Sales Representative",
  "Address": "707 Oxford Rd.",
  "City": "Ann Arbor",
  "Region": "MI",
  "PostalCode": "48104",
  "Country": "USA",
  "Phone": "(313) 555-5735",
  "Fax": "(313) 555-3349",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b9433316352128"),
  "SupplierID": 4,
  "CompanyName": "Tokyo Traders",
  "ContactName": "Yoshi Nagase",
  "ContactTitle": "Marketing Manager",
  "Address": "9-8 Sekimai\nMusashino-shi",
  "City": "Tokyo",
  "Region": "",
  "PostalCode": "100",
  "Country": "Japan",
  "Phone": "(03) 3555-5011",
  "Fax": "",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b9433316352129"),
  "SupplierID": 5,
  "CompanyName": "Cooperativa de Quesos 'Las Cabras'",
  "ContactName": "Antonio del Valle Saavedra",
  "ContactTitle": "Export Administrator",
  "Address": "Calle del Rosal 4",
  "City": "Oviedo",
  "Region": "Asturias",
  "PostalCode": "33007",
  "Country": "Spain",
  "Phone": "(98) 598 76 54",
  "Fax": "",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b943331635212a"),
  "SupplierID": 6,
  "CompanyName": "Mayumi's",
  "ContactName": "Mayumi Ohno",
  "ContactTitle": "Marketing Representative",
  "Address": "92 Setsuko\nChuo-ku",
  "City": "Osaka",
  "Region": "",
  "PostalCode": "545",
  "Country": "Japan",
  "Phone": "(06) 431-7877",
  "Fax": "",
  "HomePage": "Mayumi's (on the World Wide Web)#http://www.microsoft.com/accessdev/sampleapps/mayumi.htm#"
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b943331635212b"),
  "SupplierID": 7,
  "CompanyName": "Pavlova, Ltd.",
  "ContactName": "Ian Devling",
  "ContactTitle": "Marketing Manager",
  "Address": "74 Rose St.\nMoonie Ponds",
  "City": "Melbourne",
  "Region": "Victoria",
  "PostalCode": "3058",
  "Country": "Australia",
  "Phone": "(03) 444-2343",
  "Fax": "(03) 444-6588",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b943331635212c"),
  "SupplierID": 8,
  "CompanyName": "Specialty Biscuits, Ltd.",
  "ContactName": "Peter Wilson",
  "ContactTitle": "Sales Representative",
  "Address": "29 King's Way",
  "City": "Manchester",
  "Region": "",
  "PostalCode": "M14 GSD",
  "Country": "UK",
  "Phone": "(161) 555-4448",
  "Fax": "",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b943331635212d"),
  "SupplierID": 9,
  "CompanyName": "PB Knäckebröd AB",
  "ContactName": "Lars Peterson",
  "ContactTitle": "Sales Agent",
  "Address": "Kaloadagatan 13",
  "City": "Göteborg",
  "Region": "",
  "PostalCode": "S-345 67",
  "Country": "Sweden",
  "Phone": "031-987 65 43",
  "Fax": "031-987 65 91",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b943331635212e"),
  "SupplierID": 10,
  "CompanyName": "Refrescos Americanas LTDA",
  "ContactName": "Carlos Diaz",
  "ContactTitle": "Marketing Manager",
  "Address": "Av. das Americanas 12.890",
  "City": "São Paulo",
  "Region": "",
  "PostalCode": "5442",
  "Country": "Brazil",
  "Phone": "(11) 555 4640",
  "Fax": "",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b943331635212f"),
  "SupplierID": 11,
  "CompanyName": "Heli Süßwaren GmbH & Co. KG",
  "ContactName": "Petra Winkler",
  "ContactTitle": "Sales Manager",
  "Address": "Tiergartenstraße 5",
  "City": "Berlin",
  "Region": "",
  "PostalCode": "10785",
  "Country": "Germany",
  "Phone": "(010) 9984510",
  "Fax": "",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b9433316352130"),
  "SupplierID": 12,
  "CompanyName": "Plutzer Lebensmittelgroßmärkte AG",
  "ContactName": "Martin Bein",
  "ContactTitle": "International Marketing Mgr.",
  "Address": "Bogenallee 51",
  "City": "Frankfurt",
  "Region": "",
  "PostalCode": "60439",
  "Country": "Germany",
  "Phone": "(069) 992755",
  "Fax": "",
  "HomePage": "Plutzer (on the World Wide Web)#http://www.microsoft.com/accessdev/sampleapps/plutzer.htm#"
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b9433316352131"),
  "SupplierID": 13,
  "CompanyName": "Nord-Ost-Fisch Handelsgesellschaft mbH",
  "ContactName": "Sven Petersen",
  "ContactTitle": "Coordinator Foreign Markets",
  "Address": "Frahmredder 112a",
  "City": "Cuxhaven",
  "Region": "",
  "PostalCode": "27478",
  "Country": "Germany",
  "Phone": "(04721) 8713",
  "Fax": "(04721) 8714",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b9433316352132"),
  "SupplierID": 14,
  "CompanyName": "Formaggi Fortini s.r.l.",
  "ContactName": "Elio Rossi",
  "ContactTitle": "Sales Representative",
  "Address": "Viale Dante, 75",
  "City": "Ravenna",
  "Region": "",
  "PostalCode": "48100",
  "Country": "Italy",
  "Phone": "(0544) 60323",
  "Fax": "(0544) 60603",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b9433316352133"),
  "SupplierID": 15,
  "CompanyName": "Norske Meierier",
  "ContactName": "Beate Vileid",
  "ContactTitle": "Marketing Manager",
  "Address": "Hatlevegen 5",
  "City": "Sandvika",
  "Region": "",
  "PostalCode": "1320",
  "Country": "Norway",
  "Phone": "(0)2-953010",
  "Fax": "",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b9433316352134"),
  "SupplierID": 16,
  "CompanyName": "Bigfoot Breweries",
  "ContactName": "Cheryl Saylor",
  "ContactTitle": "Regional Account Rep.",
  "Address": "3400 - 8th Avenue\nSuite 210",
  "City": "Bend",
  "Region": "OR",
  "PostalCode": "97101",
  "Country": "USA",
  "Phone": "(503) 555-9931",
  "Fax": "",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b9433316352135"),
  "SupplierID": 17,
  "CompanyName": "Svensk Sjöföda AB",
  "ContactName": "Michael Björn",
  "ContactTitle": "Sales Representative",
  "Address": "Brovallavägen 231",
  "City": "Stockholm",
  "Region": "",
  "PostalCode": "S-123 45",
  "Country": "Sweden",
  "Phone": "08-123 45 67",
  "Fax": "",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b9433316352136"),
  "SupplierID": 18,
  "CompanyName": "Aux joyeux ecclésiastiques",
  "ContactName": "Guylène Nodier",
  "ContactTitle": "Sales Manager",
  "Address": "203, Rue des Francs-Bourgeois",
  "City": "Paris",
  "Region": "",
  "PostalCode": "75004",
  "Country": "France",
  "Phone": "(1) 03.83.00.68",
  "Fax": "(1) 03.83.00.62",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b9433316352137"),
  "SupplierID": 19,
  "CompanyName": "New England Seafood Cannery",
  "ContactName": "Robb Merchant",
  "ContactTitle": "Wholesale Account Agent",
  "Address": "Order Processing Dept.\n2100 Paul Revere Blvd.",
  "City": "Boston",
  "Region": "MA",
  "PostalCode": "02134",
  "Country": "USA",
  "Phone": "(617) 555-3267",
  "Fax": "(617) 555-3389",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b9433316352138"),
  "SupplierID": 20,
  "CompanyName": "Leka Trading",
  "ContactName": "Chandra Leka",
  "ContactTitle": "Owner",
  "Address": "471 Serangoon Loop, Suite #402",
  "City": "Singapore",
  "Region": "",
  "PostalCode": "0512",
  "Country": "Singapore",
  "Phone": "555-8787",
  "Fax": "",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b9433316352139"),
  "SupplierID": 21,
  "CompanyName": "Lyngbysild",
  "ContactName": "Niels Petersen",
  "ContactTitle": "Sales Manager",
  "Address": "Lyngbysild\nFiskebakken 10",
  "City": "Lyngby",
  "Region": "",
  "PostalCode": "2800",
  "Country": "Denmark",
  "Phone": "43844108",
  "Fax": "43844115",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b943331635213a"),
  "SupplierID": 22,
  "CompanyName": "Zaanse Snoepfabriek",
  "ContactName": "Dirk Luchte",
  "ContactTitle": "Accounting Manager",
  "Address": "Verkoop\nRijnweg 22",
  "City": "Zaandam",
  "Region": "",
  "PostalCode": "9999 ZZ",
  "Country": "Netherlands",
  "Phone": "(12345) 1212",
  "Fax": "(12345) 1210",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b943331635213b"),
  "SupplierID": 23,
  "CompanyName": "Karkki Oy",
  "ContactName": "Anne Heikkonen",
  "ContactTitle": "Product Manager",
  "Address": "Valtakatu 12",
  "City": "Lappeenranta",
  "Region": "",
  "PostalCode": "53120",
  "Country": "Finland",
  "Phone": "(953) 10956",
  "Fax": "",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b943331635213c"),
  "SupplierID": 24,
  "CompanyName": "G'day, Mate",
  "ContactName": "Wendy Mackenzie",
  "ContactTitle": "Sales Representative",
  "Address": "170 Prince Edward Parade\nHunter's Hill",
  "City": "Sydney",
  "Region": "NSW",
  "PostalCode": "2042",
  "Country": "Australia",
  "Phone": "(02) 555-5914",
  "Fax": "(02) 555-4873",
  "HomePage": "G'day Mate (on the World Wide Web)#http://www.microsoft.com/accessdev/sampleapps/gdaymate.htm#"
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b943331635213d"),
  "SupplierID": 25,
  "CompanyName": "Ma Maison",
  "ContactName": "Jean-Guy Lauzon",
  "ContactTitle": "Marketing Manager",
  "Address": "2960 Rue St. Laurent",
  "City": "Montréal",
  "Region": "Québec",
  "PostalCode": "H1J 1C3",
  "Country": "Canada",
  "Phone": "(514) 555-9022",
  "Fax": "",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b943331635213e"),
  "SupplierID": 26,
  "CompanyName": "Pasta Buttini s.r.l.",
  "ContactName": "Giovanni Giudici",
  "ContactTitle": "Order Administrator",
  "Address": "Via dei Gelsomini, 153",
  "City": "Salerno",
  "Region": "",
  "PostalCode": "84100",
  "Country": "Italy",
  "Phone": "(089) 6547665",
  "Fax": "(089) 6547667",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b943331635213f"),
  "SupplierID": 27,
  "CompanyName": "Escargots Nouveaux",
  "ContactName": "Marie Delamare",
  "ContactTitle": "Sales Manager",
  "Address": "22, rue H. Voiron",
  "City": "Montceau",
  "Region": "",
  "PostalCode": "71300",
  "Country": "France",
  "Phone": "85.57.00.07",
  "Fax": "",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b9433316352140"),
  "SupplierID": 28,
  "CompanyName": "Gai pâturage",
  "ContactName": "Eliane Noz",
  "ContactTitle": "Sales Representative",
  "Address": "Bat. B\n3, rue des Alpes",
  "City": "Annecy",
  "Region": "",
  "PostalCode": "74000",
  "Country": "France",
  "Phone": "38.76.98.06",
  "Fax": "38.76.98.58",
  "HomePage": ""
});
db.getCollection("supplier").insert({
  "_id": ObjectId("5683726999b9433316352141"),
  "SupplierID": 29,
  "CompanyName": "Forêts d'érables",
  "ContactName": "Chantal Goulet",
  "ContactTitle": "Accounting Manager",
  "Address": "148 rue Chasseur",
  "City": "Ste-Hyacinthe",
  "Region": "Québec",
  "PostalCode": "J2S 7S8",
  "Country": "Canada",
  "Phone": "(514) 555-2955",
  "Fax": "(514) 555-2921",
  "HomePage": ""
});

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "ngStore.customer",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "ngStore.category",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "ngStore.employee",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "ngStore.orderDetail",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "ngStore.product",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "ngStore.shipper",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "ngStore.supplier",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "ngStore.order",
  "name": "_id_"
});
