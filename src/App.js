import { Action,originals } from './urls';
import './app.css'
import React from 'react';
import Banner from './combonents/Banner/Banner';
import Navebar from './combonents/Navebar/Navebar';
import RowPost from './combonents/RowPost/RowPost';

function App() {
 return(
<div className="App">
  <Navebar/>
  <Banner/>
  
  <RowPost url={originals} tilte='Netflix originals'/>
  <RowPost url={Action} tilte='Action' isSmall />
</div>
 );
}

export default App;
