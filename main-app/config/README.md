# API Configuration

## Setting Up Your Gemini API Key

1. Get your Gemini API key from: https://aistudio.google.com/app/apikey
   - Or visit: https://makersuite.google.com/app/apikey

2. Create a `.env` file in the `main-app` directory (if it doesn't exist)

3. Add your API key to the `.env` file:
   ```
   EXPO_PUBLIC_GEMINI_API_KEY=your_actual_api_key_here
   ```

4. The `.env` file is already in `.gitignore` to keep it secure.

## Security Note

⚠️ **Never commit your API key to git!** The `.env` file is already excluded from version control.

## Important

- After creating or updating the `.env` file, you **must restart the Expo dev server** for changes to take effect
- Stop the server (Ctrl+C) and run `npm start` again

## Testing

Once you've added your API key and restarted the server, try asking the chatbot a question. You should see AI-powered responses instead of keyword matching.

## Troubleshooting

- If you see "API key not configured", make sure:
  1. You've created the `.env` file in the `main-app` directory
  2. The variable name is exactly `EXPO_PUBLIC_GEMINI_API_KEY`
  3. You've restarted the Expo dev server after creating/updating the file
- If you get API errors, check that your API key is valid and has proper permissions

