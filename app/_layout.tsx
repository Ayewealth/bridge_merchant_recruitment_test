import '../global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import ReduxProvider from '~/redux/redux-provider';

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded] = useFonts({
    poppinsLight: require('../assets/fonts/Poppins/Poppins-Light.ttf'),
    poppinsThin: require('../assets/fonts/Poppins/Poppins-Thin.ttf'),
    poppinsMedium: require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
    poppinsRegular: require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    poppinsSemiBold: require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    poppinsBold: require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    poppinsExtraBold: require('../assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
    gilroyBold: require('../assets/fonts/gilroy-bold/Gilroy-Bold.ttf'),
    gilroyHeavy: require('../assets/fonts/gilroy-bold/Gilroy-Heavy.ttf'),
    gilroyLight: require('../assets/fonts/gilroy-bold/Gilroy-Light.ttf'),
    gilroyMedium: require('../assets/fonts/gilroy-bold/Gilroy-Medium.ttf'),
    gilroyRegular: require('../assets/fonts/gilroy-bold/Gilroy-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar />
      <ReduxProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: 'simple_push' }} />
        </Stack>
      </ReduxProvider>
    </QueryClientProvider>
  );
}
