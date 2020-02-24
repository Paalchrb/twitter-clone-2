import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';

const Tweets = () => {
  useEffect(() => {

  })

  return (
    <div className='tweet-container'>
      <h1>This is the tweetd view</h1>
      <Container>
        <Row>
          <Col sm={12}>
            <Media>
              <Media.Body>
                <h5>Media object</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tweets;