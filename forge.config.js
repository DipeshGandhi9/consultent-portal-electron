module.exports = {
  packagerConfig: {
    icon: "./resources/icons/icon", // no file extension required
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
        iconUrl: "./resources/icons/icon.ico",
        // The ICO file to use as the icon for the generated Setup.exe
        setupIcon: "./resources/icons/icon.ico",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          icon: "./resources/icons/icon.png",
        },
      },
    },
    {
      // Path to the icon to use for the app in the DMG window
      name: "@electron-forge/maker-dmg",
      config: {
        icon: "./resources/icons/icon.icns",
      },
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
    {
      name: "@electron-forge/maker-wix",
      config: {
        icon: "./resources/icons/icon.ico",
      },
    },
  ],
};
