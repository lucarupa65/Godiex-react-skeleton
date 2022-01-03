import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import configureStore from "./state/store/configStore";
import Layout from "./layout/Layout";

 const store = configureStore();

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="" component={Layout} />
            </Switch>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
