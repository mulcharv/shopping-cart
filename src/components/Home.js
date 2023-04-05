import { useState } from "react";
import TextLoop from "react-text-loop";

function Home () {

    const [textSets, setTextSets] = useState([
        {"firstset": ['STOUDAMIRE', 'WILLIAMS', 'CAMBY', 'OAKLEY', 'CARTER', 'SLAM DUNK', 'MCGRADY', 'COUSINS', 'PURPLE', 'PINSTRIPES', 'DINOS', 'ROGERS CENTER']},
        {"secondset": ['ARMSTRONG', 'RAUTINS', 'ACC', 'BOSH', 'FORD', 'CALDERON', 'GARBAJOSA', 'SWIRSKY', 'SALAMI & CHEESE', 'MO PETE', 'BUZZER BEATER', 'CHEVRON', 'CASEY', 'DEVLIN', 'DEROZAN', 'JOHNSON', 'WEEMS', 'YOUNG GUNZ', 'SPRITE ZONE']},
        {"thirdset": ['LOWRY', 'VALANCIUNAS', 'UJIRI', 'POWELL', 'POELTL', 'WRIGHT', 'SIAKAM', 'VANVLEET', 'ANUNOBY', 'IBAKA', 'SCARVES', 'BENCH MOB', '59 WINS', 'OVO', 'GOLD', 'ALL NBA', '1ST SEED']},
        {"fourthset": ['NURSE', 'TRADE', 'LEONARD', 'KLAW', 'FUN GUY', 'GREEN', 'ICEY HOT', 'GASOL', 'DPOY', 'SCOTIABANK ARENA', '58 WINS', 'FOURTH']},
        {"fifthset": ['BOUNCE', 'BOUNCE', 'BOUNCE', 'BOUNCE', 'CHAMPS']},
        {"sixthset": ['NORTH']}
    ])




    return (
        <div className="homecont">
            <div className="homeanimation">
                <div className="animationtextcont">
                    <div className="textcontfirst">
                    <div className="wethetext fade-in-text">WE</div>
                    <div className="wethetext fade-in-text">THE</div>
                    </div>
                    <div className="words">
                        <TextLoop interval={[3000, 500]} delay={1000} children={[Object.values(textSets[0])[0], Object.values(textSets[1])[0]]} />
                    </div>
                </div>
                <div className="animationmediacont">
                    <div className="animationvidcont"></div>
                    <div className="animationimgcont"></div>
                </div>
            </div>
            <div className="homesecondpart">
                <div className="homesubinfo"></div>
                <button className="homeshop" type="button"></button>
            </div>
        </div>
    );
};

export default Home;