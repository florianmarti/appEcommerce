import { useState, useEffect } from "react";
import { getProductos, getProductosByCategoria } from "../../AsincMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListConteiner = ({ wellcome }) => {
  const [Productos, setProductos] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      getProductos()
        .then((response) => {
          setProductos(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getProductos()
        .then((response) => {
          setProductos(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [categoriaId]);

  return (
    <div>
      <h1>{wellcome}</h1>
      <ItemList Productos={Productos} />
    </div>
  );
};
export default ItemListConteiner;
