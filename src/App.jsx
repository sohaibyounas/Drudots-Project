import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import appRouter from "./component/Routes/Routes";

function App() {
  return (
    <>
      {/* remove extra/default styles in all browsers */}
      <CssBaseline />
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
