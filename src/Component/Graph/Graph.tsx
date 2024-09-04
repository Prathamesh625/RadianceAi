
import style from "./index.module.css"
import Chart from "react-apexcharts"
import { useContext } from "react"
import { Theme } from "../../Context/ThemeContext"
import { Category } from "@mui/icons-material"
const Graph = () => {
  




var today = new Date();

// Create an array to store the formatted dates
var datesList = [];

// Loop through the last 7 days and push each formatted date to the array
for (var i = 12; i >= 0; i--) {
    var date = new Date(today);
    date.setDate(today.getDate() - i);
    var formattedDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'long' });
    datesList.push(formattedDate);
}





    
     const options = {
        
        chart: {
         id: "basic-bar",
        
            toolbar: {
        show: false,
         },
          
            
            
       },
       grid: {
         show:false
       },
   

         legend: {
    show: false
       },
       
        
        
          xaxis: {
          // categories: ['01 March', '02 March', '03 March', '04 March', '05 March', '06 March', '07 March', '08 March', '09 March',
          //   '10 March', '11 March', '12 March'
            // ],
            
          categories: datesList,
       },
          
         stroke: {
          width: [2, 3, 2],
          curve: 'smooth',
        dashArray: [0, 0, 0]
          
       },
         
       
    }
    
  
 const series= [{
            name: "Session Duration",
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
          },
          {
            name: "patients",
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
          },
          {
            name: 'appointments',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
          }
  ]
  
  const {darkMode} = useContext(Theme)

  return (
      <div className={darkMode?style.graph:style.graphDark}>
      <Chart 
        
        options={options}
                series={series}
                type="line"
                width="100%"
                height="300px"
            />
    </div>
  )
}

export default Graph