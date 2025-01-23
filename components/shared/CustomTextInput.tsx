import React, { useState } from 'react'
import { View, TextInput, Text, TextInputProps, TouchableOpacity } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';

interface CustomTextInputProps {
    padding?: string;
    marginBottom?: string;
    customLabel?: string;
    customLabelColor?: string;
    inputProps?: TextInputProps; // Assuming you want to use TextInputProps from react-native
    inputFontSize?: number;
    isPassword?: boolean;
    isMobileNumber?: boolean;
    measurementText?: string;
}

export default function CustomTextInput(
    {
        padding = "25px",
        marginBottom="5px",
        customLabel,
        customLabelColor,
        // variant,
        // isFilled = false,
        inputProps,
        inputFontSize,
        isPassword = false,
        // isLoginDisabled,
        // hasStatus = false,
        // statusText,
        // statusOnPress,
        // statusOnPressText,
        isMobileNumber = false,
        measurementText,
    }: CustomTextInputProps
) {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    
    return (
        <View className={`w-full mb-[${marginBottom}] flex-col`}>
            <Text style={{ color: customLabelColor || '#232323' }} className="text-[14px] font-bold mb-[5px]">
                {customLabel}
            </Text>
            <View className='w-full flex-row items-center bg-white rounded-[15px] bg-white px-[15px]'>
                {isMobileNumber && <Text className="mr-2">+</Text>}
                <TextInput
                    {...inputProps}
                    className={`text-${inputFontSize}`}
                    secureTextEntry={isPassword && !isPasswordVisible}
                />
                {
                    isPassword && 
                        <View className='items-center ml-auto'>
                            <TouchableOpacity onPress={togglePasswordVisibility}>
                                {
                                    isPasswordVisible ? (
                                        <Entypo name="eye" size={24} color={'#B3A0FF'} />
                                    ) : (
                                        <Entypo name="eye-with-line" size={24} color={'#B3A0FF'} />
                                    )
                                }
                            </TouchableOpacity>
                        </View>
                }
                {measurementText && <Text className="ml-auto">{measurementText}</Text>}
            </View>
        </View>
    )
}
