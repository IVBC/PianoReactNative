/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {StyleSheet, View, Text, TextInput, ScrollView} from 'react-native';
import InputOutline from 'react-native-input-outline';

import WS from 'react-native-websocket';

const App = () => {
  const ws = useRef(null);
  const [fs, setFs] = useState(8000);
  const [duration, setDuration] = useState(500);

  const [state, setState] = useState({
    colorC: 'white',
    colorCs: 'black',
    colorD: 'white',
    colorDs: 'black',
    colorE: 'white',
    colorF: 'white',
    colorFs: 'black',
    colorG: 'white',
    colorGs: 'black',
    colorA: 'white',
    colorAs: 'black',
    colorB: 'white',
    colorC8: 'white',
  });

  const [freqs, setFreqs] = useState({
    freqC: 264,
    freqCs: parseFloat((264 * 1.06666).toFixed(2)),
    freqD: 297,
    freqDs: parseFloat((297 * 1.06666).toFixed(2)),
    freqE: 330,
    freqF: 352,
    freqFs: parseFloat((352 * 1.06666).toFixed(2)),
    freqG: 396,
    freqGs: parseFloat((396 * 1.06666).toFixed(2)),
    freqA: 440,
    freqAs: parseFloat((440 * 1.06666).toFixed(2)),
    freqB: 495,
    freqC8: 528,
  });

  const stroke = (note) => {
    console.log(note);

    switch (note) {
      case 'C':
        setState((prev) => ({...prev, colorC: 'rgba(1, 1, 1, 0.1)'}));
        ws.current.send(JSON.stringify({freq: freqs.freqC, duration, fs}));
        break;
      case 'Cs':
        setState((prev) => ({...prev, colorCs: 'rgba(0, 0, 0, 0.5)'}));
        ws.current.send(JSON.stringify({freq: freqs.freqCs, duration, fs}));
        break;
      case 'D':
        setState((prev) => ({...prev, colorD: 'rgba(1, 1, 1, 0.1)'}));
        ws.current.send(JSON.stringify({freq: freqs.freqD, duration, fs}));
        break;
      case 'Ds':
        setState((prev) => ({...prev, colorDs: 'rgba(0, 0, 0, 0.5)'}));
        ws.current.send(JSON.stringify({freq: freqs.freqDs, duration, fs}));
        break;
      case 'E':
        setState((prev) => ({...prev, colorE: 'rgba(1, 1, 1, 0.1)'}));
        ws.current.send(JSON.stringify({freq: freqs.freqE, duration, fs}));
        break;
      case 'F':
        setState((prev) => ({...prev, colorF: 'rgba(1, 1, 1, 0.1)'}));
        ws.current.send(JSON.stringify({freq: freqs.freqF, duration, fs}));
        break;
      case 'Fs':
        setState((prev) => ({...prev, colorFs: 'rgba(0, 0, 0, 0.5)'}));
        ws.current.send(JSON.stringify({freq: freqs.freqFs, duration, fs}));
        break;
      case 'G':
        setState((prev) => ({...prev, colorG: 'rgba(1, 1, 1, 0.1)'}));
        ws.current.send(JSON.stringify({freq: freqs.freqG, duration, fs}));
        break;
      case 'Gs':
        setState((prev) => ({...prev, colorGs: 'rgba(0, 0, 0, 0.5)'}));
        ws.current.send(JSON.stringify({freq: freqs.freqGs, duration, fs}));
        break;
      case 'A':
        setState((prev) => ({...prev, colorA: 'rgba(1, 1, 1, 0.1)'}));
        ws.current.send(JSON.stringify({freq: freqs.freqA, duration, fs}));
        break;
      case 'As':
        setState((prev) => ({...prev, colorAs: 'rgba(0, 0, 0, 0.5)'}));
        ws.current.send(JSON.stringify({freq: freqs.freqAs, duration, fs}));
        break;
      case 'B':
        setState((prev) => ({...prev, colorB: 'rgba(1, 1, 1, 0.1)'}));
        ws.current.send(JSON.stringify({freq: freqs.freqB, duration, fs}));
        break;
      case 'C8':
        setState((prev) => ({...prev, colorC8: 'rgba(1, 1, 1, 0.1)'}));
        ws.current.send(JSON.stringify({freq: freqs.freqC8, duration, fs}));
        break;
    }
  };

  const stop = (note) => {
    console.log(note);

    switch (note) {
      case 'C':
        setState((prev) => ({...prev, colorC: 'white'}));
        break;
      case 'Cs':
        setState((prev) => ({...prev, colorCs: 'black'}));
        break;
      case 'D':
        setState((prev) => ({...prev, colorD: 'white'}));
        break;
      case 'Ds':
        setState((prev) => ({...prev, colorDs: 'black'}));
        break;
      case 'E':
        setState((prev) => ({...prev, colorE: 'white'}));
        break;
      case 'F':
        setState((prev) => ({...prev, colorF: 'white'}));
        break;
      case 'Fs':
        setState((prev) => ({...prev, colorFs: 'black'}));
        break;
      case 'G':
        setState((prev) => ({...prev, colorG: 'white'}));
        break;
      case 'Gs':
        setState((prev) => ({...prev, colorGs: 'black'}));
        break;
      case 'A':
        setState((prev) => ({...prev, colorA: 'white'}));
        break;
      case 'As':
        setState((prev) => ({...prev, colorAs: 'black'}));
        break;
      case 'B':
        setState((prev) => ({...prev, colorB: 'white'}));
        break;
      case 'C8':
        setState((prev) => ({...prev, colorC8: 'white'}));
        break;
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
      }}
      style={styles.container}>
      <WS
        ref={ws}
        url="ws://192.168.0.166:9000/"
        onOpen={() => {
          console.log('Open!');
          // ws.current.send('ola');
        }}
        onMessage={console.log}
        onError={console.log}
        onClose={console.log}
        reconnect // Will try to reconnect onClose
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100%',
          marginBottom: 16,
        }}>
        {/* <TextInput onChangeText={(text) => setFs(text)} value={fs} />
        <TextInput onChangeText={(text) => setDuration(text)} value={fs} /> */}
        <InputOutline
          keyboardType="numeric"
          placeholder="Fs (Hz)"
          focusedColor="blue"
          defaultColor="grey"
          onChangeText={(text) => setFs(+text)}
        />
        <InputOutline
          keyboardType="numeric"
          placeholder="Duração (ms)"
          focusedColor="blue"
          defaultColor="grey"
          onChangeText={(text) => setDuration(+text)}
        />
      </View>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 100,
              width: 32,
              borderLeftWidth: 1,
              borderTopWidth: 1,
            }}
          />
          <View
            onTouchStart={() => stroke('Cs')}
            onTouchEnd={() => stop('Cs')}
            style={{
              backgroundColor: state.colorCs,
              height: 100,
              width: 32,
              borderTopWidth: 1,
              borderLeftWidth: 1,
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              height: 100,
              width: 16,
              borderTopWidth: 1,
            }}
          />
          <View
            onTouchStart={() => stroke('Ds')}
            onTouchEnd={() => stop('Ds')}
            style={{
              backgroundColor: state.colorDs,
              height: 100,
              width: 32,
              borderTopWidth: 1,
              borderLeftWidth: 1,
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              height: 100,
              width: 32,
              borderTopWidth: 1,
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              height: 100,
              width: 32,
              borderTopWidth: 1,
              borderLeftWidth: 1,
            }}
          />
          <View
            onTouchStart={() => stroke('Fs')}
            onTouchEnd={() => stop('Fs')}
            style={{
              backgroundColor: state.colorFs,
              height: 100,
              width: 32,
              borderTopWidth: 1,
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              height: 100,
              width: 16,
              borderTopWidth: 1,
            }}
          />
          <View
            onTouchStart={() => stroke('Gs')}
            onTouchEnd={() => stop('Gs')}
            style={{
              backgroundColor: state.colorGs,
              height: 100,
              width: 32,
              borderTopWidth: 1,
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              height: 100,
              width: 16,
              borderTopWidth: 1,
            }}
          />
          <View
            onTouchStart={() => stroke('As')}
            onTouchEnd={() => stop('As')}
            style={{
              backgroundColor: state.colorAs,
              height: 100,
              width: 32,
              borderTopWidth: 1,
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              height: 100,
              width: 32,
              borderRightWidth: 1,
              borderTopWidth: 1,
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              height: 100,
              width: 52,
              borderRightWidth: 1,
              borderTopWidth: 1,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            onTouchStart={() => stroke('C')}
            onTouchEnd={() => stop('C')}
            style={{
              backgroundColor: state.colorC,
              height: 100,
              width: 48,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
            }}>
            <View style={styles.containerNote}>
              <Text>Dó</Text>
              <Text>{freqs.freqC} Hz</Text>
            </View>
          </View>
          <View
            onTouchStart={() => stroke('D')}
            onTouchEnd={() => stop('D')}
            style={{
              backgroundColor: state.colorD,
              height: 100,
              width: 48,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
            }}>
            <View style={styles.containerNote}>
              <Text>Ré</Text>
              <Text>{freqs.freqD} Hz</Text>
            </View>
          </View>
          <View
            onTouchStart={() => stroke('E')}
            onTouchEnd={() => stop('E')}
            style={{
              backgroundColor: state.colorE,
              height: 100,
              width: 48,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
            }}>
            <View style={styles.containerNote}>
              <Text>Mi</Text>
              <Text>{freqs.freqE} Hz</Text>
            </View>
          </View>
          <View
            onTouchStart={() => stroke('F')}
            onTouchEnd={() => stop('F')}
            style={{
              backgroundColor: state.colorF,
              height: 100,
              width: 48,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
            }}>
            <View style={styles.containerNote}>
              <Text>Fá</Text>
              <Text>{freqs.freqF} Hz</Text>
            </View>
          </View>
          <View
            onTouchStart={() => stroke('G')}
            onTouchEnd={() => stop('G')}
            style={{
              backgroundColor: state.colorG,
              height: 100,
              width: 48,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
            }}>
            <View style={styles.containerNote}>
              <Text>Sol</Text>
              <Text>{freqs.freqG} Hz</Text>
            </View>
          </View>
          <View
            onTouchStart={() => stroke('A')}
            onTouchEnd={() => stop('A')}
            style={{
              backgroundColor: state.colorA,
              height: 100,
              width: 48,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
            }}>
            <View style={styles.containerNote}>
              <Text>Lá</Text>
              <Text>{freqs.freqA} Hz</Text>
            </View>
          </View>
          <View
            onTouchStart={() => stroke('B')}
            onTouchEnd={() => stop('B')}
            style={{
              backgroundColor: state.colorB,
              height: 100,
              width: 48,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              borderRightWidth: 1,
            }}>
            <View style={styles.containerNote}>
              <Text>Si</Text>
              <Text>{freqs.freqB} Hz</Text>
            </View>
          </View>
          <View
            onTouchStart={() => stroke('C8')}
            onTouchEnd={() => stop('C8')}
            style={{
              backgroundColor: state.colorC8,
              height: 100,
              width: 52,
              borderBottomWidth: 1,
              borderRightWidth: 1,
            }}>
            <View style={styles.containerNote}>
              <Text>Dó</Text>
              <Text>{freqs.freqC8} Hz</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerNote: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
