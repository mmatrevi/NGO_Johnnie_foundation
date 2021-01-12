import React from "react";
import "./Home.css";
import MiddleContent from "./MiddleContent";
import SideContent from "./SideContent";
import Footer from "./Footer";

function Home() {
  return (
    <div className="Home">
      <div className="Home__SideContent">
        <div>
          <img
            className="home__image"
            src="https://th.bing.com/th/id/OIP.ZCSIDgQxcvkFYe3TlB6WxwHaEK?w=301&h=180&c=7&o=5&pid=1.7"
            alt=""
          />
        </div>

        <div className="SideContent">
          <SideContent />
        </div>
      </div>

      <div className="Middle__Content">
        <MiddleContent
          Title="Programs and projects"
          Content="Donations/Platforms/Forums/Dialogue/Organize conferences to inspire young people and give them the platforms to freely share ideas and success stories"
        />

        <MiddleContent
          Title="Target"
          Content="Guarantee every child with a minimum level of well-being compatible with human dignity and to empower citizens by providing information, public participation and access to free and fair justice"
        />
      </div>

      <div className="Middle__Content2">
        <div>
          <b>Sustainability plans:</b>
          <br></br>
          <ul>
            <li>
              <b>Develop vision, mission, case for support:</b> <br></br>•An
              internal staff team would be created to guide planning process of
              our foundation.
              <br></br>
              •Discuss with staff and community members why our program is
              needed, who will benefit, why our organization is the best
              organization to undertake it.
              <br></br>
              •Identify and talk with other community leaders who might share
              common or similar vision/mission.
            </li>
          </ul>

          <ul>
            <li>
              <b>Developing Goals and Objectives:</b> <br></br>•Develop a logic
              model to clarify sustainability goals, we will create specific
              program objectives, and identify measures to track progress and
              outcome.
            </li>
          </ul>

          <ul>
            <li>
              <b>Research and identify potential stakeholders:</b> <br></br>•
              Identify priorities such as community engagement, strategic
              communication, leadership development, governance and management.
              <br></br>• We will solicit ideas from other agencies, schools, and
              faith communities who might share interests with your program.
              <br></br>• Talk to local businesses about how your program can
              benefit their interests.
            </li>
          </ul>

          <ul>
            <li>
              <b>Reporting and accountability:</b>
              <br></br> THE JOHNNIE FOUNDATION honors the generosity of its
              donors by following a firm policy of full transparency in all of
              its operations. The organization routinely reports on how
              donations are used and makes its financial documents (eg. tax
              returns, annual reports, audits), fundraising practices and
              compensation policies open to the public.
            </li>
          </ul>
        </div>
      </div>

      <div className="Footer__Content">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
