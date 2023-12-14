// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";

// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const Stack = createNativeStackNavigator();

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAIohAD1f1ox8NdLyW1PnLdscBOQExBawc",
    authDomain: "chatapp-416ea.firebaseapp.com",
    projectId: "chatapp-416ea",
    storageBucket: "chatapp-416ea.appspot.com",
    messagingSenderId: "366714461449",
    appId: "1:366714461449:web:435852ff06b7f76cb6c7d8",
    measurementId: "G-KKE75TVYKS",
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
