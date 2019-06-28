"use strict";

import m from 'mithril';
// import  year  from "../views/year.js";
let nobel = {
    senasteBrott: "",
    crimesCount: {},
    crimesCountSArray: [],
    crimesCountSArrayAmount: [],
    crimesOnes: [],
    citysOne: [],
    brottLatest: "",
    brottFirst: "",
    currentsCrime: [],
    searchForCrime: [],
    searchForCity: [],
    citySearch: "",
    crimeSearch: "",
    specificCrime: [],
    currentsCrimeDate: [],
    tenLatestCrime: [],
    coordinatey: 0,
    coordinatex: 0,

    getApiPolis: function() {
        return m.request({
            method: "GET",
            url: "https://polisen.se/api/events"
        })
            .then(function(result) {
                nobel.currentsCrime = result;

                // Incidents sorted by datetime
                nobel.currentsCrimeDate = nobel.currentsCrime.sort((d1, d2) =>
                    new Date(d2.datetime).getTime() - new Date(d1.datetime).getTime());

                nobel.tenLatestCrime = nobel.currentsCrimeDate.slice(0, 10);
                console.log(nobel.tenLatestCrime);
                nobel.senasteBrott = nobel.currentsCrimeDate[0].name;

                nobel.brottLatest = result[0].datetime;
                nobel.brottFirst = result[499].datetime;

                // Places filtered so that it only becomes one of
                //each for the select element
                nobel.citys = result.map(city => city.location.name);
                nobel.citys = nobel.citys.sort();
                nobel.citysOne = nobel.citys.filter(function(item, index) {
                    return nobel.citys.indexOf(item) >= index;
                });

                // Incidents filtered so that it only becomes one of
                //each for the select element
                nobel.crimes = result.map(crime => crime.type);
                nobel.crimesOnes = nobel.crimes.filter(function(item, index) {
                    return nobel.crimes.indexOf(item) >= index;
                });
                nobel.crimesOnes = nobel.crimesOnes.sort();

                // Count of each incident in categories
                nobel.crimesCount = result.reduce(function(sums, entry) {
                    sums[entry.type] = (sums[entry.type] || 0) + 1;
                    return sums;
                }, {});
                // Each incident categorized alphabetically
                nobel.crimesCountSArray = Object.entries(nobel.crimesCount);
                for (var i = 0; i < nobel.crimesCountSArray.length; i++) {
                    nobel.crimesCountSArray[i].splice(1, 0, ', ');
                }
                nobel.crimesCountSArray = nobel.crimesCountSArray.sort();

                // Every incident categorized by number
                nobel.crimesCountSArrayAmount = Object.keys(nobel.crimesCount).map(function (key) {
                    return [key, this[key]];
                }, nobel.crimesCount).sort(function (a, b) {
                    return b[1] - a[1];
                });
                //Commas separated output
                for (var j = 0; j < nobel.crimesCountSArrayAmount.length; j++) {
                    nobel.crimesCountSArrayAmount[j].splice(1, 0, ', ');
                }
            });
    },
    getsearchCity: function() {
        nobel.searchForCity = nobel.currentsCrime.filter(function (crime) {
            return crime.location.name == nobel.citySearch;
        });
    },
    getsearchCrime: function() {
        nobel.searchForCrime = nobel.currentsCrime.filter(function (crime) {
            return crime.type == nobel.crimeSearch;
        });
    },

    getSpecificCrime: function(id) {
        nobel.specificCrime = nobel.currentsCrime.filter(function (crime) {
            return crime.id == id;
        })[0];
    },
    currentAddress: "",
    getSpecificCrimeAdress: function() {
        var commaPos = nobel.specificCrime.location.gps.indexOf(',');

        nobel.coordinatey = parseFloat(nobel.specificCrime.location.gps.substring(0, commaPos));
        nobel.coordinatex = parseFloat(nobel.specificCrime.location.gps.
            substring(commaPos + 1, nobel.specificCrime.location.gps.length));
    },
};

export default nobel;
