require('dotenv').config();

const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome! Go to /lastfm to see the LastFM status.");
});

// Load environment variables
const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
const USERNAME = "primitiveblast";

app.get("/lastfm", async (req, res) => {
    try {
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${LASTFM_API_KEY}&format=json`;
        const response = await axios.get(url);
        const tracks = response.data.recenttracks.track;

        if (tracks.length === 0) {
            return res.send("No recent tracks found.");
        }

        const currentTrack = tracks[0];
        const song = currentTrack.name;
        const artist = currentTrack.artist["#text"];

        if (currentTrack["@attr"] && currentTrack["@attr"].nowplaying === "true") {
            return res.send(`🎵 Now Playing: ${artist} - ${song}`);
        } else {
            return res.send(`🎵 Last Played: ${artist} - ${song}`);
        }
    } catch (error) {
        res.send("Error fetching song data.");
    }
});

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => console.log(`Server running on port ${port}`));

