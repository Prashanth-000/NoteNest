import {Routes,Route} from "react-router"
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import toast from "react-hot-toast";

const App=()=>{
  return(
    <div>
      <button onClick={()=>toast.success('Successfully toasted!')}>click me</button>
      <Routes>
        <Route path='/'element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<DetailsPage />} />
      </Routes>
    </div>
  );
}
export default App;