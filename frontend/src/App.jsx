import {Routes,Route} from "react-router"
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

const App=()=>{
  return(
    <div>
      <Routes>
        <Route path='/'element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<DetailsPage />} />
      </Routes>
    </div>
  );
}
export default App;