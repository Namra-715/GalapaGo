# GalapaGo Tourism App

A React Native mobile app for Galapagos Island tourism information. This app helps visitors discover local businesses, activities, and provides an AI-powered travel assistant for planning their Galapagos adventure.

## Features

- **Things to Do** 🎉: Browse activities and attractions with image galleries
- **Hotels** 😴: View accommodations with multiple photos and details
- **Restaurants** 🍲: Explore dining options with cuisine types and contact information
- **More Tab**: Access additional information including:
  - Culture & History: Learn about the rich heritage and natural history
  - Sustainability: Tips for responsible tourism
  - Transportation: Getting around the islands
  - Know Before You Go: Rules, customs, and etiquette
- **AI Assistant**: Floating chat button powered by Google Gemini AI for travel questions
- **Image Galleries**: Swipeable image galleries with indicators for all listings

## Tech Stack

- React Native (Expo SDK 54)
- React 19.1.0
- React Navigation 6 (Bottom Tabs + Stack Navigator)
- Google Gemini AI (@google/generative-ai)
- React Native Gesture Handler
- React Native Safe Area Context

## Getting Started

### Prerequisites

- Node.js (v18 or later) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)
- For iOS Simulator: Xcode (from Mac App Store, ~12GB download)
- Google Gemini API Key (for AI chatbot feature)

### Installation

1. Navigate to the app directory:
```bash
cd main-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the `main-app` directory
   - Add your Gemini API key:
   ```
   EXPO_PUBLIC_GEMINI_API_KEY=your_api_key_here
   ```
   - Get your API key from: https://aistudio.google.com/app/apikey
   - See `config/README.md` for detailed instructions

4. Start the development server:
```bash
npm start
```

This will open the Expo DevTools in your browser and show a QR code in the terminal.

### Running on MacBook

**Option 1: Web Browser (Easiest - No extra setup needed)**
```bash
npm run web
```
This opens the app in your default web browser. Perfect for quick testing!

**Option 2: iOS Simulator (Requires Xcode)**
1. Install Xcode from Mac App Store (includes iOS Simulator)
2. Open Xcode → Settings → Locations → Command Line Tools (select Xcode)
3. Run: `npm run ios` or press `i` in the Expo CLI
4. The iOS Simulator will launch automatically

**Option 3: Physical iPhone (Requires Expo Go app)**
1. Install "Expo Go" from the App Store on your iPhone
2. Make sure iPhone and MacBook are on the same Wi-Fi
3. Run `npm start` and scan the QR code with your iPhone camera
4. See `IPHONE_SETUP.md` for detailed instructions

**Quick Commands:**
- `npm start` - Start dev server (shows QR code)
- `npm run web` - Open in web browser
- `npm run ios` - Open in iOS Simulator (requires Xcode)
- Press `w` in terminal - Open web version
- Press `i` in terminal - Open iOS Simulator
- Press `r` in terminal - Reload app

## Project Structure

```
main-app/
├── App.js                      # Main app component with navigation
├── app.json                    # Expo configuration
├── package.json                # Dependencies
├── babel.config.js             # Babel configuration
├── .env                        # Environment variables (not in git)
├── assets/                     # Images, icons, and other assets
│   ├── icons/                  # App icons
│   └── images/                 # Image assets (hotels, restaurants, etc.)
├── components/                 # Reusable components
│   └── FloatingChatButton.js  # Floating AI chat button
├── config/                     # Configuration files
│   ├── api.js                  # API key configuration
│   └── README.md               # API setup instructions
├── screens/                    # Screen components
│   ├── ThingsToDoScreen.js     # Activities and attractions
│   ├── HotelsScreen.js         # Accommodations
│   ├── RestaurantsScreen.js    # Dining options
│   ├── MoreScreen.js           # More menu screen
│   ├── CultureHistoryScreen.js # Culture & history
│   ├── SustainabilityScreen.js # Sustainability tips
│   ├── TransportationScreen.js # Transportation info
│   ├── SocialCustomsScreen.js  # Rules and customs
│   └── ChatbotScreen.js        # AI assistant screen
└── data/                       # Data files
    └── placeholderData.js      # Static data for listings
```

## Features in Detail

### AI Assistant
- Floating chat button accessible from any screen
- Powered by Google Gemini AI (gemini-2.5-flash model)
- Answers questions about Galapagos travel, flights, hotels, restaurants, and activities
- Configured to only answer Galapagos-related questions
- Natural, conversational responses

### Image Galleries
- All listings (hotels, restaurants, activities) support multiple images
- Swipeable horizontal galleries with pagination
- Visual indicators showing current image position
- Smooth scrolling and touch interactions

### Navigation
- Bottom tab navigation with 4 main tabs
- "More" tab contains nested stack navigation for secondary features
- Clean, user-friendly navigation structure

## Environment Variables

The app uses environment variables for sensitive configuration:

- `EXPO_PUBLIC_GEMINI_API_KEY`: Your Google Gemini API key

**Important:** 
- The `.env` file is in `.gitignore` and will not be committed
- You must create your own `.env` file with your API key
- Restart the Expo dev server after creating/updating `.env`

## Data

Currently, the app uses placeholder data from `data/placeholderData.js`. This includes:
- Things to do (activities and attractions)
- Hotels with multiple images
- Restaurants with multiple images
- Culture & history information

This will be replaced with backend API calls in the future.

## Development

The app is built with Expo SDK 54, which provides a streamlined development experience. All assets are bundled automatically.

### Troubleshooting

- **API key not working**: Make sure you've created `.env` file and restarted the dev server
- **Images not loading**: Check that assets are in the correct `assets/` directory
- **Navigation errors**: Ensure all screen components are properly exported

## License

ISC
