import { Feather, FontAwesome6 } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  FlatList,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { getCategories } from '~/actions/categories';
import { getProducts } from '~/actions/products';
import { Container } from '~/components/global/Container';
import CategoryCard from '~/components/global/category-card';
import ProductCard from '~/components/global/product-card';
import SearchHistory from '~/components/global/search-history';
import { addSearchHistory } from '~/redux/slices/search';
import { CategoriesType, ProductType } from '~/utils/types';

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const { data: categories = [], isLoading: categoriesLoading } = useQuery<CategoriesType>({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const { data: products = [], isLoading: productsLoading } = useQuery<ProductType[]>({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const [filteredCategories, setFilteredCategories] = useState<CategoriesType[]>(categories);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(products);
  const handleSearch = () => {
    if (searchText.trim() === '') {
      Alert.alert('Error', 'Search field cannot be empty!');
      return;
    }

    // Filter categories and products based on the search query
    const filteredCats = categories!.filter((category) =>
      category.toLowerCase().includes(searchText.toLowerCase())
    );
    const filteredProds = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredCategories(filteredCats);
    setFilteredProducts(filteredProds);

    // Save search history
    dispatch(addSearchHistory(searchText.trim()));
    setSearchText('');
  };

  return (
    <Container className="mt-4 flex flex-col gap-4" style={{ gap: 20, paddingHorizontal: 15 }}>
      <View className="flex-row items-center justify-between gap-4">
        <View className="relative">
          <Feather name="search" size={22} color="#5F9117" className="absolute left-3 top-4 z-10" />
          <TextInput
            placeholder="Search"
            style={styles.input}
            placeholderTextColor="#5F9117"
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
          />
        </View>
        <TouchableOpacity onPress={handleSearch}>
          <FontAwesome6 name="sliders" size={24} color="#5F9117" />
        </TouchableOpacity>
      </View>
      <SearchHistory />
      <ScrollView
        contentContainerStyle={{ flexDirection: 'column', gap: 20, marginTop: 50 }}
        showsVerticalScrollIndicator={false}>
        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
          <Text style={{ fontFamily: 'gilroyBold', flex: 1 }} className="text-2xl">
            Categories
          </Text>
          <FlatList
            key={2}
            data={filteredCategories}
            numColumns={2}
            contentContainerStyle={{ gap: 10, marginTop: 10 }}
            columnWrapperStyle={{ gap: 10 }}
            renderItem={({ item, index }) => <CategoryCard category={item} index={index} />}
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
                    <Text style={{ fontFamily: 'poppinsMedium' }}>No Category Found!</Text>
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
        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
          <Text style={{ fontFamily: 'gilroyBold', flex: 1 }} className="text-2xl">
            Products
          </Text>
          <FlatList
            key={2}
            data={filteredProducts}
            numColumns={2}
            contentContainerStyle={{ gap: 10, marginTop: 10 }}
            columnWrapperStyle={{ gap: 10 }}
            renderItem={({ item }) => <ProductCard data={item} />}
            ListEmptyComponent={() => (
              <View className="flex flex-1 flex-col items-center justify-center">
                {!productsLoading ? (
                  <>
                    <Image
                      source={require('../../assets/images/no-result.png')}
                      className="h-40 w-40"
                      alt="No recent rides found"
                      resizeMode="contain"
                    />
                    <Text style={{ fontFamily: 'poppinsMedium' }}>No Product Found!</Text>
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
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingLeft: 35,
    height: 50,
    borderColor: '#EFEFEF',
    backgroundColor: '#FCFCFD',
    fontFamily: 'poppinsMedium',
    fontSize: 16,
    color: '#5F9117',
    width: 280,
  },
});
