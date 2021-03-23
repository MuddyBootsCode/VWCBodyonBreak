import './App.css';
import { Route, BrowserRouter, Switch,  } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import GoalsPage from "./pages/GoalsPage"
import WorkoutsPage from "./pages/WorkoutsPage"
import StatsPage from "./pages/StatsPage"
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/goals' exact component={GoalsPage} />
              <Route path='/workouts' exact component={WorkoutsPage} />
              <Route path='/stats' exact component={StatsPage} />
            </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
