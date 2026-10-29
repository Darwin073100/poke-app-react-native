import React from 'react'
import { View } from 'react-native'

export const Screen = ({children}) => {
  return (
    <View className="flex-1 bg-[#4D8DBA] items-center justify-center pt-4">{children}</View>
  )
}
