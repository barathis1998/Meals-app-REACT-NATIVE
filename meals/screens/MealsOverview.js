import { View,Text,StyleSheet, FlatList, ScrollView } from "react-native";
import { MEALS } from "../Dummy/dummy-data";
import MealItem from "../components/MealItem";
const MealsOverview = ({route})=>{
    const catId=route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId)>=0;
    })

    const renderMeals = (itemData)=>{

        const item = itemData.item;

        const mealItemProps = {
            title:item.title,
            imageUrl:item.imageUrl,
            affordability:item.affordability,
            complexity: item.complexity,
            duration:item.duration
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