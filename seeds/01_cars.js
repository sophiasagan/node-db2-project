
exports.seed = async function (knex) {
  //clear out our rows
  // truncate does more than .del(), like resetting the autoincrementing ID
  await knex('cars').truncate()

  await knex('cars').insert([
    { make: "Mercedez-Benz", model: "ML320", year: "2009", mileage: "155845", vin: "2CKDL73F766084361", titleStatusIsClean: true
  },
  { make: "Sterling", model: "L7500", year: "2003", mileage: "150015", vin: "5GTDN136168202826", titleStatusIsClean: true
},
{ make: "Arctic Cat", model: "Sabercat 700 EFI", year: "2005", mileage: "185845", vin: "5XYKTCA67FG614633", titleStatusIsClean: true
  },
  { make: "Honda", model: "FSC600 Silver Wing", year: "2007", mileage: "155845", vin: "JM3KE2CY5F0550981", titleStatusIsClean: true
  },
  { make: "Aston Martin", model: "V8 Vantage", year: "2014", mileage: "51145", vin: "1ZVBP8CF6D5206836", titleStatusIsClean: true
  },
  ])
};
