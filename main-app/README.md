# GalapaGo Tourism App

A React Native mobile app for Galapagos Island tourism information. This static app displays information about things to do, hotels, restaurants, and culture & history of the Galapagos Islands.

## Features

- **Things to Do**: Browse activities and attractions in the Galapagos
- **Hotels**: View accommodations with details, ratings, and amenities
- **Restaurants**: Explore dining options with cuisine types and contact information
- **Culture & History**: Learn about the rich heritage and natural history of the islands

## Tech Stack

- React Native (Expo SDK 52)
- React Navigation (Bottom Tabs)
- React 18.3.1

## Getting Started

### Prerequisites

- Node.js (v18 or later) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)
- For iOS Simulator: Xcode (from Mac App Store, ~12GB download)

### Installation

1. Navigate to the app directory:
```bash
cd main-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
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

## Project Structure

```
main-app/
├── App.js                 # Main app component with navigation
├── app.json               # Expo configuration
├── package.json           # Dependencies
├── assets/                # Images, icons, and other assets
│   ├── icons/            # App icons
│   └── images/           # Image assets
├── screens/              # Screen components
│   ├── ThingsToDoScreen.js
│   ├── HotelsScreen.js
│   ├── RestaurantsScreen.js
│   └── CultureHistoryScreen.js
└── data/                 # Data files
    └── placeholderData.js # Placeholder data (to be replaced with API calls)
```

## Data

Currently, the app uses placeholder data from `data/placeholderData.js`. This will be replaced with backend API calls in the future.

## Development

The app is built with Expo, which provides a streamlined development experience. All assets are bundled automatically.

## License

ISC

