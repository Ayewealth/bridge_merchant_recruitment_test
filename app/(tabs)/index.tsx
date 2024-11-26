import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FlatList, Image, Text, View, ActivityIndicator } from 'react-native';

import { getCategories } from '~/actions/categories';
import { getProducts } from '~/actions/products';
import { Container } from '~/components/global/Container';
import CategoryCard from '~/components/global/category-card';
import ProductCard from '~/components/global/product-card';
import { CategoriesType, ProductsType } from '~/utils/types';

export default function Home() {
  const { data: products, isLoading: productsLoading } = useQuery<ProductsType>({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  const { data: categories, isLoading: categoriesLoading } = useQuery<CategoriesType>({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  return (
    <Container className="mt-4 flex-col gap-10" style={{ paddingBottom: 213 }}>
      <View className="mb-10">
        <View className="mb-4">
          <Text className="text-2xl" style={{ fontFamily: 'gilroyBold' }}>
            Categories
          </Text>
        </View>
        <FlatList
          data={categories}
          renderItem={({ item, index }) => <CategoryCard category={item} index={index} />}
          contentContainerClassName="gap-4"
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View className="flex flex-1 flex-col items-center justify-center">
              {!categoriesLoading ? (
                <>
                  <Image
                    source={require('../../assets/images/no-result.png')}
                    className="h-40 w-40"
                    alt="No recent rides found"
                    resizeMode="contain"
                  />
                </>
              ) : (
                <View className="flex items-center justify-center">
                  <ActivityIndicator size="small" color="#000" />
                </View>
              )}
            </View>
          )}
        />
      </View>
      <FlatList
        key={2}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard data={item} />}
        contentContainerClassName="gap-4"
        contentContainerStyle={{ marginBottom: 50 }}
        numColumns={2}
        scrollEventThrottle={16}
        ListEmptyComponent={() => (
          <View className="flex flex-1 flex-col items-center justify-center">
            {!productsLoading ? (
              <>
                <Image
                  source={require('../../assets/images/no-result.png')}
                  className="h-60 w-60"
                  alt="No recent rides found"
                  resizeMode="contain"
                />
                <Text className="poppinsBold text-xl">No products found</Text>
              </>
            ) : (
              <View className="flex items-center justify-center">
                <ActivityIndicator size="small" color="#000" />
              </View>
            )}
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="bg-white pb-2">
            <Text className="text-2xl " style={{ fontFamily: 'gilroyBold' }}>
              Products
            </Text>
          </View>
        )}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        columnWrapperClassName="gap-4"
      />
    </Container>
  );
}
