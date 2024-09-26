import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PropertyList from './pages/PropertyList';
import PropertySingle from './pages/PropertySingle';
function App() {
  return (
    <div>
           <BrowserRouter>
       <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/PropertyList" element={<PropertyList />} />
            <Route path="/PropertySingle" element={<PropertySingle />} />
               </Routes>
               </Layout>
      </BrowserRouter>

    </div>
  );
}

export default App;
