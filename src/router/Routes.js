import Home from "../pages/Home"
import MyList from "../pages/MyList";
import Movie from "../pages/Movie";
import NewMovie from "../pages/NewMovie";
import Payment from "../pages/Payment";
import NotFound from "../pages/NotFound";

export const siteRoutes = Object.freeze([
  Object.freeze({ id: 1, path: "/", Element: Home }),
  Object.freeze({ id: 1, path: "/home", Element: Home }),
  Object.freeze({ id: 2, path: "/home/my-list", Element: MyList }),
  Object.freeze({ id: 3, path: "/home/movie/:imdbId", Element: NewMovie }),
  Object.freeze({ id: 4, path: "/home/movie/payment/:imdbId", Element: Payment }),
  Object.freeze({ id: 5, path: "*", Element: NotFound })
]);