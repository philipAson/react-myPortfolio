import RubberBand from "../utils/RubberBand";

const Header = ({ registerLetter }) => {
  const title = "Philip Andersson".split("");

  return (
    <div className="HeaderContainer">
      <div className="Header">
        {title.map((letter, index) => (
          <RubberBand key={index} onRegister={registerLetter}>
            {letter === " " ? "\u00A0" : letter}
          </RubberBand>
        ))}
      </div>
      <div className="Header2">
        <h1>Fullstack developer</h1>
      </div>
    </div>
  );
};

export default Header;

