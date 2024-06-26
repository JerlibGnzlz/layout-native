import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Image, ScrollView, Text } from 'react-native';

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.banner}
            source={require("./assets/img/bg.jpg")}
          />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en Paris</Text>
          <ScrollView horizontal>
            <View >
              <Image
                style={styles.ciudad}
                source={require("./assets/img/actividad1.jpg")}
              />
            </View>

            <View >
              <Image
                style={styles.ciudad}
                source={require("./assets/img/actividad2.jpg")}
              />
            </View>

            <View>
              <Image
                style={styles.ciudad}
                source={require("./assets/img/actividad3.jpg")}
              />
            </View>

            <View>
              <Image
                style={styles.ciudad}
                source={require("./assets/img/actividad4.jpg")}
              />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Image
                style={styles.banner}
                source={require("./assets/img/actividad5.jpg")}
              />
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Los mejores alojamientos</Text>
          <View>
            <View >
              <Image
                style={styles.mejores}
                source={require("./assets/img/mejores1.jpg")}
              />
            </View>

            <View >
              <Image
                style={styles.mejores}
                source={require("./assets/img/mejores2.jpg")}
              />
            </View>

            <View >
              <Image
                style={styles.mejores}
                source={require("./assets/img/mejores3.jpg")}
              />
            </View>

            <View >
              <Image
                style={styles.mejores}
                source={require("./assets/img/mejores1.jpg")}
              />
            </View>
          </View>

          <Text style={styles.titulo}>Hospedaje en los Angeles</Text>

          <View style={styles.listado}>
            <View style={styles.listadoItem} >
              <Image
                style={styles.mejores}
                source={require("./assets/img/hospedaje1.jpg")}
              />
              <Text>Casa 3 recamaras</Text>
            </View>

            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require("./assets/img/hospedaje2.jpg")}
              />
              <Text>Living Amplio</Text>
            </View>


            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require("./assets/img/hospedaje3.jpg")}
              />
              <Text>Sala Grande</Text>
            </View>


            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require("./assets/img/hospedaje4.jpg")}
              />
              <Text>Cocina Grande</Text>
            </View>


          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 20
  },
  contenedor: {
    marginHorizontal: 10
  },
  ciudad: {
    width: 250,
    height: 250,
    marginRight: 5
  },
  mejores: {
    width: "100%",
    height: 200,
    marginVertical: 5
  },
  hospedaje: {
    width: 200,
    height: 200,
  },
  listado: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  listadoItem: {
    flexBasis: "49%",

  }

});

export default App;
