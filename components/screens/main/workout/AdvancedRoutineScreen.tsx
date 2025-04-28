import React, { useRef, useState } from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEvent } from 'expo';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NestedParamList, RootStackParamList } from '@/types/navigation';


const videoSource =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function AdvancedRoutineScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()
    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });

    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[20px]'>
                <TouchableOpacity className='flex-row items-center'
                    onPress={() => navigation.navigate('AuthenticatedScreens', {
                        screen: 'User',
                        params: {
                            screen: 'WorkoutAdvancedMain',
                        },
                    })}
                >
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-lightPurple ml-[5px]'>
                        Advanced
                    </Text>
                </TouchableOpacity>
                <View className='w-[30%] flex-row justify-around items-center'>
                    <FontAwesome name="search" size={23} color='#B3A0FF' />
                    <MaterialIcons name="notifications" size={25} color='#B3A0FF' />
                    <FontAwesome name="user" size={24} color='#B3A0FF' />
                </View>
            </View>

            <ScrollView className='w-full mb-[15px]'>
                <View className='w-full p-[30px] bg-lightPurple items-center'>
                    <View style={styles.contentContainer}>
                        <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture contentFit='cover' />
                        {/* Star Icon in Top-Right */}
                        <View className="absolute top-[25px] right-[65px]">
                            <AntDesign name="star" size={30} color="#E2F163" />
                        </View>
                    </View>
                </View>

                <View className='w-full px-[30px] mt-[20px]'>
                    <View className='w-full rounded-[24px] bg-limeGreen items-center p-[10px]'>
                        <Text className='text-[20px] text-black mb-[5px]'>
                            Incline Bench Sit Up
                        </Text>
                        <Text className='text-[12px] text-black text-center px-[30px] mb-[15px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus libero eget.
                        </Text>
                        <View className='w-full flex-row rounded-[28px] bg-white items-center justify-around p-[10px]'>
                            <View className="flex-row items-center">
                                <MaterialCommunityIcons name="clock-time-eight" size={15} color='black' />
                                <Text className="text-black text-[12px] ml-1">30 Seconds</Text>
                            </View>

                            <View className="flex-row items-center">
                                <MaterialCommunityIcons name="fire" size={15} color='black' />
                                <Text className="text-black text-[12px] ml-1">3 Rep</Text>
                            </View>

                            <View className="flex-row items-center">
                                <FontAwesome5 name="walking" size={15} color="black" />
                                <Text className="text-black text-[12px] ml-1">Advanced</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
    },
    video: {
        width: 350,
        height: 460,
        borderRadius: 20,
        position: 'relative'
    },
    controlsContainer: {
        padding: 10,
    },
});
