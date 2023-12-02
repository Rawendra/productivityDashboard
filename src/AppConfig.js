import { ROUTES, pagesKey, TITLES } from "./constants/routes";

const pages = pagesKey.map((key) => {
  return { title: TITLES[key], route: ROUTES[key] };
});

/// this object is carrying the mappin for pages:{title: , route :}
// title is showned on the header
//route is taken once title is clicked
//appConfig will be taken as reference as this export is available on parent level
export const appConfig = {
  pages: pages,
};
