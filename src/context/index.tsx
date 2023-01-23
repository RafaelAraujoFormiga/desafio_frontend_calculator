import { createContext, useState, ReactNode} from "react";
import api from "../services";

interface IResult {
    amount: number;
    installments: number;
    mdr: number;
};

interface IOnResult {
    1: number;
	15: number;
	30: number;
	90: number;
};

interface IContext {
    onResult: (data: IResult) => void;
    result: IOnResult
};

export const context = createContext<IContext>({} as IContext);

interface IProvidersProps {
    children: ReactNode
};
  
export const Provider = ({ children }: IProvidersProps) => {

    const [result, setResult] = useState<IOnResult>({} as IOnResult);

    const onResult = (data:IResult) => {
        api
          .post("/", data)
          .then((response) => setResult(response.data))
          .catch((err) => console.log(err));
    };

    return (
        <context.Provider value={{ result, onResult }}>
            {children}
        </context.Provider>    
    );
};
          