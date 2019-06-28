"use strict";

import m from "mithril";
import  nobel  from "../models/nobel.js";

var home = {
    oninit: function() {
        nobel.getApiPolis();
    },
    view: function () {
        return m("div", [
            nobel.currentsCrime.length > 0 ?
                m.route.set("/year")
                :
                m("span.spinner rotate", ""),
            m("p", `Hämtar de senaste händelserna från polisen, det kan ta några sekunder
            beroende på uppkopplingshastigheten.`),
        ]);
    }
};

export default home;
