import { Provider, useSelector } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { createBrowserRouter, Outlet, useLocation} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import {persistor, appStore} from "./utils/appStore"
import Albumdetails from "./Components/Albums/Albumdetails";
import Episodedetail from "./Components/Episodes/Episodedetail";
import Artistdetail from "./Components/Artists/Artistdetail";
import Showdetail from "./Components/Shows/Showdetail";
import Tracks from "./Components/Tracks";
import Searchresults from "./Components/SearchBar/Searchresults";
import SearchArtistdetails from "./Components/SearchBar/SRArtistdetail";
import SearchAudiobookdetail from "./Components/SearchBar/SRAudiobookdetail";
import SearchPlaylistdetails from "./Components/SearchBar/SRPlaylistdetail";

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

// const Artistroute = ()=>{
//   const artist = useSelector(store => store?.Searchresults);

//   return artist ? <SearchArtistdetails/> : <Artistdetail/>
// }

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
        element : <Albumdetails/>
      },
      {
        path : "/episode/:episodeid",
        element : <Episodedetail/>
      },
      {
        path : "/artist/:artistid",
        element : <Artistdetail/>
      },
      {
        path : "/shows/:showsid",
        element : <Showdetail/>
      },
      {
        path : "/track/:trackid",
        element : <Tracks/>
      },
      {
        path : "/search/:query",
        element : <Searchresults/>
      },
      {
        path : "/audiobook/:audiobookid",
        element : <SearchAudiobookdetail/>
      },
      {
        path : "/playlist/:playlistid",
        element : <SearchPlaylistdetails/>
      },
    ]
  }
])

export default App;
