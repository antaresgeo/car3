import React, {useContext} from "react"
import {appContext} from "../context";

function Nieto(props: any) {
    const { set_theme } = useContext(appContext)
    return (
        <div style={{ background: "yellow", padding: "30px", color: "black" }}>
            <input type="text" onChange={(ev) => {
                if(set_theme){
                    set_theme(ev.target.value as string)
                }
            }}/>
            Nieto {props.theme}
        </div>
    );
}

export default Nieto