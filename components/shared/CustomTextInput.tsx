import React, { useState } from 'react'
import { View, TextInput, Text, TextInputProps } from 'react-native'

interface CustomTextInputProps {
    padding?: string;
    marginBottom?: string;
    customLabel?: string;
    customLabelColor?: string;
    inputProps?: TextInputProps; // Assuming you want to use TextInputProps from react-native
    inputFontSize?: number;
    isPassword?: boolean;
    isSignUpPassword?: boolean;
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
        isPassword,
        isSignUpPassword,
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
                    secureTextEntry={(isPassword || isSignUpPassword) && !isPasswordVisible}
                />
                {measurementText && <Text className="ml-auto">{measurementText}</Text>}
            </View>
        </View>
    )
}
