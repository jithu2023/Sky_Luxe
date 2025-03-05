import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import  Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Info from './Components/Info/Info';
import Lounge from './Components/Lounge/Lounge';
import Search from './Components/Search/Search';
import Support from './Components/Support/Support';
import Travelers from './Components/Travelers/Travelers';
import Subscribers from './Components/Subscribers/Subscribers';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      {/* <Support/>
      <Info/> */}
      {/* <Lounge/>
      <Travelers/>
      <Subscribers/>
      <Footer/> */}
    </div>
  )
}

export default App