import styled from "styled-components";

const ContaineStyle = styled.div`
    width: 100%;
    max-width: 680px;
    min-height: 400px;
    // min-height:px;
    display: flex;
    justify-content: space-between;
    // align-items: bottom;
    border: 1px solid RGB(239,236,255);
    border-radius: 12px;
    background: white;

    font-family:Arial, Helvetica, sans-serif;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.48);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.48);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.48);
    // border: 1px solid red;
    
    // ::before
    // {
    //     content: "";
    //     position: absolute;
    //     background: red;
    //     width: 100px;
    //     height: 100px;
    // }

    .containeConsult
    {
        width: 100%;
        // max-width: 440px;
        
        display: flex;
        flex-direction: column;
        // position: relative;
        // // left: 3rem;
        align-items: center;
        padding: 1rem;
        justify-content: end;
        gap: 2rem;
        
        background: white;
        border-radius: 12px 0 0 12px;
    }
    .containeResults
    {
        width: 100%;
        max-width: 250px;
        
        display: flex;
        flex-direction: column;
        align-items: start;
        // text-align: start;
        justify-content: center;
        gap: 2rem;
        padding: 0 0 0 2rem;
        
        background: RGB(239,236,255);
        color: RGB(109,172,235);
        border-radius: 0 12px 12px 0;
    }
    // @media(max-width:445px){
    //     flex-direction: column;
    //     align-items: center;

    //     .containeConsult
    //     {
    //         height: 440px;
    //     }
    //     .containeResults
    //     {
    //         min-width: 100%;
    //     }
    // }
    h2
    {
        color: #696969;
    }
    h3
    {
        border-bottom: 2px solid RGB(149,192,255,0.5);
    }
    p
    {
        display: flex;
        flex-wrap: wrap;
        font-size: 1.1rem;
    }

    // ::before
    // {
    //     content: "";
    //     width: 50%;
    //     height: 50%;
    //     position: absolute;
    //     background: linear-gradient(152deg,rgb(255,255,255) 0%, rgb(196,195,255) 100%);   
    // }
`
export default ContaineStyle