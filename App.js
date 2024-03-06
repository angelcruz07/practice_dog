import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Button} from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
    const image = 'https://static.vecteezy.com/system/resources/previews/018/871/732/original/cute-and-happy-dog-png.png';
    const [sound, setSound] = useState();
    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync( require('./assets/gato.mp3')
        );
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={{width: 200, height: 250}}/>
      <Button title='escuchar' onPress={playSound}/>
      <StatusBar style="auto"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
