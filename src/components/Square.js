// dependencies
import React from 'react'
// css
import css from '../style/Square.module.css'

const square = props => {
    const style = {}
    if(props.data.color) {
        style.backgroudColor = props.data.color
    }
    const imgUrl = require('../assets/flop-disk.png')
    return (
        <div className={css.shape}>
            <img src={imgUrl} alt={props.data.label} height="46" width="46" />
        </div>
    )
}

export default square