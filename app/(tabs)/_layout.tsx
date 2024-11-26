import Entypo from '@expo/vector-icons/Entypo';
import { useQueryClient } from '@tanstack/react-query';
import { Tabs } from 'expo-router';
import { useEffect } from 'react';

import { getCategories } from '~/actions/categories';
import { getProducts } from '~/actions/products';
import { TabBarIcon } from '~/components/global/TabBarIcon';

export default function TabLayout() {
  const queryClient = useQueryClient();

  useEffect(() => {
    // Prefetch queries on layout mount
    queryClient.prefetchQuery({ queryKey: ['products'], queryFn: getProducts });
    queryClient.prefetchQuery({ queryKey: ['categories'], queryFn: getCategories });
  }, [queryClient]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#12AF37',
        tabBarLabelStyle: {
          fontFamily: 'poppinsRegular',
          fontWeight: 'bold',
        },
        tabBarStyle: {
          paddingHorizontal: 10,
          height: 55,
          shadowColor: '#fff',
          shadowOpacity: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 0,
          backgroundColor: '#fff',
        },
        headerShadowVisible: false,
        headerShown: false,
        animation: 'shift',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="trend"
        options={{
          title: 'Trend',
          tabBarIcon: ({ color }) => <TabBarIcon name="trending-up" color={color} />,
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: 'Order',
          tabBarIcon: ({ color }) => <Entypo name="text-document" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
