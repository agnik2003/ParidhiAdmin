import React, { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Signup from "./authentication/Signup";
import Layout from "./layout/Layout";

import CRDshow from "./components/CRDshow";
import GIDshow from "./components/GIDshow";
import CheckProfile_TID from "./components/CheckProfile_TID";
import Loader from "./components/loader/Loader";

const TIDshow = React.lazy(() => import("./components/TIDshow"));
const CheckProfile_GID = React.lazy(() =>
  import("./components/CheckProfile_GID")
);

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {!authenticated && (
          <>
            <Route
              path="/"
              element={<Signup setAuthenticated={setAuthenticated} />}
            />
            <Route
              path="/signup"
              element={<Signup setAuthenticated={setAuthenticated} />}
            />
          </>
        )}
        {authenticated && (
          <Route path="/" element={<Layout />}>
            <Route path="" element={<GIDshow />} />
            <Route path="GIDshow" element={<GIDshow />} />
            <Route path="CRDshow" element={<CRDshow />} />
            <Route path="TIDshow" element={<TIDshow />} />
            <Route path="CheckProfile_TID" element={<CheckProfile_TID />} />
            <Route path="CheckProfile_GID" element={<CheckProfile_GID />} />
            <Route
              path="TIDshow/:Domain/:eventName"
              element={
                <React.Suspense fallback={<Loader />}>
                  <TIDshow />
                </React.Suspense>
              }
            />
            <Route
              path="CRDshow/:Domain/:eventName"
              element={
                <React.Suspense fallback={<Loader />}>
                  <CRDshow />
                </React.Suspense>
              }
            />
          </Route>
        )}
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;