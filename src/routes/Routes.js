import { createStackNavigator, createAppContainer } from 'react-navigation';
import ListCrimeEvidence from '../pages/ListCrimeEvidence';

const Routes = createStackNavigator({
  ListCrimeEvidence: {
    screen: ListCrimeEvidence,
  },
});

export default createAppContainer(Routes);
