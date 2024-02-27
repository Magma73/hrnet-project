import styles from "./InputLabel.module.css";

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