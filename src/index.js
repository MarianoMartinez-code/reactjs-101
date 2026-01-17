import React from "react";
import ReactDom from "react-dom/client";
import {Profile} from "./profile";
import Gallery from "./gallery";



/* parte 1
function App() {
    return <h1>Hello, World!</h1>;
}
 */


/* parte 2
function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Jhonson"
        />
    );
}  */

/* export default function Gallery() {
    return(
        <section>
            <h1>Personajes famosos</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
} */

/* parte 3 */
function App() {
    return (
        <Gallery />
    );
}



const root = ReactDom.createRoot(
    document.getElementById("root")
)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)