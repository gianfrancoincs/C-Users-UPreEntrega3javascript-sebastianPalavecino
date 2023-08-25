
export const productos = [
    {
        id: 1,
        nombre: "motorola edge 30 neo",
        precio: 270000,
        imagen : "",
        categoria: "celulares",
    },
    {
        id: 2,
        nombre: "iphone 14 pro max",
        precio: "900000",
        imagen: "",
        categoria: "celulares",
    },
    {
        id: 3,
        nombre: "samsung fold 4",
        precio: "830000",
        imagen: "",
        categoria: "celulares",
    },
    {
        id: 4,
        nombre: "xiaomi note 12 pro plus",
        precio: "365000",
        imagen: "",
        categoria: "celulares",
    },
];

JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));
