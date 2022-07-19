import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layouts/Layout"
import {publicRoute} from "./routes/routes"
function App() {
  return (
  <Router>
    <div className="container">
        <Routes>
          {
            publicRoute.map((route,index)=>{
              const Page = route.component;
              let DefaultLayout = Layout;
             return(
              <Route key={index} path={route.path} element={<DefaultLayout><Page /></DefaultLayout>} />
             )
            })
          }

        </Routes>
    </div>
  </Router>
  );
}
export default App;