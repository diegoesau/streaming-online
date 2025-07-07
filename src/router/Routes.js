import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home"
import MyList from "../pages/MyList";
import Movie from "../pages/Movie";
import Payment from "../pages/Payment";
import NotFound from "../pages/NotFound";

export const siteRoutes = Object.freeze([
  Object.freeze({ id: 1, path: "/", Element: LandingPage }),
  Object.freeze({ id: 2, path: "/login", Element: Login }),
  Object.freeze({ id: 3, path: "/register", Element: Register }),
  Object.freeze({ id: 4, path: "/home", Element: Home }),
  Object.freeze({ id: 5, path: "/home/my-list", Element: MyList }),
  Object.freeze({ id: 6, path: "/home/movie/:id", Element: Movie }),
  Object.freeze({ id: 6, path: "/home/movie/payment/:id", Element: Payment }),
  Object.freeze({ id: 7, path: "*", Element: NotFound })
]);