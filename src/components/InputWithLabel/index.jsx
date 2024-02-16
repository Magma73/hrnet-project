import styled from 'styled-components';

const StyledInputWithLabel = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-top: 1rem;
    margin-bottom: 10px;
`;

const Input = styled.input`
`;

const InputWithLabel = ({ htmlFor, label, id, name, type }) => {
    return (
        <StyledInputWithLabel>
            <Label
                htmlFor={htmlFor}
            >
                {label}
            </Label>
            <Input
                id={id}
                name={name}
                type={type}
            />
        </StyledInputWithLabel>
    );
};

export default InputWithLabel;