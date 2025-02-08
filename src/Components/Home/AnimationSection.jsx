import React from "react";


const AnimationSection = () => {
    return (
      <div>
        <div className="banner pt-24 mx-auto">
          <div className="slider" style={{ "--quantity": 10 }}>
            <div className="item" style={{ "--position": 1 }}>
              <img src="https://i.ibb.co/N6m8Mk2F/image.png" alt="" />
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <img src="images/dragon_2.jpg" alt="" />
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <img src="images/dragon_3.jpg" alt="" />
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <img src="images/dragon_4.jpg" alt="" />
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <img src="images/dragon_5.jpg" alt="" />
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <img src="images/dragon_6.jpg" alt="" />
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <img src="images/dragon_7.jpg" alt="" />
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <img src="images/dragon_8.jpg" alt="" />
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <img src="images/dragon_9.jpg" alt="" />
            </div>
            <div className="item" style={{ "--position": 10 }}>
              <img src="images/dragon_10.jpg" alt="" />
            </div>
          </div>
          <div className="content z-2">
            <h1 data-content="Projects">Projects</h1>
            <div className="author">
              <h2>Yeamin</h2>
              <p>
                <b>Web Developer</b>
              </p>
            </div>
            <div className="model"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AnimationSection;
  

