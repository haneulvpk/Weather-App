# ☀️ Weather App

A simple, beginner-friendly weather application built with React and Vite. Search for weather information in any city and view current conditions including temperature, humidity, and wind speed.

## ✨ Features

- **City Search**: Search for weather information by city name
- **Real-time Weather Data**: Get current temperature, weather conditions, and more
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Loading States**: Visual feedback while fetching weather data
- **Error Handling**: User-friendly error messages for failed requests
- **Clean UI**: Modern, intuitive interface with gradient design

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Fast build tool and development server
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling (no frameworks, pure CSS)
- **OpenWeatherMap API** - Weather data provider

## 📋 Project Structure

```
weather-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx       # Search input and button
│   │   ├── WeatherCard.jsx     # Weather display card
│   │   ├── LoadingSpinner.jsx  # Loading indicator
│   │   └── ErrorMessage.jsx    # Error display
│   ├── services/
│   │   └── weatherApi.js       # API service functions
│   ├── data/
│   │   └── mockWeather.js      # Mock weather data
│   ├── App.jsx                 # Main component
│   ├── App.css                 # App styles
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── .env.example                # Environment variable template
├── .gitignore                  # Git ignore rules
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
├── index.html                  # HTML template
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download this repository**

2. **Navigate to the project directory**
   ```bash
   cd weather-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   - Copy `.env.example` to `.env`
   ```bash
   cp .env.example .env
   ```
   - Add your OpenWeatherMap API key to `.env`

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)
   - The app will reload automatically when you make changes

## 🔧 Configuration

### Getting an OpenWeatherMap API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate a free API key
4. Add it to your `.env` file:
   ```
   VITE_OPENWEATHER_API_KEY=your_actual_api_key
   ```

## 📦 Available Scripts

- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Styling

The app uses pure CSS with custom properties (CSS variables) defined in `src/index.css`. You can customize:

- Colors: Modify `--primary-color`, `--secondary-color`, etc.
- Typography: Change font families and sizes
- Spacing: Adjust padding and margin values
- Responsive breakpoints: Update media queries (currently set to `640px`)

### Components

Each component is self-contained in `src/components/`:

- **SearchBar.jsx** - Handles user input and search submission
- **WeatherCard.jsx** - Displays weather information
- **LoadingSpinner.jsx** - Shows loading state
- **ErrorMessage.jsx** - Displays error messages

## 📝 API Integration

The app uses the OpenWeatherMap Current Weather API:

```
https://api.openweathermap.org/data/2.5/weather
```

### Request Parameters

- `q` - City name (required)
- `appid` - API key (required)
- `units` - Temperature unit (`metric` for Celsius)
- `lang` - Language code (`vi` for Vietnamese)

### Response Transformation

The API response is transformed in `src/services/weatherApi.js` to match our data structure:

```javascript
{
  city: string,
  country: string,
  temperature: number,
  description: string,
  humidity: number,
  windSpeed: number
}
```

## 🧪 Testing

To test the app without API integration:

1. The app displays mock weather data by default
2. Enter a city name and click "Search" to fetch real data
3. Check browser console for API errors or logs

## 🐛 Troubleshooting

### "API key is not configured"
- Ensure you've added your API key to the `.env` file
- Restart the development server after updating `.env`

### "City not found"
- Check the spelling of the city name
- Try using the country code (e.g., "London, UK")

### CORS errors
- This is unlikely with OpenWeatherMap API
- If it occurs, check that your API key is correct

### Port already in use
- Vite will automatically use the next available port
- Or specify a different port: `npm run dev -- --port 3000`

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [OpenWeatherMap API Docs](https://openweathermap.org/api)
- [CSS Variables (Custom Properties)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

## 🚧 Future Enhancements

Possible features to add:

- [ ] Forecast weather (5-day, 7-day, 14-day)
- [ ] Multiple temperature unit toggles (°C, °F, K)
- [ ] Favorite cities (localStorage)
- [ ] Geolocation support (auto-detect user location)
- [ ] Dark mode toggle
- [ ] Weather icons and animations
- [ ] Air quality index (AQI)
- [ ] Unit tests with Jest/Vitest
- [ ] TypeScript migration
- [ ] Backend API wrapper (Node.js/Express)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your work (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 👤 Author

Created as a beginner-friendly project to learn React, Vite, and API integration.

## 📞 Support

If you have questions or encounter issues:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review the [Learning Resources](#-learning-resources)
3. Open an issue on GitHub

---

**Happy coding!** 🎉 Start with this simple app and build more complex features as you learn.
