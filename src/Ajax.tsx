import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Store from './Store';

@inject('store') @observer
export default class Ajax extends React.Component<{ store: Store }, {}> {

    render() {
        return (
            <div>
                <button onClick={this.onClick}>
                    Catch Pokemon!
                </button>
                <div hidden={this.props.store.pokemon == null} style={{ padding: 20 }}>
                    You Caught: {this.props.store.pokemon != null ? this.props.store.pokemon.name.toUpperCase() : ''} !
                </div>
            </div>
        );
    }

    onClick = () => {
        let pokeId: number = Math.floor(Math.random() * (151 - 1) + 1);
        this.props.store.catchPokemon(pokeId);
    }

}
