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

- Node.js (v18 or later)
- npm or yarn
- Expo CLI (optional, can use npx)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on your preferred platform:
- iOS: `npm run ios` or press `i` in the Expo CLI
- Android: `npm run android` or press `a` in the Expo CLI
- Web: `npm run web` or press `w` in the Expo CLI

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

