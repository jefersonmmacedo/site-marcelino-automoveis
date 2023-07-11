import { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";
import { TextMessagesChat } from "../TextMessagesChat/TextMessagesChat";
import { TitleMessagesChat } from "../TitleMessagesChat/TitleMessagesChat";
import "./dataMenssageChat.css";

export function DataMenssageChat({idAuto, room}) {

    return (
        <div className="DataMenssageChat">
             <div className="textChat">
                        <TitleMessagesChat idAuto={idAuto}/>
                        <TextMessagesChat room={room}/>
                        </div>
        </div>
    )
}