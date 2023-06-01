import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, Image, StyleSheet, ScrollView } from "react-native";
import MealDetails from "./MealDetails";
const MealItem = ({ title, imageUrl, duration, complexity, affordability,id }) => {

    const navigation = useNavigation();
    const pressHanlder = ()=>{
        navigation.navigate('MealDetails',{
            mealId:id
        })  
    }
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color:'#ccc'}} onPress={pressHanlder}>
                <View style={styles.innerContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        overflow: 'hidden',
        borderRadius: 8,
        margin: 16,
        backgroundColor: 'white',
        flex:1
    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden'
    },
    imageContainer:{
        flex:1
    },
    image: {
        width: 350,
        height: 200
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign:'center',
        margin:8
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        padding:8,
        justifyContent:'center'
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12
    }
})

export default MealItem;