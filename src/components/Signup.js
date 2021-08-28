import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, InputAdornment, Button, FormControl, InputLabel, Input, IconButton, FormControlLabel,  Checkbox } from '@material-ui/core';
import { AccountCircle, VisibilityOff, Visibility, Person, Lock, Email, LockOutlined } from '@material-ui/icons';

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

const Signup = ({onmemberHandler}) => {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [upassword, setUPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [term, setTerm] = useState(false);
	const [pValue, SetPValue] = useState(false);
	
  
	const handleClickShowPassword = () => {
		SetPValue(!pValue);
	};

	const userHandler = (e) => {
		setUserName(e.target.value);
	}
	
	const emailHandler = (e) => {
		setEmail(e.target.value);
	}
	
	const passwordHandler = (e) => {
		setUPassword(e.target.value);
	}
	
	const confirmPasswordHandler = (e) => {
		setConfirmPassword(e.target.value);
	}
	
	const termHandler = (e) => {
		setTerm(!term);
	}
	
	const formSubmit = (e) => {
		e.preventDefault();
		const userData = {
			'UserName':userName,
			'Email':email,
			'Password':upassword,
			'ConfirmPassword':confirmPassword,
			'TermCheck':term,
		}
		console.log(userData);
	}
	
    const classes = useStyles();
    return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        
        <Grid item xs={12} md={6}>
          <img src="signup-image.jpg" alt=""  className={classes.imgStyle} />
		  <h4 onClick={onmemberHandler} className={classes.member}>{"I am already member"}</h4>
        </Grid>

        <Grid item xs={12} md={6}>
		<h2>Signup</h2>
        <form onSubmit={formSubmit} noValidate autoComplete="off">
            
            <TextField
				value={userName} 
				onChange={userHandler}
                id="user-name"
                label="Full Name"
                placeholder="Enter Full Name"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
				InputProps={{
				startAdornment: (
					<InputAdornment position="start">
					<Person />
					</InputAdornment>
				),
				}}
            />
			
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
			
			<TextField
				type={pValue ? 'text' : 'password'}
				value={confirmPassword} 
				onChange={confirmPasswordHandler}
                id="confirm-password"
                label="Repeat Password"
                placeholder="Enter Password"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
				InputProps={{
				startAdornment: (
					<InputAdornment position="start">
					<LockOutlined />
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
				label={`I agree all statements in Terms of service`}
			  />
			  
			
			<Button className={classes.button} fullWidth color="primary" type="submit" variant="contained">Submit</Button>
                            
        </form>
		
        </Grid>
        
      </Grid>
    </div>
    )
}

export default Signup
