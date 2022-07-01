import { Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Calendar from "./pages/Calendar/Calendar";
import ComplateTask from "./pages/ComplateTask/ComplateTask";
import ToDo from "./pages/To-do/ToDo";
import Home from "./pages/Home/Home";
import { ToastContainer} from 'react-toastify';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/complate" element={<ComplateTask />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
