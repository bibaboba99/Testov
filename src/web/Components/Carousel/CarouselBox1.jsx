import React  from 'react';
import "./index.css";
import { Carousel } from 'react-bootstrap';
/*import logo1 from '../../../images/2.jpg';
import logo2 from '../../../images/3.jpg';*/



class Slider extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
        };
    }
    handleSelect(selectedIndex, e) {

        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={this.state.img} />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={this.state.img} />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={this.state.img} />
                    
                </Carousel.Item>
            </Carousel>
        );
    }
}


export default Slider;