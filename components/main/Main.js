import NavBar from "components/Nav/NavBar";

const Main = (props) => {
  return (
    <>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main_1">{props.children}</div>
    </>
  );
};

export default Main;
