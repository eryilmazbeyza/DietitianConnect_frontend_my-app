import logo from "./logo.svg";
import "./App.css";
import DietitianCRUD from "./DietitianCRUD";
import ArticleCRUD from "./ArticleCRUD";
import DietPlanCRUD from "./DietPlanCRUD";
import MealTrackingCRUD from "./MealTrackingCRUD";
import UserCRUD from "./UserCRUD";

function App() {
  return (
    <div className="App">
      {/* <DietitianCRUD/> */}
      {/* <ArticleCRUD/> */}
      {/* <DietPlanCRUD/> */}
      {/* <MealTrackingCRUD/> */}
      <UserCRUD/>
    </div>
  );
}

export default App;
