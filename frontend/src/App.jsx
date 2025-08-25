import {Routes,Route} from "react-router"
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

const App=()=>{
  return(
    <div data-theme="luxury">
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
      <Routes>
        <Route path='/'element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<DetailsPage />} />
      </Routes>
    </div>
  );
}
export default App;