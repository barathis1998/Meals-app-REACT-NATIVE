import { View,Text } from "react-native"

const MealDetails = ({route})=>{
    const id = route.params.mealId;
    return(
        <View>
            <Text> Meal Details {id}</Text>
        </View>
    )
}

export default MealDetails;