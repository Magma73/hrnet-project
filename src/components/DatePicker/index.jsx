import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.css";

/**
 * Function component DatePickerComponent - Represents a date picker component.
 * @param {string} htmlFor - The htmlFor attribute of the label.
 * @param {string} label - The label text for the date picker.
 * @param {string} id - The id attribute for the date picker input.
 * @param {string} name - The name attribute for the date picker input.
 * @param {string} type - The type attribute for the date picker input.
 * @param {Date} minDate - The minimum selectable date for the date picker.
 * @param {Date} maxDate - The maximum selectable date for the date picker.
 * @param {Date} selectedDate - The currently selected date for the date picker.
 * @param {function} onChange - The function to handle date changes in the date picker.
 * @returns {JSX.Element} The rendered DatePickerComponent component.
 */

export default function DatePickerComponent({ htmlFor, label, id, name, type, minDate, maxDate, selectedDate, onChange }) {
    return (
        <div className={styles.container}>
            <label
                className={styles.label}
                htmlFor={htmlFor}>
                {label}
            </label>
            <DatePicker
                className={styles.datepicker}
                id={id}
                name={name}
                type={type}
                minDate={minDate}
                maxDate={maxDate}
                selected={selectedDate}
                onChange={onChange}
            />
        </div>
    );
};