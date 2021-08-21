import React from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "80%",
    height: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
function ViewMoreDetails({
  modalIsOpen,
  closeModal,
  image,
  serviceName,
  price,
  description,
}) {
  return (
    <section>
      <div className="modal-area">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modalMain-area p-4 ">
          <h3 className="common-titleColor text-center">{serviceName}</h3>
          <hr />
            <div className="row">
              <div className="col-md-7">
                <img src={image} alt="" className="modal-img" />
                <h2 className="common-color">${price}</h2>
              </div>
              <div className="col-md-5">
                <p>{description}</p>
              </div>
            </div>
            <button onClick={closeModal} className="common-btn">Close</button>
          </div>
        </Modal>
      </div>
    </section>
  );
}

export default ViewMoreDetails;
