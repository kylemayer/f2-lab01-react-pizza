import React, { Component } from 'react'

export default class IngredientItem extends Component {
    render() {
        return (
            <div>

                <label>
                    <input type='checkbox'/>{this.props.amount} {this.props.name}
                </label>

            </div>
        )
    }
}
