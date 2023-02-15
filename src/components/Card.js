import styled from 'styled-components';
import { Head } from './Head';
import { Info } from './Info';
import { Screen } from './Screen';
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { usePokemon } from '../hooks/usePokemon';

const StyledCard = styled.div`
    background-color: #aac545;
    color: black;
    width: 400px;
    border: 15px solid #ffde5e;
    border-radius: 15px;
    padding: 2rem 0;
`;

export const Card = () => {

    const[currentId, isLoading, pokemon, weaknesses, getPokemon] = usePokemon();

    return(
        <StyledCard>
            {   
                isLoading ? (
                    <></>
                ) : (
                    <div>
                        {/* Head container */}
                        <Head pokemon={pokemon}/>
                        {/* Screen container */}
                        <Screen img={pokemon.sprites.other.home.front_default}/>
                        {/* Info container */}
                        <Info pokemon={pokemon}/>

                        {/* Buttons container */}
                        <div>
                            <b>weaknesses</b>
                            <p>{weaknesses}</p>
                        </div>
                        <div className='Buttons'>
                            <AiFillCaretLeft
                                onClick={()=> getPokemon(currentId > 1 ? currentId - 1 : currentId)}/>

                            <AiFillCaretRight
                                onClick={()=> getPokemon(currentId + 1)}/>
                        </div>
                    </div>
                )
            }
        </StyledCard>
    )
}

