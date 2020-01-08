import React from "react";
import { ModalWrapper, ModalBoxSetup, ModalBg } from "../GeneralStyle";
import PropTypes from "prop-types";

const Index = ({ visible, dismiss, children, client }) => {
  return (
    <>
      {visible ? (
        <ModalWrapper>
          <ModalBoxSetup width={client}>{children} </ModalBoxSetup>
          <ModalBg onClick={dismiss} />
        </ModalWrapper>
      ) : null}
    </>
  );
};

Index.propTypes = {
  visible: PropTypes.bool.isRequired,
  dismiss: PropTypes.func.isRequired
};

export default Index;
