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
import Login from "./components/LogIn/Login";
import Home from "./components/Home/Home";

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
            <Route path="/login" element={<Login />} />
            <Route path="/ley" element={<Layout />}></Route>
          </>
        )}
        {authenticated && (
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="GIDshow" element={<GIDshow />} />
            <Route path="CRDshow" element={<CRDshow />} />
            <Route path="TIDshow" element={<TIDshow />} />
            <Route path="CheckProfile_TID" element={<CheckProfile_TID />} />

            <Route
              path="CheckProfile_TID/:Domain/:eventName"
              element={
                <React.Suspense fallback={<Loader />}>
                  <CheckProfile_TID />
                </React.Suspense>
              }
            />
            <Route
              path="CheckProfile_GID"
              element={
                <React.Suspense fallback={<Loader />}>
                  <CheckProfile_GID />
                </React.Suspense>
              }
            />
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
