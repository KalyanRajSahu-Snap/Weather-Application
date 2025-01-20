# Weather App

## Description

This Weather App is a simple, responsive web application that allows users to check the current weather conditions for any city around the world. It features a dynamic background that changes based on the current weather conditions, providing an immersive and visually appealing experience.

---

## Features

- Search for weather by city name
- Display current temperature in Celsius
- Show weather description and corresponding icon
- Dynamic video background that changes based on weather conditions
- Responsive design for various screen sizes
- Error handling for invalid locations or API issues

---

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **OpenWeatherMap API**
- **Google Fonts (Poppins)**

---

## Installation Guide

Follow these steps to set up the Weather App locally on your system:

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge)
- A code editor (optional, e.g., Visual Studio Code)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/KalyanRajSahu-Snap/Weather-Application.git
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd Weather-Application
   ```

3. **Set Up OpenWeatherMap API**
   - Go to [OpenWeatherMap](https://openweathermap.org/).
   - Sign up or log in to your account.
   - Generate an API key from the **API Keys** section.

4. **Update the JavaScript File**
   - Open the `script.js` file located in the `js` folder.
   - Replace `YOUR_API_KEY` with your OpenWeatherMap API key:
     ```javascript
     const apiKey = 'YOUR_API_KEY';
     ```

5. **Open the App**
   - Open the `index.html` file in your browser to run the app.

---

## Usage

1. Enter a city name in the search bar.
2. Press the **Search** button or hit **Enter**.
3. View the current weather, including temperature, description, and icon.
4. Enjoy the dynamic background that reflects the current weather conditions!

---

## Contributing

Contributions are welcome! If you would like to improve this project:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.
