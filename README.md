# react-native-global-font [![npm version](https://badge.fury.io/js/react-native-global-font.svg)](https://badge.fury.io/js/react-native-global-font) ![MIT](https://img.shields.io/dub/l/vibe-d.svg) ![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-yellow.svg) 
React Native apply custom font for iOS and Android

# Installation
* Add font file to your app **assets/fonts/**

* Create `react-native.config.js` file in your react native project:

  ```
  module.exports = {
    project: {
      ios: {},
      android: {},
    },
    assets: ['./assets/fonts/'],
  };
  ```
* Run: 

  ```
  npm install --save react-native-global-font
  npx react-native link
  ```
  
* **iOS:** add to **info.plist** :
  ```
  <key>UIAppFonts</key>
  <array>
    <string>YourFontName.ttf</string>
  </array>
  ```

# Usage
Go to your highest order component that contains your whole application.

  ```
  import GlobalFont from 'react-native-global-font'
  componentDidMount() {
     let fontName = 'YourFontName'
     GlobalFont.applyGlobal(fontName)
  }
  ```
  
  
