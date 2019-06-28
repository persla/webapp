"use strict";

import m from "mithril";
import  nobel  from "../models/nobel.js";

var news = {
    oninit: function() {
        nobel.getApiPolis();
    },
    antal: 0,
    view: function () {
        return m("div.slide-in", [
            m("h2", "Senaste nytt"),
            m("span", nobel.tenLatestCrime.map(function(newsitem) {
                return ("span", [
                    // m("span.smalltext.gray", news.type),
                    m("h4", newsitem.name),
                    m("p.line", newsitem.summary),
                ]);
            })),
            m("span", "För fler händelsenotiser, sök på ort eller händelse"),
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

export default news;
