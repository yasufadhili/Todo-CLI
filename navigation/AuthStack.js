import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { SigninScreen } from "../screens/SigninScreen";

const Stack = createStackNavigator();

export default function AuthStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = "WelcomeScreen"
                component={WelcomeScreen}
            />
            <Stack.Screen
                name = "SigninScreen"
                component={SigninScreen}
            />
        </Stack.Navigator>
    );
}
