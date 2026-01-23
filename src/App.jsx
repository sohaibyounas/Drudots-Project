import { RouterProvider } from "react-router-dom";
import appRouter from "./component/Routes/Routes";

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
