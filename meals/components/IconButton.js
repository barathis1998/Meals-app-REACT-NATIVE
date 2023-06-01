import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({onPress})=>{

    return(
        <Pressable onPress={onPress} android_ripple={{color:'#ccc'}}>
            <Ionicons name="star" size={24} color='white'/>
        </Pressable>
    )
}

export default IconButton;