import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Loading from './components/Loading';

import SignIn from './routes/SignIn';
import HomeScreen from './routes/HomeScreen';

import { IS_SIGNOUT } from './config/settings';

export default function Routes() {
  const [active, setActive] = useState<boolean>(true);
  const [isLoadnig, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    (async function isActive() {
      const response = await IS_SIGNOUT();
      if (response !== undefined) {
        setActive(response);
      };
    })();
  }, []);

  if (isLoadnig && active) {
    return ( <Loading /> );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        {
          active ? (
            <Stack.Screen name='SignIn' component={SignIn} />
          ) : (
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}