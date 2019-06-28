"use strict";

import m from "mithril";
var home = {
    view: function () {
        return m("div", [
            m("h1", "PolisInfo"),
            m("p.line", [
                m("span.material-icons.blue", "search"),
                m("span", ` Sök bland polisens 500 senaste utryckningar i form av
                händelsenotiser.`),
            ]),
            m("p.line", [
                m("span.material-icons.blue", "sort"),
                m("span", ` Se sammanställning av händelsenotiserna.`),
            ]),
            m("p.line", [
                m("span.material-icons.blue", "import_contacts"),
                m("span", ` Sök information om polisstationer i Sverige`),
            ]),
            m("span", `Du behöver vara inloggad för att komma åt
            händelsenotiserna, tjänsten är gratis.`),
            m("p", [
                m("a.button", {href: "/login", oncreate: m.route.link}, "Logga in"),
                m("p"),
                m("a.button1", {href: "/createInlog", oncreate: m.route.link},
                    "Skapa inloggning")]),
        ]);
    }
};

export default home;
