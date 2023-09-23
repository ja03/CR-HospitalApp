import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import {Link} from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler'

//Components
import PendingCard from '../../../Componentes/Home/Pending/PendingCard';

const rejectedDevices = [
  {
  id: 1,
  imgSrc: require('../../../assets/imgs/device-img.png'),
  seen: true,
  type: 'كرسي متحرك',
  donnerName: 'خالد محمود',
  deviceModel:'Model 1101',
  deviceSize:'3xl',
  causeOfUse:'broke my arm',
  prevUserAge:24,
  prevUserWeight:79,
  durationOfUse:'Two weeks',
  donnerPhone:'0791234567',
  donnerLocation:'عمان الدوار السابع',
  causeOfReject:"The device was broken"
  },
  {
  id: 2,
  imgSrc: require('../../../assets/imgs/device-img.png'),
  seen: true,
  type: 'كرسي متحرك',
  donnerName: 'خالد محمود',
  deviceModel:'Model 1101',
  deviceSize:'3xl',
  causeOfUse:'broke my arm',
  prevUserAge:24,
  prevUserWeight:79,
  durationOfUse:'Two weeks',
  donnerPhone:'0791234567',
  donnerLocation:'عمان الدوار السابع',
  causeOfReject:"The device was broken"
  },
  {
  id: 3,
  imgSrc: require('../../../assets/imgs/device-img.png'),
  seen: true,
  type: 'كرسي متحرك',
  donnerName: 'خالد محمود',
  deviceModel:'Model 1101',
  deviceSize:'3xl',
  causeOfUse:'broke my arm',
  prevUserAge:24,
  prevUserWeight:79,
  durationOfUse:'Two weeks',
  donnerPhone:'0791234567',
  donnerLocation:'عمان الدوار السابع',
  causeOfReject:"The device was broken"
  },
  {
  id: 4,
  imgSrc: require('../../../assets/imgs/device-img.png'),
  seen: true,
  type: 'كرسي متحرك',
  donnerName: 'خالد محمود',
  deviceModel:'Model 1101',
  deviceSize:'3xl',
  causeOfUse:'broke my arm',
  prevUserAge:24,
  prevUserWeight:79,
  durationOfUse:'Two weeks',
  donnerPhone:'0791234567',
  donnerLocation:'عمان الدوار السابع',
  causeOfReject:"The device was broken"
  },
];

const RejectedDevices =() => {

  const renderRejectedDevices = ({item})=>{
    return(
      <Link href={{
        pathname:'/home/Rejected/[Rejected]',
        params:{
          deviceImg: item.imgSrc,
          deviceType: item.type,
          deviceModel: item.deviceModel,
          deviceSize:item.deviceSize,
          causeOfUse:item.causeOfUse,
          prevUserAge: item.prevUserAge,
          prevUserWeight: item.prevUserWeight,
          durationOfUse: item.durationOfUse,
          donnerPhone: item.donnerPhone,
          donnerName: item.donnerName,
          donnerLocation: item.donnerLocation,
          causeOfReject: item.causeOfReject
        }
        }} style={{ marginVertical:10}}>
          <PendingCard seen={item.seen} categoryType={item.type} categroySubText={item.donnerName} categoryImg={item.imgSrc}/>
      </Link>
    )
  }

  return (
<SafeAreaProvider  style={styles.container}>
    <ScrollView>
      <Text style={styles.headerText}>الاجهزة التي تم رفضها</Text>
      <Text style={styles.subLinkText}>العدد: {rejectedDevices.length}</Text>
      <FlatList
        data={rejectedDevices}
        renderItem={renderRejectedDevices}
        keyExtractor={(item) => (item && item.id !== undefined ? item.id.toString() : 'defaultKey')}

      />
      
        
  

    </ScrollView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFF',
      paddingTop:48,
      paddingHorizontal:24
  },
  headerText:{
      textAlign:'right',
      fontSize:26,
      fontWeight:'bold',
      // marginHorizontal:24
  },
  Text:{
      textAlign:"right",
      fontSize:16,
      width:150
  },
  subLinkText:{
      textAlign:"right",
      fontSize:16,
      color:'#005F86',
      // marginHorizontal:24,
      marginTop:8,
      marginBottom:24
  },

});


export default RejectedDevices