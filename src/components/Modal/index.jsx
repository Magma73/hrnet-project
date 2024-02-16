import Modal from 'react-modal';
import styled from 'styled-components';
import closeIcon from '../../assets/img/closeIcon.svg'

const StyledModal = styled.div`
`;

const ModalDiv = styled(Modal)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.75);
    display: flex;
    justify-content:center;
    align-items:center;
`;
const ContainerInformations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 80%;
    max-width: 560px;
    min-width: 280px
    margin: auto;
    padding: 13px 21px;
    background:white;
    border-radius:20px;
    position:relative;
`
const TitleH2 = styled.h2`
`
const Img = styled.img`
    position:absolute;
    top: -7px;
    right: -4px;
    width: 35px;
    align-self: flex-end;
    &:hover{
        cursor:pointer;
    }
`
const ButtonClose = styled.button`
    margin: 10px 80px 0 80px;
    cursor:pointer;
`

Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, onRequestClose, onClick }) => {
    return (
        <StyledModal>
            <ModalDiv
                isOpen={isOpen}
                onRequestClose={onRequestClose}>
                <ContainerInformations>
                    <TitleH2>Employee Created!</TitleH2>
                    <ButtonClose
                        onClick={onClick}
                    >
                        Close
                    </ButtonClose>
                    <Img src={closeIcon} alt="Close" onClick={onClick} />
                </ContainerInformations>
            </ModalDiv>
        </StyledModal>
    );
};

export default ModalComponent;