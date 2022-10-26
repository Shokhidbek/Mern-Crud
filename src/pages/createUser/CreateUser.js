import React from "react";

import {
    Grid,
    TextField,
    Button
} from '@mui/material'



const CreateUser = () => {
    return (
        <div style={{ marginTop: "30px" }}>
            <Grid container spacing={3} padding={"0 15px"}>
                <Grid item md={12} lg={12} textAlign={"center"}><h1>Create user</h1></Grid>
                <Grid item md={4} lg={4} style={{ margin: "auto" }}>
                    <form>
                        <TextField style={{ width: "100%", marginTop: "5px" }} id="outlined-basic" label="Name" variant="outlined" />
                        <TextField style={{ width: "100%", marginTop: "20px" }} id="outlined-basic" label="LastName" variant="outlined" />
                        <TextField style={{ width: "100%", marginTop: "20px" }} id="outlined-basic" label="Phone" variant="outlined" />
                        <TextField style={{ width: "100%", marginTop: "20px" }} id="outlined-basic" label="Street" variant="outlined" />
                        <TextField style={{ width: "100%", marginTop: "20px" }} id="outlined-basic" label="Email" variant="outlined" />
                        <Button  variant="outlined" style={{marginTop:"10px" , float:"right"}} >Add user</Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}
export default CreateUser;