import { ThemeProvider } from 'styled-components'
import usePersistedState from './Hooks/usePersistedState';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import dark from './Styles/Themes/dark'
import light from './Styles/Themes/light'

import { Header } from './Components/Header';
import { GlobalStyle } from './Styles/global'
import { Footer } from './Components/Footer';
import { Login } from './Pages/Login';
import { Home } from './Pages/Home';


const App = () => {
  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main className="App">
          <Header toggleTheme={toggleTheme}/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='login/*' element={<Login />}/>
          </Routes>
          <Footer />
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
