import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import moment from 'moment-timezone';

// async function getFootballData(){
//   const url = 'https://football-prediction-api.p.rapidapi.com/api/v2/predictions?market=classic&iso_date=2018-12-01&federation=UEFA';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2219eb416cmsh5d5e5545810428bp18ea8djsn56ed29e9b7f1',
// 		'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }

// getFootballData()

function FlaskData() {
    const [data, setData] = useState([]);
    
    // const [data, setData] = useState('');
    // const [teamOne, setTeamOne] =useState(null);
    // const [teamTwo, setTeamTwo] =useState(null);

    // const [teamThree, setTeamThree] =useState(null);
    // const [teamFour, setTeamFour] =useState(null);

    // const [teamFive, setTeamFive] =useState(null);
    // const [teamSix, setTeamSix] =useState(null);

    useEffect(() => {
        async function fetchData() {
          fetch('http://127.0.0.1:5000/')
      .then(response => response.json())
      .then(data => {
        const temp =Object.entries(data).map(([key, value]) => ({ [key]: value }));
        setData(temp);
        console.log(temp);
        // const formattedTasks = [];

        // const tasks = Object.values(data);
        // setData(tasks);
        // tasks.forEach(task =>
        //   Object.entries(task).forEach(([key, value]) =>
        //     formattedTasks.push({ name: key, data: value })
        //   )
        // );
        // console.log(formattedTasks)
        // console.log(tasks);
        

        //  var teamName1 = formattedTasks[1]["data"]
        //  var teamName2 = formattedTasks[5]["data"]
        //  setTeamOne(teamName1);
        //  setTeamTwo(teamName2);

        //  var teamName3 = formattedTasks[12]["data"]
        //  var teamName4 = formattedTasks[16]["data"]
        //  setTeamThree(teamName3);
        //  setTeamFour(teamName4);

        //  var teamName5 = formattedTasks[23]["data"]
        //  var teamName6 = formattedTasks[27]["data"]
        //  setTeamFive(teamName5);
        //  setTeamSix(teamName6);

        //  setLoading(false);
      })
      .catch(error => console.log(error));
        }
        fetchData();
      }, []);

//  const  newData = JSON.stringify(data)
//  console.log(newData)
//  console.log(typeof(data))

// console.log(formattedTasks[1]["away_team"])
    return (
      <div className="center-col align-bottom">
        {/* <h1>{JSON.stringify( data)}</h1> */}
        <h3 className='text-center' >NBA Winning Team Prediction for {moment.tz('America/Los_Angeles').format('MMMM Do YYYY')}</h3>

        {/* {data && data.map(item => <div key={item.id}>{item.name}</div>)} */}
 
{data.length>0 ? <table className="table">
  <thead>
    <tr>

      <th scope="col">Matches</th>
      <th scope="col">Winner</th>
      {/* <th scope="col">Looser</th> */}
    </tr>
  </thead>
  <tbody className="table-group-divider">
      {data.map(item=>
        <tr>
          <td>{Object.keys(item)[0]}</td>
          <td>{Object.values(item)[0]}</td>
        </tr>  
      )}
  </tbody>
</table> : 
  <h5>Loading...</h5>
}
      </div>
    );
  }
  
  export default FlaskData;