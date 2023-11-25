import React, { useState } from "react";
import {
    AreaTittle,
    Tittle,
    AreaList,
    List,
    Item, 
    AreaDisplay,
    Display,
    AreaButton,
    Button
} from "./styles";

interface IDataCar {
    power: string, 
    year: number, 
    brand: string, 
    color: string
}

const Transport: React.FC<IDataCar> = (props) => {
    const [speed, setSpeed] = useState(0);

    function speed_up_transport():void {
        setSpeed(speed + 1);
    }

    function slow_down_transport():void {
        if (speed > 0) {
            setSpeed(speed - 1);
        }
    }

    return (
        <>
            <AreaTittle>
                <Tittle>Velocímetro</Tittle>
            </AreaTittle>
            <AreaList>
                <List>
                    <Item>Potência: {props.power}</Item>
                    <Item>Ano: {props.year}</Item>
                    <Item>Modelo: {props.brand}</Item>
                    <Item>Cor: {props.color}</Item>
                </List>
            </AreaList>
            <AreaDisplay>
                <Display>Velocidade: { speed } km\h</Display>
            </AreaDisplay>
            <AreaButton>
                <Button onClick={speed_up_transport}>Acelerar</Button>
                <Button onClick={slow_down_transport}>Desacelerar</Button>
            </AreaButton>
        </>
    );
}

export default Transport;