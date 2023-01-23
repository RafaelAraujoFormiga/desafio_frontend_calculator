import FormCardStyle from "./style";
import { useForm, FieldErrorsImpl, UseFormHandleSubmit, } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input";
import formSchema from "../../validators";
import React, { ChangeEvent, useState, FormEvent } from 'react';
import { useContext, useEffect } from "react";
import { context } from "../../context";

const values = {
    amount: NaN,
    installments: NaN,
    mdr: NaN,
};

const FormCard = ()=>{

    const { onResult } = useContext(context);
    // const [ message, setMessage ] = useState<string>("")

    interface IFormInputs {
        value?: number;
        parcel?: number;
        percentage?: number;
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInputs>({
        resolver: yupResolver(formSchema)
        });

// Lógica responsável pela capitura e envio dos dados para api

    // function valueInput(e:number){
    //     setMessage(`R$ ${e},00`)
    // };

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
       const { name, value } = e.target;
      
        name==="amount"?values.amount=parseInt(value):
        name==="installments"?values.installments=parseInt(value):
        values.mdr=parseInt(value);
      
        // if(name==="amount"){
        //    valueInput(values.amount);
        // };
        if(values.amount || 0 && !!values.installments || 0 && !!values.mdr || 0){
            onResult(values)
        };
    };
//
        
    return(
        <FormCardStyle>
            <Input
            label="Imforme o valor da venda*"
            type="text"
            error={errors.value?.message}
            // value={message}
            func={handleChange}
            id="amount"
            {...register("value")}
            />
            <Input
            label="Em quantas parcelas*"
            type="number"
            error={errors.value?.message}
            func={handleChange}
            commentary="Máximo de 12 percelas"
            id="installments"
            {...register("parcel")}
            />
            <Input
            label="Imforme o percentual MDR*"
            type="number"
            error={errors.value?.message}
            func={handleChange}
            id="mdr"
            {...register("percentage")}
            />
        </FormCardStyle>
    )
};

export default FormCard;

