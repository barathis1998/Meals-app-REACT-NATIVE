import { View,Text,Image,StyleSheet,ScrollView} from "react-native"
import { MEALS } from "../Dummy/dummy-data";
import MealDetails from "../components/MealDetails";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";


const MealDetailScreen = ({route,navigation})=>{
    const id = route.params.mealId;
    const selectedMeal = MEALS.find((item)=>(item.id === id));

    const buttonHandler =()=>{

    }
    useLayoutEffect(()=>{

        navigation.setOptions({
            headerRight:()=>{
                return <IconButton onPress={buttonHandler}/>
            },
        }) 
    },[navigation,buttonHandler])

    return(
        <ScrollView style={styles.root}>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}> {selectedMeal.title}</Text>
            <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}/>
            <View style={styles.subtitleContainer}>
            <Text style={styles.subTitle}>Ingredients</Text>
            </View>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
            <List data={selectedMeal.ingredients}/>
            <View style={styles.subtitleContainer}>
            <Text style={styles.subTitle}>Steps</Text>
            </View>
            </View>
            <List data={selectedMeal.steps}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        margin:32
    },
    image:{
        width:'100%',
        height:350
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:'center'
    },
    subTitle:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18
    },
    subtitleContainer:{
        borderBottomColor:'black',
        borderBottomWidth:2,
        padding:6,
        marginVertical: 4,
        marginHorizontal:24
    },
    listContainer:{
        width:'80%'
    },
    listOuterContainer:{
        alignItems:'center',
    }
})
export default MealDetailScreen;