import React from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';


export default function EdPackMain() {
    return(
        <div>
            <Hero title="Productos madereros a medida,directo a tu hogar" subtitle="Fabricamos y entregamos treillage, deck y rejas con calidad garantizada."/>
            <ProductList/>
            <Footer></Footer>
        </div>
    );
}