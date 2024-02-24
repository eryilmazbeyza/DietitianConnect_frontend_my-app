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
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

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
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/dietitiancrud' element={<DietitianCRUD/>}/>
          <Route path='/dietplancrud' element={<DietPlanCRUD/>}/>
          <Route path='/articlecrud' element={<ArticleCRUD/>}/>
          <Route path='/mealTrackingcrud' element={<MealTrackingCRUD/>}/>
          <Route path='/usercrud' element={<UserCRUD/>}/>
          <Route path='/admincrud' element={<AdminCRUD/>}/>
        </Routes>
      </Router>
      {/* <Registration/> <br></br> */}
      {/* <Login/> */}
      
    </div>
  );
}

export default App;
