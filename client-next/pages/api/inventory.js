export default function handler(req, res) {
    res.status(200).json({
        
        data: [{
            "id": 1,
            "itemName": "All-Purpose Flour",
            "category": "DRY_PANTRY",
            "supplier": "Witting-Keeling",
            "supplierId": "92-379-8399",
            "units": 39,
            "unitOfMeasure": "LB",
            "amountPerUnit": 4
          }, {
            "id": 2,
            "itemName": "Gluten-free Flour",
            "category": "DRY_PANTRY",
            "supplier": "Rau-Renner",
            "supplierId": "58-912-0219",
            "units": 45,
            "unitOfMeasure": "LB",
            "amountPerUnit": 15
          }, {
            "id": 3,
            "itemName": "High-Protein Flour",
            "category": "DRY_PANTRY",
            "supplier": "Hudson-Mante",
            "supplierId": "27-394-7782",
            "units": 4,
            "unitOfMeasure": "LB",
            "amountPerUnit": 23
          }, 
          {
            "id": 4,
            "itemName": "Active Dry Yeast",
            "category": "DRY_PANTRY",
            "supplier": "Batz-Lakin",
            "supplierId": "87-661-6936",
            "units": 24,
            "unitOfMeasure": "LB",
            "amountPerUnit": 6
          }, {
            "id": 5,
            "itemName": "Salt",
            "category": "DRY_PANTRY",
            "supplier": "Botsford LLC",
            "supplierId": "45-521-0780",
            "units": 60,
            "unitOfMeasure": "LB",
            "amountPerUnit": 20
          }, {
            "id": 6,
            "itemName": "Sugar",
            "category": "DRY_PANTRY",
            "supplier": "Swift, Schmeler and Stehr",
            "supplierId": "23-467-0623",
            "units": 37,
            "unitOfMeasure": "LB",
            "amountPerUnit": 18
          }, {
            "id": 7,
            "itemName": "Black Peppercorns",
            "category": "DRY_PANTRY",
            "supplier": "Parisian, Strosin and Kuhic",
            "supplierId": "61-279-6365",
            "units": 34,
            "unitOfMeasure": "LB",
            "amountPerUnit": 9
          }, {
            "id": 8,
            "itemName": "Sweet Paprika",
            "category": "DRY_PANTRY",
            "supplier": "Fisher and Sons",
            "supplierId": "02-718-4870",
            "units": 85,
            "unitOfMeasure": "LB",
            "amountPerUnit": 4
          }, {
            "id": 9,
            "itemName": "Cayenne Pepper",
            "category": "DRY_PANTRY",
            "supplier": "Roob, Rice and Cruickshank",
            "supplierId": "42-058-3550",
            "units": 98,
            "unitOfMeasure": "LB",
            "amountPerUnit": 8
          }, {
            "id": 10,
            "itemName": "Dried Rosemary",
            "category": "DRY_PANTRY",
            "supplier": "Hilpert, O'Keefe and Howe",
            "supplierId": "27-607-1835",
            "units": 51,
            "unitOfMeasure": "LB",
            "amountPerUnit": 13
          }, {
            "id": 11,
            "itemName": "Dried Oregano",
            "category": "DRY_PANTRY",
            "supplier": "Turcotte LLC",
            "supplierId": "74-769-6416",
            "units": 15,
            "unitOfMeasure": "LB",
            "amountPerUnit": 4
          }, {
            "id": 12,
            "itemName": "Onion Powder",
            "category": "DRY_PANTRY",
            "supplier": "Veum-White",
            "supplierId": "83-041-3010",
            "units": 100,
            "unitOfMeasure": "LB",
            "amountPerUnit": 9
          }, {
            "id": 13,
            "itemName": "Garlic Powder",
            "category": "DRY_PANTRY",
            "supplier": "Herzog-Sanford",
            "supplierId": "36-357-6635",
            "units": 59,
            "unitOfMeasure": "LB",
            "amountPerUnit": 21
          }, {
            "id": 14,
            "itemName": "Extra-Virgin Olive Oil",
            "category": "DRY_PANTRY",
            "supplier": "Abernathy-Pollich",
            "supplierId": "82-036-2557",
            "units": 25,
            "unitOfMeasure": "GAL",
            "amountPerUnit": 23
          }, {
            "id": 15,
            "itemName": "BBQ Sauce",
            "category": "DRY_PANTRY",
            "supplier": "Stark, Rutherford and Littel",
            "supplierId": "89-605-1550",
            "units": 23,
            "unitOfMeasure": "GAL",
            "amountPerUnit": 22
          }, {
            "id": 16,
            "itemName": "Buffalo Sauce",
            "category": "DRY_PANTRY",
            "supplier": "Dicki, Lindgren and Rodriguez",
            "supplierId": "34-201-8136",
            "units": 16,
            "unitOfMeasure": "GAL",
            "amountPerUnit": 3
          }, {
            "id": 17,
            "itemName": "Canned Crushed Tomatoes",
            "category": "DRY_PANTRY",
            "supplier": "DuBuque, Beier and Moore",
            "supplierId": "53-422-2678",
            "units": 56,
            "unitOfMeasure": "LB",
            "amountPerUnit": 13
          }, 
          {
            "id": 18,
            "itemName": "Cremini Mushrooms",
            "category": "PRODUCE",
            "supplier": "Crist, Krajcik and Parker",
            "supplierId": "32-959-9195",
            "units": 5,
            "unitOfMeasure": "LB",
            "amountPerUnit": 15
          }, {
            "id": 19,
            "itemName": "Red Onion",
            "category": "PRODUCE",
            "supplier": "Paucek-Stehr",
            "supplierId": "39-357-8226",
            "units": 1,
            "unitOfMeasure": "LB",
            "amountPerUnit": 3
          }, {
            "id": 20,
            "itemName": "Pineapple",
            "category": "PRODUCE",
            "supplier": "Dach and Sons",
            "supplierId": "63-480-2277",
            "units": 40,
            "unitOfMeasure": "LB",
            "amountPerUnit": 18
          }, {
            "id": 21,
            "itemName": "Assorted Bell Peppers",
            "category": "PRODUCE",
            "supplier": "Mertz Group",
            "supplierId": "43-720-8600",
            "units": 37,
            "unitOfMeasure": "LB",
            "amountPerUnit": 14
          }, {
            "id": 22,
            "itemName": "Jalapeno Peppers",
            "category": "PRODUCE",
            "supplier": "Walter Group",
            "supplierId": "20-580-1683",
            "units": 49,
            "unitOfMeasure": "LB",
            "amountPerUnit": 18
          }, {
            "id": 23,
            "itemName": "Plum Tomatoes",
            "category": "PRODUCE",
            "supplier": "Ernser-Frami",
            "supplierId": "54-746-7360",
            "units": 29,
            "unitOfMeasure": "LB",
            "amountPerUnit": 7
          }, {
            "id": 24,
            "itemName": "Canned Black Olives",
            "category": "DRY_PANTRY",
            "supplier": "Lind, Okuneva and Stark",
            "supplierId": "81-523-8940",
            "units": 39,
            "unitOfMeasure": "LB",
            "amountPerUnit": 16
          }, {
            "id": 25,
            "itemName": "Fresh Rosemary",
            "category": "PRODUCE",
            "supplier": "Fadel Group",
            "supplierId": "67-043-6121",
            "units": 3,
            "unitOfMeasure": "LB",
            "amountPerUnit": 14
          }, {
            "id": 26,
            "itemName": "Fresh Oregano",
            "category": "PRODUCE",
            "supplier": "Daniel, Davis and Rodriguez",
            "supplierId": "08-849-1750",
            "units": 32,
            "unitOfMeasure": "LB",
            "amountPerUnit": 2
          }, {
            "id": 27,
            "itemName": "Fresh Thyme",
            "category": "PRODUCE",
            "supplier": "Lynch LLC",
            "supplierId": "86-660-0436",
            "units": 82,
            "unitOfMeasure": "LB",
            "amountPerUnit": 11
          }, {
            "id": 28,
            "itemName": "Fresh Garlic",
            "category": "PRODUCE",
            "supplier": "Bruen, Vandervort and Reichert",
            "supplierId": "59-998-9649",
            "units": 5,
            "unitOfMeasure": "LB",
            "amountPerUnit": 3
          },
          {
            "id": 29,
            "itemName": "Thin-sliced Pepperoni",
            "category": "MEAT",
            "supplier": "Kshlerin, Monahan and Torphy",
            "supplierId": "63-329-8132",
            "units": 45,
            "unitOfMeasure": "LB",
            "amountPerUnit": 6
          }, {
            "id": 30,
            "itemName": "Sweet Italian Sausage With Fennel",
            "category": "MEAT",
            "supplier": "Hodkiewicz, Schroeder and Lueilwitz",
            "supplierId": "05-151-1097",
            "units": 91,
            "unitOfMeasure": "LB",
            "amountPerUnit": 22
          }, {
            "id": 31,
            "itemName": "Thick-cut Bacon",
            "category": "MEAT",
            "supplier": "Parisian, Tromp and Mitchell",
            "supplierId": "41-432-2883",
            "units": 8,
            "unitOfMeasure": "LB",
            "amountPerUnit": 15
          }, {
            "id": 32,
            "itemName": "Honey-glazed Ham",
            "category": "MEAT",
            "supplier": "Stoltenberg-Wolff",
            "supplierId": "58-581-8022",
            "units": 78,
            "unitOfMeasure": "LB",
            "amountPerUnit": 17
          }, {
            "id": 33,
            "itemName": "Chicken Breast",
            "category": "MEAT",
            "supplier": "Strosin-Lynch",
            "supplierId": "15-678-7390",
            "units": 83,
            "unitOfMeasure": "LB",
            "amountPerUnit": 16
          },
          {
            "id": 34,
            "itemName": "Fresh Mozzarella Cheese",
            "category": "DAIRY",
            "supplier": "Roob Group",
            "supplierId": "73-255-0748",
            "units": 32,
            "unitOfMeasure": "LB",
            "amountPerUnit": 5
          }, {
            "id": 35,
            "itemName": "Parmesan Cheese",
            "category": "DAIRY",
            "supplier": "Purdy, Maggio and Considine",
            "supplierId": "72-050-5977",
            "units": 1,
            "unitOfMeasure": "LB",
            "amountPerUnit": 19
          }, {
            "id": 36,
            "itemName": "Asiago Cheese",
            "category": "DAIRY",
            "supplier": "Anderson, Dare and Larson",
            "supplierId": "75-305-6516",
            "units": 51,
            "unitOfMeasure": "LB",
            "amountPerUnit": 21
          }, {
            "id": 37,
            "itemName": "Romano Cheese",
            "category": "DAIRY",
            "supplier": "Larson, Reilly and Hilpert",
            "supplierId": "90-123-9265",
            "units": 51,
            "unitOfMeasure": "LB",
            "amountPerUnit": 4
          }, {
            "id": 38,
            "itemName": "Fresh Milk",
            "category": "DAIRY",
            "supplier": "West, O'Keefe and Kilback",
            "supplierId": "37-407-7115",
            "units": 49,
            "unitOfMeasure": "GAL",
            "amountPerUnit": 11
          }, {
            "id": 39,
            "itemName": "Heavy Cream",
            "category": "DAIRY",
            "supplier": "White Group",
            "supplierId": "58-755-3588",
            "units": 54,
            "unitOfMeasure": "GAL",
            "amountPerUnit": 9
        //   }, {
        //     "id": 40,
        //     "supplier": "Fahey Group",
        //     "supplierId": "87-672-4722",
        //     "units": 37,
        //     "amountPerUnit": 11
        //   }, {
        //     "id": 41,
        //     "supplier": "Gutkowski-Spinka",
        //     "supplierId": "51-327-9178",
        //     "units": 29,
        //     "amountPerUnit": 10
        //   }, {
        //     "id": 42,
        //     "supplier": "Crona and Sons",
        //     "supplierId": "19-859-7973",
        //     "units": 36,
        //     "amountPerUnit": 24
        //   }, {
        //     "id": 43,
        //     "supplier": "Jacobi LLC",
        //     "supplierId": "75-032-8960",
        //     "units": 6,
        //     "amountPerUnit": 2
        //   }, {
        //     "id": 44,
        //     "supplier": "Cartwright, Padberg and Hartmann",
        //     "supplierId": "50-090-6819",
        //     "units": 59,
        //     "amountPerUnit": 1
        //   }, {
        //     "id": 45,
        //     "supplier": "Lehner-Legros",
        //     "supplierId": "91-818-4506",
        //     "units": 17,
        //     "amountPerUnit": 20
        //   }, {
        //     "id": 46,
        //     "supplier": "Mohr-Balistreri",
        //     "supplierId": "77-563-9789",
        //     "units": 82,
        //     "amountPerUnit": 21
        //   }, {
        //     "id": 47,
        //     "supplier": "Nienow Inc",
        //     "supplierId": "65-802-4895",
        //     "units": 13,
        //     "amountPerUnit": 10
        //   }, {
        //     "id": 48,
        //     "supplier": "Walker Group",
        //     "supplierId": "96-837-1941",
        //     "units": 71,
        //     "amountPerUnit": 12
        //   }, {
        //     "id": 49,
        //     "supplier": "Hettinger, Ward and Jacobson",
        //     "supplierId": "87-612-9287",
        //     "units": 36,
        //     "amountPerUnit": 11
        //   }, {
        //     "id": 50,
        //     "supplier": "Champlin-Spencer",
        //     "supplierId": "19-579-7979",
        //     "units": 13,
        //     "amountPerUnit": 20
          }]
    });
}
