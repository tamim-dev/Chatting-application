import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
    Link,
} from "react-router-dom";
import React,{useState} from "react";
import Resgistration from "./pages/Resgistration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ForGotPassword from "./pages/ForGotPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Messages from "./pages/Messages";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";
import RotLayOut from "./pages/RotLayOut";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Resgistration />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/forgotpassword" element={<ForGotPassword />}></Route>
            <Route path="/chatting" element={<RotLayOut />}>
                <Route path="home" element={<Home />}></Route>
                <Route path="messages" element={<Messages />}></Route>
                <Route path="notification" element={<Notification />}></Route>
                <Route path="settings" element={<Settings />}></Route>
            </Route>
        </Route>
    )
);
function App() {
   
    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer/>
        </>
    );
}

export default App;
