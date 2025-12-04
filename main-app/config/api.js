// API Configuration
// Reads API keys from .env file
// Make sure to create a .env file in the main-app directory with your API keys

// For Expo, we'll use process.env which reads from .env file
// Make sure to prefix with EXPO_PUBLIC_ for client-side access
export const GEMINI_API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY || null;
export const GOOGLE_MAPS_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || null;

// Instructions:
// 1. Create a .env file in the main-app directory
// 2. Add your API keys:
//    EXPO_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
//    EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
// 3. The .env file is already in .gitignore and won't be committed
// 4. Get your API keys from:
//    - Gemini: https://aistudio.google.com/app/apikey
//    - Google Maps: https://console.cloud.google.com/google/maps-apis
// 5. Restart the Expo dev server after creating/updating .env file

