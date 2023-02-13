import { Cta,Brand,Navbar} from './components'
import {Blog, Footer, Header, Possibility, Features, WhatGPT3} from './container'

import './App.css'

function App() {
  return (
    <div className="App">
     <div className="gradient__bg">
      <Navbar/>
      <Header/>
     </div>
     <Brand/>
     <WhatGPT3/>
     <Features/>
     <Possibility/>
     <Cta/>
     <Blog/>
     <Footer/>
     

    </div>
  );
}

export default App;
