// dependencies
import React from 'react'
// css
import css from '../style/Card.module.css'
import front from '../style/Front.module.css'
import back from '../style/Back.module.css'
// components
import Square from './Square'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            frontColor: null,
            backColor: null,
            card: null,
            flipVel: null,
            title: null,
            preview: null,
            squareArr: null
        }
    }

    componentDidMount() {
        this.setState({
            frontColor: this.props.color.front,
            backColor: this.props.color.back,
            card: document.getElementById('card'),
            flipVel: !this.props.flipVel ? 'average' : this.props.flipVel,
            title: this.props.title,
            preview: this.props.preview,
            squareArr: this.props.squareAmount
        },
        () => {
            let copy = {...this.state}
            let velocity = 0
            switch(this.state.flipVel) {
                case('slower'): velocity = 5; break
                case('slow'): velocity = 3; break
                case('fast'): velocity = 1; break
                case('faster'): velocity = 0.5; break
                default: velocity = 1.5
            }
            copy.card.style.transition = 'transform ' + velocity +'s'
            this.setState({
                ...this.state,
                card: copy.card.style.transition
            },
            () => {
                this.setState({
                    ...this.state,
                    card: document.getElementById('card')
                },
                () => {
                    console.log(this.state)
                })
            })
        })
    }

    handle__flipCard = face => {
        // configure
        const obj_frontFace = {
            ref: document.getElementById(face),
            func: () => {
                let copy = {...this.state}
                let direction = (face === 'frontFace' ? 'rotateY(180deg)' : 'rotateY(0)')
                copy.card.style.transform = direction
                this.setState({
                    ...this.state,
                    card: copy.card.style.transform
                },
                () => {
                    this.setState({ ...this.state, card: document.getElementById('card') })
                }
                )
                
            }
        }
        // run
        obj_frontFace.func()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.squareArr !== this.state.squareArr
    }

    render() {
        const frontFace = {
            backgroundColor: this.state.frontColor
        }
        const backFace = {
            backgroundColor: this.state.backColor
        }


        // determine if add or not a preview and change title style
        let preview = this.state.preview ? (<p className={front.preview_bio}>{this.state.preview}</p>) : null
        let titleSize = this.state.preview ? {fontSize: '1.5rem'} : {fontSize: '2.5rem'}

        // maturate the squareArr for render it
        let render__squares = null
        const build__squares = () => {
            let copy = {...this.state.squareArr}
            return Object.values(copy).map((sqr, index) => {
                return (
                    <Square
                        key={index}
                        data={sqr}
                    />
                )
            })
        }
        render__squares = build__squares()

        return(
            <div className={css.scene}>
                <div className={css.card} id="card">
                    <div
                        id="backFace"
                        className={[css.card__face, css.card__faceBack].join(' ')}
                        style={backFace}
                        onClick={() => this.handle__flipCard('backFace')}
                    >
                    <div className={back.disposition}>
                        <div className={back.title}>{this.state.title}</div>
                        <div className={back.content}></div>
                        <div id="square_location" className={back.square_group}>
                            {render__squares}
                        </div>
                    
                    </div>

                    </div>
                    <div
                        id="frontFace"
                        className={[css.card__face, css.card__faceFront].join(' ')}
                        style={frontFace}
                        onClick={() => this.handle__flipCard('frontFace')}
                    >
                        <div className={front.image}></div>
                        <div className={front.preview}>
                            <div
                                id="preview_title"
                                className={front.preview_title}
                                style={titleSize}
                            >{this.state.title}</div>
                            {preview}
                        </div>



                    </div>
                </div>
            </div>
        )
    }
}

export default Card