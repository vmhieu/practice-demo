import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProjectNews from './components/ProjectNews';
import PlanningNews from './components/PlanningNews';
import MarketNews from './components/MarketNews';
import ExteriorAndInterior from './components/ExteriorAndInterior';
import DetailNews from './components/DetailNews';


function App() {
  return (
    <div className="App">
       <Router>
         <Routes>
          <Route path='/' element={<ProjectNews />} />
          <Route path='/project-news/:pageNumber' element={<ProjectNews />} />
          <Route path='/planning-news' element={<PlanningNews />} />
          <Route path='/market-news' element={<MarketNews />} />
          <Route path='/exterior-and-interior' element={<ExteriorAndInterior />} />
          <Route path='/detail-news/:id' element={<DetailNews />} />
         </Routes>
       </Router>
    </div>
  );
}

export default App;
