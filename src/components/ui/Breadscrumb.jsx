/* eslint-disable react/prop-types */
// import { Button, Dropdown } from "react-bootstrap";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
const Breadscrumb = ({ parentName, pageName, pageIcon }) => {
  return (
    <>
      <div className="Breadscrumb">
        <div className="left">
          <h5 className="main-title">{parentName}</h5>
          
          <h5 className="sub-title">
            {pageIcon} {pageName}
          </h5>
        </div>
        {/* <div className="right">
          <Dropdown as={ButtonGroup}>
            <Button variant="primary">Setting</Button>

            <Dropdown.Toggle
              split
              variant="primary"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> */}
      </div>
    </>
  );
};

export default Breadscrumb;
