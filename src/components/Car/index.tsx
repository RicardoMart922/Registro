import React from 'react';
import { 
    Container, 
    Grid 
} from './styles';
import Transport from '../Transport/index';

const Car: React.FC = () => {
    return (
        <Container>
            <Grid>
                <Transport power='126cv' year={2018} brand='Clássico' color='Preto' />
            </Grid>
        </Container>
    );
}

export default Car;