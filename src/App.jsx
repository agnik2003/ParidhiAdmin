import React, { useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Signup from './authentication/Signup';
import Layout from './layout/Layout';
import TIDshow from './components/TIDshow';
import CRDshow from './components/CRDshow';
import GIDshow from './components/GIDshow';
import CheckProfile_TID from './components/CheckProfile_TID';
import CheckProfile_GID from './components/CheckProfile_GID';


function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {!authenticated && (
          <>
            <Route path="/" element={<Signup setAuthenticated={setAuthenticated} />} />
            <Route path="/signup" element={<Signup setAuthenticated={setAuthenticated} />} />
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

            {/* <Route
              path="MAILshow"
              element={
                <MAILshow/>
              }
            /> */}
          </Route>
        )}
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
