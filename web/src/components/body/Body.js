import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { ReactTyped } from 'react-typed';
import Planta from '../../img/undraw_environment_iaus.png'

const TextoDores = () => (
    <div>
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
                'transformamos tecnologia em sustentabilidade',
                'ajudamos você a diminuir sua pegada de carbono',
                ''
            ]}
            typeSpeed={50}
            loop
            typedRef={function noRefCheck() { }}
        />
    </div>
);

const Section = styled(Box)(({ theme }) => ({
    height: '85vh',
    width: '70vw',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
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
    maxWidth: '45%',
    borderRadius: '7px',
    margin: '10px',
    opacity: 0.8,
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.8)',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(2),
    },
}));

const FullWidthBox = styled(Box)({
    width: '100%',
});

const Body = () => {
    return (
        <>
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
                    <Image src="https://www.amigoscode.com/assets/thumbnails/courses/mongodb.webp" alt="Descrição da Imagem" />
                </Section>
            </FullWidthBox>

            <FullWidthBox sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <Section>
                    <Image src={Planta} alt="Descrição da Imagem" />
                    <TextBox>
                        <Typography variant="h3">Nossa Missão</Typography>
                        <ul>
                            <li>Reduzir a Pegada de Carbono no mundo atual</li>
                            <li>Oferecer praticidade ao usuário</li>
                            <li>Diminuir custos desnecessários</li>
                            <li>Compromisso com o Meio Ambiente</li>
                        </ul>
                    </TextBox>
                </Section>
            </FullWidthBox>

            <FullWidthBox>
                <Section>
                    <TextBox>
                        <Typography variant="h3">Venha entender como</Typography>
                        <TextoDores />
                    </TextBox>
                    <Image src="https://img-c.udemycdn.com/course/480x270/3764174_3ca2_2.jpg" alt="Descrição da Imagem" />
                </Section>
            </FullWidthBox>
        </>
    );
};

export default Body;