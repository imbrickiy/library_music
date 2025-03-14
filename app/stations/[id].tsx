import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import stations from "@/assets/data/stations.json";
import { Station } from "@/interfaces/stations";
import ModalComponent from "@/components/Modal";
import { Audio, AVPlaybackStatusSuccess } from "expo-av";
import * as MediaLibrary from "expo-media-library";
import { _DEFAULT_PROGRESS_UPDATE_INTERVAL_MILLIS } from "expo-av/build/AV";
import usePlaylistStore from "@/store/usePlaylistStore";
import { store } from "expo-router/build/global-state/router-store";

export default function StationDetail() {
  const { id } = useLocalSearchParams();
  const [isFlag, setIsFlag] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [musicFiles, setMusicFiles] = useState<MediaLibrary.Asset[]>([]);
  const [playing, setPlaying] = useState(-1);
  const [progressDuration, setProgressDuration] = useState(0);

  // const fetchMusicFiles = async () => {
  //   const permission = await MediaLibrary.requestPermissionsAsync();
  //   const media = await MediaLibrary.getAssetsAsync({
  //     mediaType: MediaLibrary.MediaType.audio,
  //   });
  //   setMusicFiles(media.assets);
  // };
  const data = usePlaylistStore((state: any) =>
    state.getStation(Number(id))
  );
let sound = usePlaylistStore((state: any) => state);
  
  const playMusic = async (fileUri: any) => {

    sound = await Audio.Sound.createAsync(
      {
        uri: fileUri,
      },
      {
        progressUpdateIntervalMillis: 500,
        positionMillis: 0,
        shouldPlay: false,
        rate: 1.0,
        shouldCorrectPitch: false,
        volume: 1.0,
        isMuted: false,
        isLooping: false,
      }
    );
    await sound.playAsync();
  };

  const pauseMusic = async () => {
    if (sound) {
      await sound.stopAsync();
    }
  };

  useEffect(() => {
    console.log(sound);
    
    if (!sound) {
      return;
    }

    // sound.setOnPlaybackStatusUpdate(async (status) => {
    //   if ((status as AVPlaybackStatusSuccess).didJustFinish) {
    //     setPlaying(-1);
    //     await sound.unloadAsync();
    //     console.log("finished");
    //     setSound(null);
    //   } else {
    //     setProgressDuration(
    //       (status as AVPlaybackStatusSuccess).positionMillis / 1000
    //     );
    //   }
    // });
  }, [sound]);


  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  useEffect(() => {
    async function changeFlag() {
      await delay(1500);
      setIsFlag(!isFlag);
    }
    changeFlag();
  }, []);

  const delay = async (ms: number | undefined) =>
    new Promise((res) => setTimeout(res, ms));

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        className="flex-1 px-3.5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
        }}
      >
        <View className="mt-5">
          <Text className="text-white">Detail {data?.title}</Text>
          <Button
            title="Play Sound"
            onPress={() => playMusic(`${data?.stream_128}`)}
          />
          <Button
            title="Play"
            onPress={() => playMusic("../../assets/data/sound.mp3")}
          />
          <Button title="Pause Sound" onPress={pauseMusic} />
        </View>
        <ModalComponent open={isModalVisible} close={handleModal} />
        <TouchableOpacity onPress={handleModal} className="mt-5">
          <Text className=" text-white bg-green-300 p-2 rounded-full m-auto">
            Show Modal
          </Text>
          {isFlag && <Text className="text-white">Hello, I am your cat! </Text>}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
