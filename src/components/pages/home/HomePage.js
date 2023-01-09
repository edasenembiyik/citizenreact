
import React from 'react'
import {Grid} from "@mui/material";
import FilterSearchForm from "../../search/FilterSearchForm";

function HomePage() {



    return (

        <body className="sb-nav-fixed">



        <div id="layoutSidenav">

            <div id="layoutSidenav_content">
                <main>

                    <div className="container-fluid px-4 ">

                        <Grid container spacing={2}>
                            <Grid Grid item xs={10}>
                                <br/>
                                <div className="card"
                                     style={{width: "100%", backgroundColor: "#86E5FF",marginLeft: "10%"}}>
                                    <h1 className="mt-4 h3" style={{
                                        paddingBottom: "10px",
                                        color: "#4753ab"
                                    }}>Get Citizen With Filter</h1>
                                    <div className="card-body"
                                         style={{width: "100%", backgroundColor: "white"}}>

                                        <FilterSearchForm style={{width: "100%"}}></FilterSearchForm>
                                    </div>
                                </div>
                            </Grid>

                        </Grid>
                    </div>

                </main>
                <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossOrigin="anonymous"></script>
            </div>
        </div>

        </body>

    )
}

export default HomePage