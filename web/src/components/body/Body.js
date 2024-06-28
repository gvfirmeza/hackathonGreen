import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { ReactTyped } from 'react-typed';

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
                'Enrico CARAGNO',
                'Puterrier MALÁSIA',
                'Gabriel IBMEC'
            ]}
            typeSpeed={50}
            loop
            typedRef={function noRefCheck() { }}
        />
    </div>
);

const Section = styled(Box)(({ theme }) => ({
    height: '85vh',
    width: '70%',
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
    maxWidth: '40%',
    borderRadius: '7px',
    opacity: 0.8,
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
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
                        <Typography variant="h2">Nosssas DORES :( </Typography>
                        <Typography variant="h6">
                            <TextoDores />
                        </Typography>

                    </TextBox>
                    <Image src="https://root-nation.com/wp-content/uploads/2024/02/vista-title-title.jpg" alt="Descrição da Imagem" />
                </Section>
            </FullWidthBox>

            <FullWidthBox sx={{ backgroundColor: 'lightcoral' }}>
                <Section>
                    <Image src="https://images4.alphacoders.com/134/1349540.png" alt="Descrição da Imagem" />
                    <Typography variant="h2">Nossa SOLUÇÃO :) </Typography>
                </Section>
            </FullWidthBox>

            <FullWidthBox>
                <Section>
                    <Typography variant="h2">Próximos PASSOS :|</Typography>
                    <Image src="https://preview.redd.it/created-my-own-generic-frutiger-aero-wallpaper-to-use-for-v0-5fb4uuthj49c1.png?width=640&crop=smart&auto=webp&s=c71cf3ea5996b2534768f80d8e3f4a7efe808818" alt="Descrição da Imagem" />
                </Section>
            </FullWidthBox>
        </>
    );
};

export default Body;