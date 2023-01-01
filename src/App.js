import Routing from "app/Routing";
import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import BackdropContainer from "app/components/Backdrop";

function App() {
    return (
        <div className="App">
            <Routing />
            <ToastContainer
                position="bottom-center"
                autoClose={2500}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastClassName="toastContainer"
                bodyClassName="toastBody"
            />
            <BackdropContainer />
        </div>
    );
}

export default App;
