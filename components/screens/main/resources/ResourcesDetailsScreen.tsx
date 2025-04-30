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

export default function ResourcesDetailsScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()
    const [hasVideo, setHasVideo] = useState(false)
    const [selected, setSelected] = useState('Articles');

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
                            screen: 'ResourcesMain',
                        },
                    })}
                >
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-lightPurple ml-[5px]'>
                        Resources
                    </Text>
                </TouchableOpacity>
                <View className='w-[30%] flex-row justify-around items-center'>
                    <FontAwesome name="search" size={23} color='#B3A0FF' />
                    <MaterialIcons name="notifications" size={25} color='#B3A0FF' />
                    <FontAwesome name="user" size={24} color='#B3A0FF' />
                </View>
            </View>

            <ScrollView className='w-full mb-[15px]'>
                {
                    hasVideo ? (
                        <>
                            <View style={styles.contentContainer}>
                                <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture contentFit='cover' />
                                {/* Star Icon in Top-Right */}
                                <View className="absolute top-[25px] right-[65px]">
                                    <AntDesign name="star" size={30} color="#E2F163" />
                                </View>
                            </View>
                            <View className='w-full px-[30px] mt-[20px]'>
                                <View className='w-full rounded-[24px] bg-limeGreen items-center p-[10px]'>
                                    <Text className='text-[20px] text-black mb-[5px]'>
                                        Squats
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
                                            <Text className="text-black text-[12px] ml-1">Beginner</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </>
                    ) : (
                        <>
                            <View className='w-full flex-row justify-between items-center mb-[20px] px-[30px]'>
                                <TouchableOpacity 
                                    className={`w-[48%] rounded-[25px] ${selected === 'Workout Videos' ? 'bg-limeGreen' : 'bg-white'} px-[12px] py-[8px]`} 
                                    onPress={() => setSelected('Workout Videos')}
                                >
                                    <Text className={`text-[17px] text-center ${selected === 'Workout Videos' ? 'text-black' : 'text-lightPurple'}`}>Workout Videos</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    className={`w-[48%] rounded-[25px] ${selected === 'Articles' ? 'bg-limeGreen' : 'bg-white'} px-[12px] py-[8px]`} 
                                    onPress={() => setSelected('Articles')}
                                >
                                    <Text className={`text-[17px] text-center ${selected === 'Articles' ? 'text-black' : 'text-lightPurple'}`}>Articles & Tips</Text>
                                </TouchableOpacity>
                            </View>

                            <View className='w-full px-[30px] mb-[20px]'>
                                <View className='w-full flex flex-row items-center mb-[10px]'>
                                    <Text className="text-limeGreen text-[20px]">Challenges and Competitions</Text>
                                    <AntDesign name="star" size={24} color="#E2F163" className='ml-auto'/>
                                </View>
                                <View className="flex flex-row items-center">
                                    <MaterialCommunityIcons name="clock-time-eight" size={15} color='#B3A0FF' />
                                    <Text className="text-white text-[12px] ml-1">Published on September 15</Text>
                                </View>
                            </View>
                            <View className='w-full p-[30px] bg-lightPurple items-center mb-[20px]'>
                                <View className="bg-black w-full h-[200px] rounded-[20px] overflow-hidden">
                                    <Image
                                        source={require('@/assets/images/misc/plank.png')} // Replace with your actual image
                                        className="w-full h-full object-cover"
                                    />
                                </View>
                            </View>
                            <View className='w-full px-[30px] mb-[20px]'>
                                <Text className="text-white text-[12px] mb-[20px]">Discover essential Strength Training Tips to maximize your workouts and achieve your fitness goals efficiently. Learn how to optimize your routine, prevent injuries, and unlock your full potential in the gym.</Text>

                                <Text className="text-limeGreen text-[14px] mb-[5px]">Plan Your Routine:</Text>
                                <Text className="text-white text-[12px] mb-[20px]">Before starting any workout, plan your routine for the week. Focus on different muscle groups on different days to allow for adequate rest and recovery.</Text>

                                <Text className="text-limeGreen text-[14px] mb-[5px]">Warm-Up:</Text>
                                <Text className="text-white text-[12px] mb-[20px]">Begin your workout with a proper warm-up session. This could include light cardio exercises like jogging or jumping jacks, as well as dynamic stretches to prepare your muscles for the upcoming workout.</Text>
                            </View>
                        </>
                    )
                }
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
