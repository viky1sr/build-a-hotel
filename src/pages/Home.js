import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";

export default function Home(){
        return <Hero>
            <Banner title="Luxvile rooms" subtitle="deluxe rooms starting at $339">
            <Link to="/rooms" className="btn-primary" >
                our rooms
            </Link>
            </Banner>
        </Hero>
}
