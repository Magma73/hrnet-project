import React, { useState, useEffect } from 'react';

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
export default function DebouncedInput({ value: initialValue, id, htmlFor, label, onChange, debounce = 500, ...props }) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);

        return () => clearTimeout(timeout);
    }, [value]);

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
            <input {...props} value={value} id={id} onChange={handleChange} />
        </div>
    );
}
