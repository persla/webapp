"use strict";

import m from "mithril";
var authorization = {
    view: function () {
        return m("div", [
            m("span.i.material-icons.blue", "info"),
            m("p", `Du behöver vara inloggad för att komma åt händelsenotiserna.`),
            m("p", [
                m("a.button", {href: "/login", oncreate: m.route.link}, "Logga in")]),
            m("p", [
                m("a.button1", {href: "/createInlog", oncreate: m.route.link},
                    "Skapa inloggning")]),
        ]);
    }
};

export default authorization;
