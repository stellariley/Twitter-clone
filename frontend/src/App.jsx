import {Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";

import Sidebar from "./components/common/Sidebar.jsx";
import RightPanel from "./components/common/RightPanel.jsx";


function App() {
	return (
		<div className='flex max-w-6xl mx-auto'>
      <Sidebar/> 
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/login' element={<LoginPage />} />
        <Route path='/notifications' element={<NotificationPage />} />
				<Route path='/profile/:username' element={<ProfilePage /> } />
			</Routes>
      <RightPanel/>
		</div>
	);
}

export default App;