import styles from "./Modal.module.css";
import closeIcon from '../../assets/img/closeIcon.svg'
import Modal from 'react-modal';

// Setting the application element for Modal accessibility
Modal.setAppElement('#root');

/**
 * Function component ModalComponent - Represents a modal component.
 * @param {boolean} isOpen - Indicates whether the modal is open or closed.
 * @param {function} onRequestClose - Function to handle closing the modal.
 * @param {function} onClick - Function to handle click events in the modal.
 * @returns {JSX.Element} The rendered ModalComponent.
 */

export default function ModalComponent({ isOpen, onRequestClose, onClick }) {
    return (
        <div>
            <Modal
                className={styles.modal}
                isOpen={isOpen}
                onRequestClose={onRequestClose}>
                <div className={styles.containerInformations}>
                    <h2 className={styles.h2}>Employee Created!</h2>
                    <button
                        className={styles.btn}
                        onClick={onClick}
                    >
                        Close
                    </button>
                    <img
                        className={styles.picture}
                        src={closeIcon}
                        alt="Close"
                        onClick={onClick} />
                </div>
            </Modal>
        </div>
    );
};