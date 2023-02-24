import { createContext, useState } from "react";

export const AuthContext = createContext({});

type propsWithChildren = { children: JSX.Element }

export const AuthProvider = (props: propsWithChildren) => {
    const [token, setToken] = useState<string>();
    const [id, setId] = useState<number>();

    function setUser(acessToken: string, id: number) {
        setToken(acessToken);
        setId(id);
    }

    return (
        <AuthContext.Provider value={{ token, id, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}