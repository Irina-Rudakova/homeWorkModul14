import './theme.css';
import { useState} from "react";
import {
    Card,
    CardHeader,
    Switch,
    CardContent,
    Box,
    Container,
    Typography,
    FormGroup,
    FormControlLabel,
    CssBaseline,
  } from "@mui/material";
  import { createTheme, ThemeProvider } from "@mui/material/styles";

  const light = {
    palette: {
      mode: "light",
    },
  };
  
  const dark = {
    palette: {
      mode: "dark",
    },
  };


const Theme = () => {
    
const[isLightTheme, setisLightTheme]= useState(false);
const changeTheme = () => {
    setisLightTheme(!isLightTheme);
};

    return (
    <ThemeProvider theme={isLightTheme ? createTheme(light) : createTheme(dark)}>
      <CssBaseline />
      <Container>
        <div className="App">
          <Box component="div" p={5}></Box>
          <Card>
            <CardHeader
              action={
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch checked={isLightTheme} onChange={changeTheme} />
                    }
                    label="Dark Theme"
                  />
                </FormGroup>
              }
            />
            <CardContent>
              <Typography variant="body1">
               Light Mode is {isLightTheme ? "On" : "Off"}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Container>
    </ThemeProvider>
  );
};


export default Theme;

