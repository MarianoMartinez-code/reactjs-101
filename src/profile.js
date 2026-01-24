export function Profile() {
    const avatar = "https://i.imgur.com/MK3eW3Am.jpg"
    const description = " Katherine Jhonson"

    return (
        <>
            <h1>Foto de {description}</h1>
            <img
                src={avatar}
                alt={description}
                className="Foto"
            />
        </>
    );
} 