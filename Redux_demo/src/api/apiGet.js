import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

const apiGet = () => {
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
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                margin: 15,
                padding: 10,
                borderRadius: 15,
                backgroundColor: '#dcdcdc',
              }}>
              <Text style={{fontSize: 20}}>Id :- {item.id}</Text>
              <Text style={{fontSize: 18}}>Title :- {item.title}</Text>
              <Text style={{fontSize: 18}}>Body :- {item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};
export default apiGet;
