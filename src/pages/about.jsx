import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'dnavdeej | About'} />
    <Header title="Who is dnavdeej?">
      Well, to start...a faith filled, UI/UX Designer in the heart of Silicon
      Valley
    </Header>
    <Container>
      <h3>Faith Filled?</h3>
      <p>Yeah I get it. It's weird, but hear me out.</p>
      <p>
        What do I mean by "faith-filled"? Well, I believe in the eternal,
        personal, single God. I believe in a God who can be expressed in the
        three perfect persons of the Trinity. And I believe that this personal
        God made the indescribable sacrifice of trading His one and only Son,
        Jesus to pay for our human brokeness, sin. That Son came, died, and rose
        again so that we can experience the original design of our relationship
        with the one true Creator God.
      </p>
      <p>
        Phew! Have a lost you yet? Good, because this is important. Regardless
        of our values and beliefs, <i>seeing life from a different perspective lets
        us understand each other and the world around us better.</i> I hope to give you a
        perspective on life perhaps not many get to hear from.
      </p>
      <p>
        <strong>The Silicon Valley Christian.</strong>
      </p>
      <p>Come, stay awhile. Let me explain.</p>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
