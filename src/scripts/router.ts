import { createContent } from "./components";

function handleRoute(route) {
  const contentEl = document.querySelector<HTMLElement>(".content");
  if (!contentEl) throw new ReferenceError('Class "content" not found.');

  const routes = [
    {
      path: /\/inbox/,
      handler: () => {
        contentEl.innerHTML = "";
        contentEl?.appendChild(createContent("inbox", route));
      },
    },
    {
      path: /\/sent/,
      handler: () => {
        contentEl.innerHTML = "";
        contentEl?.appendChild(createContent("sent", route));
      },
    },
  ];

  for (const r of routes) {
    if (r.path.test(route)) {
      r.handler();
    }
  }
}

export { handleRoute };
