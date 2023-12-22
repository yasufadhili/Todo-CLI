import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./RootNavigator";


export default function() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}
