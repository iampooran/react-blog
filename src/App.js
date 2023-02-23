import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
