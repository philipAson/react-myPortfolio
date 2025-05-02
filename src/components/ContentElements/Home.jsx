import HoverableLink from "./HoverableLink";

const Home = ({ registerLetter }) => {
  return (
    <div className="homeContent">
      <HoverableLink
        as="a"
        href="mailto:philip.andersson@anorthgroup.com"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
        onRegister={registerLetter}
      >
        Email
      </HoverableLink>
      <HoverableLink
        as="a"
        href="tel:+46702599344"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
        onRegister={registerLetter}
      >
        Phone
      </HoverableLink>
      <HoverableLink
        as="a"
        href="https://pippin-portfolio-bucket.s3.eu-north-1.amazonaws.com/Philip+Andersson+(1).pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
        onRegister={registerLetter}
      >
        Resumé
      </HoverableLink>
      <HoverableLink
        as="a"
        href="https://www.linkedin.com/in/philip-andersson-3b690958/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
        onRegister={registerLetter}
      >
        LinkedIn
      </HoverableLink>
    </div>
  );
};

export default Home;
