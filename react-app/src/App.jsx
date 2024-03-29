import { NavBar } from "./components/menu/nav-bar";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Signin } from './components/auth/sign-in'
import { Signup } from "./components/auth/sign-up";
import { DashBoard } from "./components/dashboard";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { AuthContextProvider, withAuthContext } from "./context";
import { useEffect, useState } from "react";
import { UtilServices } from './services/utils'
import { User } from "./components/user";
import { getAllUsers } from './redux-mgmt/user-reducer/user.reducer'
import { store } from "./redux-mgmt/store";
import { fetchProfile } from "./redux-mgmt/profile-reducer";

Chart.register(CategoryScale);

function App() {
  const [leftMenus, setLeftMenus] = useState([])
  const [rightMenus, setRightMenus] = useState([])
  const isAuthenticated = window.localStorage.getItem('isAuthenticated')
  
  useEffect(()=>{
    store.dispatch(getAllUsers())
    store.dispatch(fetchProfile())
    UtilServices.getMenus().then((res)=>{
      const lmenus = []
      const rmenus = []
      for (let index = 0; index < res.settings.length; index++) {
        const element = res.settings[index];
        if(isAuthenticated && element.loginRequired && element?.right) {
          rmenus.push(element)
          continue
        }
        if(!isAuthenticated && !element.loginRequired && element?.right) { 
          rmenus.push(element)
        }
      }
      setLeftMenus(lmenus)
      setRightMenus(rmenus)
    })
  },[])
  return (
    <AuthContextProvider>
      <Router>
        <NavBar leftMenus={leftMenus} rightMenus={rightMenus}/>
        <Routes>
          <Route path="/" exact element={<DashBoard/>} />
          <Route path="/sign-up" element={<Signup/>} />
          <Route path="/sign-in" element={<Signin/>} />
          <Route path="/manage-users" element={<User/>} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default withAuthContext(App);
