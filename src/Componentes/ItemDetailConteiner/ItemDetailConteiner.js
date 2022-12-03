import { useState, useEffect } from "react";
import { getProductosById } from "../../AsincMock";
import { useParams } from "react";

const ItemDetailConteiner = () => {
  const [producto, setProductos] = useState({});

  const { prodId } = useParams();

  useEffect(() => {
    getProductosById(prodId)
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [prodId]);
  return (
    <div>
      <h2>Caracteristicas</h2>
      <div>
        <h1>{producto.nombre}</h1>
        <img src={producto.img} alt={producto.nombre} />
        <p>{producto.descripcion}</p>
        <h3>$ {producto.precio}</h3>
      </div>
    </div>
  );
};

export default ItemDetailConteiner;
