import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../components/screens/Profile';
import Home from '../components/screens/Home';
import CreatePost from '../components/screens/CreatePost';
import Post from '../components/screens/Post';
import Temp from '../components/screens/Temp';
import Start from '../components/screens/Start';
import Login from '../components/screens/Login';
import Register from '../components/screens/Register';
import BgLoc from '../components/screens/BgLoc';

// function HomeScreen() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Good</Text>
//         </View>
//     );
// }

const Stack = createNativeStackNavigator()

export default function Navbar() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="BgLoc"// Home  Login
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Post" component={Post} />
                <Stack.Screen name="CreatePost" component={CreatePost} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Start" component={Start} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="BgLoc" component={BgLoc} />
                <Stack.Screen name="Temp" component={Temp} />{/* */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};