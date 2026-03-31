import "./verifyContainer.css";
import HeaderBar from "../HeaderBar/HeaderBar";
import VerifyPhone from "../VerifyPhone/VerifyPhone";
import Footer from "../Foot/Foot";

function VerifyContainer() {
  return (
    <div className="VerifyCont">
      <div className="BckImg">
        <HeaderBar/>
        <VerifyPhone/>
        <Footer/>
      </div>
    </div>
  );
}

export default VerifyContainer;
