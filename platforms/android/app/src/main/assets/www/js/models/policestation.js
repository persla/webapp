"use strict";

import m from 'mithril';

let policestation= {
    policestations: [],
    stationSearch: "",
    id: "",
    coordinatey: 0,
    coordinatex: 0,
    currentPolicestation: [],
    currentService: [],
    policeServiceArray: [],
    policeService: {"Anmälan": "Anmälan - tar emot anmälningar av brott.",
        "Pass/nationellt id-kort": "Pass - det går att ansöka om pass och nationella id-kort.",
        "Tillstånd": "Tillstånd - stationen hanterar olika typer av tillstånd.",
        "Hittegods": "Hittegods - stationen hanterar hittegods.",
        "Vapen": "Vapen - stationen hanterar vapenärenden.",
        "Delgivning": "Delgivning - lämnar ut delgivningar.",
        "Cyklar": "Cyklar - har cykelvisning eller auktion.",
        "Provisoriskt pass": "Provisoriskt pass - stationen utfärdar provisoriskt pass.",
        "Beslag": "Beslag - det går att hämta beslagtaget gods på stationen."},

    getPolisStations: function() {
        return m.request({
            method: "GET",
            url: "https://polisen.se/api/policestations"
        })
            .then(function(result) {
                policestation.policestations = result;
            });
    },

    getPolisStation: function(name) {
        policestation.currentPolicestation = policestation.policestations.
            filter(function (station) {
                return station.name == name;
            })[0];
        policestation.currentService = policestation.currentPolicestation.services.
            map(function(service) {
                return service.name;
            });

        m.route.set("/station");

        console.log(policestation.policeService);

        //Combines the two service arrays based on keys and prints the value from policeService array
        const select = (arr, obj) => arr.reduce((r, prop) => {
            obj.hasOwnProperty(prop) && (r[prop] = obj[prop]);
            return r;
        }, {});

        const output = select(policestation.currentService, policestation.policeService);

        policestation.policeServiceArray = Object.values(output);

        //Converts the station's position coordinates to float
        var commaPos = policestation.currentPolicestation.location.gps.indexOf(',');

        policestation.coordinatey = parseFloat(policestation.currentPolicestation.location.
            gps.substring(0, commaPos));
        policestation.coordinatex = parseFloat(policestation.currentPolicestation.location.gps.
            substring(commaPos + 1, policestation.currentPolicestation.location.gps.length));
    },
};

export default policestation;
