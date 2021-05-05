import React, {createContext, useState, FC} from "react";

interface AppState  {
    theme: string;
    set_theme?: Function;
}

const inicial_data: AppState =  {
    theme: "",
}

export const appContext = createContext<AppState>(inicial_data);

const { Provider } = appContext;

const AppProvider: FC<{ }> = ({children}) =>  {
    const [theme, set_theme] = useState<string>("");
    return <Provider value={{theme, set_theme}}>
        {children}
    </Provider>
}

export default AppProvider;
