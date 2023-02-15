import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { usePokemon } from '../hooks/usePokemon';
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { Grid } from '@mui/material';


export default function MediaCard() {

    
    const[currentId, isLoading, pokemon, weaknesses, getPokemon] = usePokemon();

  return (
        <>
        {   
            isLoading ? (
                <></>
            ) : (
                <Card sx={{ maxWidth: 360, bgcolor: 'green', border: ' 15px solid yellow'}}>
                <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: 'black'}} aria-label="recipe">
                    <img src={pokemon.sprites.front_default}/>
                </Avatar>
                }
                title={pokemon.name}
                />
                <CardMedia
                    sx={{ width:200, height: 200}}
                    image={pokemon.sprites.other.home.front_default}
                    title={pokemon.name}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                        Details
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <p><b>Weight:</b> <span>{pokemon.weight / 10} Kg.</span></p>
                        <p><b>Height:</b> <span>{pokemon.height / 10} m</span></p>
                    </Grid>
                    <Grid item xs={6}>
                    <b>Abilities</b>
                    { pokemon.abilities.map((item, index) =>
                        <div key={index}>
                            <label>{item.ability.name}</label>
                        </div> 
                    )}
                    </Grid>
                    <Grid item xs={6}>
                        <b>Types</b>
                        { pokemon.types.map((item, index) =>
                            <Typography key={index} variant="body2" color="text.secondary">
                                {item.type.name}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={6}>
                        <b>Weaknesses</b>
                        <p>{weaknesses}</p>
                    </Grid>
                </Grid>

                </CardContent>
                <CardActions sx={{fontSize: 50, justifyContent: 'center', cursor: 'pointer'}}>
                    <AiFillCaretLeft onClick={()=> getPokemon(currentId > 1 ? currentId - 1 : currentId)}/>
                    <AiFillCaretRight  onClick={()=> getPokemon(currentId < 150 ? currentId + 1 : currentId)}/>
                </CardActions>
                </Card>
            )
        }
        </>

  )
}