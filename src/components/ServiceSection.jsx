export default function ServiceSection({ service }) {
  return (
    <section
      id={service.id}
      className="bg-white rounded-2xl shadow-xl border border-gray-200 p-5 sm:p-7 scroll-mt-[130px] max-w-3xl sm:max-w-none mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-red-600 text-center mb-6 sm:mb-8">
        {service.title}
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
        <div className="flex-1">
          <img
            src={service.image}
            alt={service.title}
            className="w-full rounded-xl shadow-md max-h-52 sm:max-h-none object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex-1 text-sm sm:text-lg text-gray-700 leading-relaxed space-y-3 sm:space-y-4">
          {service.desc.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
