const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center animate-spin-slow">
        <img
          src="/logo.ico"
          alt="Company Logo"
          className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
        />
      </div>
    </div>
  );
};

export default Preloader;
