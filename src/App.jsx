//import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header' 
import Main from './components/Main/Main'
import PopBrowse from './components/PopBrowse/PopBrowse'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopUser from './components/PopUser/PopUser'

function App() {
 
  return (
    <div className="wrapper">
			
		<PopUser/>
	<PopNewCard/>
    <PopBrowse/>
		<Header/>
    <Main/>
		
    </div>
  )
}

export default App
