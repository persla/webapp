"use strict";
import m from "mithril";
import policestation from "../models/policestation.js";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";
import position from "../models/position.js";
import locationIcon from "../../location.png";

var map;
var locationMarker = L.icon({
    iconUrl: locationIcon,
    iconSize:     [24, 24],
    iconAnchor:   [12, 12],
    popupAnchor:  [0, 0]
});

function showMap() {
    var places = {
        "Station": [policestation.coordinatey, policestation.coordinatex],
    };

    map = L.map('map').setView(places["Station"], 13);

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

function showPosition() {
    if (position.currentPosition.latitude && position.currentPosition.longitude) {
        L.marker(
            [position.currentPosition.latitude, position.currentPosition.longitude],
            {icon: locationMarker}
        ).addTo(map).bindPopup("Din plats");
    }
}

var station = {

    oninit: function() {
        position.getPosition();
    },
    oncreate: showMap,
    onremove: function() {

    },
    view: function () {
        showPosition();

        return m("div.slide-in.detail", [
            m("h2", "Polisstation: " + policestation.currentPolicestation.name),
            m("p", "Adress: " + policestation.currentPolicestation.location.name),
            m("p", "Tjänster:"),
            m("table.table.table-scroll", [
                m("tbody", policestation.policeServiceArray.map(function(service) {
                    return m("tr", [
                        m("td", service),
                    ]);
                }))
            ]),
            m("p", [m("a", {href: policestation.currentPolicestation.Url,
                target: '_blank', oncreate: m.link},
            "Mer information")]),
            m("div.#map.map", ""),
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

export default station;
