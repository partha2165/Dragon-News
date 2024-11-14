
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playGroundImg from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 w-full">
      <h2 className="font-semibold pt-5 ml-4 mb-3">Q-Zone</h2>
      <div className="space-y-10 px-5">
        <img className="" src={swimmingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playGroundImg} alt="" />
      </div>
    </div>
  )
}

export default QZone
