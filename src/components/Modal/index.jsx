import { Modal } from '@magma73/modal-react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const ModalComponent = ({ isOpen, closeModal }) => {
    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            customModal={styles.modalContent}
            customContainerInformations={styles.containerInformations}
            customBtnClose={styles.btn}
            customIconClose={styles.picture}
            title="Employee Created"
            titleClose="Close"
        />
    );
};

ModalComponent.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default ModalComponent;