// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Profile from '../screen/profile';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Icon1 from 'react-native-vector-icons/Entypo';
// import Productpage from '../screen/Productpage';
// import Addtocart from '../screen/Addtocart';
// import Map from '../screen/Map';
// const Stack = createNativeStackNavigator();
// import Icons from 'react-native-vector-icons/Entypo';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import SvgImage from '../screen/svgimage';
// import Loginpage from '../screen/Loginpage';
// import Message from '../screen/Message';
// import UserList from '../screen/userlist';

// const TabNavigate = createBottomTabNavigator();
// const Tab = (props, user) => {
//   // console.log(user, 'user>>>>>>>>>');
//   return (
//     <>
//       <TabNavigate.Navigator
//         initialRouteName="Productscreen"
//         screenOptions={({route}) => ({
//           tabBarIcon: ({focused, color, size}) => {
//             let iconName;
//             if (route.name === 'Productscreen') {
//               iconName = focused ? 'plussquareo' : 'plussquareo';
//             } else if (route.name === 'Profilescreen') {
//               iconName = focused ? 'user' : 'user';
//               7;
//             }
//             return <Icon name={iconName} size={size} color={color} />;
//           },
//         })}>
//         <TabNavigate.Screen name="Productscreen" options={{headerShown: false}}>
//           {props => <App {...props} />}
//         </TabNavigate.Screen>
//         <TabNavigate.Screen
//           name="Profilescreen"
//           component={Profile}
//           options={{title: 'Your Profile'}}
//         />

//         <TabNavigate.Screen
//           name="Map"
//           component={Map}
//           options={{
//             tabBarIcon: ({color, size}) => (
//               <Icons name="map" size={size} color={color} />
//             ),
//           }}
//         />
//         <TabNavigate.Screen
//           name="User list"
//           component={UserList}
//           options={{
//             // tabBarStyle: {display: 'none'},
//             title: 'Chats',
//             tabBarIcon: ({color, size}) => (
//               <Icon1 name="chat" size={size} color={color} />
//             ),
//           }}
//         />
//       </TabNavigate.Navigator>
//     </>
//   );
// };

// export default Tab;

// function App() {
//   return (
//     <Stack.Navigator initialRouteName={'Productscreens'}>
//       <Stack.Screen
//         name="Productscreens"
//         component={Productpage}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="addtocart"
//         component={Addtocart}
//         options={{title: 'Your Cart'}}
//       />
//     </Stack.Navigator>
//   );
// }
