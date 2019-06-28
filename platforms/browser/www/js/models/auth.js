"use strict";
import m from "mithril";

var auth = {
    email: "",
    password: "",
    emailNew: "",
    passwordNew: "",
    token: "",
    errorMessage: "",

    clear: function() {
        auth.email = "";
        auth.password = "";
    },

    login: function() {
        var payload = {
            email: auth.email,
            password: auth.password,
            api_key: "e2386b9513c75723e61b80bd23d427d1"

        };

        return m.request({
            url: "https://auth.emilfolino.se/login",
            method: "POST",
            data: payload
        }).then(function(result) {
            auth.token = result.data.token;
            m.route.set("/loadpage");
        }).catch(function(error) {
            var errorJSON = JSON.parse(error.message);

            auth.errorMessage = errorJSON.errors.detail;
        });
    },

    registrer: function() {
        var payload = {
            email: auth.email,
            password: auth.password,
            api_key: "e2386b9513c75723e61b80bd23d427d1"

        };

        return m.request({
            url: "https://auth.emilfolino.se/register",
            method: "POST",
            data: payload
        }).then(function(result) {
            auth.token = result.data.token;
            m.route.set("/login");
        });
    },

};

export default auth;
