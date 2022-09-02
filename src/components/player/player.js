import React from "react"
import SpotifyPlayer from 'react-spotify-web-playback'

function Player() {
    
    const handleCallback = useCallback(({ type, ...state }) => {
        setDuration(state.track.durationMs)
        setTrackProg(state.progressMs)
        if (state.isPlaying) {
          setPlaying(true)
        } else {
          setPlaying(false)
        }
      });

    return(
        <SpotifyPlayer token={token} uris={["spotify:track:7K6flwfT8RT5tGewldYzW6"]} callback={handleCallback}/>
    )
}

export default Player