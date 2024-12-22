import React, { useState } from 'react'
import { View, TextInput, Text, TextInputProps } from 'react-native'

interface CustomTextInputProps {
    padding?: string;
    marginBottom?: string;
    customLabel?: string;
    inputProps?: TextInputProps; // Assuming you want to use TextInputProps from react-native
    inputFontSize?: number;
    isPassword?: boolean;
    isSignUpPassword?: boolean;
}

export default function CustomTextInput(
    {
        padding = "25px",
        marginBottom="5px",
        customLabel,
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
        // isMobileNumber = false,
        // isSearch = false,
    }: CustomTextInputProps
) {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    
    return (
        <View className={`w-full mb-[${marginBottom}]`}>
            <Text className='text-[14px] text-black font-bold mb-[5px]'>
                {customLabel}
            </Text>
            <TextInput
                {...inputProps}
                className={`text-${inputFontSize} rounded-[15px] bg-white px-[15px] py-[10px]`}
                secureTextEntry={(isPassword || isSignUpPassword) && !isPasswordVisible}
            />
        </View>
    )
}
