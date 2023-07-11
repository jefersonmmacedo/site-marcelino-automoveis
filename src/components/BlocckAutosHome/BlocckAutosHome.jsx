import { useEffect } from "react";
import "./blocckAutosHome.css";
import { useState } from "react";
import api from "../../services/api";
import { PropertyUnicBlock } from "../PropertyUnicBlock/PropertyUnicBlock";

export function BlocckAutosHome() {
    const idCompany = process.env.REACT_APP_CODEUSER
    console.log(idCompany);
  
    const [data, setData] = useState([])
    useEffect(() => {
      async function loadProperty() {
          await api.get(`autos/company/${idCompany}`).then((res) => {
              setData(res.data);
              console.log(res.data);
          }).catch((error) => {
              console.log(error)
          })
      }
  
      loadProperty()
  }, [])

  const filterData = data?.slice(0, 8);

  console.log(filterData)
    return (
        <div className="BlocckAutosHome">
            {filterData?.map((unic) => {
                return (
                    <PropertyUnicBlock id={unic.id} />
                )
            })}
        </div>
    )
}

