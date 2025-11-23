const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-24 h-24 flex items-center justify-center animate-spin-slow">
        <img
          src="/logo.ico"
          alt="Company Logo"
          className="w-30 h-30 sm:w-40 sm:h-40 object-contain"
        />
      </div>
    </div>
  );
};

export default Preloader;
