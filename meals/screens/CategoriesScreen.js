import { CATEGORIES } from "../Dummy/dummy-data";
import {FlatList, View} from 'react-native'
import CategoryGridTile from "../components/CategoryGridTile";
const CategoriesScreen = ({navigation})=>{

  

    function renderCategory(itemData) {
        const gridHandler = ()=>{
            navigation.navigate('MealsOverview',{
                categoryId: itemData.item.id
            });
        }

        return <CategoryGridTile  title={itemData.item.title} color={itemData.item.color} onPress={gridHandler}/>;
    }
    return(
        <View>
            <FlatList data={CATEGORIES} keyExtractor={(item)=>(item.id)} renderItem={renderCategory} numColumns={2} >
            </FlatList>
        </View>
    )
}

export default CategoriesScreen;