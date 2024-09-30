import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { createBrowserRouter, Outlet} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import {persistor, appStore} from "./utils/appStore"
import Albumsong from "./Components/Albumsong";
import Episodedetail from "./Components/Episodedetail";
import Artistdetail from "./Components/Artistdetail";

function App() {
  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
      <div>
        <Header />
        <Outlet/>
      </div>
      </PersistGate>
    </Provider>
  );
}

export const approuter = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Body/>
      },
      {
        path : "/album/:albumid",
        element : <Albumsong/>
      },
      {
        path : "/episode/:episodeid",
        element : <Episodedetail/>
      },
      {
        path : "/artist/:artistid",
        element : <Artistdetail/>
      }
    ]
  }
])

export default App;
