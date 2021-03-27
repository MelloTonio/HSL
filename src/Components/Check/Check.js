import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import { Link } from 'react-router-dom'

import "./Check.css"

const useStyles = makeStyles((theme) => ({
  root: {
	display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },

}));

export default function CheckboxesGroup(props) {
  const classes = useStyles();
  const [userData, setUserData] = React.useState(props.location.state)

  const [state, setState] = React.useState({
    Tosse_Seca: false,
    Febre: false,
	Cansaco: false,
	PaladarOlfato: false,
	Diarreia: false,
	Vomito: false,
	RespAr: false,
	Pressao: false,
	Gripe: false,
	DoresCorpo: false
  });

  const handleChange = (event) => {
	setState({ ...state, [event.target.name]: event.target.checked });
	
	if(userData){
		userData.Checkup = state
	}

  };

  const { Tosse_Seca, Febre, Cansaco, PaladarOlfato, Diarreia, Vomito, RespAr, Pressao, Gripe, DoresCorpo } = state;

  return (
	<div className="wrap">
		<div className="Center-Check">
		<FormControl component="fieldset" className={classes.formControl}>
			<FormLabel style={ { fontSize: 30, color: 'black' } } component="legend"> Checkup de Sintomas </FormLabel>
			<FormLabel style={ { fontSize: 20, marginTop: '15px', marginBottom: '5px' } } component="legend">Selecione o que você sentiu nos ultimos dias	:</FormLabel>
			<FormGroup>
			<FormControlLabel 
				control={<Checkbox checked={Tosse_Seca} onChange={handleChange} name="Tosse_Seca" />}
				label={<p  style={ { fontSize: 20 } } >Tosse Seca</p>}
			/>
			<FormControlLabel
				control={<Checkbox checked={Febre} onChange={handleChange} name="Febre" />}
				label={<p  style={ { fontSize: 20 } } >Febre</p>}
			/>
			<FormControlLabel
				control={<Checkbox checked={Cansaco} onChange={handleChange} name="Cansaco" />}
				label={<p  style={ { fontSize: 20 } } >Cansaço</p>}
			/>
			<FormControlLabel
				control={<Checkbox checked={PaladarOlfato} onChange={handleChange} name="PaladarOlfato" />}
				label={<p  style={ { fontSize: 20 } } >Perda de Paladar ou Olfato</p>}
			/>
			<FormControlLabel
				control={<Checkbox checked={Diarreia} onChange={handleChange} name="Diarreia" />}
				label={<p  style={ { fontSize: 20 } } >Diarréia</p>}
			/>
			<FormControlLabel
				control={<Checkbox checked={Vomito} onChange={handleChange} name="Vomito" />}
				label={<p  style={ { fontSize: 20 } } >Vômito</p>}
			/>
			<FormControlLabel
				control={<Checkbox checked={RespAr} onChange={handleChange} name="RespAr" />}
				label={<p  style={ { fontSize: 20 } } >Dificuldade respiratória ou falta de ar</p>}
			/>
			<FormControlLabel
				control={<Checkbox checked={Pressao} onChange={handleChange} name="Pressao" />}
				label={<p  style={ { fontSize: 20 } } >Pressão ou dor no peito</p>}
			/>
			<FormControlLabel
				control={<Checkbox checked={Gripe} onChange={handleChange} name="Gripe" />}
				label={<p  style={ { fontSize: 20 } } >Sintomas de gripe (dor de garganta, nariz, etc)</p>}
			/>
			<FormControlLabel
				control={<Checkbox checked={DoresCorpo} onChange={handleChange} name="DoresCorpo" />}
				label={<p  style={ { fontSize: 20 } } >Dores no corpo</p>}
			/>
			</FormGroup>
			<br/>
			<br/>
			<button className="button" type="submit"><Link to={{ pathname: "/Confirmacao", state: userData }}> Avançar</Link></button>
		</FormControl>
		</div>
	</div>
  );
}