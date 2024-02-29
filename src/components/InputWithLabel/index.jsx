import styles from "./InputLabel.module.css";

/**
 * Function component InputWithLabel - Represents an input field with a label.
 * @param {string} htmlFor - The htmlFor attribute of the label.
 * @param {string} label - The label text for the input field.
 * @param {string} id - The id attribute for the input field.
 * @param {string} name - The name attribute for the input field.
 * @param {string} type - The type attribute for the input field.
 * @param {string} autoComplete - The autoComplete attribute for the input field.
 * @returns {JSX.Element} The rendered InputWithLabel component.
 */

export default function InputWithLabel({ htmlFor, label, id, name, type, autoComplete }) {
    return (
        <div className={styles.container}>
            <label
                className={styles.label}
                htmlFor={htmlFor}
            >
                {label}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                autoComplete={autoComplete}
            />
        </div>
    );
};