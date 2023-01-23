import styled from "styled-components";

const InputStyle = styled.label`
    width: 100%;
    min-height: 5rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem; 
    font-size: 0.9rem;
    color: #808080;
    // border: 1px solid blue;

    input
    {
        height: 2.75rem;
        border: 1px solid RGBA(128,128,128,0.39);
        border-radius: 6px;
        padding: 0.5rem;
        font-size: 0.95rem;
    }
    span
    {
        color: red;
    }
    p
    {
        font-size: 0.7rem;
    }
`;

export default InputStyle;
