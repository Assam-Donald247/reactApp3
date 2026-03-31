import './headerbar.css'
import ArrowLeft from "./ArrowLeft.svg"

function HeaderBar () {
  return (
    <div className="HeaderBar">
      <a href=''><img src={ArrowLeft} alt="Arrow" /></a>
      <p>Verify Number</p>
    </div>
  )
}

export default HeaderBar;