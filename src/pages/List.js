import axios from 'axios';
import React, {useState} from 'react';
import {SafeAreaView, View, FlatList, Text} from 'react-native';

const api_url = 'https://pokeapi.co/api/v2/pokemon/';

function List() {
  const [pokemonList, setPokemonList] = useState([]);

  function fetchData() {
    axios
      .get(api_url)
      .then((response) => setPokemonList(response.data.results))
      .catch((error) => console.log(error));
  }

  const renderPokemonItem = ({item}) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={pokemonList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderPokemonItem}
        />
      </View>
    </SafeAreaView>
  );
}

export {List};
