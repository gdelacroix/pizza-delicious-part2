import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
const Pizza = (props) => {
  const [taille, setTaille] = useState(
    props.lapizza.taille[0]
  ); /*j'aurais pu mettre small si sur toutes les pizzas, 
                                                                    on avait toutes les tailles
                                                                    mais on considère qu'une taille peut être absente*/
  const [quantite, setQuantite] = useState(1);
  const [show, setShow] = useState(false);
  // Fonction pour fermer le modal
  const handleClose = () => setShow(false);

  // Fonction pour ouvrir le modal
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.lapizza.image}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title>{props.lapizza.nom}</Card.Title>
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>
                  Taille :
                  <select
                    name=""
                    id=""
                    // la valeur par défaut est celle de la variable d'état
                    value={taille}
                    // Pour mettre à jour l'état
                    onChange={(e) => setTaille(e.target.value)}
                  >
                    {props.lapizza.taille.map((taille, index) => (
                      <option key={index} value={taille}>
                        {taille}{" "}
                      </option>
                    ))}
                  </select>
                </h6>
              </Col>
              <Col md={6}>
                <h6>
                  Quantité : <br />
                  <select
                    name=""
                    id=""
                    value={quantite}
                    onChange={(e) => setQuantite(e.target.value)}
                  >
                    {[...Array(10).keys()].map((v, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </h6>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                Prix : {props.lapizza.prix[0][taille] * quantite} €
              </Col>
              <Col md={6}>
                <Button className="bg-warning text-light">Add </Button>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.lapizza.nom}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={props.lapizza.image}
            alt={props.lapizza.nom}
            className="img-fluid"
          />
          <Modal.Title>Description</Modal.Title>

          <p> {props.lapizza.description}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

// Validation des props avec PropTypes
Pizza.propTypes = {
  lapizza: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    taille: PropTypes.arrayOf(
      PropTypes.oneOf(["small", "medium", "large"]) // Tailles disponibles
    ).isRequired,
    prix: PropTypes.shape({
      small: PropTypes.number, // Prix pour 'small' (facultatif si pas de 'small' dans `taille`)
      medium: PropTypes.number, // Prix pour 'medium' (facultatif si pas de 'medium' dans `taille`)
      large: PropTypes.number, // Prix pour 'large' (facultatif si pas de 'large' dans `taille`)
    }).isRequired,
    categorie: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
export default Pizza;
