import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';

const StyledDatePicker = styled.div`
    display: flex;
    flex-direction: column;
`;

const DatePickerInput = styled(DatePicker)`
    width:100%;
    margin:auto;
`;

const Label = styled.label`
    margin-top: 1rem;
    margin-bottom: 10px;
`;

export default function DatePickerComponent({ htmlFor, label, id, name, type, minDate, maxDate, selectedDate, onChange }) {
    return (
        <StyledDatePicker>
            <Label htmlFor={htmlFor}>
                {label}
            </Label>
            <DatePickerInput
                id={id}
                name={name}
                type={type}
                minDate={minDate}
                maxDate={maxDate}
                selected={selectedDate}
                onChange={onChange}
            />
        </StyledDatePicker>
    );
};