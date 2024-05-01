import Select from 'react-select';
import PropTypes from 'prop-types';
import styles from "./Select.module.css";

/**
 * Function component SelectComponent - Represents a select input component.
 * @param {string} htmlFor - The htmlFor attribute of the label.
 * @param {string} label - The label text for the select input.
 * @param {string} inputId - The id attribute for the select input.
 * @param {string} name - The name attribute for the select input.
 * @param {object} defaultValue - The default selected value for the select input.
 * @param {function} onChange - The function to handle select input changes.
 * @param {array} options - The array of options for the select input.
 * @param {string} placeholder - The placeholder text for the select input.
 * @returns {JSX.Element} The rendered SelectComponent.
 */

const SelectComponent = ({ htmlFor, label, inputId, name, defaultValue, onChange, options, placeholder }) => {
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

SelectComponent.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    inputId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
};

export default SelectComponent;