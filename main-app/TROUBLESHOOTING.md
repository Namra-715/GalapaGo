# Troubleshooting "No Usable Data Found" Error

If you see "no usable data found" when scanning the QR code:

## Steps to Fix:

1. **Make sure you're in the correct directory:**
   ```bash
   cd main-app
   ```

2. **Clear cache and restart:**
   ```bash
   npx expo start --clear
   ```

3. **Check that your iPhone and computer are on the same Wi-Fi network**

4. **Check the Metro bundler terminal for errors** - Look for red error messages

5. **Try using tunnel mode if same network doesn't work:**
   ```bash
   npx expo start --tunnel
   ```

6. **Make sure Expo Go app is installed on your iPhone** from the App Store

7. **Check console logs** - You should see:
   - "Loading placeholder data..."
   - "App component loaded"
   - "ThingsToDoScreen - Data loaded: 6"

If you see errors in the terminal, share them for debugging.

