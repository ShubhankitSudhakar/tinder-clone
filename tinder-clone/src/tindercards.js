import React, {useState, useEffect} from 'react'
import "./tindercards.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";


function Tindercards() {

    const [people, setpeople] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards");

            setpeople(req.data);

        }
        fetchData();
    }, []);

const swiped = (direction, nametoDelete) => {
    console.log("removing: " + nametoDelete)
};
const outofFrame = (name) => {
    console.log(name + "left the screen!")
};
    return (
        <div className = "tindercards">
            <div className = "tindercards_container">
                {people.map((person)=> (
                <TinderCard className = "swipe"
                key ={person.name}
                preventSwipe = {["up","down"]}
                onSwipe={(dir)=> swiped(dir, person.name)}
                onCardLeftScreen ={() => outofFrame(person.name)}>
                    <div style={{backgroundImage: `url(${person.imgurl})`}} className = "card">
                        <h3> {person.name}</h3>
                    </div>
                </TinderCard>
                )
            )}
                
        </div>
            
        </div>
    )
}

export default Tindercards
