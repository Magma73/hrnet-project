import styles from "./EmployeeForm.module.css";
import React, { useState, lazy, Suspense } from "react";
import { useDispatch } from 'react-redux';
import { addEmployeeInfos } from '../../slices/employeeInfos';
import states from '../../data/states';

const Fieldset = lazy(() => import('../../components/Fieldset'));
const InputWithLabel = lazy(() => import('../../components/InputWithLabel'));
const DatePickerComponent = lazy(() => import('../../components/DatePicker'));
const SelectComponent = lazy(() => import('../../components/SelectInput'));
const ModalComponent = lazy(() => import('../../components/Modal'));

/**
 * Function component Employee Form - Represent the Form Component
 * @returns {JSX.Element} The rendered Employee Form  component.
 */
export default function EmployeeForm() {
    const dispatch = useDispatch();

    // State variables using useState hook
    const [startDateBirth, setStartDateBirth] = useState(null);
    const [startDateEntry, setStartDateEntry] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptionDepartement, setSelectedOptionDepartement] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formError, setFormError] = useState('');

    // Other constants for date calculations and options
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 70);

    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 18);

    const minStartDate = new Date();
    minStartDate.setDate(minStartDate.getDate() + 7);

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

    // Functions for the modal
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
        setFormError('');

        // Dispatch redux action with employee datas
        dispatch(addEmployeeInfos(employeeData));
        openModal();
    }

    return (
        <form
            className={styles.form}
            id="myForm"
            name="myForm"
            onSubmit={handleSubmit}
        >
            <Suspense fallback={<div>Loading</div>}>
                <InputWithLabel
                    htmlFor="first-name"
                    label="First Name"
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="username"
                />
            </Suspense>

            <Suspense fallback={<div>Loading</div>}>
                <InputWithLabel
                    htmlFor="last-name"
                    label="Last Name"
                    id="last-name"
                    name="last-name"
                    type="text"
                />
            </Suspense>

            <Suspense fallback={<div>Loading</div>}>
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
            </Suspense>

            <Suspense fallback={<div>Loading</div>}>
                <DatePickerComponent
                    htmlFor="start-date"
                    label="Start Date"
                    id="start-date"
                    name="start-date"
                    type="date"
                    minDate={minStartDate}
                    selectedDate={startDateEntry}
                    onChange={(date) => setStartDateEntry(date)}
                />
            </Suspense>

            <Suspense fallback={<div>Loading</div>}>
                <Fieldset legend="Address">
                    <Suspense fallback={<div>Loading</div>}>
                        <InputWithLabel
                            htmlFor="street"
                            label="Street"
                            id="street"
                            name="street"
                            type="text"
                        />
                    </Suspense>

                    <Suspense fallback={<div>Loading</div>}>
                        <InputWithLabel
                            htmlFor="city"
                            label="City"
                            id="city"
                            name="city"
                            type="text"
                        />
                    </Suspense>

                    <Suspense fallback={<div>Loading</div>}>
                        <SelectComponent
                            htmlFor="state"
                            label="State"
                            inputId="state"
                            name="state"
                            type="text"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={optionsStates}
                            placeholder="Alabama"
                        />
                    </Suspense>

                    <Suspense fallback={<div>Loading</div>}>
                        <InputWithLabel
                            htmlFor="zip-code"
                            label="Zip Code"
                            id="zip-code"
                            name="zip-code"
                            type="number"
                        />
                    </Suspense>
                </Fieldset>
            </Suspense>

            <Suspense fallback={<div>Loading</div>}>
                <SelectComponent
                    htmlFor="department"
                    label="Department"
                    inputId="department"
                    name="department"
                    type="text"
                    defaultValue={selectedOptionDepartement}
                    onChange={setSelectedOptionDepartement}
                    options={optionsDepartement}
                    placeholder="Sales"
                />
            </Suspense>
            {formError && <p>{formError}</p>}

            <button className={styles.btn} type="submit">Save</button>

            <Suspense fallback={<div>Loading</div>}>
                <ModalComponent
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    onClick={closeModal}
                />
            </Suspense>
        </form >
    );
};
