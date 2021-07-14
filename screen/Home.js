import React from 'react'
import { View, Text, SafeAreaView, Image} from 'react-native'
import {Ionicons,MaterialIcons,FontAwesome,Entypo,Foundation



} from '@expo/vector-icons'

export default function Home() {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#F3F7FF'}}>
            <View style={{flex:1,justifyContent:'space-between',paddingVertical:10,paddingHorizontal:20}}>
                <View style={{flex:1}}>
                    <View style={{flex:1}}>
                        <View style={{paddingHorizontal:20,height:290,marginBottom:30,shadowColor:'#A6A5A5',paddingVertical:8,borderRadius:15,shadowRadius:18,shadowOpacity:0.5,shadowOffset:{width:0,height:9},backgroundColor:'white'}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Ionicons name="ios-reorder-two-outline" size={18} color="black" />
                                <Entypo name="dots-two-vertical" size={18} color="black" />
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
                                <View style={{marginBottom:10}}>
                                    <Image style={{height:80,width:80,borderRadius:60}} source={{uri:'https://cdn.the-models.de/storage/app/media/home/female-models.jpg'}} />
                                </View>
                                    <Text style={{fontSize:24,fontWeight:'bold',color:'#135C85',marginBottom:5}}>Hira Riaz</Text>
                                    <Text style={{fontSize:13,}}>UX/UI Designer</Text>
                            </View>
                            <View style={{flexDirection:'row',marginTop:30,paddingHorizontal:30,justifyContent:'space-between'}}>
                                <View style={{marginHorizontal:5,borderRightWidth:0.5,borderRightColor:'black',paddingRight:10,alignItems:'center'}}>
                                    <Text style={{fontSize:18,color:'#135C85'}}>$8900</Text>
                                    <Text style={{marginTop:15}}>Income</Text>
                                </View>
                                <View  style={{marginHorizontal:10,borderRightWidth:0.5,borderRightColor:'black',paddingRight:10,alignItems:'center'}}>
                                    <Text style={{fontSize:18,color:'#135C85'}}>$5500</Text>
                                    <Text style={{marginTop:15}}>Expenses</Text>
                                </View>
                                <View style={{marginHorizontal:10,alignItems:'center'}}>
                                    <Text style={{fontSize:18,color:'#135C85'}}>$890</Text>
                                    <Text style={{marginTop:15}}>Loan</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1,marginTop:20}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between', marginVertical:15}}>

                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:24,fontWeight:'bold',color:'#135C85',marginRight:10}}>Overview</Text>
                                <FontAwesome style={{marginTop:6}} name='bell-o' size={16}  />
                                <View style={{height:6,width:6,borderRadius:50,backgroundColor:'red',position:'absolute',marginLeft:113,marginTop:7}}></View>
                            </View>
                            <View style={{marginTop:4}}>
                                <Text style={{color:'#135C85'}}>Sept 13,2020</Text>
                            </View>
                        </View>
                        <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingHorizontal:20,height:60,marginBottom:14,shadowColor:'#A6A5A5',borderRadius:15,shadowRadius:18,shadowOpacity:0.4,shadowOffset:{width:0,height:10},backgroundColor:'white'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                 <View style={{height:40,alignItems:'center',justifyContent:'center',backgroundColor:'#F3F7FF',width:40,borderRadius:15,marginRight:10}}>
                                 <FontAwesome name="arrow-up" size={18} color="black" />
                                 </View>
                                 <View>
                                     <Text style={{fontWeight:'bold',fontSize:17}}>Sent</Text>
                                     <Text style={{fontSize:11}}>Sending payment to clients</Text>
                                 </View>
                            </View>
                            <View >
                                <Text style={{fontWeight:'bold'}}>$150</Text>
                            </View>
                        </View>
                        <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingHorizontal:20,height:60,marginBottom:14,shadowColor:'#A6A5A5',borderRadius:15,shadowRadius:18,shadowOpacity:0.4,shadowOffset:{width:0,height:10},backgroundColor:'white'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                 <View style={{height:40,alignItems:'center',justifyContent:'center',backgroundColor:'#F3F7FF',width:40,borderRadius:15,marginRight:10}}>
                                 <FontAwesome name="arrow-down" size={18} color="black" />
                                 </View>
                                 <View>
                                     <Text style={{fontWeight:'bold',fontSize:17}}>Receive</Text>
                                     <Text style={{fontSize:11}}>Receiving salary from company</Text>
                                 </View>
                            </View>
                            <View >
                                <Text style={{fontWeight:'bold'}}>$250</Text>
                            </View>
                        </View>
                        <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingHorizontal:20,height:60,marginBottom:14,shadowColor:'#A6A5A5',borderRadius:15,shadowRadius:18,shadowOpacity:0.4,shadowOffset:{width:0,height:10},backgroundColor:'white'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                 <View style={{height:40,alignItems:'center',justifyContent:'center',backgroundColor:'#F3F7FF',width:40,borderRadius:15,marginRight:10}}>
                                 <Foundation name="dollar-bill" size={18} color="black" />
                                 </View>
                                 <View>
                                     <Text style={{fontWeight:'bold',fontSize:17}}>Loan</Text>
                                     <Text style={{fontSize:11}}>Loan for car</Text>
                                 </View>
                            </View>
                            <View >
                                <Text style={{fontWeight:'bold'}}>$400</Text>
                            </View>
                        </View>
                        

                    </View>
                    
                </View>
                <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                    <Ionicons style={{marginTop:10}} name="home-outline" size={25} color="#898989" />
                    <Ionicons style={{marginTop:10}} name="md-card-outline" size={25} color="#898989" />   
                    <MaterialIcons name="add-box" size={40} color="#135C85" />  
                    <FontAwesome style={{marginTop:10}} name="dollar" size={23} color="#898989" />
                    <Ionicons style={{marginTop:10}} name="md-person-circle-outline" size={25} color="#898989" />
                </View>
            </View>
        </SafeAreaView>
    )
}
