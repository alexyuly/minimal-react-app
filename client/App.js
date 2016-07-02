import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import View from './View';

const App = (props) => (
  <View
    brandWidth={300}
    dataCollection={props.dataCollection}
    navbarHeight={50}
  />
);

App.propTypes = {
  dataCollection: PropTypes.object,
};

export default Relay.createContainer(App, {
  fragments: {
    dataCollection: () => Relay.QL`
      fragment on DataCollection {
        dataPoints(first: 10) {
          edges {
            node {
              id
              data
            }
          }
        }
      }
    `,
  },
});
