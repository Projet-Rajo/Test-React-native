import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";

const RouteStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <RouteStack.Navigator >
        <RouteStack.Screen name="Home" component={Home} options={{headerShown : false}}/> 
        <RouteStack.Screen name="A propos" component={About} />
      </RouteStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
