export default function TioSimon() {
    const artist = {
        nombre: "Simon Diaz",
        foto: "https://www.ecured.cu/images/0/09/SIMONDIAZ.jpg",
    }

    return(
        <>
            <div style={
                {
                    border:"3px solid",
                    padding: "30px",
                }
            }>
                <h1>{artist.nombre}</h1>
                <img
                    src={artist.foto}
                    alt={artist.nombre}
                />
                <h2>Canciones famosas</h2>
                <ul>
                    <li>Caballo viejo</li>
                    <li>Sabana</li>
                    <li>Mercedes</li>
                </ul>
            </div>

        </>
    )
}