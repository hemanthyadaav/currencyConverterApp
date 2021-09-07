import React, {useState} from 'react';
import {
  Text,
  ScrollView,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUS: 0.2,
  CANADA: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004, //FALSE VALUE;
};

const App = () => {
  const [inputValue, setinputValue] = useState(0);
  const [resultValue, setresultValue] = useState(0);

  const handlePressEvent = currency => {
    if (!inputValue) {
      // return Alert.alert('No Input', 'Please Enter any Value and try again!', [
      //   {text: 'OK', onPress: () => console.log('OK Pressed')},
      // ]);
      setresultValue("Invalid Input!"); 
      return Snackbar.show({
        text: 'Please Enter any Number Input and try again!',
        backgroundColor:"orange",
        textColor:"black",
        duration: Snackbar.LENGTH_LONG,
      });
    }
    if (isNaN(inputValue)) {
      // return Alert.alert('Invalid Input', 'Please Enter Valid Number Input', [
      //   {text: 'OK', onPress: () => console.log('OK Pressed')},
      // ]);
      setresultValue("Invalid Input!"); 
      return Snackbar.show({
        text: 'Please Enter a Valid Number Input!',
        backgroundColor:"red",
        textColor:"black",
        duration: Snackbar.LENGTH_LONG,
      });
    }

    let result = parseFloat(inputValue) * currencyPerRupee[currency];

    setresultValue(result.toFixed(5));
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView>
          <View style={styles.resultContainer}>
            <Text style={styles.result}>{resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Amount in Rupees"
              placeholderTextColor="#ffffff"
              Value={inputValue}
              onChangeText={inputText => setinputValue(inputText)}></TextInput>
          </View>
          <View style={styles.allButtonsContainer}>
            {Object.keys(currencyPerRupee).map(currency => (
              <TouchableOpacity
                onPress={() => {
                  handlePressEvent(currency);
                }}
                key={currency}
                style={styles.buttonContainer}>
                <Text style={styles.buttonText}> {currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  resultContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    marginTop: 80,
    borderBottomColor: '#c1c1c1',
    borderWidth: 2,
    borderStartColor: '#1b262c',
    borderEndColor: '#1b262c',
    borderTopColor: '#1b262c',
    paddingVertical: 20,
    borderRadius: 5,
    width: '90%',
    marginHorizontal: '5%',
  },
  result: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#c1c1c1',
    borderWidth: 2,
    borderStartColor: '#1b262c',
    borderEndColor: '#1b262c',
    borderTopColor: '#1b262c',
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 5,
    width: '90%',
    marginHorizontal: '5%',
  },
  input: {
    fontSize: 25,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    height: 100,
    width: '30%',
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#c1c1c1',
    margin: 2,
    borderRadius: 5,
    backgroundColor: '#1B98F5',
    alignItems: 'center',
    margin:5
  },
  allButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
