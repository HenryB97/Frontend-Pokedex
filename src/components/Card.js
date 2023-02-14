import styled from 'styled-components';
import { Head } from './Head';
import { Info } from './Info';
import { Screen } from './Screen';
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { usePokemon } from '../hooks/usePokemon';

const StyledCard = styled.div`
    background-color: #aac545;
    color: black;
    width: 350px;
    border: 15px solid #ffde5e;
    border-radius: 15px;
    padding: 2rem;
`;

export const Card = () => {

    const[currentId, isLoading, pokemon, getPokemon] = usePokemon();

    return(
        <StyledCard>
            {   
                isLoading ? (
                    <></>
                ) : (
                    <div>
                        {/* Head container */}
                        <Head name={pokemon.name}/>
                        {/* Screen container */}
                        <Screen img={pokemon.sprites.front_default}/>
                        {/* Info container */}
                        <Info pokemon={pokemon}/>

                        {/* Buttons container */}
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

