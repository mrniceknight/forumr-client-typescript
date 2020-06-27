import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/landing_page/LandingPage';
import Login from './components/login/Login';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/login">
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={5}>
                <Login />
              </Col>
            </Row>
          </Container>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
