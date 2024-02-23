import logo from "./logo.svg";
import "./App.css";
import DietitianCRUD from "./DietitianCRUD";
import ArticleCRUD from "./ArticleCRUD";
import DietPlanCRUD from "./DietPlanCRUD";
import MealTrackingCRUD from "./MealTrackingCRUD";
import UserCRUD from "./UserCRUD";
import AdminCRUD from "./AdminCRUD";
import Index from "./pages";
import About from "./pages/About";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Offer from "./pages/Offer";
import Recipe from "./pages/Recipe";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/myoffer' element={<Offer/>}/>
          <Route path='/recipes' element={<Recipe/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
      {/* <DietitianCRUD/> */}
      {/* <ArticleCRUD/> */}
      {/* <DietPlanCRUD/> */}
      {/* <MealTrackingCRUD/> */}
      {/* <UserCRUD/> */}
      {/* <AdminCRUD/> */}
      
    </div>
  );
}

export default App;
