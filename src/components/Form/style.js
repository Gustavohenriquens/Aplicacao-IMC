import { StyleSheet } from 'react-native'

export default style = StyleSheet.create({
    formContext :{
        flex : 1,
        marginTop : 30,
        backgroundColor  :'#ffff',
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
        alignItems : 'center',
        paddingTop : 30 
        
    },
    form:{
        width : "100%",
        paddingTop : 20
    },
    formLabel:{
        color : '#00000',
        fontSize : 18,
        paddingLeft : 20,
        fontWeight : '600'
    },
    input:{
        width : '90%',
        borderRadius : 50,
        backgroundColor : '#f6f6f6',
        height  : 40,
        margin : 12,
        paddingLeft : 10,
    },
    ButtonCalculator:{
        borderRadius : 50,
        alignItems : 'center',
        justifyContent : 'center',
        width : '90%',
        backgroundColor : '#FF0043',
        paddingTop : 14,
        paddingBottom : 14,
        marginLeft : 12,
        marginTop : 30
    },
    textButtonCalculator:{
        fontSize : 20,
        color : '#fffff'
    },
    errorMessage:{
        fontSize : 12,
        color : 'red',
        fontWeight : 'bold',
        paddingLeft : 20
    },
    exhibitionResultImc:{
        width: '100%',
        height : '50%'
    },
    listImcs:{
        marginTop : 20
    },
    resultImcItem:{
        fontSize : 20,
        color : "red",
        height : 50,
        width : "100%",
        paddingHorizontal : 100
    },
    textResultItemList:{
        fontSize: 16,
        fontWeight : '800',
        color:'#red  '
    }
})