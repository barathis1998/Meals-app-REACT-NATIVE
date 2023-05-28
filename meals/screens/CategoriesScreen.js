import { CATEGORIES } from "../Dummy/dummy-data";
import {FlatList, View} from 'react-native'
import CategoryGridTile from "../components/CategoryGridTile";
const CategoriesScreen = ()=>{

    function renderCategory(itemData) {
        return <CategoryGridTile  title={itemData.item.title} color={itemData.item.color}/>;
    }
    return(
        <View>
            <FlatList data={CATEGORIES} keyExtractor={(item)=>(item.id)} renderItem={renderCategory}>

            </FlatList>
        </View>
    )
}

export default CategoriesScreen;