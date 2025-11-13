// API Configuration
// Reads API key from .env file
// Make sure to create a .env file in the main-app directory with: GEMINI_API_KEY=your_key_here

// For Expo, we'll use process.env which reads from .env file
// Make sure to prefix with EXPO_PUBLIC_ for client-side access
export const GEMINI_API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY || null;

// Instructions:
// 1. Create a .env file in the main-app directory
// 2. Add: EXPO_PUBLIC_GEMINI_API_KEY=your_actual_api_key_here
// 3. The .env file is already in .gitignore and won't be committed
// 4. Get your API key from: https://aistudio.google.com/app/apikey
// 5. Restart the Expo dev server after creating/updating .env file

