import FindUs from "../FindUs"
import SocialLogin from "../SocialLogin"
import QZone from "./QZone"
import RightImg from "./RightImg"


const RightNavbar = () => {
  return (
    <div className="space-y-5">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <QZone></QZone>
      <RightImg></RightImg>
    </div>
  )
}

export default RightNavbar
