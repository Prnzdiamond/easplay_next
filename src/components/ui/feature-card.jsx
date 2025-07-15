export function FeatureCard({
  title,
  icon,
  description,
  backgroundImage,
  className = "",
}) {
  const cardClassNames = backgroundImage
    ? "flex flex-col items-center justify-between rounded-lg shadow-lg bg-cover bg-center p-6 transition-transform transform hover:scale-105 relative"
    : "flex flex-col items-center justify-between rounded-lg shadow-lg bg-gray-800 text-white p-6 transition-transform transform hover:scale-105";

  return (
    <div
      className={`${cardClassNames} ${className}`}
      style={
        backgroundImage ? { backgroundImage: ` url("${backgroundImage}")` } : {}
      }
    >
      {/* If there is a background image, apply a subtle overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
      )}

      <div className="relative mb-4 flex items-center justify-center w-16 h-16 rounded-full  p-2">
        {icon}
      </div>

      <h3 className="relative text-lg font-bold mb-4 text-center text-white">
        {title}
      </h3>

      <p className="relative text-center text-white mt-2">{description}</p>
    </div>
  );
}
