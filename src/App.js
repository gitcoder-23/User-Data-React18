import {useEffect, useState} from "react";
import axios from "axios";
import './App.css';

const App = () => {

  const [udetails, setUdetails] = useState([]);
  const [showData, setShowData] = useState();
  // const [isloading, setIsLoading] = useState(false);


  // const apiData = `${process.env.USER_APP_API}`;
  const apiData = "https://jsonplaceholder.typicode.com/users";

  const getUser = ()=> {
    // setIsLoading(true);
    axios.get(apiData).then((response)=>{
      console.log('Response-->',response.data.length);
      // setIsLoading(true);
      // if(Response.status === 200)
      // {
        setUdetails(response.data);
        // setIsLoading(false);
      // };
    })
    .catch((error)=>{
      console.log('error-->',error);
    })
  };

  useEffect(()=>{
    getUser();
  },[]);

  const udata=(show)=>{
    setShowData(show);
    setTimeout(()=>{
      setShowData('');
    },5000);
  }
  const deldata=(del)=>{
    console.log('del-->',del);
    if(window.confirm('Confirm Delete?')){
      const delphoto = [...udetails].filter((dData,dIndex) => dIndex!== del);
      setUdetails(delphoto);
    }
  }


  // console.log('udetails-->',udetails);
   
  return (
    <div className="App" >
      <h1 style={{color: 'red'}}>User Details</h1>
      {!showData ? (<></>):(
        <div style={{border : '5px solid rgb(0,0,0)', margin : '0 auto 0', width : '40%', 
        backgroundColor : 'white', color:'blue', borderRadius:'30px'}}>
           <h3>Sl. NO. : {showData.id}</h3>&nbsp;&nbsp;
            <h3>Name : {showData.name}</h3>&nbsp;&nbsp;
            <h3>Email : {showData.email}</h3>&nbsp;&nbsp;
            <h3>Phone no. : {showData.phone}</h3>&nbsp;&nbsp;
        </div>
      )}
      {/* {isloading === true ? (<h2 style={{color: 'grey'}}>Loading Please Wait...!!</h2>)
      : udetails.length === 0 ? (<h2>No User Detail Found !</h2>)
      :( */}
        <table style={{ margin: '0 auto' }}>
        <thead style={{color : 'brown'}}>
          <tr>
            <th>Sl. NO.</th>&nbsp;&nbsp;
            <th>Name</th>&nbsp;&nbsp;
            <th>Email</th>&nbsp;&nbsp;
            <th>Phone no.</th>&nbsp;&nbsp;
            <th col='3'>Action</th>
          </tr>
        </thead>
        { udetails && udetails.map((userData, userindex) =>{
          return (
            <tbody key={userData.id}>
            <tr>
              <td>{userData.id}</td>&nbsp;&nbsp;
              <td>{userData.name}</td>&nbsp;&nbsp;
              <td>{userData.email}</td>&nbsp;&nbsp;
              <td>{userData.phone}</td>&nbsp;&nbsp;
              <td>
                <button style={{borderRadius:'10px',color:'green'}} onClick={()=>udata(userData)}>Show</button>&nbsp;
                <button style={{borderRadius:'10px'}}>Modify</button>&nbsp;
                <button style={{borderRadius:'10px', color:'red'}} onClick={()=>deldata(userindex)}>Delete</button>
              </td>
            </tr>
          </tbody>
          )
        })}
      </table>
      {/* )}  */}
      
    </div>
  );
}

export default App;
