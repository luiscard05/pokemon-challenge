import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    margin: "0 auto",
    background: "#ffc107!important",
  },
  img: {
    maxWidth: "200px",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <div className="justify-content-center">
        <div className="col-12 col-sm-12 col-lg-12 text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
            className={classes.img}
            alt="Pokemón"
          />
          <p className="pb-2">
            <i className="bi bi-code-slash"> </i> challenge
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
