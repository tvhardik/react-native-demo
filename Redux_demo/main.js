// const Test = () => {
//   const data = Apidata.data.map(item => ({
//     name: item.name,
//     field_type: item.field_type,
//   }));

//   return (
//     <View>
//       {data.map((item, index) => (
//         <View key={index}>
//           <Text>Field Type: {item.field_type}</Text>
//           <Text>Name: {item.name}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };
const Test = () => {
  const data = Apidata.data.map(item => ({
    name: item.name,
    field_type: item.field_type,
    option: item.option,
  }));

  return (
    <View>
      {data.map((item, index) => (
        <View key={index}>
          <Text>Field Type: {item.field_type}</Text>
          <Text>Name: {item.name}</Text>
          <Text>
            Option:{' '}
            {Array.isArray(item.option) ? item.option.join(', ') : item.option}
          </Text>
        </View>
      ))}
    </View>
  );
};
