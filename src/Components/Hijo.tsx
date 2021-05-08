import React, {useContext} from "react"
import { appContext } from "../context";
import Nieto from "./Nieto";
import {useHistory, useLocation, useRouteMatch} from "react-router";
export interface MatchParams {
    id: string;
}

function Hijo(props: any) {
    const context = useContext(appContext);
    const match = useRouteMatch<MatchParams>("/hijo/:id/")
    const history = useHistory()
    const location = useLocation();
    
    return (
        <div style={{ background: "blue", padding: "30px", color: "white" }}>
            estoy mostrando le hijo #{match?.params?.id} {location.search}
            
            Hijo {props.theme && props.theme} {context.theme && context.theme}
            <Nieto theme={props.theme} />
            
            <button onClick={() => {
                history.push("/lista/")
            }}> ir a la lista </button>
        </div>
    );
}

export default Hijo;