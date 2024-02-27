import { View, TouchableOpacity, SafeAreaView, TextInput, FlatList, Image, Text } from 'react-native';
import React, {useState} from 'react';
import styles from './search.style';
import { Feather, Ionicons } from '@expo/vector-icons';
import {COLORS, SIZES} from '../constants';
import axios from 'axios';
import SearchTile from '../components/products/SearchTile';


const Search = () => {
    const [searchKey, setSearchKey] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    console.log(searchResults);

    // http://localhost:3000/api/product/search/${searchKey}
    const handlePress = async() => {
        try {
            const response = await axios.get('http://localhost:3000/api/product/search/' + searchKey)
            setSearchResults(response.data)
        } catch (error) {
            console.log("Failed to search",error);
        }
    } 

    return (
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Ionicons
                        name="camera-outline" 
                        size={SIZES.xLarge} 
                        style={styles.searchIcon}
                    />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={searchKey}
                        onChangeText={setSearchKey}
                        placeholder="What are you looking for"
                    />
                </View>

                <View>
                    <TouchableOpacity style={styles.searchBtn} onPress={() => handlePress()}>
                        <Feather 
                            name="search" 
                            size={24} 
                            color={COLORS.offwhite}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {searchResults.length == 0 ? (
                <View style={{flex: 1}}>
                    <Image
                        source={require('../assets/images/Pose23.png')}
                        style={styles.searchImage}
                    />
                </View>
            ): (
                <FlatList
                    data={searchResults}
                    keyExtractor={(item) => item._id}
                    renderItem={({item}) => (<SearchTile item={item}/>)}
                    style={{marginHorizontal: 12}}
                />
            )}

        </SafeAreaView>
    );
};

export default Search;
