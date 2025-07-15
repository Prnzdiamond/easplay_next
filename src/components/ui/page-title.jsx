export function PageTitle({ section, heading, children }) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      {section && (
        <p className="font-semibold text-white text-lg mb-2 uppercase tracking-wide">
          {section}
        </p>
      )}
      <h2 className="my-3 text-white text-3xl lg:text-4xl font-bold">
        {heading}
      </h2>
      {children && (
        <p className="text-blue-gray-400 text-lg leading-relaxed">{children}</p>
      )}
    </div>
  );
}
