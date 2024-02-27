import styles from "./DatePicker.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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