import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import {AntDesign,Ionicons,SimpleLineIcons} from '@expo/vector-icons'

export default function SignIn(){
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'#F3F7FF'}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:'#135C85', height:110,width:110,borderRadius:60,alignItems:'center',justifyContent:'center'}}>
                        <Ionicons name="person" size={50} color="white" />
                    </View>
                </View>
                <View style={{flex:2,paddingHorizontal:20}}>
                    <View style={{paddingHorizontal:20,justifyContent:'center',height:80,marginBottom:30,shadowColor:'#A6A5A5',borderRadius:15,shadowRadius:18,shadowOpacity:0.4,shadowOffset:{width:0,height:10},backgroundColor:'white'}}>
                        <Text style={{color:'#898989',fontSize:16,marginBottom:10}}>Email Adress</Text>
                        <View style={{flexDirection:'row'}}>
                            <AntDesign name='mail' color='#898989' size={18} />
                            <Text style={{color:'black',fontSize:18,marginLeft:10}}>Username@gmail.com</Text>
                        </View>
                    </View>
                    <View style={{paddingHorizontal:20,justifyContent:'center',height:80,marginBottom:30,shadowColor:'#A6A5A5',borderRadius:15,shadowRadius:18,shadowOpacity:0.4,shadowOffset:{width:0,height:10},backgroundColor:'white'}}>
                        <Text style={{color:'#898989',fontSize:16,marginBottom:10}}>Password</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <Ionicons name="ios-lock-closed-outline" size={18} color="black" />
                                <Text style={{color:'black',fontSize:18,fontWeight:'bold',marginLeft:10}}>...........</Text>
                            </View>
                            <View>
                                <SimpleLineIcons name="eye" size={18} color="black" />
                            </View>            
                        </View>
                    </View>
                    <View style={{height:55,marginBottom:30,backgroundColor:'#135C85',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'white',fontSize:18}}>Login</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:14, color:'#898989',fontWeight:'600'}}>Signup</Text>
                        <Text style={{fontSize:14, color:'#898989',fontWeight:'600'}}>Forgot Password?</Text>
                    </View>
                </View>
                
            </View>
        </SafeAreaView>
    )
}