import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, InputAdornment, Button, FormControl, InputLabel, Input, IconButton, FormControlLabel,  Checkbox } from '@material-ui/core';
import {  VisibilityOff, Visibility, Lock, Email, } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'80%',
    margin:'20px auto',
  },
  imgStyle:{
	width:'100%',
	height:'60%',
	margin:'20px auto',
	borderRadius:'6px',
  },
  member : {
	cursor:'pointer',
	textAlign:'center',
	color:'gray',
  },
  button : {
	marginTop:'30px',  
  },
}));

const Signin = ({onmemberHandler}) => {
	const classes = useStyles();
	
	const [email, setEmail] = useState('');
	const [upassword, setUPassword] = useState('');
	const [term, setTerm] = useState(false);
	const [pValue, SetPValue] = useState(false);
	
	const formSubmit = (e) => {
		e.preventDefault();
		const userData = {
			'Email':email,
			'Password':upassword,
			'RememberMe':term,
		}
		console.log(userData);
	}
	
	const emailHandler = (e) => {
		setEmail(e.target.value);
	}
	
	const passwordHandler = (e) => {
		setUPassword(e.target.value);
	}
	
	const handleClickShowPassword = () => {
		SetPValue(!pValue);
	};
	
	const termHandler = (e) => {
		setTerm(!term);
	}
	
    return (
        <div className={classes.root}>
      <Grid container spacing={2}>
        
        <Grid item xs={12} md={6}>
          <img src="signin-image.jpg" alt=""  className={classes.imgStyle} />
		  <h4 onClick={onmemberHandler} className={classes.member}>{"Create an Account"}</h4>
        </Grid>

        <Grid item xs={12} md={6}>
		<h2>Signin</h2>
		<form onSubmit={formSubmit} noValidate autoComplete="off">
			
			<TextField
				value={email} 
				onChange={emailHandler}
                id="user-email"
                label="Email"
                placeholder="Enter Email"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
				InputProps={{
				startAdornment: (
					<InputAdornment position="start">
					<Email />
					</InputAdornment>
				),
				}}
            />
			
			<TextField
				type={pValue ? 'text' : 'password'}
				value={upassword} 
				onChange={passwordHandler}
                id="user-password"
                label="Password"
                placeholder="Enter Password"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
				InputProps={{
				startAdornment: (
					<InputAdornment position="start">
					<Lock />
					</InputAdornment>
				),
				endAdornment:(
				  <InputAdornment position="end">
					<IconButton
					  aria-label="toggle password visibility"
					  onClick={handleClickShowPassword}
					  
					>
					  {pValue ? <Visibility /> : <VisibilityOff />}
					</IconButton>
				  </InputAdornment>
				),
				}}
            />
			
			<FormControlLabel
				control={
				  <Checkbox
					checked={term}
					onChange={termHandler}
					name="checkedA"
					color="primary"
				  />
				}
				label={`Remember Me`}
			  />
			
			<Button className={classes.button} fullWidth color="primary" type="submit" variant="contained">Submit</Button>
            
		</form>
		
        </Grid>
        
      </Grid>
    </div>
    )
}

export default Signin
