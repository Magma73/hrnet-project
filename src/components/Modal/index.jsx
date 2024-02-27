import styles from "./Modal.module.css";
import closeIcon from '../../assets/img/closeIcon.svg'
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ModalComponent({ isOpen, onRequestClose, onClick }) {
    return (
        <div>
            <Modal
                className={styles.modal}
                isOpen={isOpen}
                onRequestClose={onRequestClose}>
                <div className={styles.containerInformations}>
                    <h2>Employee Created!</h2>
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