# LastFM Now Playing Tracker

This is a simple Node.js application that fetches the currently playing song or the most recent track from your LastFM account using the [LastFM API](https://www.last.fm/api). It serves this information through an easy-to-access endpoint. 

### Features:
- Fetches the most recent track played on your LastFM account.
- Displays the currently playing song (if available) or the last played track.
- Can be deployed on any server or run locally.

### **Demo:**
You can see the app live (if deployed on any server) at:  
[https://your-app-url/lastfm](https://your-app-url/lastfm)

---

### **How to Run Locally:**

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/your-repository-name.git
   cd your-repository-name
2. Install dependencies:
   ```bash
   npm install
3. Create a .env file in the root directory of your project to store your LastFM API key and other environment variables (the .env file is ignored by Git, so it won't be uploaded to GitHub).
   Example .env file:
   ```bash
   LASTFM_API_KEY=your_actual_api_key_here
4. Run the app locally:
   ```bash
   node index.js
Your app will now be running on http://localhost:3000. Visit http://localhost:3000/lastfm to see the currently playing track or the last played track.

If you want your app to run 24/7 online, you can find sites like Render that provide online app services, even with Free and Premium tiers.

---

### **Environment Variables:**
This project requires one environment variable for your LastFM API key:

* LASTFM_API_KEY: Your unique API key from LastFM.

---

### **Technologies Used:**

* Node.js: Server-side JavaScript runtime.
* Express: Minimal web framework for Node.js.
* Axios: Promise-based HTTP client for making requests to the LastFM API.
* dotenv: Loads environment variables from a .env file.