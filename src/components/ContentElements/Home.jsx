const Home = () => {
    return (
        <div className="homeContent">
            {/* <a
                href="https://www.instagram.com/kaffesnuscool/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="Instagram_Glyph_Black.png" alt="Instagram" />
            </a> */}
            <a
                href="mailto:philip.andersson@anorthgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
            >
                Email
            </a>
            <a
                href="tel:+46702599344"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
            >
                Phone
            </a>
            <a
                href="https://pippin-portfolio-bucket.s3.eu-north-1.amazonaws.com/Philip+Andersson+(1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
            >
                Resumé
            </a>
            <a
                href="https://www.linkedin.com/in/philip-andersson-3b690958/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
            >
                LinkedIn
            </a>
        </div>
    );
};

export default Home;
