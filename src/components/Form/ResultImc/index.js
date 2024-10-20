import React from 'react';
import { View, Text, TouchableOpacity, Share } from 'react-native';
import style from './style';

export function ResultImc(props) {

  const onShare = async () => {
    const result = await Share.share({
      message:"Meu imc hohe é :" + props.ResultImc, 
    })
  }

 return (
   <View style={style.resultImc}>

    <View style={style.boxShareButton}>

      <Text style={style.information}>{props.messageResultImc}</Text>
      <Text style={style.numberImc}>{props.resultImc}</Text>
      
      <TouchableOpacity style={style.shared} onPress={onShare}>
        <Text style={style.sharedText}>Share</Text>
      </TouchableOpacity>
      
    </View>
        
   </View>
  );
}
    