import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Function for input with debounce for value change.
 * @param {object} props - The component properties.
 * @param {*} props.value - The initial value of the input.
 * @param {string} props.id - The ID of the associated label element.
 * @param {string} props.htmlFor - The ID of the element to which the label is associated.
 * @param {string} props.label - The label text.
 * @param {function} props.onChange - The callback function called when a new value is entered.
 * @param {number} [props.debounce=500] - The delay (in milliseconds) before the value change is propagated.
 * @returns {JSX.Element} - The input component with debounce.
 */
const DebouncedInput = ({ value: initialValue, id, htmlFor, label, onChange, debounce = 500, testId, ...props }) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);

        return () => clearTimeout(timeout);
    }, [value, debounce, onChange]);

    /**
 * Handles the value change of the input.
 * @param {object} event - The input change event.
 */
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <label htmlFor={htmlFor}>
                {label}
            </label>
            <input {...props} value={value} id={id} data-testid={testId} onChange={handleChange} />
        </div>
    );
};

DebouncedInput.propTypes = {
    value: PropTypes.any.isRequired,
    id: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    debounce: PropTypes.number,
    testId: PropTypes.string,
};

export default DebouncedInput;