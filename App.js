import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, ImageBackground,Dimensions } from 'react-native';
const image1 = { uri: "https://s3.amazonaws.com/douradina.portaldacidade.com/img/news/editor/editor-5b60e661c3c04.jpg" };
/* import AsyncStorage from '@react-native-community/async-storage'; */
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function App() {
  const [quantidade, setQuantidade] = useState(0);
  const order = useRef(null);

  useEffect(() => {
    async function getStorage() {
      const productStorage = await AsyncStorage.getItem('quantities');

      if (productStorage) {
        setQuantidade(Number(productStorage));
      }
    }
    getStorage();
  }, []);

  useEffect(() => {
    async function saveStorage() {
      /* await AsyncStorage.setItem('quantities', quantidade); */
    }
    saveStorage();
  }, [quantidade]);

  function focusOrder() {
    order.current.focus();
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image1} style={styles.image1}>
        <Text style={styles.Textcarrinho}>Carrinho</Text>
        <View style={styles.cardView}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://clarotatix.vteximg.com.br/arquivos/ids/300760-500-550/image-c4183ee490ef4c2f9d493dd82a6ad5a4.jpg?v=637417650077730000'
            }}
          />

          <View style={styles.product}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Iphone 5</Text>
            <Text>Quantidade: <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{quantidade}</Text></Text>

            <View style={styles.productAdd}>
              <TextInput
                style={styles.textInput}
                placeholder='0'
                value={quantidade}
                editable={false}
              />

              <TouchableHighlight
                style={styles.button}
                onPress={() => setQuantidade(quantidade + 1)}
              >
                <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 22, textAlign: 'center' }}>+</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>

        <View style={styles.buttonbs}>
          <TouchableHighlight
            style={styles.finishButton}
            onPress={focusOrder}
          >
            <Text style={{ fontSize: 12, color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Comprar</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 40
  },
  image1: {
 height: windowHeight,
 width: windowWidth
   
  },
  cardView: {
    flexDirection: 'row',
    width: 300,
    height: 180,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor: '#fff',
    left: 35
  },
  Textcarrinho: {
    fontWeight: '800',
    color: '#fff',
    fontSize: 22,
    marginBottom: 22,
    alignSelf: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 4,
    marginTop: 20
  },
  product: {
    flexDirection: 'column',
    width: 150,
    margin: 15
  },
  productAdd: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },
  textInput: {
    borderRadius: 4,
    borderWidth: 1,
    width: 60,
    height: 30,
    padding: 5
  },
  button: {
    backgroundColor: '#99D178',
    width: 30,
    marginLeft: 10,
    borderRadius: 15
  },
  finishButton: {
    justifyContent: 'center',
    backgroundColor: '#8b8f8b',
    width: 180,
    height: 50,
    borderRadius: 8,
    borderColor: '#000000',
    borderWidth: 1
  },
  buttonbs: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20
  },
  orderButton: {
    justifyContent: 'center',
    backgroundColor: '#99D178',
    width: 150,
    height: 30,
    borderRadius: 8,
    marginTop: 400,
    alignItems: 'center'
  }
});
