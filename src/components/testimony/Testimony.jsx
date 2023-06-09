import React from "react";
import testimonyImgA from "../../assets/testimonyImgA.jpeg";
import testimonyImgB from "../../assets/testimonyImgB.jpeg";

const Testimony = () => {
  return (
    <div>
      <div>
      <img src={testimonyImgA} alt="Reviewer Image"/>
        <p>Chisom Onwuelu</p>
        <p>
          My tech journey with CodeSpac has really been amazing because why not?
          💃 I thought it's something I cannot do but then with CodeSpac it's a
          different story, I am being taught in details with tasks and
          challenges for easy understanding and assimilation..... My favorite
          part are those times of words of encouragement because sometimes I'd
          feel like I'm not doing again..... So I am grateful to CodeSpac 🥰
          THANK YOU 🥰
        </p>
        <p>Onwuelu_chisom on IG</p>
      </div>

      <div>
        <img src={testimonyImgB} alt="Reviewer Image"/>
        <p>Emeka Oguejiofor</p>
        <p>
          The Web Development training was like so effective, imagine me from a
          zero tech background, I can now design very sweet websites. May God
          bless you for me ma, you are extraordinary meen. 👏👏👏🙌🙌
        </p>
        <p>raphaellemeka on TW</p>
      </div>
    </div>
  );
};

export default Testimony;
