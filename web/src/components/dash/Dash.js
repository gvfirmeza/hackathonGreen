import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import BasicLineChart from "../basiclinechart/BasicLineChart";
import BasicPie from "../basicpie/BasicPie";
import GaugePointer from "../gaugepointer/GaugePointer";

const Dashboard = styled(Box)(({ theme }) => ({
  width: "70vw",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
  },
  backgroundColor: "rgba(0,0,0,0.1)",
}));

const Titulo = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "2.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

const GrafBarra = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "20em",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  backgroundColor: "rgba(0,0,0,0.1)",
  borderRadius: "7px",
  boxShadow: "0 0 10px 0 rgba(0,0,0,0.3)",
}));

const ContainerBaixo = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "20em",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-evenly",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
  },
  padding: theme.spacing(4),
  backgroundColor: "rgba(0,0,0,0.1)",
  borderRadius: "7px",
  boxShadow: "0 0 10px 0 rgba(0,0,0,0.3)",
}));

const BlocoTexto = styled(Box)(({ theme }) => ({
  width: "18em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(1),
  backgroundColor: "rgba(0,0,0,0.6)",
  borderRadius: "4px",
}));

const BlocoPower = styled(Box)(({ theme }) => ({
  width: "8em",
  textAlign: "center",
  padding: theme.spacing(2),
  backgroundColor: "rgba(0,0,0,0.6)",
  borderRadius: "4px",
}));

const GrafPizza = styled(Box)(({ theme }) => ({
  width: "18em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  backgroundColor: "rgba(0,0,0,0.6)",
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const Dash = () => {
  return (
    <>
      <br />
      <br />
      <Dashboard>
        <Titulo sx={'margin-bottom: 15px'}>Dashboard</Titulo>
        <GrafBarra>
            <BasicLineChart />
        </GrafBarra>
        <ContainerBaixo>
          <BlocoTexto>
          <Typography variant="h4">Bloco de texto</Typography>
          <GaugePointer />
          </BlocoTexto>
          <GrafPizza>
            <BasicPie />
          </GrafPizza>
          <BlocoPower>
            <Typography variant="h6">TOMADA</Typography>
            <FormControl sx={'margin-top: 8px'}>
              <RadioGroup name="controlled-radio-buttons-group">
                <FormControlLabel
                  value="ligado"
                  control={<Radio />}
                  label="Ligado"
                />
                <FormControlLabel
                  value="desligado"
                  control={<Radio />}
                  label="Desligado"
                />
              </RadioGroup>
            </FormControl>
          </BlocoPower>
        </ContainerBaixo>
      </Dashboard>
    </>
  );
};

export default Dash;
