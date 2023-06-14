import { handleRoute } from "./router";

function goTo(path) {
  history.pushState({}, "", path);
  handleRoute(path);
}

function handleMailLinks() {
  const emailLinkEls = document.querySelectorAll(".email-link");

  for (const [i, link] of emailLinkEls.entries()) {
    link.addEventListener("click", (e) => {
      const el = e.currentTarget as HTMLElement;
      const path = location.pathname + "/" + el.id;
      goTo(path);
      handleEvents();
    });
  }
}

function handleTabs() {
  const inboxTab = document.querySelector(".inbox-tab");
  const sentTab = document.querySelector(".sent-tab");

  inboxTab?.addEventListener("click", () => {
    goTo("/inbox");
    handleEvents();

    handleMailLinks();
  });
  sentTab?.addEventListener("click", () => {
    goTo("/sent");
    handleEvents();
    handleMailLinks();
  });
}

function handleEvents() {
  const inbox = /\/inbox/;
  const sent = /\/sent/;
  if (!inbox.test(location.pathname) && !sent.test(location.pathname)) {
    location.pathname = "/inbox";
  }

  window.addEventListener("load", () => {
    goTo(location.pathname);
    handleMailLinks();
  });
  window.addEventListener("beforeunload", () => {
    goTo(location.pathname);
    handleMailLinks();
  });
}

(function () {
  handleEvents();
  handleTabs();
})();
