import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { usePokemon } from "../hooks/usePokemon";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { Grid } from "@mui/material";
import { CustomStats } from "./CustomStats";

export default function MediaCard() {
  const [currentId, isLoading, pokemon, weaknesses, getPokemon] = usePokemon();
  console.log(pokemon);

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <Card
          sx={{ width: 300, bgcolor: "green", border: " 15px solid yellow" }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ padding: 1, bgcolor: "white" }} aria-label="recipe">
                <div style={{ display: "flex", placeContent: "center" }}>
                  <img
                    src={pokemon.sprites.front_default}
                    alt=""
                    style={{ height: "60px" }}
                  />
                </div>
              </Avatar>
            }
            title={pokemon.name}
            subheader={pokemon.types.map((item, index) => (
              <strong key={index}>{item.type.name} </strong>
            ))}
          />
          <CardMedia
            sx={{ width: 200, height: 200 }}
            image={pokemon.sprites.other.home.front_default}
            title={pokemon.name}
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CustomStats stats={pokemon.stats} />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions
            sx={{ fontSize: 50, justifyContent: "center", cursor: "pointer" }}
          >
            <AiFillCaretLeft
              onClick={() =>
                getPokemon(currentId > 1 ? currentId - 1 : currentId)
              }
            />
            <AiFillCaretRight
              onClick={() =>
                getPokemon(currentId < 150 ? currentId + 1 : currentId)
              }
            />
          </CardActions>
        </Card>
      )}
    </>
  );
}