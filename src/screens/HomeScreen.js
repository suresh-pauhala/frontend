import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '../components/Button'
import TopBar from '../components/TopBar'
import FlaskData from '../components/FlaskData'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function HomeScreen({ navigation }) {


  const iframe = '<iframe id="myFrame" src="https://mainnet.dexsport.io/" frameborder="0" style="width: 100%; height:550px;"></iframe>'; 
  
  

  function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }
  return (
    <>


      <TopBar title="Home"  />,
      <FlaskData />,
      <div style={{backgroundColor:"#a5d2f2", textAlign:"center", fontSize:"22px"}}>
      
      <h5 style={{color:"black"}} >Click on the below link to visit sports betting website:</h5>
      <a style={{color:"blue"}} href="https://mainnet.dexsport.io/" target="_blank">https://mainnet.dexsport.io/</a>
      </div>
    </>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
