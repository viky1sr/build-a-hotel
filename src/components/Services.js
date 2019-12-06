import React, {Component} from 'react';
import Title from "./Title";
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer } from 'react-icons/fa';

class Services extends Component {
    state= {
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur debitis delectus deleniti dicta eligendi eos esse fuga incidunt magni mollitia possimus quia repudiandae sit suscipit, veritatis vero voluptate voluptatibus?",
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur debitis delectus deleniti dicta eligendi eos esse fuga incidunt magni mollitia possimus quia repudiandae sit suscipit, veritatis vero voluptate voluptatibus?",
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur debitis delectus deleniti dicta eligendi eos esse fuga incidunt magni mollitia possimus quia repudiandae sit suscipit, veritatis vero voluptate voluptatibus?",
            },
            {
                icon:<FaBeer/>,
                title:"Drinks all beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur debitis delectus deleniti dicta eligendi eos esse fuga incidunt magni mollitia possimus quia repudiandae sit suscipit, veritatis vero voluptate voluptatibus?",
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services" />
                    <div className="services-center">
                        {this.state.services.map((item,index) => {
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                            </article>
                        })}
                    </div>
            </section>
        );
    }
}

export default Services;