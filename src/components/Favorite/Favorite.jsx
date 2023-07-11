import "./favorite.css";
import { PropertyUnicBlock } from "../PropertyUnicBlock/PropertyUnicBlock";
import { useFetch } from "../../hooks/useFetch";


export function Favorite() {
    const LocalCity = localStorage.getItem("suachaveauto");
    const user = JSON.parse(LocalCity);

    const {data} = useFetch(`/favorite/client/${user.id}`)

    if(!data) {
        return (
            <h5>Carregando...</h5>
        )
    }
    if(data) {
       console.log(data)
    }

    return (
        <div className="Favorite">
            <div className="listFavorite">
            {data?.map((Auto) => {
                    return (
                        Auto.idCompany === null || Auto.idAuto === null ? "" :
                        <PropertyUnicBlock id={Auto.idAuto} key={Auto.id}/>
                    )
                })}
                </div>        
        </div>
    )
}