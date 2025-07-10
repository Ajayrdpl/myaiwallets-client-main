/* eslint-disable react/prop-types */
import { Modal } from "react-bootstrap";
import { backendConfig } from "../../constants/content/MainContent";
const OfferFeaturesPopup = ({ show, onHide, data }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        className="OfferFeaturesPopup"
      >
        <Modal.Body>
          <Modal.Header closeButton />
          <div className="inner">
            <div className="img-box">
              <img src={backendConfig.origin + data?.banner} alt="" />
            </div>
          </div>  
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OfferFeaturesPopup;
