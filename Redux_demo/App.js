import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const dummyArray = [
  'Cleaning',
  'Tv',
  'Wifi',
  'Garage',
  'Hot water',
  'Cooking',
  'Cleaning',
  'Tv',
  'Wifi',
  'Garage',
  'Hot water',
  'Cooking',
  'TV',
  'Cleaning',
  'Tv',
  'Wifi',
  'Garage',
  'Hot water',
  'Cooking',
  'Cleaning',
  'Tv',
  'Wifi',
  'Garage',
  'Hot water',
  'Cooking',
  'TV',
];

const titleRender = title => {
  return <Text style={styles.title}>{title}</Text>;
};
const renderDivider = () => <View style={styles.border}></View>;
const App = () => {
  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
      <Image
        style={styles.Topimage}
        source={{
          uri: 'https://www.divvyhomes.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhouse-1500.4431eaea.jpg&w=1920&q=75',
        }}
      />
      {titleRender('Property management')}
      <Text style={styles.propertydetelis}>
        One of India's first online platforms to cater to the real estate
        market, India listing of properties for sale, purchase and rent,
        spanning 25 plus cities. Catering primarily to real estate developers,
        builders and brokers, and connect builders, brokers, dealers and
        interested buyers/sellers.
      </Text>
      <View style={styles.useritem}>
        <Image
          style={styles.userlogo}
          source={{
            uri: 'https://img.favpng.com/5/20/14/computer-icons-user-avatar-png-favpng-t09Wf2BpwQPCPL3iLQWPS5rxu.jpg',
          }}
        />
        <Text style={styles.username}>
          Phillip Parker{'\n'}
          <Text style={{fontSize: 12}}>Joined in 2021</Text>
        </Text>
      </View>
      {renderDivider()}
      {titleRender('Home Amrnities')}
      <FlatList
        data={dummyArray}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({item}) => {
          return (
            <View style={styles.amenities}>
              <Text
                style={{
                  fontSize: 17,
                }}>{`\u2022 ${item}`}</Text>
            </View>
          );
        }}
      />
      {renderDivider()}
      <View>
        {titleRender('Servies')}
        {renderDivider()}
      </View>
      <View>
        {titleRender('Location')}
        <Image
          style={styles.Image}
          source={{
            uri: 'https://i.stack.imgur.com/HILmr.png',
          }}
        />
        {titleRender('Galerie')}
        <View>
          <Image
            style={styles.Image}
            source={{
              uri: 'https://dndesigninteriors.co.in/images/Home-Gallery-06.jpg',
            }}
          />
          <Image
            style={styles.Image}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-XXjv3jb7YFye8FI934V9PXWyH3lU-vPmbu2q7Iw4_1o9cBhmXtA_Z67IkSGQYwlni4&usqp=CAU',
            }}
          />
          <Image
            style={styles.Image}
            source={{
              uri: 'https://marvel-b1-cdn.bc0a.com/f00000000128518/www.torrens.edu.au/-/media/project/laureate/shared/course-hero/design/bachelor-of-interior-design-residential/bachelor-of-interior-design-residential-course-student-work-sophie-pilati-hero-lg.jpeg?rev=d977bdbfa9704660900cf1f131a27628',
            }}
          />
          <View style={{margin: 10}}>
            <TouchableOpacity style={styles.addproperty}>
              <Text style={{textAlign: 'center'}}>Add Property</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Topimage: {
    height: 400,
  },
  userlogo: {
    height: 70,
    width: 70,
    borderRadius: 50,
    flexDirection: 'row',
  },
  row: {
    flex: 1,
    paddingHorizontal: 10,
  },
  amenities: {
    marginBottom: 10,
    flex: 1,
    marginRight: 10,
    paddingLeft: 10,
  },
  useritem: {
    paddingLeft: 25,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  propertydetelis: {
    textAlign: 'center',
    textAlign: 'justify',
    paddingTop: 10,
    fontSize: 17,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    padding: 10,
    paddingLeft: 20,
  },
  border: {
    borderWidth: 0.5,
    borderColor: '#a9a9a9',
  },
  username: {
    paddingLeft: 30,
    fontSize: 17,
    fontWeight: '500',
  },
  addproperty: {
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    left: 0,
    right: 0,
  },
  Image: {
    height: 200,
    marginBottom: 4,
  },
});

export default App;
