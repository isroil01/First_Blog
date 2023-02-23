import NavBar from "components/Nav/NavBar";
import Footer from '../Nav/Footer';

const Main = (props) => {
  return (
    <>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main_1">
      {props.children} 
      <div className='footer'>
        <Footer />
      </div>
      </div>
       
    </>
  );
};

export default Main;
