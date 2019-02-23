import React from 'react';
import Character from '../Character';

class CharacterList extends React.Component{
    renderCharacters(){
        const {characters, onCharacterClick}= this.props;

        const charactersMap = characters.map((character)=>{
            return <Character
            key={character.id} 
            character={character}
            onCharacterClick={onCharacterClick}
            />
        });
        return charactersMap;
    }
    render(){
        return(
            <ul className="character-list">
                {this.renderCharacters()}
            </ul>
        );
    }
}

export default CharacterList;