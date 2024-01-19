import { routes } from "./routes";

const route = (event: Event | null) => {
  event!.preventDefault();
  window.history.pushState({}, "", (event!.target as HTMLAnchorElement).href);
  handleLocation();
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route: string = routes[path] || routes[404];
  const html: string = await fetch(route).then(data => data.text());
  document.getElementById("root")!.innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
