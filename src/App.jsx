
// import ProfilePage from "./pages/ProfilePage";
// import FirstPage from "./pages/FirstPage";
import { ToastContainer } from 'react-toastify';
import GeneralPage from "./pages/GeneralPage";

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import "react-modern-drawer/dist/index.css";

function App() {
  return (
      <>
        <GeneralPage />
        <ToastContainer />
      </>
  );
}

export default App;
