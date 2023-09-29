import './App.css';
import Headers from './Headers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])
  console.log(user);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout"
            element={
              <>
                <Headers />
                <Checkout />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/"
            element={<>
              <Headers />
              <Home />
              <div className="extend_page"></div>
            </>}
          />
        </Routes>

      </div>
    </Router>
  );
}

export default App;

{/* we need React-Router */ }
{/* localhost:3000 */ }
{/* localhost.com/checkout */ }
{/* localhost.com/login */ }
