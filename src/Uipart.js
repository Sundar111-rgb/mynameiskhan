import React, { useState } from "react";
import { saveData, deleteData, updateData, getData } from "./locationSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Button } from "@material-ui/core";

export default() => {
    const [locationName, setLocationName] = useState([]);
    const dispatch = useDispatch();
    const { location } = useSelector(state=>state)
   
    const handleData = (e) => {
        setLocationName(e.target.value);
    }
    // const handleSave = () => {
    //     const ifPrestent = location.includes(locationName);
    //     if(locationName !== undefined && !ifPrestent) {
    //         dispatch(save(locationName));
    //         setLocationName('')
    //     } else {
    //         setLocationName('')
    //     }
    // }

    const handleSave = () => {
        //dispatch(saveData({id:10,name:'Fursat',address:'Pandit'}));
                dispatch(getData());
                console.log("Location...",location)

    }

    const handleDelete = (i) => {
        dispatch(deleteData(i));
    }

    return (
        <Box style={{ backgroundColor:'red'}}>
            <Box>
                <TextField 
                    onChange={handleData} 
                    value={locationName} 
                    label="Enter location name"
                />
                <Button
                    style={{margin: '10px'}}
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                >
                    add
                </Button>
               
            </Box>
            <Box>
                <h3> List of locations </h3>
            </Box>
            <table>
                <thead>
                    <tr>
                        <td>Id</td><td>Name</td><td>Address</td>
                    </tr>
                </thead>
            <tbody>
                 {location.map((item) => <tr><td>{item.id}</td><td>{item.name}</td><td>{item.address}</td><td><Button
                    style={{margin: '10px'}}
                    variant="contained"
                    color="primary"
                    onClick={() => handleDelete(item.id)}
                >
                    delete
                </Button></td></tr>) }
            </tbody>
            </table>
        </Box>
    );
}
