import { Pressable, View,StyleSheet,Text } from "react-native";
const CategoryGridTile = ({title,color,onPress})=>{
    return(
        <View style={[styles.gridItem,{backgroundColor:color}]}>
            <Pressable android_ripple={{color:'#ccc'}} style={styles.button} onPress={onPress}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title} </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        elevation:4,
        height:150,
        borderRadius:8,
        backgroundColor:'white',
        shadowColor:'black',
        overflow:'hidden'
    },
    button:{
        flex:1
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        justifyContent:'center'
    }
})
export default  CategoryGridTile;