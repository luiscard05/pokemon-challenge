import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { useParams, Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import getPokemonById from "../../selectors/getPokemonById";

const useStyles = createUseStyles({
  card: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    backgroundClip: "border-box",
    border: "1px solid rgba(0,0,0,.125)",
    borderRadius: "2rem",
    marginTop: "10px",
    marginBottom: "10px",
    boxShadow: "0 1px 10px rgb(0 0 0 / 20%)",
  },
  cardTitle: {
    textDecoration: "none",
    fontSize: "16px",
    color: "#343a40",
    padding: "15px 5px 5px 22px",
  },
  cardText: {
    fontSize: "18px",
    color: "#154784",
  },
  btnVolver: {
    margin: "10px",
  },
});

const DetailScreen = (props) => {
  const { history } = props;
  const classes = useStyles();
  const { pokemonId } = useParams();
  const [detalle, setDetalle] = useState({});

  useEffect(() => {
    const pokemonData = JSON.parse(localStorage.getItem("pokemonData")) || [];
    const data = getPokemonById(pokemonData, pokemonId);
    if (pokemonData.length <= 0 || data === undefined) {
      history.push("/");
    } else {
      setDetalle(data);
    }
  }, [pokemonId]);

  const {
    name,
    imageUrl,
    supertype,
    nationalPokedexNumber,
    series,
    attacks,
    resistances,
    weaknesses,
  } = detalle;

  return (
    <>
      <Link className={classes.btnVolver} to="/">
        <i className="bi bi-box-arrow-in-left"> </i> Volver
      </Link>
      <div className="col-lg-8 offset-md-2">
        <div className={classes.card}>
          <div className="row no-gutters">
            <div className="col-md-7">
              <img
                src={imageUrl}
                className="card-img animate__animated animate__fade"
                alt={name}
              />
            </div>
            <div className="col-md-5">
              <div className={classes.cardTitle}>
                <strong className={classes.cardText}>Nombre: </strong> {name}
              </div>
              <div className={classes.cardTitle}>
                <strong className={classes.cardText}>Nro. Pokedex: </strong>
                {nationalPokedexNumber}
              </div>
              <div className={classes.cardTitle}>
                <strong className={classes.cardText}>Tipo: </strong> {supertype}
              </div>
              <div className={classes.cardTitle}>
                <strong className={classes.cardText}>Series: </strong> {series}
              </div>
              {attacks && (
                <div className={classes.cardTitle}>
                  <strong className={classes.cardText}>Ataques: </strong>
                  <ul>
                    {attacks.map((item) => (
                      <li key={item.name}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              )}
              {resistances && (
                <div className={classes.cardTitle}>
                  <strong className={classes.cardText}>Resistencia: </strong>
                  <ul>
                    {resistances.map((item) => (
                      <li key={item.type}>
                        {item.type}: {item.value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {weaknesses && (
                <div className={classes.cardTitle}>
                  <strong className={classes.cardText}>Debilidades: </strong>
                  <ul>
                    {weaknesses.map((item) => (
                      <li key={item.type}>
                        {item.type}: {item.value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DetailScreen.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default DetailScreen;
