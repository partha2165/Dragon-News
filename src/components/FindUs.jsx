import { BsInstagram } from "react-icons/bs"
import { FaFacebook, FaTwitterSquare } from "react-icons/fa"


const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
            <FaFacebook></FaFacebook>Facebook
            </button>
        <button className="btn join-item justify-start">
            <FaTwitterSquare></FaTwitterSquare>Twitter
            </button>
        <button className="btn join-item justify-start">
            <BsInstagram></BsInstagram>Instagram
            </button>
        </div>
      <div>

      </div>
    </div>
  )
}

export default FindUs
