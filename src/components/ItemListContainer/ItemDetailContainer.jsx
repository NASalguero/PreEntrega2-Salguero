import { useState, useEffect } from "react";
import { getItemId } from "../../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const id = useParams().id;

    useEffect(() => {
        getItemId(Number(id))
            .then((res) => {
                setItem(res);
            })
    }, [id])



    return (
        <div>
            {item && <ItemDetail item={item}/>}
        </div>
    )
    }

export default ItemDetailContainer