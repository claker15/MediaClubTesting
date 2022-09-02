import React, { useEffect } from "react"


function Index() {

    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const CLIENT_ID = "1aaffc74e24848879473c4b221e7ce28";
    const REDIRECT_URI = "http://localhost:3000";
    const RESPONSE_TYPE = "token"
    const scopes = [
      "streaming",
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-library-read",
      "user-library-modify",
    ];

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
    }, [])

  return (
    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scopes}`}>Login
                to Spotify</a>
  )
}

export default Index

