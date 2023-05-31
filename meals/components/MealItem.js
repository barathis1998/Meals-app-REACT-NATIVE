import { View, Text, Pressable, Image, StyleSheet, ScrollView } from "react-native";
const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color:'#ccc'}}>
                <View style={styles.innerContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{duration}</Text>
                    <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                </View>
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