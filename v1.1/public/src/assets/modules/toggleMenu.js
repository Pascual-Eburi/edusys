function ToggleMenu() {
    let e = document.querySelector("html");
    let r = e.getAttribute("data-nav-layout");
    const y = document.getElementById("sidebar");

    if (window.innerWidth >= 992) {
        if (r === "vertical") {
            switch (
                (y.removeEventListener("mouseenter", T),
                y.removeEventListener("mouseleave", P),
                y.removeEventListener("click", j),
                _.removeEventListener("click", U),
                document
                    .querySelectorAll(".main-menu li > .side-menu__item")
                    .forEach((n) => n.removeEventListener("click", Pe)),
                e.getAttribute("data-vertical-style"))
            ) {
                case "closed":
                    e.removeAttribute("data-nav-style"),
                        e.getAttribute("data-toggled") === "close-menu-close"
                            ? e.removeAttribute("data-toggled")
                            : e.setAttribute(
                                  "data-toggled",
                                  "close-menu-close"
                              );
                    break;
                case "overlay":
                    e.removeAttribute("data-nav-style"),
                        e.getAttribute("data-toggled") === "icon-overlay-close"
                            ? (e.removeAttribute(
                                  "data-toggled",
                                  "icon-overlay-close"
                              ),
                              y.removeEventListener("mouseenter", T),
                              y.removeEventListener("mouseleave", P))
                            : window.innerWidth >= 992
                            ? (e.setAttribute(
                                  "data-toggled",
                                  "icon-overlay-close"
                              ),
                              y.addEventListener("mouseenter", T),
                              y.addEventListener("mouseleave", P))
                            : (y.removeEventListener("mouseenter", T),
                              y.removeEventListener("mouseleave", P));
                    break;
                case "icontext":
                    e.removeAttribute("data-nav-style"),
                        e.getAttribute("data-toggled") === "icon-text-close"
                            ? (e.removeAttribute(
                                  "data-toggled",
                                  "icon-text-close"
                              ),
                              y.removeEventListener("click", j),
                              _.removeEventListener("click", U))
                            : (e.setAttribute(
                                  "data-toggled",
                                  "icon-text-close"
                              ),
                              window.innerWidth >= 992
                                  ? (y.addEventListener("click", j),
                                    _.addEventListener("click", U))
                                  : (y.removeEventListener("click", j),
                                    _.removeEventListener("click", U)));
                    break;
                case "doublemenu":
                    if (
                        (e.removeAttribute("data-nav-style"),
                        e.getAttribute("data-toggled") === "double-menu-open")
                    )
                        e.setAttribute("data-toggled", "double-menu-close"),
                            document.querySelector(".slide-menu") &&
                                document
                                    .querySelectorAll(".slide-menu")
                                    .forEach((m) => {
                                        m.classList.contains(
                                            "double-menu-active"
                                        ) &&
                                            m.classList.remove(
                                                "double-menu-active"
                                            );
                                    });
                    else {
                        let n = document.querySelector(
                            ".side-menu__item.active"
                        );
                        n &&
                            (e.setAttribute("data-toggled", "double-menu-open"),
                            n.nextElementSibling
                                ? n.nextElementSibling.classList.add(
                                      "double-menu-active"
                                  )
                                : document
                                      .querySelector("html")
                                      .setAttribute("data-toggled", ""));
                    }
                    jr();
                    break;
                case "detached":
                    e.getAttribute("data-toggled") === "detached-close"
                        ? (e.removeAttribute("data-toggled", "detached-close"),
                          y.removeEventListener("mouseenter", T),
                          y.removeEventListener("mouseleave", P))
                        : (e.setAttribute("data-toggled", "detached-close"),
                          window.innerWidth >= 992
                              ? (y.addEventListener("mouseenter", T),
                                y.addEventListener("mouseleave", P))
                              : (y.removeEventListener("mouseenter", T),
                                y.removeEventListener("mouseleave", P)));
                    break;
                case "default":
                    Me(), e.removeAttribute("data-toggled");
            }

            switch (e.getAttribute("data-nav-style")) {
                case "menu-click":
                    e.getAttribute("data-toggled") === "menu-click-closed"
                        ? e.removeAttribute("data-toggled")
                        : e.setAttribute("data-toggled", "menu-click-closed");
                    break;
                case "menu-hover":
                    e.getAttribute("data-toggled") === "menu-hover-closed"
                        ? (e.removeAttribute("data-toggled"), D())
                        : (e.setAttribute("data-toggled", "menu-hover-closed"),
                          f());
                    break;
                case "icon-click":
                    e.getAttribute("data-toggled") === "icon-click-closed"
                        ? e.removeAttribute("data-toggled")
                        : e.setAttribute("data-toggled", "icon-click-closed");
                    break;
                case "icon-hover":
                    e.getAttribute("data-toggled") === "icon-hover-closed"
                        ? (e.removeAttribute("data-toggled"), D())
                        : (e.setAttribute("data-toggled", "icon-hover-closed"),
                          f());
                    break;
            }
        }

        return
    } 
    
    if (e.getAttribute("data-toggled") ==! "close") {
        e.setAttribute("data-toggled", "close");
    }

    e.setAttribute("data-toggled", "open");
    let t = document.createElement("div");
    (t.id = "responsive-overlay"),
        setTimeout(() => {
            document.querySelector("html").getAttribute("data-toggled") ==
                "open" &&
                (document
                    .querySelector("#responsive-overlay")
                    .classList.add("active"),
                document
                    .querySelector("#responsive-overlay")
                    .addEventListener("click", () => {
                        document
                            .querySelector("#responsive-overlay")
                            .classList.remove("active"),
                            O();
                    })),
                window.addEventListener("resize", () => {
                    window.screen.width >= 992 &&
                        document
                            .querySelector("#responsive-overlay")
                            .classList.remove("active");
                });
        }, 100);
    
}
