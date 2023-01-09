import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {useDispatch , useSelector} from "react-redux";
import {getCitizens} from "../../store/features/CitizenSlice";
import {Form} from "react-bootstrap";
import {DataGrid} from "@mui/x-data-grid";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

function FilterSearchForm() {
    const [isCitizen, setIsCitizen] = useState("");
    const [name, setName] = useState("");
    const [hasDrivingLicense, setHasDrivingLesson] = useState("");
    const [numberOfChildren, setNumberOfChildren] = useState("");
    const dispatch = useDispatch();
    const search = async (e) => {
        e.preventDefault();
        const search = {
            isCitizen,
            name,
            hasDrivingLicense,
            numberOfChildren,
        };
        dispatch(getCitizens(search));
    };
    const citizenListUpdate = useSelector((state) =>state.citizen.citizenListUpdate);
    const citizenList = useSelector((state) => state.citizen.citizenList);
    const columns = [
        { field: 'id', headerName: 'ID', width: 200,},
        { field: 'name', headerName: 'Citizen Name', width: 250 },
        { field: 'citizen', headerName: 'Is Citizen', width: 150 },
        { field: 'hasDrivingLicense', headerName: 'Has Driving Licence', width: 300 },
        { field: 'numberOfChildren', headerName: 'Number of Children', width: 300 },
    ]
    const findAllCitizens = async () =>{
        const response = await dispatch(getCitizens());
    }
    React.useEffect(() => {
        findAllCitizens();
    }, [citizenListUpdate]);

    return (
        <>
                                <Form>
                                    <div className="card-body">
                                        <form>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-3">
                                                        <input name="name" onChange={(e) => setName(e.target.value)}
                                                               value={name}
                                                               className="form-control" id="inputName" type="text"/>
                                                        <label htmlFor="inputName">Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-3">

                                                        <FormControl fullWidth>
                                                            <InputLabel id="demo-simple-select-label">Has Driving Licence</InputLabel>
                                                            <Select
                                                                defaultValue=""
                                                                id="grouped-select" label="Grouping"
                                                                labelId="demo-simple-select-label"
                                                                onChange={(e) => setHasDrivingLesson(e.target.value)}
                                                            >
                                                                <MenuItem value={"true"}>True</MenuItem>
                                                                <MenuItem value={"false"}>False</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-3">
                                                        <FormControl fullWidth>
                                                            <InputLabel id="demo-simple-select-label">Is
                                                                Citizen</InputLabel>
                                                            <Select
                                                                defaultValue=""
                                                                id="grouped-select" label="Grouping"
                                                                labelId="demo-simple-select-label"
                                                                onChange={(e) => setIsCitizen(e.target.value)}
                                                            >
                                                                <MenuItem value={"true"}>True</MenuItem>
                                                                <MenuItem value={"false"}>False</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-3">
                                                        <FormControl fullWidth>

                                                        <TextField
                                                            id="outlined-number"

                                                            type="number"
                                                            placeholder=" Number of Children"
                                                            onChange={(e) => setNumberOfChildren(e.target.value)}
                                                            InputLabelProps={{
                                                                shrink: true
                                                            }}
                                                        />
                                                        </FormControl>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button variant="primary" onClick={search}>
                                                Search
                                            </Button>
                                        </form>

                                    </div>


                                </Form>
            <div className="container">
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={citizenList}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        isCellEditable={(params) => params.row.age % 2 === 0}
                        experimentalFeatures={{ newEditingApi: true }}
                        disableMultipleSelection={true}

                    />
                </div>
            </div>

        </>

    );
}

export default FilterSearchForm;


