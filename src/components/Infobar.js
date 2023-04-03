
function Infobar () {

    return (
    <div className="infocomp">
    <div className="infocont">
        <div className="companycol">
            <div className="companycoltitle">COMPANY</div>
            <div className="companycolsub">
                <div className="story infolink">Our Story</div>
                <div className="location infolink">Store Locations</div>
                <div className="careers infolink">Careers</div>
                <div className="press infolink">Press</div>
            </div>
        </div>
        <div className="supportcol">
            <div className="supportcoltitle">SUPPORT</div>
            <div className="supportcolsub">
                <div className="shipping infolink">Shipping</div>
                <div className="returns infolink">Refunds & Returns</div>
                <div className="FAQ infolink">FAQ</div>
                <div className="contact infolink">Contact Us</div>
            </div>
        </div>
        <div className="newslettercol">
            <div className="newslettertitle">NEWSLETTER</div>
            <div className="newslettersub">Join our newsletter for style updates, sales, and 10% off your first purchase!</div>
            <button type="button" className="newsletterbtn">SIGN UP</button>
        </div>
        <div className="socialscol">
            <div className="socialstitle">GET SOCIAL</div>
            <div className="socialssub">
                <div className="instagramcont"><img className="instagrampic" src={require(`../assets/instagramlogo2016.svg`).default} alt=''></img></div>
                <div className="twittercont"><img className="twitterpic" src={require(`../assets/twitter.svg`).default} alt=''></img></div>
                <div className="facebookcont"><img className="facebookpic" src={require(`../assets/facebook.svg`).default} alt=''></img></div>
            </div>
        </div>
    </div>
    <div className="legalcomp">
        <div className="copyright">@ 2023 Raptors Archive</div>
        <div className="privacy legallink">Privacy Policy</div>
        <div className="accessibility legallink">Accessibility</div>
        <div className="returnpol legallink">Return Policy</div>
        <div className="termsofs legallink">Terms Of Service</div>
    </div>
    </div>
    )
}

export default Infobar