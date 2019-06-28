"use strict";
import m from "mithril";
// import mCheckbox from 'mithril-checkbox';
import auth from "../models/auth.js";

var createInlogg = {
    oninit: auth.clear,
    checked: false,
    view: function () {
        return m("div", [
            m("h2", "Ny användare"),
            m("form", {
                onsubmit: function (event) {
                    event.preventDefault();
                    auth.registrer();
                }
            }, [

                m("label.input-label", "Din E-post"),
                m("input[type=email][placeholder='E-post'][required].input", {
                    oninput: function(e) {
                        auth.email = e.target.value;
                    }
                }),
                m("label.input-label", "Ditt lösenord"),
                m("input[type=password][placeholder='Lösenord'][required].input", {
                    oninput: function(e) {
                        auth.password = e.target.value;
                    }
                }),
                m("span", "Jag godkänner villkoren för att använda PolisInfo-appen. "),

                m("input", {type: 'checkbox', checked: createInlogg.checked,
                    onclick() {createInlogg.checked = !createInlogg.checked;}
                }),

                createInlogg.checked == true ?
                    m("input[type=submit][value=Skapa inlogging].button.blue-button",
                        "Skapa inlogging") :
                    null,
            ]),

        ]);
    }
};

export default createInlogg;
