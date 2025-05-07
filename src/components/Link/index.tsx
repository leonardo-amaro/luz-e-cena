import styles from "./Link.module.css";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, ...props }: LinkProps) => {
  return (
    <a className={styles.link} {...props}>
      {children}
    </a>
  );
};

export default Link;
