import styled from 'styled-components'
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import DatePickerComponent from '../../components/DatePicker';
import InputWithLabel from '../../components/InputWithLabel';
import SelectComponent from '../../components/SelectInput';
import ModalComponent from '../../components/Modal';
import states from '../../data/states'
import { addEmployeeInfos } from '../../slices/employeeInfos';
// import employeeInfosReducer from '../slices/employeeInfos';

const Main = styled.main`
    display: flex;
    flex-direction:column;
    align-items: center;
`

const TitleH2 = styled.h2`
`

const FormComponent = styled.form`
    display:flex;
    flex-direction:column;
    width:100%;
    max-width:390px;
    margin:auto;
    margin-bottom:16px;
    padding: 0px 20px;
`

const Fieldset = styled.fieldset`
    margin-top: 10px;
`

const Legend = styled.legend`
`

const ButtonSave = styled.button`
    width:100%;
    max-width:90px;
    margin: 10px auto;
    cursor:pointer;
`

const ErrorMessage = styled.p`
    text-align:center;
    color: red;
`

/**
 * Function component Home - Represent the Home Page
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = () => {
    const dispatch = useDispatch();

    // State for datepickers
    const [startDateBirth, setStartDateBirth] = useState(null);
    const [startDateEntry, setStartDateEntry] = useState(null);

    // State for select inputs
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptionDepartement, setSelectedOptionDepartement] = useState(null);

    // Datas for select inputs
    const optionsStates = states.map(state => ({
        value: state.abbreviation,
        label: state.name
    }));

    const optionsDepartement = [
        { value: 'sales', label: 'Sales' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'engineering', label: 'Engineering' },
        { value: 'human resources', label: 'Human Resources' },
        { value: 'legal', label: 'Legal' },
    ];

    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 70);

    // Calculer la date maximale (70 ans avant aujourd'hui)
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 18);


    // State for the modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Functions for the modal
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const employees = useSelector(state => state.employees);
    console.log("employeelists : ", employees)

    const [formError, setFormError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const employeeData = {};

        for (let [key, value] of data.entries()) {
            if (!value.trim()) {
                setFormError(`Please fill out the form`);
                return;
            }
            employeeData[key] = value;
        }
        // // Dispatch l'action Redux avec les informations de l'employé
        setFormError('');

        // dispatch(addEmployeeInfos(employeeData));
        dispatch(addEmployeeInfos(employeeData));
        openModal();

    }

    return (
        <Main>
            <Link to="/employeelist">View Current Employees</Link>
            <TitleH2>Create Employee</TitleH2>
            <FormComponent
                id="myForm"
                name="myForm"
                onSubmit={handleSubmit}
            >
                <InputWithLabel
                    htmlFor="first-name"
                    label="First Name"
                    id="first-name"
                    name="first-name"
                    type="text"
                />
                <InputWithLabel
                    htmlFor="last-name"
                    label="Last Name"
                    id="last-name"
                    name="last-name"
                    type="text"
                />
                <DatePickerComponent
                    htmlFor="date-of-birth"
                    label="Date of Birth"
                    id="date-of-birth"
                    name="date-of-birth"
                    type="date"
                    minDate={minDate}
                    maxDate={maxDate}
                    selectedDate={startDateBirth}
                    onChange={(date) => setStartDateBirth(date)}
                />
                <DatePickerComponent
                    htmlFor="start-date"
                    label="Start Date"
                    id="start-date"
                    name="start-date"
                    type="date"
                    selectedDate={startDateEntry}
                    onChange={(date) => setStartDateEntry(date)}
                />
                <Fieldset>
                    <Legend>Address</Legend>
                    <InputWithLabel
                        htmlFor="street"
                        label="Street"
                        id="street"
                        name="street"
                        type="text"
                    />
                    <InputWithLabel
                        htmlFor="city"
                        label="City"
                        id="city"
                        name="city"
                        type="text"
                    />
                    <SelectComponent
                        htmlFor="state"
                        label="State"
                        id="state"
                        name="state"
                        type="text"
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={optionsStates}
                        placeholder="Alabama"
                    />
                    <InputWithLabel
                        htmlFor="zip-code"
                        label="Zip Code"
                        id="zip-code"
                        name="zip-code"
                        type="number"
                    />
                </Fieldset>

                <SelectComponent
                    htmlFor="department"
                    label="Department"
                    id="department"
                    name="department"
                    type="text"
                    defaultValue={selectedOptionDepartement}
                    onChange={setSelectedOptionDepartement}
                    options={optionsDepartement}
                    placeholder="Sales"
                />
                {formError && <ErrorMessage>{formError}</ErrorMessage>}

                <ButtonSave type="submit">Save</ButtonSave>

                <ModalComponent
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    onClick={closeModal}
                />

            </FormComponent>

        </Main>

    );
};
export default Home