import styled from 'styled-components';
import Select from 'react-select';

const StyledSelectInput = styled.div`
    display: flex;
    flex-direction: column;
`;

const SelectInput = styled(Select)`
    width:100%;
    margin:auto;
`;

const Label = styled.label`
    margin-top: 1rem;
    margin-bottom: 10px;
`;

export default function SelectComponent({ htmlFor, label, inputId, name, defaultValue, onChange, options, placeholder }) {
    return (
        <StyledSelectInput>
            <Label htmlFor={htmlFor}>
                {label}
            </Label>
            <SelectInput
                inputId={inputId}
                name={name}
                defaultValue={defaultValue}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
            />
        </StyledSelectInput>
    );
};