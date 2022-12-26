import { createStackNavigator } from "@react-navigation/stack";
import First from "../Entry/First";
import { NavigationContainer } from "@react-navigation/native";
import Username from "../Entry/Username";
import Gender from "../Entry/Gender";
import Pic from "../Entry/Pic";

const Stack = createStackNavigator();

export default function Entry() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="First"
          component={First}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Username"
          component={Username}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Gender"
          component={Gender}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Pic"
          component={Pic}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
