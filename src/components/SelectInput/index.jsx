import Select from 'react-select';
import styled from 'styled-components';

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

const SelectComponent = ({ htmlFor, label, id, name, defaultValue, onChange, options, placeholder }) => {
    return (
        <StyledSelectInput>
            <Label htmlFor={htmlFor}>
                {label}
            </Label>
            <SelectInput
                id={id}
                name={name}
                defaultValue={defaultValue}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
            />
        </StyledSelectInput>
    );
};

export default SelectComponent;