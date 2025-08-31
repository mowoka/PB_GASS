# Font Setup Instructions

## Download Required Fonts

### Ubuntu Font Family
Download from: https://fonts.google.com/specimen/Ubuntu
Required files:
- Ubuntu-Regular.ttf
- Ubuntu-Bold.ttf
- Ubuntu-Light.ttf
- Ubuntu-Medium.ttf

### Roboto Font Family
Download from: https://fonts.google.com/specimen/Roboto
Required files:
- Roboto-Regular.ttf
- Roboto-Bold.ttf
- Roboto-Light.ttf
- Roboto-Medium.ttf

## Installation Steps

1. Download the font files from Google Fonts
2. Place all .ttf files in `src/assets/fonts/` directory
3. Run `npx react-native-asset` to link fonts (or use auto-linking)
4. For iOS: Clean and rebuild the project
5. For Android: Clean and rebuild the project

## Usage

### With Tailwind Classes:
```tsx
<Text className="font-primary text-lg">Ubuntu Regular</Text>
<Text className="font-primary-bold text-xl">Ubuntu Bold</Text>
<Text className="font-secondary text-base">Roboto Regular</Text>
```

### With Style Objects:
```tsx
import { fonts } from '../utils/fonts';

<Text style={{ fontFamily: fonts.primary.regular }}>Ubuntu Regular</Text>
<Text style={{ fontFamily: fonts.secondary.bold }}>Roboto Bold</Text>
```

## Notes
- After adding font files, restart Metro bundler
- Clean build directories if fonts don't appear
- Font names are case-sensitive
