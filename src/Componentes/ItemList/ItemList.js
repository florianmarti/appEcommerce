import Item from "../Item/Item";

const ItemList = ({ Productos }) => {
  return (
    <div>
      {Productos.map((producto) => (
        <Item key={producto.id} producto />
      ))}
    </div>
  );
};

export default ItemList;
