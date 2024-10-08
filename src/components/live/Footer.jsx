const Footer = () => {
  return (
    <div className="flexbox justify-center bg-[#021334]">
      <div className="-mb-5 flex items-center justify-center">
        <img
          src="/assets/astronauthappy.svg"
          alt="astroguy"
          className="w-[150px]"
        />
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
