import styles from "./Home.module.css";
import React, { useState, Suspense, lazy } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import { addEmployeeInfos } from '../../slices/employeeInfos';
import ModalComponent from '../../components/Modal';
import states from '../../data/states'

const InputWithLabel = lazy(() => import('../../components/InputWithLabel'));
const DatePickerComponent = lazy(() => import('../../components/DatePicker'));
const SelectComponent = lazy(() => import('../../components/SelectInput'));



/**
 * Function component Home - Represent the Home Page
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home() {
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

    const minStartDate = new Date();
    minStartDate.setDate(minStartDate.getDate() + 7);

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
        setFormError('');

        // Dispatch redux action with employee datas
        dispatch(addEmployeeInfos(employeeData));
        openModal();

    }

    return (
        <div>
            <h1 className={styles.h1}>HR Net</h1>
            <section className={styles.section}>
                <Link to="/employeelist">View Current Employees</Link>
                <h2 className={styles.h2}>Create Employee</h2>

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

                    <fieldset className={styles.fieldset}>
                        <legend className={styles.legend}>Address</legend>
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

                    </fieldset>

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

                    {formError && <p className={styles.errorMessage}>{formError}</p>}

                    <button className={styles.btn} type="submit">Save</button>

                    <ModalComponent
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        onClick={closeModal}
                    />

                </form>

            </section >
        </div>
    );
};
