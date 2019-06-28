"use strict";
import m from "mithril";
import  nobel  from "../models/nobel.js";

var listcrime = {
    checked: false,
    checked1: false,
    oninit: function() {
        nobel.getApiPolis();
    },

    view: function () {
        return m("div", [
            m("h2", "Sammanställning"),
            m("p", "Sammanställning över 500 aktuella händelsenotiser från polisen"),
            m("span", "Tidsintervall från " + nobel.brottFirst.slice(0, -7) +
            " till " + nobel.brottLatest.slice(0, -7)),

            m("input.button.blue-button",  {type: 'button', value: "Händelser ABC",
                checked: listcrime.checked,
                onclick() {listcrime.checked = !listcrime.checked;}
            }, ),

            listcrime.checked == true ?
                m("table.table.table-scroll.table-striped", [
                    m("thead", [
                        m("tr", [
                            m("th", "Händelse, antal"),
                        ])
                    ]),
                    m("tbody", nobel.crimesCountSArray.map(function(crime) {
                        return m("tr", [
                            m("td", crime),
                        ]);
                    }))
                ]) : null,

            m("input.button.blue-button", {type: 'button', value: "Händelser 123",
                checked1: listcrime.checked1,
                onclick() {listcrime.checked1 = !listcrime.checked1;}
            }, ),

            listcrime.checked1 == true ?
                m("table.table.table-scroll.table-striped", [
                    m("thead", [
                        m("tr", [
                            m("th", "Händelse, antal"),
                        ])
                    ]),
                    m("tbody", nobel.crimesCountSArrayAmount.map(function(crime) {
                        return m("tr", [
                            m("td", crime),
                        ]);
                    }))
                ]) : null,

        ]);
    },
};

export default listcrime;
