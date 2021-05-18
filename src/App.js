import './App.css';
import { Route, BrowserRouter, Switch,  } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import GoalsPage from "./pages/GoalsPage"
import WorkoutsPage from "./pages/WorkoutsPage"
import StatsPage from "./pages/StatsPage"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import TermsAndConditions from './pages/TermsAndConditions';
import ContactPage from './pages/ContactPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/workouts' exact component={WorkoutsPage} />
              <Route path='/goals' exact>
                <GoalsPage user={loggedIn} />
              </Route>
              <Route path='/stats' exact component={StatsPage} />
              <Route path='/workouts' exact component={WorkoutsPage} />
              <Route path='/contact' exact component={ContactPage} />
              <Route path='/terms' exact component={TermsAndConditions} />
              <ProtectedRoute path='/profile' user={loggedIn} exact component={ProfilePage} />
            </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
