import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Start from '../Screens/Start';
import DashBoard from '../Screens/DashBoard'
import { Dimensions } from 'react-native';
import PeopleScreen from '../Screens/PeopleScreen'
import FilmScreen from '../Screens/FilmScreen'
import PeopleDetails from '../Screens/PeopleDetails'
import FilmsDetails from '../Screens/FilmsDetails'

import Sidemenu from '../component/Sidemenu'
const width = Dimensions.get('window').width;

const drwer = createDrawerNavigator({
  DashBoard:{screen:
    DashBoard },
    
    

}, {
  initialRouteName: 'DashBoard',
  drawerWidth: width - 50,
  contentComponent: Sidemenu
}
)
const AppNavigator = createStackNavigator({
    Start:Start,
    drwer:drwer ,
    PeopleScreen:{screen:
      PeopleScreen },
      FilmScreen:{screen:
        FilmScreen },
        PeopleDetails:{screen:
          PeopleDetails },
          FilmsDetails:{screen:
            FilmsDetails },
    
  }, 

  {
    initialRouteName: 'Start',
    headerMode: 'none'
  }
);

export default App = createAppContainer(AppNavigator);