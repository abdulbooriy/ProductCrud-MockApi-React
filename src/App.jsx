import { useState } from "react";
import MainRouters from "./pages";
import { ToastContainer } from "react-toastify";

function App() {
  const [reload, setReload] = useState(false);

  return (
    <div className="bg-[#F5F6FA]">
      <MainRouters reload={reload} setReload={setReload} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
