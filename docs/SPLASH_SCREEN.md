# Splash Screen Implementation

This project now includes a dark-themed splash screen that displays when the app starts up, matching the project's design language.

## Features

- **App Icon**: Uses the sport-net icon from the assets folder with primary red tint
- **App Name**: Displays "PB GASS" prominently in large white text
- **Tagline**: Shows "Badminton Community" in gray
- **Animated Loading Dots**: Red pulsing dots with smooth animation
- **Dark Theme**: Matches project's dark color scheme
- **Smooth Transitions**: Fade-in and scale animations using react-native-reanimated
- **Auto Navigation**: Automatically navigates to MainTabs after 3 seconds

## Design Theme

The splash screen uses your project's dark theme colors:
- **Background**: `#111827` (dark gray)
- **Icon Container**: `#1f2937` (darker gray) with `#374151` border
- **Icon Tint**: `#D84040` (primary red)
- **App Name**: White with text shadow
- **Tagline**: `#9CA3AF` (light gray)
- **Loading Dots**: `#D84040` (primary red) with glow effect

## Implementation Details

### Files

1. **SplashScreen.tsx** - Main splash screen component with reanimated animations
2. **AppNavigator.tsx** - Updated to include splash screen as initial route
3. **navigation.ts** - Added SplashScreen and MainTabs to type definitions

### Current Configuration

The splash screen provides:
- React Native Reanimated animations for smooth performance
- Entrance animations (fade-in and scale)
- Pulsing loading dots animation with sequence timing
- Dark theme matching your app's design
- Professional appearance with shadows and glows

### Customization Options

You can customize the splash screen by modifying:

- **Duration**: Change the timeout value in useEffect (currently 3000ms)
- **Colors**: Update colors in styles to match design changes
- **Icon**: Replace the sport-net.png icon with your preferred logo
- **Text**: Modify the app name and tagline
- **Animations**: Adjust timing, damping, and stiffness values
- **Loading Animation**: Modify dot count, size, or animation pattern

### Icon Requirements

The splash screen uses `sport-net.png` from `src/assets/icons/` with red tint (`#D84040`). 
To use a different icon:
1. Add your icon to the assets/icons folder
2. Update the require() statement in the splash screen component
3. Adjust the icon size and tintColor in the styles if needed

## Removed Files

The following unused splash screen files have been cleaned up:
- `SplashScreen.tsx` (old version)
- `SplashScreenSimple.tsx` (simple version)