"use strict";
import m from "mithril";
import nobel from "../models/nobel.js";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";

var map;

function showMap() {
    var places = {
        "Ort": [nobel.coordinatey, nobel.coordinatex],
    };

    map = L.map('map').setView(places["Ort"], 9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',    {
        attribution: `&copy;
            <a href="https://www.openstreetmap.org/copyright">
            OpenStreetMap</a> contributors`
    }).addTo(map);

    for (var place in places) {
        if (places.hasOwnProperty(place)) {
            L.marker(places[place]).addTo(map).bindPopup(place);
        }
    }
}

var incident = {

    oninit: function(vnode) {
        nobel.getSpecificCrime(vnode.attrs.id);
        // position.getPosition();
        nobel.getApiPolis();
        nobel.getSpecificCrimeAdress(vnode.attrs.id);
    },
    oncreate: function () {
        showMap();
    },

    onremove: function() {
        // position.currentPosition.latitude = 0;
        // position.currentPosition.longitude = 0;
    },
    view: function () {
        // showPosition();

        return m("div.slide-in.detail", [
            m("h2", "Händelse: " + nobel.specificCrime.name),
            m("p", "Beskrivning: " + nobel.specificCrime.summary),
            m("p", "Kategori: " + nobel.specificCrime.type),
            m("p", "Plats: " + nobel.specificCrime.location.name),
            m("p", [m("a", {href: nobel.specificCrime.url, target: '_blank', oncreate: m.link},
                "Mer information")]),
            m("div.#map.map", ""),
            m("span.smalltext", `Den geografiska plats som anges för händelsen
            är mittkoordinat för det län eller den kommun där händelsen har
            inträffat. Markören finns således inte på den exakta platsen där
            själva händelsen har inträffat.`)

        ]);
    },

    onbeforeremove: function(vnode) {
        vnode.dom.classList.add("slide-out");
        return new Promise(function(resolve) {
            setTimeout(function() {
                vnode.dom.classList.remove("slide-out");
                resolve();
            }, 250);
        });
    },

};

export default incident;
