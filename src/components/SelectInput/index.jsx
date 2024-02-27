import styles from "./Select.module.css";
import Select from 'react-select';

export default function SelectComponent({ htmlFor, label, inputId, name, defaultValue, onChange, options, placeholder }) {
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={htmlFor}>
                {label}
            </label>
            <Select
                className={styles.select}
                inputId={inputId}
                name={name}
                defaultValue={defaultValue}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
            />
        </div>
    );
};