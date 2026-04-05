import { RouterProvider } from "react-router";
import { router } from "./routes";
import { TaskProvider } from "./context/TaskContext";
import { ToastProvider } from "./context/ToastContext";
import ToastContainer from "./components/ToastContainer";

function App() {
  return (
    <TaskProvider>
      <ToastProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </ToastProvider>
    </TaskProvider>
  );
}

export default App;
