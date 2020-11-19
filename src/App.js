import React, { useEffect } from "react";
import Login from './Login';
import Player from './Player';
import { getTokenFromURL } from "./spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from "./DataLayer";
const spotify = new SpotifyWebApi();


function App() {
    const [{ token }, dispatch] = useDataLayerValue();


    useEffect(() => {
        // Set token
        const hash = getTokenFromURL();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token){
            
            spotify.setAccessToken(_token);

            dispatch({
                type: "SET_TOKEN",
                token: _token,
            })

            spotify.getMe().then((user) => {
                dispatch({
                    type: 'SET_USER',
                    user: user,
                });
            });
            
            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                  type: "SET_PLAYLISTS",
                  playlists,
                });
              });
        }
    }, [token, dispatch]);

    return (
        <div className="app">
          {!token && <Login />}
          {token && <Player spotify={spotify} />}
        </div>
      );
}

export default App;