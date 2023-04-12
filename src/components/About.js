const About = () => {
    return (
        <div className="aboutcont">
            <div className="abouttitle">ABOUT US</div>
            <div className="aboutfirstcont">
                <div className='aboutfirsttext'>
                <div className="aboutfirsttitle">BY THE FANS</div>
                <div className="aboutfirstdesc">10 years ago a group of Raptors fans from Toronto were in search of a way to help 
                others with busy schedules express their passion for the team. Whether online or in store, many didn't have the
                time to search through styles for the perfect one. We decided to bridge that gap, and engage with fans through 
                social media to learn their preference of the newest styles released by the merchandise department. Before we knew
                it, we had found a way for fans to become tastemakers of Raptors merchandise, and deliver to them the best current 
                styles. This store continously evolves in the items it offers to keep meeting those needs.
                </div>
                </div>
                <div className="aboutfirstimg"><img className='torontocourt' src={require('../assets/torontocourt.jpeg')} alt=''></img></div>
            </div>
            <div className='aboutsecondcont'>
                <div className='aboutsecondimg'><img className='jurassicpark' src={require('../assets/jurassicpark.jpeg')} alt=''></img></div>
                <div className='aboutsecondtext'>
                <div className='aboutsecondtitle'>FOR THE FANS</div>
                <div className='aboutseconddesc'>This store runs 24/7, because we know Raptors fandom never stops. We pride
                ourselves on delivering the best quality service and just like the team, are always striving to get better.
                Raptors Athletics will always be dedicated to the fans who want to show their support for the team. 
                Our door is open to connect via socials, email, or phone.</div>
                </div>
            </div>
        </div>
    );
};

export default About;