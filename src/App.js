import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProjectNews from './components/ProjectNews';
import DetailNews from './components/DetailNews';


function App() {
  return (
    <div className="App">
       <Router>
         <Routes>
          <Route path='/' element={<ProjectNews />} />
          <Route path='/projectNews' element={<ProjectNews />} />
          <Route path='/planningNews' element={<ProjectNews />} />
          <Route path='/marketNews' element={<ProjectNews />} />
          <Route path='/exteriorAndInterior' element={<ProjectNews />} />
          <Route path='/detail-news/:id' element={<DetailNews />} />
         </Routes>
       </Router>
    </div>
  );
}

export default App;
