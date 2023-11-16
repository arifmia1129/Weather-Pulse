# Weather Pulse - React Weather Dashboard

🌦️ Welcome to Weather Pulse, a weather dashboard that allows users to explore the current weather conditions and a 5-day forecast for a specific location. This project is built using React, Axios, Ant Design, Chart.js, and React-Chartjs-2.

## Live Site

Check out the live site: [Weather Pulse](https://weather-pulse-plum.vercel.app)

## Tech Stack

- **React**: Frontend library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **Ant Design**: Design system for React applications, providing a set of high-quality components.
- **Chart.js** and **React-Chartjs-2**: Charting libraries for visualizing weather forecast data.

## Features

### Current Weather Conditions

- Display the current weather conditions, including temperature, humidity, and wind speed.

### 5-Day Forecast

- Explore a 5-day weather forecast with highs and lows for each day.

### Search Functionality

- Search for the weather forecast of different locations.
- Handle errors gracefully for invalid or non-existent locations.

### Data Visualization

- Visual representation of the weather forecast data using charts.

### Responsive Design

- Ensure a responsive and enjoyable user experience on various devices.

### Loading State and Error Handling

- Implement loading states to provide feedback while waiting for weather data to load.
- Gracefully handle API request errors with clear error messages.

## Project Structure

- **utils**: Contains utility functions for tasks like obtaining access tokens, getting location information, and time conversion.
- **components**: Reusable React components for different parts of the application.
- **services**: API service for fetching weather data.

## Usage

1. Clone the project:

   ```bash
   git clone https://github.com/arifmia1129/Weather-Pulse.git
   ```

2. Install dependencies:

   ```bash
   cd Weather-Pulse
   npm install
   ```

3. **Important Note**: Create a `.env` file in the project root and add the following line, replacing `accessTokenFromOpenWeather` with your OpenWeatherMap API access token:

   ```env
   TOKEN=accessTokenFromOpenWeather
   ```

4. Run the project:

   ```bash
   npm start
   ```

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the Weather Pulse dashboard.

## Location Handling

- The application prompts for location access on the first visit. If allowed, it shows weather information based on the user's current location.
- If a user previously set a location, it retrieves and displays weather information for that location.
- If location access is blocked, the default weather information is based on the system's default location.

## Contributing

Feel free to open issues, contribute to the project, or provide feedback.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/).

## Disclaimer

Due to the limitations of the free API, the project uses hourly forecast data instead of daily forecasts.

🚀 Happy Exploring the Weather with Weather Pulse! 🌈

---

**Note: If you plan to use this project locally after cloning, make sure to add a `.env` file in the root directory and include the line `TOKEN=accessTokenFromOpenWeather`, replacing `accessTokenFromOpenWeather` with your OpenWeatherMap API access token.**
