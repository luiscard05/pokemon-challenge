import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    position: "fixed",
    width: "100%",
    bottom: "0",
    height: "25px",
    textAlign: "center",
    fontSize: "11px",
    background: "#f7f7f7",
    padding: "8px",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.container}>
      <div className="container">
        Desarrollado por
        <a
          href="https://github.com/luiscard05?tab=repositories"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          Luis Cardozo
        </a>
      </div>
    </footer>
  );
};

export default Footer;
