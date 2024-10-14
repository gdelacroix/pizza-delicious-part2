import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getAllPizzas } from "../actions/pizzaAction";
import Pizza from "../components/Pizza";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  useEffect(() => {
    dispatch(getAllPizzas());
   
  }, [dispatch]);


   console.log("Pizzas State:", pizzastate);  // Vérifie l'état des pizzas
  // console.log(pizzas);
  return (
    <>
      <Container>
        {loading ? (
          <h1>Loading ...</h1>
        ) : error ? (
          <h1>Erreur lors du chargement des données</h1>
        ) : 
        (
          <Row>
            {pizzas.map((pizza) => (
              <Col md={4} key={pizza.nom}>
                <Pizza lapizza={pizza} />
              </Col>
            ))}
          </Row>
        )

      }
      </Container>
    </>
  );
};

export default HomeScreen;
