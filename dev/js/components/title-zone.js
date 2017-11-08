import React, {Component} from 'react';
import {Media, Image} from 'react-bootstrap';


class TitleZone extends Component{

    getOpenHour() {
        const list = this.props.restaurant[0].open_hours;
        return list.map((restaurant)=>{
            return (
                <span id={restaurant.id}>{restaurant.from_hour} -- {restaurant.to_hour}</span>
            );
        });
    }

    createTitleZone() {
        const list = this.props.restaurant;
        /*        for (let i=0;i<5;i++){
                    for (let j=0;j<this.props.restaurant[0].categories[i].products.length;j++){
                    console.log(list[0].categories[i].name);
                    console.log(this.props.restaurant[0].categories[i].products[j].price);}
                }*/
        return list.map((restaurant)=>{
            return (
                <div>
                    <div style={{height: '160px', width: '100%',
                        backgroundImage: `url(${restaurant.background})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '50% 50%',
                        backgroundSize: 'cover'}}
                    >
                    </div>
                    <Media>
                        <Media.Left>
                            <Image width={150} height={150} src={restaurant.logo} alt="Image" rounded id="title"/>
                        </Media.Left>
                        <Media.Body id="title">
                            <Media.Heading>{restaurant.name}</Media.Heading>
                            <li>{restaurant.tags}</li>
                            <li>{restaurant.address}</li>
                            <li>{this.getOpenHour()}</li>
                        </Media.Body>
                    </Media>
                </div>
            )
        });
    }

    render(){
        return(
            <div>
                {this.createTitleZone()}
            </div>
        );
    }
}

export default TitleZone;