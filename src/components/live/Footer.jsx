const Footer = () => {
  return (
    <div className="flexbox justify-center bg-[#021334]">
      <div className="flex items-center justify-center">
        <div className="animate-astro-move -mb-5">
          <img
            src="/assets/astronauthappy.svg"
            alt="astroguy"
            className="w-[150px]"
          />
        </div>
      </div>
      <div className="flex h-[300px] justify-center overflow-hidden">
        <img
          src="/assets/moon.svg"
          alt="Moon Icon"
          className="h-[600px] w-[600px] py-5"
        />
      </div>
    </div>
  );
};

export default Footer;
