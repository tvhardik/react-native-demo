import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';


const APIGet = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 30}}>API List</Text>

      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                padding: 10,
                borderColor: '#dcdcdc',
                borderWidth: 0.5,
                marginVertical: 5,
                borderRadius: 15,
                backgroundColor: '#dcdcdc',
              }}>
              <Text style={{fontSize: 20}}>{item.id}</Text>
              <Text style={{fontSize: 18}}>Title :- {item.title}</Text>
              <Text style={{fontSize: 18}}>Body :- {item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};
export default APIGet;
