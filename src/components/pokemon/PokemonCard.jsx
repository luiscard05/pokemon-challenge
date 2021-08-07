import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    backgroundColor: "#fee259",
    backgroundClip: "border-box",
    border: "1px solid rgba(0,0,0,.125)",
    borderRadius: "1rem",
    marginBottom: "10px",
    boxShadow: "0 1px 8px rgb(0 0 0 / 20%)",
  },
  cardTitle: {
    textDecoration: "none",
    fontSize: "15px",
    color: "#343a40",
    padding: "4px",
  },
});

const PokemonCard = (props) => {
  const { item } = props;
  const { id, name, imageUrl } = item;
  const classes = useStyles();

  return (
    <div className="col-lg-3">
      <Link to={`./detail/${id}`}>
        <div className={classes.card}>
          <div className="row no-gutters">
            <div className="col-md-12">
              <img
                src={imageUrl}
                className="card-img animate__animated animate__fade"
                alt={name}
              />
            </div>
            <div className="col-md-12 text-center">
              <div className={classes.cardTitle}>{name}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

PokemonCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
