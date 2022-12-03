import mate from "./Componentes/assets/Images/mate.jpg";
import bombi from "./Componentes/assets/Images/bombilla.jpg";
import yerbera from "./Componentes/assets/Images/yerbera.jpg";

const productos = [
  {
    id: "1",
    nombre: "Mate Polenta",
    categoria: "Regional",
    descripcion: "Mate Regional Gaucho",
    img: mate,
    precio: "1000",
  },
  {
    id: "2",
    nombre: "Bombiya larga",
    categoria: "Bombillas",
    descripcion: "Bombiya de Spiderman",
    img: bombi,
    precio: "350",
  },
  {
    id: "3 ",
    nombre: "Yerbera autoctona Guarani",
    categoria: "Regional",
    descripcion: "Yerbera Pampeana",
    img: yerbera,
    precio: "500",
  },
];
export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getProductosById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        productos.find((prod) => {
          return prod.id === id;
        })
      );
    }, 500);
  });
};

export const getProductosByCategoria = (categoriaId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        productos.filter((prod) => {
          return prod.categoria === categoriaId;
        })
      );
    }, 1000);
  });
};
