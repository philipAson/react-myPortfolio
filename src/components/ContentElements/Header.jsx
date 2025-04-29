import RubberBand from "../utils/RubberBand";

const Header = () => {
    const title = "Philip Andersson".split("");
    return (
        <div className="HeaderContainer">
            <div className="Header">
                {title.map((letter, index) => {
                    return (
                        <RubberBand key={index}>
                            {letter === " " ? "\u00A0" : letter}
                        </RubberBand>
                    );
                })}
            </div>
            <div className="Header2">
                <h1>Fullstack developer</h1>
            </div>
        </div>
    );
};

export default Header;
