import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SingleGame from "./pages/SingleGame";
import Template from "./components/Template";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Template>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game/:id" exact component={SingleGame} />
        </Switch>
      </Template>
    </BrowserRouter>
  );
};

export default App;
