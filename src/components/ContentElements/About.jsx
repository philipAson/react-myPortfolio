import React from "react";
import { Paper } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const About = () => {
  const darkTheme = createTheme({ palette: { mode: "dark" } });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper
        className="paper"
        elevation={7}
        sx={{
          backgroundColor: "#636d7a", // Använder en fördefinierad grå nyans från Material-UI
          opacity: 0.85, // Justerar opaciteten
        }}
      >
        <div className="scroll-text">
          <h1 className="abouth1">About me.</h1>
          <div
            className="makeMeScrollPls"
            sx={{
              overflow: "auto",
              "&::-webkit-scrollbar": { display: "none" }, // Gömmer scrollbaren för WebKit-baserade webbläsare
              scrollbarWidth: "none", // Gömmer scrollbaren för Firefox
            }}
          >
            <p>
              Im a software developer in progress and is currently looking for
              an internship from the 8th of April to 7th of June (v.15 -v.24).
              After that my two years at the schoolbench is over and im out on
              the market.
            </p>
            <br />
            <p>
              What you will gain is a free worker for 9 weeks that is verry
              driven and eager to learn everything that involvs coding. I am not
              afraid to dig in to new things, infact i verry much enjoy doing
              so! Also, i thrive when given responsibility and see it as an
              oportunity to show i'm reliable!
            </p>
            <br />
            <p>
              These two years i have been studying both iOS and Android
              development and been coding apps using Swift, Kotlin and Java.
              Lately i have been diving in to some backend and webdevelopment
              using React And setting up Databases and API's with AWS services.
              This website was built with just that.
            </p>
            <br />
            <p>
              On my last internship i
              was responsible for putting together an Online game for MA-System
              which im verry proud of. Go check it out on the main page!
            </p>
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
};

export default About;
