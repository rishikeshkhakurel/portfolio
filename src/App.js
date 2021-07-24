import { Switch, Route } from "react-router-dom";
import SapLayout from "./common/SapLayout/SapLayout";
import Dashboard from "./component/Dashboard/Dashboard";
import About from "./component/About/About";
import Resume from "./component/Resume/Resume";
import Contact from "./component/Contact/Contact";

function App() {
  return (
    <div>
      <SapLayout>
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </SapLayout>
    </div>
  );
}

export default App;
