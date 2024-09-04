import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import logo from "../../assets/RadianceAiLogo.svg"
import image from "../../assets/x-ray.jpg"
import { patientFetchHook } from '../../service';


const styles = StyleSheet.create({
      page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  
  },
  section: {
    margin: 10,
    padding: 20,
    flexGrow: 1
  },
  h1: {
      textAlign: 'center',
      marginBottom:30,
      fontSize:20
      
    
  },
  editor: {
    backgroundColor: 'white',
      padding: 30,
      fontSize: 12,
      color:"#5b5a5a"
  },
  problem: {
      marginTop: 30,
    

  },
  flex: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  width: {
    width: '250px',
    
  

 // Adjusted to 48% to accommodate spacing between items
  },
  label: {
    marginBottom: 20,
      color:"black"
    
    
  },
  prescription: {
      marginTop: 10,

  },
  attachments: {
    marginTop: 20,
    // marginLeft: 20,
    // marginRight:20
  
  },

  images:{
    
    width: 250,
    margin:10
   
  
    


  },

  imageFlex:{
    flexDirection:'row'
  
  }
  
   
});




// Create Document Component

export const MyDocument = (props) => {


  const { formData, prescription, attachments } = props;
  
    const patient = patientFetchHook()

  let array = []

  for (let i = 0; i < 5; i++){
    array.push(patient.x_ray)
  }

return (
  <Document>
  {/* {formData ? */}
    <Page>
      
        <View style={styles.editor}>
        <Text style={styles.h1}>{formData.patientName}</Text>
        <Text>
          <Text style={styles.problem}><Text style={styles.label}>Problem:</Text> {formData.problem} </Text>
        </Text>
        <View style={styles.flex}>
          <View style={styles.width}>
            <Text style={styles.label}>Treatment</Text>
              <Text>{formData.treatment}</Text>
          </View>
          <View style={styles.width}>
            <Text style={styles.label}>Suggestions</Text>
            <Text>{formData.suggestions}</Text>
          </View>
        </View>
        <View style={styles.flex}>
          <View style={styles.width}>
            <Text style={styles.label}>Preliminary Findings</Text>
            <Text>{formData.preliminaryFindings}</Text>
          </View>
          <View style={styles.width}>
            <Text style={styles.label}>Prescription</Text>
             {prescription && prescription.map((li,i) => {
            return <Text style={styles.prescription}>{i+1}. {li}</Text>
          })}
            
          </View>
        </View>
           <Text style={styles.label}>Attachments</Text>
        <View style={styles.attachments}>
       
          <View>

            <View style={styles.imageFlex}>
              <View style={{flexDirection:"column" , alignItems:"center"}}>
                <Image src={image} style={styles.images} />
                <Text>Canny Image</Text>
              </View>
              <View style={{flexDirection:"column" , alignItems:"center"}}>
                <Image src={image} style={styles.images} />
                <Text>Canny Image</Text>
              </View>
                </View>
          </View>
          <View style={styles.imageFlex}>
              <View style={{flexDirection:"column" , alignItems:"center"}}>
                <Image src={image} style={styles.images} />
                <Text  >Canny Image</Text>
              </View>
              <View style={{flexDirection:"column" , alignItems:"center"}}>
                <Image src={image} style={styles.images} />
                <Text>Canny Image</Text>
              </View>
                
          </View>
          <View style={styles.imageFlex}>
              <View style={{flexDirection:"column" , alignItems:"center"}}>
                <Image src={image} style={styles.images} />
                <Text  >Canny Image</Text>
              </View>
              <View style={{flexDirection:"column" , alignItems:"center"}}>
                <Image src={image} style={styles.images} />
                <Text>Canny Image</Text>
              </View>
          </View>
          <View style={styles.imageFlex}>
              <View style={{flexDirection:"column" , alignItems:"center"}}>
                <Image src={image} style={styles.images} />
                <Text  >Canny Image</Text>
              </View>
              <View style={{flexDirection:"column" , alignItems:"center"}}>
                <Image src={image} style={styles.images} />
                <Text>Canny Image</Text>
              </View>
          </View>
          <View style={styles.imageFlex}>
              <View style={{flexDirection:"column" , alignItems:"center"}}>
                <Image src={image} style={styles.images} />
                <Text  >Canny Image</Text>
              </View>
              <View style={{flexDirection:"column" , alignItems:"center"}}>
                <Image src={image} style={styles.images} />
                <Text>Canny Image</Text>
              </View>
                </View>
        </View>
      </View>
      
      {/* <Image src={logo} style={{width:50}}/> */}
      <Text style={{border:"1px solid gray",marginRight:"10px", marginLeft:"10px" }}></Text>
      <View style={{ marginLeft: "20px", marginRight: "20px", position: "absolute", bottom: 30 }}>
        
      <Text style={{ textAlign: 'center', fontSize: 15,marginTop:"20px" }}>RadianceAi</Text>
      <Text style={{textAlign:'center' , fontSize:12 ,marginTop:"10px"}}>Automatically generated by automated software of RadianceAi</Text>
      </View> 
    </Page>:<Page></Page>
    {/* } */}
  </Document>
)
 }


