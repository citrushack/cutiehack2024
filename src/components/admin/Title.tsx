type props = {
  title: string;
};

const Title = ({ title }: props) => {
  return (
    <div
      data-cy={`${title}-title`}
      className="font-righteous hidden pr-5 text-2xl font-extrabold text-white lg:block"
    >
      {title}
    </div>
  );
};

export default Title;
