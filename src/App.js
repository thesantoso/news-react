import React, {} from "react";
import { Route, Routes } from 'react-router-dom';

import News from "./components/News";
import "./App.css";
import Navbar from "./components/NavBar";
import SavedNews from "./components/saved_components/SavedArticles";

function App() {
  return (
			<div className="App">
				<Navbar/>
				<Routes>
         	 	<Route path="/" element={<News/>} />
				  	<Route path=":query" element={<News/>} />
					<Route path="saved" element={<SavedNews/>} />
					<Route path="search/:query" element={<News/>} />
				</Routes>
			</div>
  );
}

export default App;