import { View, Text, TextInput, TouchableOpacity, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ChevronLeft } from 'lucide-react-native';
import { useRef } from 'react';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NestedParamList, RootStackParamList } from '@/types/navigation';

export default function SupportChatScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()

    const messages = [
        { id: 1, text: "Hello!", time: "09:00 AM", sender: "user" },
        { id: 2, text: "How can I help you today?", time: "09:00 AM", sender: "assistant" },
        { id: 3, text: "Could you please provide me with some more details about the issue you’re experiencing?", time: "09:00 AM", sender: "assistant" },
        { id: 4, text: "Sure", time: "09:03 AM", sender: "user" },
        { id: 5, text: "Whenever I try to view my workout history, the app freezes and crashes.", time: "09:03 AM", sender: "user" },
        { id: 6, text: "I’m sorry to hear that. Let me check that for you. Have you tried restarting the app or your device to see if that resolves the issue?", time: "09:05 AM", sender: "assistant" },
        { id: 7, text: "I have restarted the app.", time: "09:05 AM", sender: "user" },
    ];

    const scrollViewRef = useRef<ScrollView>(null);

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            className="flex-1 bg-black"
        >
            <View className='flex-1 items-center bg-black'>
                {/* Header */}
                <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[20px]'>
                    <TouchableOpacity className='flex-row items-center'
                        onPress={() => navigation.navigate('AuthenticatedScreens', {
                            screen: 'User',
                            params: {
                                screen: 'HelpDetails',
                            },
                        })}
                    >
                        <Ionicons name="chevron-back" size={20} color={'#E2F163'} />
                        <View className="flex-row items-center ml-[5px]">
                            <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[10px]">
                                <AntDesign name="customerservice" size={24} color="white" />
                            </View>
                            <View>
                                <Text className="text-lightPurple text-lg font-bold">Assistant</Text>
                                <Text className="text-white text-xs">I'm Here To Assist You</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Chat Messages with Auto Scroll */}
                <ScrollView 
                    ref={scrollViewRef}
                    className="mb-[20px] w-full px-4"
                    contentContainerStyle={{ paddingBottom: 80 }}
                    keyboardShouldPersistTaps="handled"
                    onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
                >
                    {messages.map((item) => (
                        <View key={item.id} className={`my-2 ${item.sender === "user" ? "items-end" : "items-start"}`}>
                            <View className={`rounded-xl p-3 max-w-[75%] ${item.sender === "user" ? "bg-lightPurple" : "bg-white"}`}>
                                <Text className={`text-sm ${item.sender === "user" ? "text-white" : "text-black"}`}>{item.text}</Text>
                            </View>
                            <Text className="text-xs text-gray-400 mt-1">{item.time}</Text>
                        </View>
                    ))}
                </ScrollView>

                {/* Input Field */}
                <View className="absolute bottom-4 left-4 right-4 bg-gray-900 p-3 rounded-full flex-row items-center">
                    <MaterialIcons name="emoji-emotions" size={24} color='#E2F163' />
                    <TextInput 
                        placeholder="Write here..." 
                        placeholderTextColor="#ccc" 
                        className="flex-1 mx-2 text-white" 
                    />
                    <Ionicons name="mic" size={24} color='#E2F163' />
                    <TouchableOpacity className="ml-2">
                        <Ionicons name="send" size={24} color='#E2F163'/>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
