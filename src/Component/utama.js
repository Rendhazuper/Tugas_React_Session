import React from 'react'
import {Routes, Route} from 'react-router-dom';

import Beranda from './beranda'
import Karya from './karya'
import TentangSaya from './tentangsaya'
import Kontak from './Kontak'
import Gallery from './Gallery';
import Cart from './Cart';


const Utama = ()=> (
    <Routes>
        <Route exact path = '/' element ={<Beranda/>}/>
        <Route path = '/tentangsaya' element ={<TentangSaya/>}/>
        <Route path = '/karya' element ={<Karya/>}/>
        <Route path = '/Kontak' element ={<Kontak/>}/>
        <Route path = '/Gallery' element ={<Gallery/>}/>
        <Route path = '/Cart' element ={<Cart/>}/>
        
    </Routes>
)

export default Utama;
