import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import SafeComponent from "./SafeComponent";
import PDPContent from "./PDPContent";
import {BrowserRouter, Route, Router, RouterProvider, Routes} from "react-router-dom";

const App = () => (
    <BrowserRouter>
        <div className="text-3xl mx-auto max-w-6xl">
            <SafeComponent>
                <Header/>
            </SafeComponent>
            <div className="my-10">
                <Routes>
                    <Route path="/products/:id" element={<PDPContent/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    </BrowserRouter>
);
ReactDOM.render(<App/>, document.getElementById("app"));
