# react-native-global-font
React Native apply custom font for iOS and Android

# Installation
* Add font file to your app **assets/font/** 

* In **package.json** :

  ```
  ...
  "rnpm": {
    "assets": [
      "./assets/fonts"
    ]
  }
  ```
* Run: 

  ```
  npm install --save react-native-global-font
  react-native link
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
  
  
