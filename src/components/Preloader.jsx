const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center animate-spin-slow">
        <img
          src="/logo.ico"
          alt="Company Logo"
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
        />
      </div>
    </div>
  );
};

export default Preloader;
