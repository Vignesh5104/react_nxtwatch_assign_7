import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  showNavItems: false,
  activeTab: 'Home',
  savedVideos: [],
  changeTheme: () => {},
  toggleNaveItem: () => {},
  changeTab: () => {},
  addVideo: () => {},
  removeVideo: () => {},
})

export default ThemeAndVideoContext
