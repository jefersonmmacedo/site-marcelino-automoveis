import "./propertyCarroussel.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { PropertyUnicBlock } from "../PropertyUnicBlock/PropertyUnicBlock";
import { useFetch } from "../../hooks/useFetch";
import { PropertyUnicBlockLoader } from "../PropertyUnicBlockLoader/PropertyUnicBlockLoader";

export function PropertyCarroussel({type}) {

    const {data} = useFetch(`/autos/typecar/${type}`);


    // if(data) {
    //    console.log(data)
    // }
    const buttonStyle = {
        display:'none'
    };
    
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}></button>,
        nextArrow: <button style={{ ...buttonStyle }}></button>
    }

    const responsiveSettings = [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 610,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 250,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

    if(data?.length === 0) {
        return (
            <div>
                <Slide slidesToScroll={3} slidesToShow={3} indicators={true} {...properties} responsive={responsiveSettings}>
                            <PropertyUnicBlockLoader />
                            <PropertyUnicBlockLoader />
                            <PropertyUnicBlockLoader />
                            <PropertyUnicBlockLoader />

                </Slide>
            </div>
        )
    }
    if(!data) {
        return (
            <div>
                <Slide slidesToScroll={3} slidesToShow={3} indicators={true} {...properties} responsive={responsiveSettings}>
                            <PropertyUnicBlockLoader />
                            <PropertyUnicBlockLoader />
                            <PropertyUnicBlockLoader />
                            <PropertyUnicBlockLoader />

                </Slide>
            </div>
        )
    }

    return (
        <div>
            <Slide slidesToScroll={3} slidesToShow={3} indicators={true} {...properties} responsive={responsiveSettings}>
                {data?.map((auto) => {
                    return (
                       <PropertyUnicBlock id={auto.id}/>
                    )
                })}
            </Slide>
        </div>
    )
}