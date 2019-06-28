"use strict";

import m from 'mithril';

let layout = {
    view: function(vnode) {
        return [
            m("nav.top-nav",
                { textContent: "PolisInfo"},
                [
                    m.route.get().split("/")[1] == "incident" ?
                        m("span", [
                            m("a.i.material-icons",
                                {href: "/year", oncreate: m.route.link},
                                "arrow_back")
                        ]) : null,
                    m.route.get().split("/")[1] == "news" ?
                        m("span", [
                            m("a.i.material-icons",
                                {href: "/year", oncreate: m.route.link},
                                "arrow_back")
                        ]) : null,
                    m.route.get().split("/")[1] == "authorization" ?
                        m("span", [
                            m("a.i.material-icons",
                                {href: "/home", oncreate: m.route.link},
                                "arrow_back")
                        ]) : null,
                    m.route.get().split("/")[1] == "createInlog" ?
                        m("span", [
                            m("a.i.material-icons",
                                {href: "/login", oncreate: m.route.link},
                                "arrow_back")
                        ]) : null,
                    m.route.get().split("/")[1] == "station" ?
                        m("span", [
                            m("a.i.material-icons",
                                {href: "/police", oncreate: m.route.link},
                                "arrow_back")
                        ]) : null,
                    m.route.get().split("/")[1] == "year" ?
                        m("span", [
                            m("a.i.material-icons",
                                {href: "/loadpage", oncreate: m.route.link},
                                "refresh")
                        ]) : null,
                ]),
            m("main.container", vnode.children),
            m("nav.bottom-nav", [
                m.route.get().split("/")[1] == "" ?
                    m("a.i.material-icons.active",
                        {href: "/home", oncreate: m.route.link}, "home")
                    : m("a.i.material-icons",
                        {href: "/home", oncreate: m.route.link}, "home"),
                m.route.get().split("/")[1] == "login" ?
                    m("a.i.material-icons.active",
                        {href: "/login", oncreate: m.route.link}, "account_box")
                    : m("a.i.material-icons",
                        {href: "/login", oncreate: m.route.link}, "account_box"),
                m.route.get().split("/")[1] == "year" || m.route.get().split("/")[1] == "incident"
                || m.route.get().split("/")[1] == "loadpage"
                    ?
                    m("a.i.material-icons.active",
                        {href: "/loadpage", oncreate: m.route.link}, "search")
                    : m("a.i.material-icons",
                        {href: "/loadpage", oncreate: m.route.link}, "search"),

                m.route.get().split("/")[1] == "listcrime" ||
                m.route.get().split("/")[1] == "loadpagestat"
                    ?
                    m("a.i.material-icons.active",
                        {href: "/loadpagestat", oncreate: m.route.link}, "sort")
                    : m("a.i.material-icons",
                        {href: "/loadpagestat", oncreate: m.route.link}, "sort"),

                m.route.get().split("/")[1] == "police"
                    ?
                    m("a.i.material-icons.active",
                        {href: "/police", oncreate: m.route.link}, "import_contacts")
                    : m("a.i.material-icons",
                        {href: "/police", oncreate: m.route.link}, "import_contacts"),
            ])
        ];
    }
};

export default layout;
