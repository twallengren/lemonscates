import React from 'react'

export default function Item(props) {

    return (

        <div>

            <div>Item: {props.name}</div>
            <div>Weight: {props.weight}</div>
            <div>Quantity: {props.quantity}</div>
            <div>Total Weight: {props.weight * props.quantity}</div>

        </div>

    )

}