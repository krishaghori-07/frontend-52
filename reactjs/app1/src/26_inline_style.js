import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './player.css';
import Batter from './batter';
function ICCRanking() {
    return (<div className="wrap">
        <h1>ICC Men's ODI Batting Rankings</h1>
        <p className="sub">As of 31 July 2026</p>
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                <Batter rank={1} name='Mr Gill' country='Bharat' ranking='1000' />
                <Batter rank={2} name="Daryl Mitchell" country="New Zealand" ranking={794} />
                <Batter rank={3} name="Virat Kohli" country="India" ranking={767} />
                <Batter rank={4} name="Rohit Sharma" country="India" ranking={758} />
                <Batter rank={5} name="Ibrahim Zadran" country="Afghanistan" ranking={712} />
                <Batter rank={6} name="Babar Azam" country="Pakistan" ranking={689} />
                <Batter rank={7} name="Harry Tector" country="Ireland" ranking={679} />
                <Batter rank={8} name="Joe Root" country="England" ranking={674} />
                <Batter rank={9} name="Shai Hope" country="West Indies" ranking={673} />
                <Batter rank={10} name="Charith Asalanka" country="Sri Lanka" ranking={659} />
                <Batter rank={11} name="Kusal Mendis" country="Sri Lanka" ranking={648} />
                <Batter rank={12} name="Quinton de Kock" country="South Africa" ranking={640} />
                <Batter rank={13} name="Shreyas Iyer" country="India" ranking={633} />
                <Batter rank={14} name="Pathum Nissanka" country="Sri Lanka" ranking={632} />
                <Batter rank={14} name="Rahmanullah Gurbaz" country="Afghanistan" ranking={632} />
                <Batter rank={16} name="Salman Agha" country="Pakistan" ranking={630} />
                <Batter rank={17} name="Harry Brook" country="England" ranking={629} />
                <Batter rank={18} name="Lokesh Rahul" country="India" ranking={625} />
                <Batter rank={19} name="Ben Duckett" country="England" ranking={615} />
                <Batter rank={20} name="Travis Head" country="Australia" ranking={610} />
            </tbody>
        </table>
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ICCRanking />)
