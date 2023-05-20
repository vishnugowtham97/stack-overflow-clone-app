import React from "react";
import "./RightSidebar.css";
import comment from "../../assets/message-regular.svg";
import pen from "../../assets/pen.svg";
import blackLogo from "../../assets/blackLogo.png";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Overflow Blogs</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width={18} />
          <p>Stories from our survey: Salary in the time of pandemic</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width={18} />
          <p>
            Great code isn't enough. Developers need to brag about it (Ep. 571)
          </p>
        </div>
      </div>
      <h4>Featured </h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width={18} />
          <p>
            New blog post from our CEO Prashanth: Community is the future of AI
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width={18} />
          <p>
            We are updating our Code of Conduct and we would like your feedback{" "}
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="pen" width={18} />
          <p>Temporary policy: ChatGPT is banned </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="pen" width={18} />
          <p>
            We are graduating the "Related questions using Machine Learning"
            experiment
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="pen" width={18} />
          <p>The connect tag is being burninated </p>
        </div>
      </div>
    </div>
  );
};
export default Widget;
