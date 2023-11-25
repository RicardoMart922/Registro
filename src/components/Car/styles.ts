import styled from 'styled-components';

/**
* Layout
* TI = Tittle
* LT = List
* DP = Display
* BT = Button    
*/

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-left: 20px;

    width: 1200px;
    height: 50vh;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 100px auto;

    grid-template-areas:
    'TI TI'
    'LT DP'
    'BT BT';

    height: 50vh;
    width: 600px;

    background-color: rgb(25, 25, 55, .7);
    color: #FFF;
`;