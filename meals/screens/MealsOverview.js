import { View,Text,StyleSheet, FlatList, ScrollView,useLay } from "react-native";
import { MEALS,CATEGORIES } from "../Dummy/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
const MealsOverview = ({route,navigation})=>{
    const catId=route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId)>=0;
    })

    useLayoutEffect(()=>{
        const categoryTitle  = CATEGORIES.find((category)=>category.id===catId).title

        navigation.setOptions({
            title:categoryTitle
        })
    },[catId,navigation])

    const buttonHandler = (id)=>{
       // console.log(id);
        navigation.navigate('MealDetails',{
            mealId:id
        });
    }
    
    const renderMeals = (itemData)=>{

        const item = itemData.item;

        console.log(item.id);

        const mealItemProps = {
            title:item.title,
            imageUrl:item.imageUrl,
            affordability:item.affordability,
            complexity: item.complexity,
            duration:item.duration,
            id:item.id
        }
        return <MealItem {...mealItemProps}/>;
    }
    return(
        <View style={styles.container}>
            <Text>
                <FlatList data={displayedMeals} keyExtractor={(item)=>(item.id)} renderItem={renderMeals}/>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})

export default MealsOverview;