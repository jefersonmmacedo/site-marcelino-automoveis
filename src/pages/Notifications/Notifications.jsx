import "./notifications.css"
import Navbar2 from "../../components/Nav/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { useFetch } from "../../hooks/useFetch";
import { Notification } from "../../components/Notification/Notifications";

export function Notifications() {
    const Local = localStorage.getItem("suachaveauto");
    const user = JSON.parse(Local);

console.log("Teste");

    const {data} = useFetch(`/notification/${user.id}`)


    return (
        <div className="Notifications">
            <Navbar2 />

            <h2>Notificações</h2>

            {data?.length === 0 ?
            <div className="textMessage">
                <h4>Nenhuma notificação ou mensagem para você</h4>
            </div>
            :
            data?.map((notification) => {
                return (
                    <Notification text={notification.text} link={notification.link}/>
                )
            })}

            <div className="space"></div>

            <Footer />
        </div>
    )
}
