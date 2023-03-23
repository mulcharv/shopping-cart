import Card from "./card";
import uniqid from 'uniqid';

function Clothetype(props) {

    const { catg, inventory } = props;

    let clotheobj = inventory[catg];
    let clothecatg = Object.keys(clotheobj)[0];
    let clothelist = Object.values(clotheobj)[0];

    console.log(clothelist);


    return (
        <div className={`${clothecatg}cont`}>
            <ul className="clothelist">
            {clothelist.map((item) =>  {
                return (
                <li key={uniqid()} className="clothecard">
                <Card
                value={item}
                />
                </li>
                )
            })}
          </ul>
        </div>
    )
}

export default Clothetype;