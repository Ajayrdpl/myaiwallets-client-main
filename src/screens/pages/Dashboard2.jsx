import { ProgressGraph } from "../../components/graph/ProgressGraph";
import "../../styles/dashboard/Dashboard2.css";
const Dashboard2 = () => {
  return (
    <>
      <div className="Dashboard2">
        <div className="top-wrapper gap-btm">
          <div className="cardBox wlc-box">
            <div className="left">
              <div className="user-det">
                <div className="img-box">
                  <img
                    src={
                      "https://codervent.com/maxton/demo/vertical-menu/assets/images/avatars/01.png"
                    }
                    alt=""
                  />
                </div>
                <div className="txt">
                  <h6>Welcome back</h6>
                  <h5 className="heading">Jhon Anderson!</h5>
                </div>
              </div>
              <div className="user-val">
                <div className="box1">
                  <h5 className="heading">$65.4K</h5>
                  <p className="para1">Today&lsquo;s Sales</p>
                </div>
                <div className="box1">
                  <h5 className="heading">78.4%</h5>
                  <p className="para1">Growth Rate</p>
                </div>
              </div>
            </div>
            <div className="right">
              <img
                src="https://codervent.com/maxton/demo/vertical-menu/assets/images/gallery/welcome-back-3.png"
                alt=""
              />
            </div>
          </div>
          {/* active users */}
          <div className="users-wrapper">
            <div className="cardBox">
              <div className="top">
                <div className="left">
                  <h5 className="heading">97.5K</h5>
                  <p className="para1">Total Users</p>
                </div>
              </div>
              <div className="content">
                <ProgressGraph />
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard2;
