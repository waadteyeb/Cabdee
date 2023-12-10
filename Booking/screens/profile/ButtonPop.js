import React from "react";
import { Modal , Dimensions ,TouchableWithoutFeedback ,StyleSheet,View ,Text, TextInput,  TouchableOpacity,} from "react-native";


const deviceHeight=Dimensions.get("window").height
const styles = StyleSheet.create({
    btconnect:{
        backgroundColor:'#9370db',
        color:'#fff',
        fontSize:20,
        borderRadius:15,
        textAlign:'center',
        width:200,
        height:40,
        marginTop:20,
       marginBottom:20,
       marginRight:60,
       marginLeft:60,
      },
      bt:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        marginTop:5
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#A6A6A6AA'
    },
    text:{
        fontSize:20,
    },
    V2:{
        backgroundColor:'#fff',
        width:"100%",
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        paddingHorizontal:10,
        maxHeight:deviceHeight*0.4,
        alignItems:'center',
        justifyContent:'center',
    },
    T:{
        color:'#000',
        fontSize:30,
        fontWeight:'500',
        margin:15,
        textAlign:'center',
    },
    v:{
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor:'#D4D3DC',
        margin:3,
    },
    tv:{
        fontSize:20,
        textAlign:'left',
        marginLeft:10,
        marginBottom:10
    },
    input:{
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        borderWidth: 1,
        width:320,
        height:40,
        borderRadius:15,
        textAlign:'center',
        borderColor:'#D4D3DC',
      },
})


export class ButtonPopup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show: false
        }
    }

    show =()=>{
        this.setState({show : true})
    }

    close =()=>{
        this.setState({show: false})
    }
    renderOutsideTouchable(onTouch){
        const view = <View style={{flex:1 , width:"100%"}}/>
        if (!onTouch) return view
        return(
            <TouchableWithoutFeedback onPress={onTouch} style={{flex:1, width:'100%'}}>
                {view}
            </TouchableWithoutFeedback>
            )
    }

    render(){
        let {show}=this.state
        const {onTouchOutside , title}=this.props
    return(
        <Modal 
        animationType={'fade'}
        transparent={true}
        visible={show}
        onRequestClose={this.close}
        >
            <View style={styles.container}>
                {this.renderOutsideTouchable(onTouchOutside)}
                <View style={styles.V2}>
                    <View>
                        <Text style={styles.T}>
                            {title}
                        </Text>
                        <View style={styles.v}>
                            <Text style={styles.tv}>Ajouter un chauffeur:</Text>
                            <TextInput style={styles.input}
                            placeholder="Rechercher un ID ou scanner un QR code"
                            >
                            </TextInput>
                            <TouchableOpacity 
                            style={styles.btconnect}
                            >
                                <Text style={styles.bt}>Valider</Text>
                             </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
     )
    }
}