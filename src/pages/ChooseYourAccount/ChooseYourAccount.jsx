import "./chooseYourAccount.css"

export function ChooseYourAccount() {

    function handleRedirect(e) {
        e.preventDefault();
        window.open("https://adm.suachaveauto.com.br/cadastro/novocadastro")
    }
    function handleRedirectClient(e) {
        e.preventDefault();
        window.open("/cadastro-cliente", "_self")
    }
    return (
        <div className="ChooseYourAccount">
            <div className="client">
                <div className="block">
                    <button onClick={handleRedirectClient}>SOU CLIENTE</button>
                </div>
            </div>
            <div className="professional">
            <div className="block">
                    <button onClick={handleRedirect}>SOU AGÊNCIA/CONSULTOR</button>
                </div>
            </div>
        </div>
    )
}