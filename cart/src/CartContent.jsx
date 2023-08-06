import React, {useState, useEffect} from "react";

import {login, jwt} from "./cart";
import Login from "./Login";
import MiniCart from "./MiniCart";
import Header from "home/Header";
import Footer from "home/Footer";

export default function CartContent() {
    const [token, setToken] = useState("");

    useEffect(() => {
        return jwt.subscribe((val) => setToken(val ?? ""));
    }, []);

    return (
        <div>
            <Header/>
            JWT: {token}
            <Login/>
            <MiniCart/>
            <Footer/>
        </div>
    );
}
