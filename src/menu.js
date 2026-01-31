function Menu({pizza, size, height}) {
    return(
        <>
            <div style={
                {
                    border: "1px solid #e0e0e0",
                    borderRadius: "12px",
                    padding: "20px",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }
            }>
                <h1 style={{ fontSize: "22px", marginBottom: "10px" }}>{pizza.name}</h1>
                <img
                    src={pizza.image}
                    alt={pizza.name}
                    width={size}
                    height={height}
                    style={{
                        display: "block",
                        margin: "0 auto 10px",
                        borderRadius: "10px",
                        objectFit: "cover",
                    }}
                />
                <h2 style={{ fontSize: "16px", color: "#666" }}>Ingredientes</h2>
                <p style={{ fontSize: "14px", color: "#444" }}>{pizza.ingredients}</p>
                <p style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#d32f2f",
                    marginTop: "10px"
                }}>{pizza.price}</p>
            </div>
        </>
    )
}

export default function Food() {
    return (
        <>
            <div style={
                {
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "25px",
                    padding: "40px",
                    backgroundColor: "#f5f5f5",
                }
            }

            >
                <Menu
                    pizza = {
                        {
                            name:"Margarita",
                            image:"https://www.cocinista.es/download/bancorecursos/recetas/receta-pizza-margarita.jpg",
                            ingredients:"Tomate, mozzarella, albahaca fresca, sal y aceite",
                            price:"3,00$",
                        }
                    }
                    size = {200}
                    height = {200}
                />
                <Menu
                    pizza = {
                        {
                            name:"Napolitana",
                            image:"https://png.pngtree.com/png-clipart/20250117/original/pngtree-a-close-up-high-quality-image-of-perfectly-crafted-neapolitan-pizza-png-image_20275000.png",
                            ingredients:"Tomate, mozzarella, anchoas, orégano, alcaparras y aceite",
                            price:"4,00$",
                        }
                    }
                    size = {200}
                    height = {200}
                />
                <Menu
                    pizza = {
                        {
                            name:"Cuatro Quesos",
                            image:"https://img.freepik.com/fotos-premium/pizza-cuatro-quesos-gourmet-aislado_219193-8117.jpg",
                            ingredients:"Salsa de tomate, mozzarella, gorgonzola, parmesano y fontina.",
                            price:"4,50$",
                        }
                    }
                    size = {200}
                    height = {200}
                />
                <Menu
                    pizza = {
                        {
                            name:"Carnivora",
                            image:"https://thebox.md/wp-content/uploads/2023/06/httpscdneu.syrve_.comnomenclature_images_test1822064d799f86c-6efb-4ce1-8ea7-1925f9025135-500x500.png",
                            ingredients:"Salsa de tomate, mozzarella, pepperoni, jamón, bacon y carne picada.",
                            price:"5,50$",
                        }
                    }
                    size = {200}
                    height = {200}
                />
                <Menu
                    pizza = {
                        {
                            name:"Hawaiana",
                            image:"https://png.pngtree.com/png-clipart/20231111/original/pngtree-dive-into-the-pineapple-paradise-of-hawaiian-pizza-png-image_13534949.png",
                            ingredients:"Salsa de tomate, mozzarella, jamón y piña.",
                            price:"3,50$",
                        }
                    }
                    size = {200}
                    height = {200}
                />
                <Menu
                    pizza = {
                        {
                            name:"Pepperoni",
                            image:"https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007910.png",
                            ingredients:"Salsa de tomate, queso mozzarella y abundante pepperoni.",
                            price:"4,00$",
                        }
                    }
                    size = {200}
                    height = {200}
                />
            </div>

        </>
    )
}