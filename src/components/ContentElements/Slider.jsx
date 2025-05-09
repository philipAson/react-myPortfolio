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
    const allLogos = [...logos, ...logos]; // Dubbel lista för loop
  
    return (
      <div className="logos">
        <div className="logos-slide">
          {allLogos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`logo-${index}`}
              loading="eager" // Viktigt för prestanda – laddas direkt
              onError={(e) => {
                e.target.style.display = "none"; // Undvik brutna bilder
              }}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Slider;
  
