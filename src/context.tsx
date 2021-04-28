import React, {createContext, useState, FC} from "react";

interface AppState  {
    theme: string;
    set_theme?: Function;
}

const inicial_data: AppState =  {
    theme: "",
}

export const appContext = createContext<AppState>(inicial_data);

const { Provider, Consumer } = appContext;

const AppProvider: FC<{ }> = ({children}) =>  {
    const [theme, set_theme] = useState<string>("");
    return <appContext.Provider value={{theme, set_theme}}>
        {children}
    </appContext.Provider>
}

export default AppProvider;
