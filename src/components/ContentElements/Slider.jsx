const logos = [
    "elixir-drop-only.png",
    "Kotlin Monochrome Logo Black Mark RGB.svg",
    "laravel-mark-cmyk-black.svg",
    "logo-react.svg",
    "logo-monochrome.svg",
    "php-logo.svg",
    "swift_logo_icon_144823.webp",
    "HTML5_1Color_Black.svg",
    "logo-javascript.svg",
    "Octicons-mark-github.svg.png",
    "mysql.svg",
    "postgresql.svg",
    "azure-devops.svg",
    "c-sharp-logo.png",
    "aws.svg",
    "docker.svg",
    "css-4.svg",
];

const Slider = () => {
    return (
        <div className="logos">
            <div className="logos-slide">
                {logos.concat(logos).map((src, index) => (
                    <img key={index} src={src} alt="" />
                ))}
                {logos.concat(logos).map((src, index) => (
                    <img key={index} src={src} alt="" />
                ))}
            </div>
            <div className="logos-slide">
                {logos.concat(logos).map((src, index) => (
                    <img key={index} src={src} alt="" />
                ))}
                {logos.concat(logos).map((src, index) => (
                    <img key={index} src={src} alt="" />
                ))}
            </div>
        </div>
    );
};

export default Slider;
