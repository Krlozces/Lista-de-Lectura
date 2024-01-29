import './App.css'
import ListBooks from './components/ListBooks'
import { DataProvider } from './components/DataContext';
import CartList from './components/CartList';
import { CounterProvider } from './components/CounterContext';
import { ValuesProvider } from './components/ValuesContext';
import { PagesYearProvider } from './components/PagesYearContext';
import { ThemeProvider } from './components/ThemeContext';
function App() {
  return (
    <>
      <ThemeProvider>
        <DataProvider>
          <CounterProvider>
            <ValuesProvider>
              <PagesYearProvider>
                <ListBooks />
                <CartList />
              </PagesYearProvider>
            </ValuesProvider>
          </CounterProvider>
        </DataProvider>
      </ThemeProvider>
    </>
  )
}

export default App
