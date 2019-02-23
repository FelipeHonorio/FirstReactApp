import React from 'react';
import axios from 'axios';
import CharacterList from '../CharacterList';
import './adventure.css';

const API_URL = 'https://rickandmortyapi.com/api'

class Adventure extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            characters: [],
            activeCharacter: {},
        };

        this.onCharacterClick = this.onCharacterClick.bind(this)
    }

    async componentDidMount(){
        try{
            const response = await axios.get(`${API_URL}/character`);
            const characters = response.data.results;

            this.setState({
                //characters: characters
                characters
            })

            console.log(response);
        } catch(err){
            console.error(err);
        }

        
        //.then(response => console.log(response))
        //.catch(response => console.error(response))
    }

    renderActiveCharacter(activeCharacter){
        if(!activeCharacter.id){
            return <div></div>
        }
        return(
            <div className="character">
                <h1>You have selected {activeCharacter.name}</h1>
                <img src={activeCharacter.image} alt={activeCharacter.name} />
            </div>
        )
    }

    onCharacterClick(activeCharacter){
        this.setState({
            activeCharacter
        });
    }

    render() {
        //const dimenssion = this.props.dimenssion;
        const {dimession} = this.props   
        const {characters, activeCharacter} = this.state

        return (
            <div>
                <h1 className="adventure">Adventure of Rick and Mory</h1>
                <h2>It´s a Rick and Morty adventure or dimension {dimession}</h2>
                <CharacterList
                    onCharacterClick={this.onCharacterClick}
                    characters={characters}
                    
                     />
                {this.renderActiveCharacter(activeCharacter)}        
            </div>
        )
    }
}

export default Adventure;