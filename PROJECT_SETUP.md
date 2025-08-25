# PBGass - React Native Project Setup

## 🚀 Project Information

This is a React Native CLI project with the following features:

- **React Native CLI**: Latest version with TypeScript support
- **TypeScript**: Full TypeScript configuration
- **NativeWind**: Tailwind CSS for React Native
- **Node.js 22**: Using the latest LTS version

## 📁 Project Structure

```
PBGass/
├── android/          # Android native code
├── ios/              # iOS native code
├── src/              # Source code
│   └── components/   # React components
├── App.tsx           # Main application component
├── index.js          # Entry point
├── tailwind.config.js # Tailwind CSS configuration
├── babel.config.js   # Babel configuration with NativeWind
├── metro.config.js   # Metro bundler configuration
└── app.d.ts          # NativeWind type declarations
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 22 (use `nvm use 22`)
- React Native development environment
- Android Studio (for Android development)
- Xcode (for iOS development)

### Installation
All dependencies are already installed. To run the project:

#### For Android:
```bash
nvm use 22
cd PBGass
npx react-native run-android
```

#### For iOS:
```bash
nvm use 22
cd PBGass
npx react-native run-ios
```

## 🎨 NativeWind Configuration

### Current Setup
- ✅ NativeWind installed
- ✅ Tailwind CSS installed
- ✅ Babel configuration updated
- ✅ TypeScript declarations added
- ✅ Tailwind config with content paths

### Usage Example
```tsx
import React from 'react';
import { View, Text } from 'react-native';

export default function MyComponent() {
  return (
    <View className="bg-blue-500 p-4 rounded-lg">
      <Text className="text-white text-center font-bold">
        Hello NativeWind!
      </Text>
    </View>
  );
}
```

**Note**: The TypeScript compiler may show errors for `className` props during development. This is expected during the initial setup. The Babel plugin will transform these at runtime.

## 🔧 Development Commands

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS  
npm run ios

# Run tests
npm test

# Type checking
npx tsc --noEmit

# Lint code
npm run lint
```

## 🚨 Known Issues & Solutions

1. **TypeScript className errors**: This is expected during development. The Babel plugin transforms className props at runtime.

2. **Metro bundler cache**: If you encounter issues, clear the cache:
   ```bash
   npx react-native start --reset-cache
   ```

3. **iOS CocoaPods**: Update Xcode to version 16.1+ or run:
   ```bash
   cd ios && pod install
   ```

## 📱 Features Demo

The main `App.tsx` demonstrates:
- Dark/Light mode support
- Responsive layout
- Modern UI components
- Feature checklist display

## 🤝 Contributing

1. Ensure Node.js 22 is active: `nvm use 22`
2. Follow TypeScript best practices
3. Use Tailwind CSS classes where possible
4. Test on both iOS and Android

## 📚 Additional Resources

- [React Native Documentation](https://reactnative.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

**Happy Coding! 🎉**
