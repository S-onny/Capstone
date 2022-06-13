import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import HospitalPage from "./hospital";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path={"/"}>
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/hospital/:id">
          <HospitalPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
