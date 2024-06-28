import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { ReactTyped } from 'react-typed';

const TextoDores = () => (
    <Typography variant="h4" color={'#4caf50'} width={"85%"}>
        <ReactTyped
            backSpeed={50}
            onBegin={function noRefCheck() { }}
            onComplete={function noRefCheck() { }}
            onDestroy={function noRefCheck() { }}
            onLastStringBackspaced={function noRefCheck() { }}
            onReset={function noRefCheck() { }}
            onStart={function noRefCheck() { }}
            onStop={function noRefCheck() { }}
            strings={[
                'transformamos tecnologia em sustentabilidade!',
                'ajudamos você a diminuir sua pegada de carbono!',
                ''
            ]}
            typeSpeed={50}
            loop
            typedRef={function noRefCheck() { }}
        />
    </Typography>
);

const Section = styled(Box)(({ theme }) => ({
    height: '85vh',
    width: '85%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        textAlign: 'center',
    },
}));

const Section2 = styled(Box)(({ theme }) => ({
    height: '85vh',
    width: '70vw',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        textAlign: 'center',
    },
}));

const TextBox = styled(Box)(({ theme }) => ({
    textAlign: 'left',
}));


const Image = styled('img')(({ theme }) => ({
    maxWidth: '50%',
    borderRadius: '7px',
    margin: '15px',
    opacity: 0.8,
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.8)',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(2),
    },
}));

const Lista = styled('ul')(({ theme }) => ({
    listStyleType: 'disc',
    paddingLeft: '20px',
    '& li::marker': {
        color: '#4caf50',
    }
}));

const FullWidthBox = styled(Box)({
    width: '100%',
});

const Body = () => {
    return (
        <>
            <FullWidthBox>
                <Section>
                    <TextBox sx={"width: 70%"}>
                        <Typography variant="h3">Venha entender como</Typography>
                        <TextoDores />
                    </TextBox>
                    <Image src="https://miro.medium.com/v2/resize:fit:1400/1*YSVUSwyLaGqZANAf4y6p8g.png" alt="Descrição da Imagem"/>
                </Section>
            </FullWidthBox>

            <FullWidthBox sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <Section2>
                    <Image src="https://portaldobiogas.com/wp-content/uploads/2023/12/PBG-ART-ENERGIAS-1024x576.jpg.webp" alt="Descrição da Imagem" />
                    <TextBox>
                        <Typography variant="h3">Nossa Missão</Typography>
                        <Lista>
                            <li>Reduzir a Pegada de Carbono no mundo atual</li>
                            <li>Oferecer praticidade ao usuário</li>
                            <li>Diminuir custos desnecessários</li>
                            <li>Compromisso com o Meio Ambiente</li>
                        </Lista>
                    </TextBox>
                </Section2>
            </FullWidthBox>

            <FullWidthBox>
                <Section>
                    <TextBox>
                        <Typography variant="h3">Organize seus gastos</Typography>
                        <br />
                        <Typography variant="h6">
                            Descubra um aplicativo que monitora seus gastos com energia.
                        </Typography>
                        <Typography variant="h6">
                            Tenha controle sobre o custo de cada equipamento que você utiliza.
                        </Typography>

                    </TextBox>
                    <Image src="https://tratamentodeagua.com.br/wp-content/uploads/2023/03/Fontes-de-energia-renovaveis.jpg" alt="Descrição da Imagem" />
                </Section>
            </FullWidthBox>
        </>
    );
};

export default Body;