import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'tailwind-react-native-classnames'



const data = [
    {
        id: '123',
        icon: "home",
        location: "Home",
        destination: "Code Street, London, Uk"
    },
    {
        id: '456',
        icon: "briefcase",
        location: "Work",
        destination: "Code Street, London, Uk"
    },
    // {
    //     id: '789',
    //     icon: "restaurant-outline",
    //     location: "Intertainment",
    //     destination: "Code Street, Manchester, Uk"
    // }
]

const NavFavourites = () => {
    return (
        <FlatList
            data={data}

            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`text-gray-200`, { height: 0.5 }]} />
            )}

            renderItem={({ item: { location, destination, icon } }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`flex-row items-center p-5`}
                >

                    <Icon style={tw`mr-4 rounded-full bg-gray-300 p-3 `}
                        name={icon} type="ionicon" color="white" size={18} />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>

                </TouchableOpacity>
            )} />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})
