const Header = (props) => {
  return (
    <>
      <div className="flex justify-center items-center h-16 shadow-2xl">
        <h3 className="text-black-400 text-2xl text-bold">
        {props.headerText}
        </h3>
      </div>
    </>
  );
};

export default Header;
