# iPhone Setup for Expo App

## Required Steps:

### 1. Install Expo Go App
- Open the **App Store** on your iPhone
- Search for **"Expo Go"**
- Install the app (it's free, made by Expo)
- Open the Expo Go app after installation

### 2. Connect to Development Server

**Option A: Scan QR Code (Recommended)**
1. Make sure your iPhone and computer are on the **same Wi-Fi network**
2. Run `npm start` or `npx expo start` in the `main-app` directory
3. A QR code will appear in the terminal
4. Open the **Camera app** on your iPhone (not Expo Go)
5. Point the camera at the QR code
6. Tap the notification that appears to open in Expo Go

**Option B: Manual Connection**
1. Open Expo Go app on your iPhone
2. Tap "Enter URL manually"
3. Enter the URL shown in the terminal (e.g., `exp://10.0.0.90:19000`)

### 3. Troubleshooting

**If you see "No usable data found":**
- Make sure both devices are on the same Wi-Fi
- Try using tunnel mode: `npx expo start --tunnel`
- Check that Expo Go app is up to date
- Restart the development server with `--clear` flag

**If the QR code doesn't work:**
- Use tunnel mode: `npx expo start --tunnel`
- Or manually enter the URL from the terminal

**Network Issues:**
- Some corporate/school networks block connections
- Try using your phone's hotspot instead
- Or use tunnel mode which works over the internet

## That's it!

Once Expo Go is installed and you scan the QR code, your app should load automatically. No additional setup needed on the iPhone!

