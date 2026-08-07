var trStyle= {border:'2px solid black'};
var countryStyle = {fontWeight:'bold',color:'blue'};
export default function Batter(props) {
    // object destructing 
    let { name, country, ranking,rank } = props;

    return (<tr style={trStyle}>
        <td>{rank}</td>
        <td className="player">{name}<span className="team" style={countryStyle}>{country}</span></td>
        <td>{ranking}</td>
    </tr>);
}