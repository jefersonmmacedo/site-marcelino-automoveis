import "./newShare.css"
import { IoShareOutline, } from "react-icons/io5";
import { RWebShare } from "react-web-share";


export function NewShare({idAuto, title}) {
    return (
        <>
      <RWebShare
        data={{
          text: `${title}`,
          image: `https://img.freepik.com/fotos-gratis/bela-praia-tropical-mar-e-mar-com-palmeira-de-coco-na-hora-do-nascer-do-sol_74190-7454.jpg?w=2000`,
          url: `https://www.suachaveauto.com.br/auto/${idAuto}`,
          title: `${title}`,
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button className="buttonShare" ><IoShareOutline /> Compartilhar</button>
      </RWebShare>

        </>
    )
}
