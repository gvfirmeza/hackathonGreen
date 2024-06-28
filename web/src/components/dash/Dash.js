import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Dashboard = styled(Box)(({ theme }) => ({
    height: '85vh',
    width: '70vw',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        textAlign: 'center',
    },
    backgroundColor: 'rgba(0,0,0,0.1)',
}));

const Titulo = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: '2.5rem',
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    },
}));

const GrafBarra = styled(Box)(({ theme }) => ({
    width: '90%',
    height: '20em',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: '7px',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',
}));

const ContainerBaixo = styled(Box)(({ theme }) => ({
    width: '90%',
    height: '20em',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'row',
    },
    backgroundColor: 'blue',
    padding: theme.spacing(4),
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: '7px',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',
}));

const BlocoTexto = styled(Box)(({ theme }) => ({
    width: '20em',
    textAlign: 'center',
    padding: theme.spacing(1),
    backgroundColor: 'red',
}));

const GrafPizza = styled(Box)(({ theme }) => ({
    width: '20em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        textAlign: 'center',
    },
    backgroundColor: 'blue',
}));

const Dash = () => {
    return (
        <>
            <br /><br />
            <Dashboard>
                <Titulo>Dashboard</Titulo>
                <GrafBarra>Gráfico de Barra</GrafBarra>
                <ContainerBaixo>
                    <BlocoTexto>
                        <Typography variant="h4">Bloco de texto</Typography>
                        <Typography variant="body1">Texto</Typography>
                    </BlocoTexto>
                    <GrafPizza>Gráfico de pizza</GrafPizza>
                </ContainerBaixo>
            </Dashboard>
        </>
    );
}

export default Dash;