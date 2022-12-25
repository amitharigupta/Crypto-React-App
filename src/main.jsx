import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ColorModeScript, ChakraProvider, theme} from '@chakra-ui/react'
import ColorModeSwitcher from './ColorModeSwitcher'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </React.StrictMode>
)


export const API_URL = "https://api.coingecko.com/api/v3" 