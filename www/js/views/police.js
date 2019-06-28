"use strict";

import m from 'mithril';

import policestation from "../models/policestation.js";

let police = {
    oninit: function() {
        policestation.getPolisStations();
    },
    id: "",

    view: function() {
        return m("div", [
            m("h2", "Polisstationer i Sverige"),
            m("div.autocomplete", [
                m("label.input-label", "Sök efter polisstation"),
                m("input#search[list=results].input", { onclick: function (e) {
                    policestation.id = e.target.value;
                    // console.log(policestation.id);
                    policestation.id ?
                        policestation.getPolisStation(policestation.id)
                        : null;
                }
                }),
                m("datalist#results", [
                    policestation.policestations &&
                    policestation.policestations.map(function(station) {
                        return m("option", {value: station.name},
                        );
                    })
                ])
            ]),
        ]);
    }
};

export default police;
