type props = {
  title: string;
};

const Title = ({ title }: props) => {
  return (
    <div
      data-cy={`${title}-title`}
      className="hidden pr-5 font-righteous text-2xl font-extrabold text-white lg:block"
    >
      {title}
    </div>
  );
};

export default Title;
