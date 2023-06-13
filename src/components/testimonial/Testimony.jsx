import React from "react";
import {TestimonyStyle} from "./TestimonyStyle";
import testifierImgAA from "../../assets/testifierImgAA.png";
import testifierImgBB from "../../assets/testifierImgBB.png";
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im"

const Testimony = () => {
  return (
    <TestimonyStyle>
      <h3 className="section-title">What people say <span className="section-title-span">about CodeSpac</span></h3>
      <div className="testimony-container">
      <div className="testifier">
        <div className="testifier-comment">
        <p>
        <ImQuotesLeft className="quote-left"/>
          My tech journey with CodeSpac has really been amazing because why not?
          💃 I thought it's something I cannot do but then with CodeSpac it's a
          different story, I am being taught in details with tasks and
          challenges for easy understanding and assimilation... My favorite
          part are those times of words of encouragement because sometimes I'd
          feel like I'm not doing again... So I am grateful to CodeSpac 🥰
          THANK YOU 🥰
          <ImQuotesRight className="quote-right"/>
        </p>
        </div>
        <div className="testimony-content">
        <img src={testifierImgAA} alt="Reviewer Image"/>
        <div>
        <p className="testifier-name">Chisom Onwuelu</p>
        <p className="testifier-role">CodeSpac Trainee</p>
        </div>
        </div>
      </div>

      <div className="testifier">
        <div className="testifier-comment">
        <p>
        <ImQuotesLeft className="quote-left"/>
          The Web Development training was like so effective, imagine me from a
          zero tech background, I can now design very sweet websites. May God
          bless you for me ma'am, you are extraordinary meen 👏👏👏🙌🙌
          <ImQuotesRight className="quote-right"/>
        </p>
        </div>
        <div className="testimony-content">
        <img src={testifierImgBB} alt="Reviewer Image"/>
        <div>
        <p className="testifier-name">Emeka Oguejiofor</p>
        <p className="testifier-role">CodeSpac Trainee</p>
</div>
        </div>
      </div>
      </div>
    </TestimonyStyle>
  );
};

export default Testimony;
