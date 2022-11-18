import Img from "../assets/img.png";
import Attach from "../assets/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={Attach} alt="" />
        <label htmlFor="send-file">
          <img src={Img} alt="" />
          <input type="file" id="send-file" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
