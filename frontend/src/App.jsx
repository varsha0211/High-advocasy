import { ToastContainer } from "react-toastify";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
