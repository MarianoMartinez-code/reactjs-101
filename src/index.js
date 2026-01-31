import React from "react";
import ReactDom from "react-dom/client";
/* import {Profile} from "./profile"; */
/* import Gallery from "./gallery";
import TioSimon from "./tioSimon"; */
import Menu from "./menu";



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
/* export default function App() {
    return (
        <Profile />
    );
} */

/* parte 4 - agregar estilos */
/* export default function TodoList() {
    return(
        <ul style={
            {
                backgroundColor:"black",
                color:"white",
            }
        }>
            <li>Ir a la playa</li>
            <li>Ir al parque</li>
            <li>Ir al cine</li>
        </ul>
    );
} */

/* parte 5 - Simon Diaz */
/* export default function Artista() {
    return(
        <>
            <TioSimon />
        </>
    )
} */

/* parte 6 - Menu de Pizzas */
export default function App() {
    return(
        <>
            <h1
                style={{
                    textAlign: "center",
                    margin: "20px 0",
                    fontSize: "32px",
                    fontWeight: "bold",
                }}
            >
                Menu de Pizza by Mariano
            </h1>
            <Menu />
        </>
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