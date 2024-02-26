import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminCRUD from "./crud/AdminCRUD";
import ArticleCRUD from "./crud/ArticleCRUD";
import DietitianCRUD from "./crud/DietitianCRUD";
import DietPlanCRUD from "./crud/DietPlanCRUD";
import MealTrackingCRUD from "./crud/MealTrackingCRUD";
import UserCRUD from "./crud/UserCRUD";
import Index from "./pages/Index";
import About from "./pages/About";
import Offer from "./pages/Offer";
import Recipe from "./pages/Recipe";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import PregnantBlog from "./pages/PregnantBlog";
import WeightBlog from "./pages/WeightBlog";
import AutoimmuneBlog from "./pages/AutoimmuneBlog";
import ChildHealthBlog from "./pages/ChildHealthBlog";
import "./App.css";

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
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/pregnantblog' element={<PregnantBlog/>}/>
          <Route path='/weightblog' element={<WeightBlog/>}/>
          <Route path='/autoimmuneblog' element={<AutoimmuneBlog/>}/>
          <Route path='/childhealthblog' element={<ChildHealthBlog/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
