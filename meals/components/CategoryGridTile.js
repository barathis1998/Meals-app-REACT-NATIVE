import { Pressable, View,StyleSheet } from "react-native";
const CategoryGridTile = ({title,color})=>{
    return(
        <View style={styles.gridItem}>
            <Pressable>
                <View style={styles.innerContainer}>
                    {title}
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem:{

    },
    innerContainer:{

    }
})
export default  CategoryGridTile;