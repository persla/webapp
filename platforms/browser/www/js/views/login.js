"use strict";
import m from "mithril";
import auth from "../models/auth.js";

var errorMessage = {
    view: function() {
        return m("div.error", auth.errorMessage);
    }
};

var login = {

    oninit: auth.clear,

    view: function () {
        // console.log(deliveries.currentDeliveries.length);
        return m("div", [
            m("h2", "Inloggning PolisInfo"),
            auth.errorMessage ? m(errorMessage) : null,
            m("form", {
                onsubmit: function (event) {
                    event.preventDefault();
                    auth.login();
                }
            }, [

                m("label.input-label", "E-post"),
                m("input[type=email][placeholder='E-post'][required].input", {
                    oninput: function(e) {
                        auth.email = e.target.value;
                    }
                }),
                m("label.input-label", "Lösenord"),
                m("input[type=password][placeholder='Lösenord'][required].input", {
                    oninput: function(e) {
                        auth.password = e.target.value;
                    }
                }),

                m("input[type=submit][value=Logga in].button", "Logga in"),
                m("p"),
                m("p", [
                    m("a.button1", {href: "/createInlog", oncreate: m.route.link},
                        "Skapa inloggning")]),
            ])
        ]);
    }
};

export default login;
