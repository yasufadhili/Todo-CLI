
import { ImageBackground, View } from "react-native";


const WelcomeScreen =() => {
    return (
        <ImageBackground
            source={require("../assets/images/welcome-bg.jpg")}
            style={{ 
                width: "100%",
                height: "100%",
                justifyContent: "center" 
            }}
            blurRadius={10}
        >

            <View style={{
                height: "70%",
                width: "95%",
                backgroundColor: "#11011e",
                alignSelf: "center",
                borderWidth: 1,
                borderColor: "#1D0054",
                borderRadius: 12,
            }}>

                

            </View>

        </ImageBackground>
    );
}

export default WelcomeScreen;
