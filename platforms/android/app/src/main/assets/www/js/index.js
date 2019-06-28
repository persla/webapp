/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

"use strict";
import m from "mithril";
import auth from "./models/auth.js";
import layout from "./views/layout";
import home from "./views/home";
import login from "./views/login.js";
import createInlog from "./views/create_inlog.js";
import year from "./views/year.js";
import incident from "./views/incident.js";
import loadpage from "./views/loadpage.js";
import loadpagestat from "./views/loadpagestat.js";
import listcrime from "./views/listcrime.js";
import police from "./views/police.js";
import station from "./views/station.js";
import authorization from "./views/authorization.js";
import news from "./views/news.js";


var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        console.log("device is ready!");

        m.route(document.body, "/", {
            "/": {
                render: function() {
                    return m(layout, m(home));
                }
            },

            "/login": {
                render: function() {
                    return m(layout, m(login));
                }
            },

            "/createInlog": {
                render: function() {
                    return m(layout, m(createInlog));
                }
            },

            "/year": {
                render: function() {
                    return m(layout, m(year));
                }
            },

            "/incident/:id": {
                render: function(vnode) {
                    return m(layout, m(incident, vnode.attrs));
                }
            },

            "/loadpage": {
                render: function(vnode) {
                    if (auth.token) {
                        return m(layout, m(loadpage, vnode.attrs));
                    }
                    return m.route.set("/authorization");
                }
            },

            "/loadpagestat": {
                render: function() {
                    return m(layout, m(loadpagestat));
                }
            },

            "/listcrime": {
                render: function() {
                    return m(layout, m(listcrime));
                }
            },

            "/police": {
                render: function() {
                    return m(layout, m(police));
                }
            },

            "/station": {
                render: function() {
                    return m(layout, m(station));
                }
            },

            "/authorization": {
                render: function() {
                    return m(layout, m(authorization));
                }
            },

            "/news": {
                render: function() {
                    return m(layout, m(news));
                }
            },

        });
    },
};

app.initialize();
