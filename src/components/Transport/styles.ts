import styled from "styled-components";

export const AreaTittle = styled.div`
    grid-area: TI;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Tittle = styled.h2`
    color: #FFF;

    text-decoration: underline;
`

export const AreaList = styled.div`
    grid-area: LT;

    display: flex;
    justify-content: center;
    align-items: center;
`; 

export const List = styled.ul`
    list-style-type: circle;
`;

export const Item = styled.li`
    padding: 5px 0;
`;

export const AreaDisplay = styled.div`
    grid-area: DP;

    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-left: 40px;
    margin-right: 40px;
`;

export const Display = styled.span`
    color: #FFF;
`;
    
export const AreaButton = styled.div`
    grid-area: BT;

    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    width: 100px;
    height: 50px;

    margin: 10px;
    cursor: pointer;

    background: rgb(96, 9, 240);
    background: linear-gradient(0deg, rgba(96,9,240,1) 0%, rgba(129,5,240,1) 100%);
    color: #FFF;

    font-size: medium;

    border: none;
    border-radius: 10px;
    
    &::before {
        height: 0%;
        width: 2px;
    }

    &:hover {
        box-shadow: 4px 4px 6px 0 rgb(255, 255, 255, .5),
                    -4px -4px 6px 0 rgba(116, 125, 136, .5), 
                    inset -4px -4px 6px 0 rgba(255,255,255,.2),
                    inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
    }
`;
