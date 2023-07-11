import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import "./negociations.css";
import { ToolBarClient } from "../../components/ToolBarClient/ToolBarClient";


export function Negociations() {

    // const LocalCity = localStorage.getItem("suachaveauto");
    // const user = JSON.parse(LocalCity);

    // const {data} = useFetch(`/scheduling/client/${user.id}`)

    // if(!data) {
    //     return (
    //         <h5>Carregando...</h5>
    //     )
    // }


    return (
        <div className="Negociations">
            <Navbar2 />
            <div className="main">
                <ToolBarClient />

                <div className="text">
                <h2>Minhas negociações</h2>
                <h5>Você não possui negociações de carros ou motos</h5>

                {/* {data?.map((sheduling) => {
                    return (
                        <div className="chat" key={sheduling.id}>
                        <div className="image">
                            <img src={sheduling.imageProperty} alt="" />
                        </div>
                        <div className="textChat">
                        <h4>{sheduling.titleProperty}</h4>
                        <h5><IoCalendarOutline />{sheduling.day}/{sheduling.month}/{sheduling.year} - {sheduling.hour}</h5>
                        <h6><IoBusinessOutline />{sheduling.location}</h6>
                        <h6><IoLocationOutline />{sheduling.address}</h6>
                        </div>
                    </div>
                    )
                })} */}

                </div>
            </div>

            <div className="viewFooter">
            <Footer />
        </div>
        </div>
    )
}