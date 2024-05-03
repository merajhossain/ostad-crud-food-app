import React from 'react';
import Sidebar from "../components/Sidebar.jsx";

const Layout = (props) => {
    return (
        <>
            <div className="parent">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="main-content">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default Layout; 