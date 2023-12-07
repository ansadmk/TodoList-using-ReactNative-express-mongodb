import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Button,
} from "react-native";
import { styles } from "./styles";
import axios from "axios";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const [state, setState] = useState<any>([]);
  const [too, settoo] = useState<any>("");
console.log(state);

  useEffect(() => {
    function axio() {
       axios.get("http://127.0.0.1:3000/todos").then((res)=>setState(res.data)).catch((err)=>console.log(err))
      
      
    }
    axio();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Todolist creator</Text>
      <FlatList
        data={state?.todos}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />

      <TextInput
        style={styles.input}
        onChangeText={settoo}
        placeholder="type something"
        
      />

      <Button
        title="add"
        onPress={async () => {
          await axios.post("http://127.0.0.1:3000/saveTodo", { todo: too });
        }}
       
      />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: 'black',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,

//   },
//   title: {
//     color:"white",
//     fontSize: 32,
//   },

// });

export default App;
