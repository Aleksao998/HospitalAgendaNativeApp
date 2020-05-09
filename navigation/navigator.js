import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../screens/Login";
import AgendaScreen from "../screens/CalendarPage";

const navigator = createStackNavigator({
  login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  agenda: {
    screen: AgendaScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(navigator);
