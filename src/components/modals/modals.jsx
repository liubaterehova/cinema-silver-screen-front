import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

export const ModalWindow = ({
  isOpen, toggleInModal, header, toggleInHeader, buttonLeft,
  buttonRight, buttonLeftHandleClick, buttonRightHandleClick, children, isButtonRightDisable,
}) => (
  <Modal isOpen={isOpen} toggle={toggleInModal}>
    <ModalHeader toggle={toggleInHeader}>{header}</ModalHeader>
    <ModalBody>
      {children}
    </ModalBody>
    <ModalFooter>
      <Button color="primary" type="submit" onClick={buttonLeftHandleClick} disabled={isButtonRightDisable}>{buttonLeft}</Button>
      <Button color="secondary" onClick={buttonRightHandleClick}>{buttonRight}</Button>
    </ModalFooter>
  </Modal>
);

ModalWindow.propTypes = {
  isButtonRightDisable: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  toggleInModal: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  toggleInHeader: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  buttonLeft: PropTypes.string.isRequired,
  buttonRight: PropTypes.string.isRequired,
  buttonLeftHandleClick: PropTypes.func.isRequired,
  buttonRightHandleClick: PropTypes.func.isRequired,
};

ModalWindow.defaultProps = {
  isButtonRightDisable: false,
};
