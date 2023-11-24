import { useEffect } from "react";
import "./blocckAutosHome.css";
import { useState } from "react";
import api from "../../services/api";
import { PropertyUnicBlock } from "../PropertyUnicBlock/PropertyUnicBlock";
import { IoArrowForward } from "react-icons/io5";

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

  const filterData = data?.slice(0, 16);

  console.log(filterData)
    return (
        <div className="BlocckAutosHome">
            {filterData?.map((unic) => {
                return (
                    <PropertyUnicBlock id={unic.id} />
                )
            })}

            <div className="buttonCars">
                <a href="/autos">Ver todos os veículos <IoArrowForward/></a>
            </div>
        </div>
    )
}

