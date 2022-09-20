import { Navigate, Route, Routes } from "react-router-dom";

import Content from "../components/Content";
import Posts from "../components/Posts";
import UserProfile from '../components/UserProfile'

const routeUserProfile = () => {
  return (
    <Routes>
        <Route path={'/home/userProfile'} element={<UserProfile/>} exact={true} />
        <Route path={'/home'} element={<Posts/>} />
        <Route path={'*'} element={<Navigate to='/home' />} />
        <Route path={'/home/content'} element={<Content/>} />
    </Routes>
)
}

export default routeUserProfile


