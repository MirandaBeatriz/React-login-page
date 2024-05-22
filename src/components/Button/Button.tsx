import styles from "./Button.module.scss";

type ButtonProps = {
  loading?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  const { loading = false,children, ...rest } = props;
  return (
    <button className={styles.Button} data-loading={loading} {...rest}>
      {children}
      {loading && (
        <span className={styles.loader}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      )}
    </button>
  );
}
