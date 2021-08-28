import React, { useState } from 'react'
import Signup from './components/Signup';
import Signin from './components/Signin';
// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     borderRadius: 15,
//     margin: '30px 100px',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '600px',
//     border: '2px solid black',

//     [theme.breakpoints.down('xs')]: {
//       width: '90%',
//     },
//   },
//   image: {
//     marginLeft: '15px',
//   },
//   wrapper: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '100%',
//   },
// }))


const App = () => {
	const [isMember, setIsMember] = useState(true);
	const onMemberHandler = () =>{
		setIsMember(!isMember);
	}
  // const classes = useStyles()
  return (
    <div>{isMember ? 
		<Signin onmemberHandler={onMemberHandler} /> :
		<Signup onmemberHandler={onMemberHandler}/>
		}
    </div>
  );
}

export default App;
