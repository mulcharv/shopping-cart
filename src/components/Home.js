import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Textra from 'react-textra';
import Expire from './expire';
import ReactPlayer from 'react-player';
import introVideo from '../assets/kawhishot.mp4';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function Home() {
  const [textSets, setTextSets] = useState([
    {
      firstset: [
        'CARTER',
        'SLAM DUNK',
        'MCGRADY',
        'PURPLE',
        'DINOS',
        'ROGERS CENTER',
      ],
    },
    { secondset: ['ACC', 'BOSH', 'CALDERON', 'CHEVRON', 'CASEY', 'DEROZAN'] },
    {
      thirdset: [
        'LOWRY',
        'UJIRI',
        'SIAKAM',
        'VANVLEET',
        'ANUNOBY',
        'IBAKA',
        'BENCH MOB',
        '59 WINS',
        'ALL NBA',
        '1ST SEED',
      ],
    },
    {
      fourthset: [
        'SCOTIABANK',
        'NURSE',
        'TRADE',
        'LEONARD',
        'FUN GUY',
        'GREEN',
        'GASOL',
        'DPOY',
        'FOURTH',
      ],
    },
    { fifthset: ['BOUNCE', 'BOUNCE', 'BOUNCE', 'BOUNCE'] },
    { sixthset: ['CHAMPS'] },
  ]);

  const [loadingSecond, setLoadingSecond] = useState(true);
  const [loadingThird, setLoadingThird] = useState(true);
  const [loadingFourth, setLoadingFourth] = useState(true);
  const [loadingFifth, setLoadingFifth] = useState(true);
  const [loadingSixth, setLoadingSixth] = useState(true);
  const [loadingNorth, setLoadingNorth] = useState(true);

  const [isMute, setIsMute] = useState(true);
  const [muteMessage, setmuteMessage] = useState('Off');

  const [loadingSubFirst, setLoadingSubFirst] = useState(true);
  const [loadingSubSec, setLoadingSubSec] = useState(true);

  const [loadingHomeShop, setLoadingHomeShop] = useState(true);

  const [loadingImages, setLoadingImages] = useState(true);

  const images = [
    { original: require('../assets/homeimages/vincedunk.jpeg') },
    { original: require('../assets/homeimages/vincedunk2.jpeg') },
    { original: require('../assets/homeimages/vincedunk3.jpeg') },
    { original: require('../assets/homeimages/cartermcgrady.jpeg') },
    { original: require('../assets/homeimages/mcgrady1.jpeg') },
    { original: require('../assets/homeimages/bosh.jpeg') },
    { original: require('../assets/homeimages/derozan1.jpeg') },
    { original: require('../assets/homeimages/derozan2.jpeg') },
    { original: require('../assets/homeimages/derozan3.jpeg') },
    { original: require('../assets/homeimages/derozanlowry1.jpeg') },
    { original: require('../assets/homeimages/derozanlowry2.jpeg') },
    { original: require('../assets/homeimages/lowry1.jpeg') },
    { original: require('../assets/homeimages/lowry2.jpeg') },
    { original: require('../assets/homeimages/lowry3.jpeg') },
    { original: require('../assets/homeimages/lowry4.jpeg') },
    { original: require('../assets/homeimages/lowry5.jpeg') },
    { original: require('../assets/homeimages/lowry6.jpeg') },
    { original: require('../assets/homeimages/powell1.jpeg') },
    { original: require('../assets/homeimages/siakam1.jpeg') },
    { original: require('../assets/homeimages/ibaka.jpeg') },
    { original: require('../assets/homeimages/vanvleet1.jpeg') },
    { original: require('../assets/homeimages/anunoby.jpeg') },
    { original: require('../assets/homeimages/theshot1.jpeg') },
    { original: require('../assets/homeimages/leonard1.jpeg') },
    { original: require('../assets/homeimages/leonard2.jpeg') },
    { original: require('../assets/homeimages/leonard3.jpeg') },
    { original: require('../assets/homeimages/leonard4.jpeg') },
    { original: require('../assets/homeimages/leonard5.jpeg') },
    { original: require('../assets/homeimages/lowrychampionship.jpeg') },
    { original: require('../assets/homeimages/championship1.jpeg') },
    { original: require('../assets/homeimages/championship2.jpeg') },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoadingSecond(false);
    }, 2700);

    setTimeout(() => {
      setLoadingThird(false);
    }, 4700);

    setTimeout(() => {
      setLoadingFourth(false);
    }, 8100);

    setTimeout(() => {
      setLoadingFifth(false);
    }, 11500);

    setTimeout(() => {
      setLoadingSixth(false);
    }, 13300);

    setTimeout(() => {
      setLoadingNorth(false);
    }, 15300);

    setTimeout(() => {
      setLoadingSubFirst(false);
    }, 16700);

    setTimeout(() => {
      setLoadingSubSec(false);
    }, 17700);

    setTimeout(() => {
      setLoadingHomeShop(false);
    }, 18700);

    setTimeout(() => {
      setLoadingImages(false);
    }, 30000);
  }, []);

  function HandleSound() {
    if (isMute === true) {
      setIsMute(false);
      setmuteMessage('On');
    }

    if (isMute === false) {
      setIsMute(true);
      setmuteMessage('Off');
    }
  }

  return (
    <div className='homecont'>
      <button className='soundbtn' type='button' onClick={HandleSound}>
        Sound: {muteMessage}
      </button>
      <div className='homeanimation'>
        <div className='animationtextcont'>
          <div className='textcontfirst'>
            <div className='wethetext fade-in-text'>WE</div>
            <div className='wethetext fade-in-text'>THE</div>
          </div>
          <div className='words'>
            <Expire delay='2700'>
              <Textra
                duration={100}
                stopDuration={240}
                effect='topDown'
                data={Object.values(textSets[0])[0]}
              ></Textra>
            </Expire>
            <Expire delay='4700'>
              {!loadingSecond && (
                <Textra
                  duration={75}
                  stopDuration={190}
                  effect='topDown'
                  data={Object.values(textSets[1])[0]}
                ></Textra>
              )}
            </Expire>
            <Expire delay='8100'>
              {!loadingThird && (
                <Textra
                  duration={75}
                  stopDuration={215}
                  effect='topDown'
                  data={Object.values(textSets[2])[0]}
                ></Textra>
              )}
            </Expire>
            <Expire delay='11500'>
              {!loadingFourth && (
                <Textra
                  duration={75}
                  stopDuration={235}
                  effect='topDown'
                  data={Object.values(textSets[3])[0]}
                ></Textra>
              )}
            </Expire>
            <Expire delay='13300'>
              {!loadingFifth && (
                <Textra
                  duration={100}
                  stopDuration={260}
                  effect='topDown'
                  data={Object.values(textSets[4])[0]}
                ></Textra>
              )}
            </Expire>
            <Expire delay='15300'>
              {!loadingSixth && (
                <Textra
                  duration={500}
                  stopDuration={1300}
                  effect='topDown'
                  data={Object.values(textSets[5])[0]}
                ></Textra>
              )}
            </Expire>
            <div className='north'>{!loadingNorth && <div>NORTH</div>}</div>
          </div>
        </div>
        <div className='animationmediacont'>
          <div className='animationvidcont'>
            <Expire delay='30000'>
              <div className='player-wrapper'>
                <ReactPlayer
                  className='kawhivid'
                  url={'https://streamable.com/koso14'}
                  width='90%'
                  height='90%'
                  playing={true}
                  muted={true}
                />
              </div>
            </Expire>
          </div>
          <div className='animationimgcont'>
            {!loadingImages && (
              <ImageGallery
                additionalClass='galleryimages'
                items={images}
                showFullscreenButton={false}
                autoPlay={true}
              />
            )}
          </div>
        </div>
      </div>
      <div className='homesecondpart'>
        <div className='homesubinfo'>
          <div>
            {!loadingSubFirst && (
              <div className='homesubfirst'>
                The Premier Curator of Merchandise for the 2019 NBA Champions,
                the{' '}
              </div>
            )}
          </div>
          <div>
            {!loadingSubSec && (
              <div className='homesubsec'>Toronto Raptors</div>
            )}
          </div>
        </div>
        <div className='homeshopcont'>
          {!loadingHomeShop && (
            <Link to='/shop'>
              <button className='homeshop' type='button'>
                Shop Now
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
