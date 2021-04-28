import React, {useContext} from "react"
import { appContext } from "../context";
import Nieto from "./Nieto";

function Hijo(props: any) {
    const context = useContext(appContext);
    return (
        <div style={{ background: "blue", padding: "30px", color: "white" }}>
            Hijo {props.theme && props.theme} {context.theme && context.theme}
            <Nieto theme={props.theme} />
        </div>
    );
}

export default Hijo;