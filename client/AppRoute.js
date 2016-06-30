import Relay from 'react-relay';

const AppRoute = class extends Relay.Route {};
AppRoute.routeName = 'AppRoute';
AppRoute.queries = {
  dataCollection: () => Relay.QL`
    query {
      dataCollection
    }
  `,
};

export default AppRoute;
