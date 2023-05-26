import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Text, View, FlatList} from 'react-native';

const axiosapi = () => {
  const [data, setData] = useState([]);
  const printdata = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(json => setData(json.data));
  };
  useEffect(() => {
    printdata();
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
export default axiosapi;
