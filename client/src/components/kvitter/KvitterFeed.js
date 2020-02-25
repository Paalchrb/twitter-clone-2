import React, { Fragment, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';

const Tweets = () => {
  useEffect(() => {

  })

  return (
    <Fragment>
      <h2>Kvitter feed</h2>
      <h4>Se det ferskeste kvitter her...</h4>
      <div className='kvitter-container'>
        <Container>
          <Row>
            <Col sm={12}>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="holder.js/64x64"
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>Media object</h5>
                  <p>
                    Tweet text commin here. Tjohoo
                  </p>
                </Media.Body>
              </Media>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Tweets;