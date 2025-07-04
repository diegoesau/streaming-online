import { BrowserRouter, Routes, Route } from "react-router-dom";
import { siteRoutes } from "./Routes";

export const AppRouter = () => {
    return (
    <BrowserRouter>
      <Routes>
        {siteRoutes.map(({id, path, Element}) => {
          return(
          <Route key={id} exact path={path} element={<Element />}/>
          )
        })}
      </Routes>
    </BrowserRouter>
    );
}
