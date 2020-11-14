// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
// bb3137bb69414e0398f0551c8b3887d9

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirect_Uri = "http://localhost:3000/";
const clinetId = "bb3137bb69414e0398f0551c8b3887d9";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const getTokenFromURL = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts =  item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        
        return initial;

    }, {});
}
export const loginUrl = `${authEndpoint}?client_id=${clinetId}&redirect_uri=${redirect_Uri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
 

