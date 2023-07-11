import {Route, Routes, Navigate} from 'react-router-dom';
import { Favorites } from '../pages/Favorites/Favorites';
import { Home } from '../pages/Home/Home';
import { NotFound } from '../pages/NotFound/NotFound';
import { Notifications } from '../pages/Notifications/Notifications';
import { Pricing } from '../pages/Pricing/Pricing';
import { SignIn } from '../pages/SignIn/SignIn';
import { ChooseYourAccount } from '../pages/ChooseYourAccount/ChooseYourAccount';
import { SignUpClient } from '../pages/SignUpClient/SignUpClient';
import { SignUpProfessional } from '../pages/SignUpProfessional/SignUpProfessional';
import { PrivacyPolicy } from '../pages/PrivacyPolicy/PrivacyPolicy';
import { TermsOfUse } from '../pages/TermsOfUse/TermsOfUse';
import { Properties } from '../pages/Properties/Properties';
import { Autos } from '../pages/Autos/Autos';
import { About } from '../pages/About/About';
import { Companies } from '../pages/Companies/Companies';
import { Schedules } from '../pages/Schedules/Schedules';
import { MessagesAutos } from '../pages/MessagesAutos/MessagesAutos';
import { Simulator } from '../pages/Simulator/Simulator';
import { SignInCompany } from '../pages/SignInCompany/SignInCompany';
import { Company } from '../pages/Company/Company';
import { MyAccount } from '../pages/MyAccount/MyAccount';
import { Scheduling } from '../pages/Scheduling/Scheduling';
import { ComingSoon } from '../pages/CommingSoom/ComingSoon';
import { Checkout } from '../pages/Checkout/Checkout';
import { PaymentCompleted } from '../pages/PaymentCompleted/PaymentCompleted';
import { Contact } from '../pages/Contact/Contact';
import { Faq } from '../pages/Faq/Faq';
import { Announce } from '../pages/Announce/Announce';
import { FipeCar } from '../pages/FipeCar/FipeCar';
import { FipeCarData } from '../pages/FipeCarData/FipeCarData';
import { ConfirmedAccount } from '../pages/ConfirmedAccount/ConfirmedAccount';
import { ChatMessage } from '../pages/ChatMessage/ChatMessage';
import { Negociations } from '../pages/Negociations/Negociations';
import { UpdateAccount } from '../pages/UpdateAccount/UpdateAccount';

function Router () {
        
const Local = localStorage.getItem("suachaveauto");
const userLocal = JSON.parse(Local)

function PrivateRoute({children} ) {
    return userLocal !== null ? children : <Navigate to="/entrar"/>
}

    return (
            <Routes>
            {/* Rotas abertas */}
            <Route path="*" element={<NotFound />}/>
            <Route path="/home" element={<ComingSoon />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/entrar" element={<SignIn />}/>
            <Route path="/entrar-empresa" element={<SignInCompany />}/>
            <Route path="/cadastrar" element={<ChooseYourAccount />}/>
            <Route path="/cadastro-profissional" element={<SignUpProfessional />}/>
            <Route path="/cadastro-cliente" element={<SignUpClient />}/>
            <Route path="/autos" element={<Properties />}/>
            <Route path="/privacidade" element={<PrivacyPolicy />}/>
            <Route path="/termos" element={<TermsOfUse />}/>
            <Route path="/auto/:id" element={<Autos />}/>
            <Route path="/agencias" element={<Companies />}/>
            <Route path="/agencia/:nameSlug" element={<Company />}/>
            <Route path="/avaliacao" element={<FipeCar />}/>
            <Route path="/consulta-placa/:placa" element={<FipeCarData />}/>
            <Route path="/financiamento" element={<Simulator />}/>
            <Route path="/empresa" element={<About />}/>
            <Route path="/anunciar" element={<Announce />}/>
            <Route path="/planos" element={<Pricing />}/>
            <Route path="/faleconosco" element={<Contact />}/>
            <Route path="/faq" element={<Faq />}/>
            <Route path="/confirmacao" element={<ConfirmedAccount />}/>
            
            /* Rotas fechadas/login */           
           <Route path="/minhaconta"
                    element={ <PrivateRoute> <MyAccount /> </PrivateRoute>} />
            <Route path="/meusdados"
                    element={ <PrivateRoute> <UpdateAccount /> </PrivateRoute>} />
            <Route path="/mensagens"
                    element={ <PrivateRoute> <MessagesAutos /> </PrivateRoute>} />
            <Route path="/chat/:room/:idAuto/:idCompany/:idClient"
                    element={ <PrivateRoute> <ChatMessage /> </PrivateRoute>} />
            <Route path="/favoritos"
                    element={ <PrivateRoute> <Favorites /> </PrivateRoute>} />
            <Route path="/notificacoes"
                    element={ <PrivateRoute> <Notifications /> </PrivateRoute>} />
            <Route path="/meusimoveis"
                    element={ <PrivateRoute> <Negociations /> </PrivateRoute>} />
            <Route path="/agendamentos"
                    element={ <PrivateRoute> <Schedules /> </PrivateRoute>} />
            <Route path="/agendamento/:id"
                    element={ <PrivateRoute> <Scheduling /> </PrivateRoute>} />
            <Route path="/plano/:id"
                    element={ <PrivateRoute> <Checkout /> </PrivateRoute>} />
            <Route path="/pagamentofinalizado"
                    element={ <PrivateRoute> <PaymentCompleted /> </PrivateRoute>} />
            </Routes>
           
    )
}

export {Router}