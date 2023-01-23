import ContaineStyle from "./style";
import FormCard from "../FormCard";
import Input from "../Input";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import { context } from "../../context";

const Card = ()=>{
    const { result } = useContext(context);
   
    return(
        <ContaineStyle>
            <div className="containeConsult">
                <h2>Simule sua Antecipação</h2>
                <FormCard />
            </div> 
            <div className="containeResults">
               <h3>VOCÊ RECEBERÁ:</h3>
               <p>Amanhã:<b> R$ {result['1']?`${result['1']},00`:"0,00"}</b></p>
               <p>Em 15 dias:<b> R$ {result['15']?`${result['15']},00`:"0,00"}</b></p>
               <p>Em 30 dias:<b> R$ {result['30']?`${result['30']},00`:"0,00"}</b></p>
               <p>Em 90 dias:<b> R$ {result['90']?`${result['90']},00`:"0,00"}</b></p>
            </div>
        </ContaineStyle>
    )
};

export default Card;