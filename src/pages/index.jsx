import Layout from "./Layout.jsx";

import About from "./About";

import Cart from "./Cart";

import Checkout from "./Checkout";

import Collections from "./Collections";

import Contact from "./Contact";

import Home from "./Home";

import Landing from "./Landing";

import ProductDetail from "./ProductDetail";

import Shop from "./Shop";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    About: About,
    
    Cart: Cart,
    
    Checkout: Checkout,
    
    Collections: Collections,
    
    Contact: Contact,
    
    Home: Home,
    
    Landing: Landing,
    
    ProductDetail: ProductDetail,
    
    Shop: Shop,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<About />} />
                
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Cart" element={<Cart />} />
                
                <Route path="/Checkout" element={<Checkout />} />
                
                <Route path="/Collections" element={<Collections />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Landing" element={<Landing />} />
                
                <Route path="/ProductDetail" element={<ProductDetail />} />
                
                <Route path="/Shop" element={<Shop />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}