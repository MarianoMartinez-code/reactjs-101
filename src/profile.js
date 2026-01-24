function Avatar({person, size, height}) {
    return(
        <img
            src = {person.imageURL}
            alt = {person.name}
            className="Foto"
            width={size}
            height={height}
        />
    )
}

export function Profile() {
    return (
        <>
            <Avatar
                person = {
                    {
                        name:"Katherine Jhonson",
                        imageURL: "https://i.imgur.com/MK3eW3Am.jpg",
                    }
                }
                size = {100}
                height = {100}
            />
            <Avatar
                person = {
                    {
                        name:"Simon Diaz",
                        imageURL: "https://www.ecured.cu/images/0/09/SIMONDIAZ.jpg",
                    }
                }
                size = {100}
                height = {100}
            />
        </>

    );
} 