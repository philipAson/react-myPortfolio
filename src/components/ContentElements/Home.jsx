import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, IconButton } from "@mui/material";
import { Link, Mail, Phone } from "@mui/icons-material";

function Item(props) {
  const { item } = props;

  const handleIconClick = (e, type) => {
    e.preventDefault();
    if (type === "mail") {
      window.location.href = `mailto:${item.mail}`;
    } else if (type === "phone") {
      window.location.href = `tel:${item.phoneNumber}`;
    } else {
      window.open(item.href, "_blank");
    }
  };

  return (
    <Paper
      elevation={7}
      sx={{
        margin: "20px",
        backgroundColor: "#636d7a",
        opacity: 0.85,
      }}
    >
      <h1 style={{ color: "#ffc909", fontWeight: "bold", padding: 20 }}>
        {item.label}
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img className="homeImg" src={item.imgPath} alt={item.label} />
      </div>
      <p
        className="homeText"
        style={{ color: "#ffc909", fontWeight: "bold", padding: 20 }}
      >
        {item.text}
      </p>

      <IconButton
        onClick={(e) => handleIconClick(e, item.mail ? "mail" : "url")}
        style={{ color: "#ffc909", padding: 20, marginLeft: 20 }}
        disableRipple
      >
        {item.icon1}
      </IconButton>
      {item.icon2 && (
        <IconButton
          onClick={(e) => handleIconClick(e, "phone")}
          style={{ color: "#ffc909", padding: 20, marginLeft: 20 }}
          disableRipple
        >
          {item.icon2}
        </IconButton>
      )}
    </Paper>
  );
}

const Home = () => {

  const portfolio = [
    {
      label: "The Beer Game",
      text: "Checkout what i did on my last internship at MA-System. A verry fun and challenging project where i was responsible for putting together an Online game that is widely used by universitys around the world.",
      imgPath: "https://pippin-portfolio-bucket.s3.eu-north-1.amazonaws.com/Screenshot+2024-03-10+at+13.18.57.jpg",
      href: "https://beergame.masystem.com/",
      icon1: <Link />,
    },
    {
      label: "Git Repos",
      text: (
        <>
          Link to my Github where all my private and school repos are available
          <br />
          <br />
          <br />
        </>
      ),
      imgPath: "https://pippin-portfolio-bucket.s3.eu-north-1.amazonaws.com/Screenshot+2024-03-11+at+10.34.42.jpg",
      href: "https://github.com/philipAson?tab=repositories",
      icon1: <Link />,
    },
    {
      label: "Contact",
      text: (
        <>
          Send me a mail or give me a call!
          <br />
          <br />
          +46702599344
          <br />
          <br />
        </>
      ),
      imgPath: "https://pippin-portfolio-bucket.s3.eu-north-1.amazonaws.com/DSC04169.JPG",
      mail: "philip.andersson.1991@hotmail.com",
      phoneNumber: "+46702599344",
      icon1: <Mail />,
      icon2: <Phone />,
    },
    {
      label: "My education",
      text: (
        <>
          Here is the link to Folkuniversitet and my education
          <br />
          <br />
          <br />
          <br />
        </>
      ),
      imgPath: "https://pippin-portfolio-bucket.s3.eu-north-1.amazonaws.com/Screenshot+2024-03-11+at+11.55.24.jpg",
      href: "https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/mobilapplikationsutvecklare-distans/utbildningens-innehall/",
      icon1: <Link />,
    },
  ];

  return (
    <div className="homeContent">
      <Carousel
        interval={7000}
        indicatorContainerProps={{
          style: {
            paddingBottom: 20,
            position: "relative",
            bottom: "-15px",
          },
        }}
      >
        {portfolio.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
