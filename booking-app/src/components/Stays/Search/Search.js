import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";


const StyledToolbar = styled(Toolbar)(({theme}) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2), // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 128,
    },

}));

const StyledButton = styled(Button)(({theme, color = 'primary'}) => ({
    ':hover': {
        color: theme.palette[color].main, backgroundColor: '#0071c2',
    }, paddingLeft: 15, paddingRight: 15, textTransform: 'none'
}));

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow: 'none',
    width: '100%',
    backgroundColor: 'white',
}));

export default function SearchBox() {

    return (<Paper
            className="searchInputBox"
            component="form"
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '80%',
                height: '5vh',
                marginLeft: '13vw',
                backgroundColor: 'red'
            }}
        >
            <Grid container style={{backgroundColor: 'yellow'}}>
                <Grid item xs={4}>
                    <Item>
                        <IconButton sx={{p: '10px'}} aria-label="menu">
                            <SearchIcon/>
                        </IconButton>
                        <InputBase
                            placeholder="Where are you going"
                            inputProps={{'aria-label': 'Destinations, museums, tours...'}}
                        />
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <IconButton sx={{p: '10px'}} aria-label="menu">
                            <SearchIcon/>
                        </IconButton>
                        <InputBase
                            placeholder="Check-in - Check-out"
                            inputProps={{'aria-label': 'Destinations, museums, tours...'}}
                        />
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <IconButton sx={{p: '10px'}} aria-label="menu">
                            <SearchIcon/>
                        </IconButton>
                        <InputBase
                            sx={{ml: 1, flex: 1}}
                            placeholder="2 adults 0children 1room"
                            inputProps={{'aria-label': 'Destinations, museums, tours...'}}
                        />
                    </Item>
                </Grid>
                <Grid item xs={1.5}>
                    <Item>
                        <Button variant="contained" className="searchButton">Search</Button>
                    </Item>
                </Grid>
            </Grid>
        </Paper>);
}