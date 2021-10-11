import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
//styling
import "./App.css";
import Detail from "./components/Detail";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/details/:productSlug">
          <Detail />
        </Route>
        <Route exact path="/products">
          <ProductList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
