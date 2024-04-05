import { Modal } from '@magma73/modal-react';
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
}

export default ModalComponent;