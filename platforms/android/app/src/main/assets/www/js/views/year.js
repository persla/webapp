"use strict";

import m from 'mithril';
import  nobel  from "../models/nobel.js";

let year = {
    oninit: function() {
        nobel.getApiPolis();
    },
    // oncreate: nobel.getApiPolis,
    crimesSearch: "",
    citySearch: "",

    view: function() {
        return m("div", [
            m("i", "Senaste händelsen: " + nobel.senasteBrott),
            m("h2", "Händelsenotiser"),
            m("p", "500 aktuella händelsenotiser från polisen."),
            m("span", "Tidsintervall från " + nobel.brottFirst.slice(0, -7) + " till "
            + nobel.brottLatest.slice(0, -7)),
            m("p", [
                m("a.button", {href: "/news", oncreate: m.route.link},
                    "Senaste nytt")]),
            //City search form
            m("form", {
                onsubmit: function (event) {
                    event.preventDefault();
                    nobel.getsearchCity();
                }
            }, [

                m("label.input-label", "Sök på ort"),
                m("select.input", {
                    onchange: function (e) {
                        nobel.citySearch = e.target.value;
                        year.citySearch = e.target.value;
                    }, },
                m("option", { value: null}, "Välj ort"),
                nobel.citysOne.map(function(city) {
                    return m("option", { value: city}, city);
                })),

                m("input[type=submit][value=Sök "+ year.citySearch +
                    "].button", "Sök på orten")
            ]),

            //Creates table from City search
            nobel.searchForCity.length > 0 ?
                m("table.table.table-scroll", [
                    m("thead", [
                        m("tr", [
                            m("th", "Tidpunkt, händelse, ort"),
                        ])
                    ]),
                    m("tbody", nobel.searchForCity.map(function(crime) {
                        return m("tr", [
                            m("td", [
                                m("a",
                                    m("i.material-icons.blue", "info_outline"),
                                    m("span", {href: "/incident/" +
                                        crime.id, oncreate: m.route.link},
                                    crime.name)
                                )]),
                        ]);
                    }))
                ]): null,

            //Incident search form
            m("form", {
                onsubmit: function (event) {
                    event.preventDefault();
                    nobel.getsearchCrime();
                }
            }, [
                m("label.input-label", "Sök på händelse"),
                m("select.input", {
                    onchange: function (e) {
                        nobel.crimeSearch = e.target.value;
                        year.crimesSearch = e.target.value;
                    }, },
                m("option", { value: null}, "Välj händelse"),
                nobel.crimesOnes.map(function(crime) {
                    return m("option", { value: crime}, crime);
                })),

                m("input[type=submit][value=Sök "+ year.crimesSearch +
                    "].button", "Sök på händelse")
            ]),
            //Creates table from Incident search
            nobel.searchForCrime.length > 0 ?
                m("table.table.table-scroll", [
                    m("thead", [
                        m("tr", [
                            m("th", "Tidpunkt, händelse, ort"),
                        ])
                    ]),
                    m("tbody", nobel.searchForCrime.map(function(crime) {
                        return m("tr", [
                            m("td", [
                                m("a",
                                    m("i.material-icons.blue", "info_outline"),
                                    m("span", {href: "/incident/" + crime.id,
                                        oncreate: m.route.link},
                                    crime.name)
                                )]),
                        ]);
                    }))
                ]): null,
        ]);
    }
};

export default year;
