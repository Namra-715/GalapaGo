// API Configuration
// Reads from Expo Constants (which gets values from .env file via app.config.js)
import Constants from 'expo-constants';

export const GEMINI_API_KEY = Constants.expoConfig?.extra?.geminiApiKey || 'YOUR_GEMINI_API_KEY_HERE';

// Instructions:
// 1. Create a .env file in the main-app directory
// 2. Add: GEMINI_API_KEY=your_actual_api_key_here
// 3. The .env file is already in .gitignore and won't be committed
// 4. Get your API key from: https://aistudio.google.com/app/apikey
// 5. Restart the Expo dev server after creating/updating .env

