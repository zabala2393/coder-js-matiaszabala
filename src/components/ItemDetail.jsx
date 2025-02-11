import ItemCount from "./ItemCount"


function ItemDetail({ item }) {
    return (
        <div>
            <img src={item?.image} alt={item?.name} />
            <h2>{item?.name}</h2>
            <p>{item?.description}</p>
            <p>${item?.price}</p>
            <ItemCount item={item} />
        </div>)
}
export default ItemDetail