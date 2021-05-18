import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './theme/globalStyles'
import Theme from './theme/theme'

const root = document.getElementById('root')

ReactDom.render(
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>
    , root)