import React from 'react';
import ReactDOM from 'react-dom/client';
// child class
class Company extends React.Component {
    //create constructor
    constructor(props) {
        super(props); //required 
    }

    deleteCompany = () => {
        //alert(this.props.name + "will be deleted");
        this.props.deleteCompany(this.props.name);
    }
    render() {
        return (<tr>
            <td>{this.props.no}</td>
            <td>{this.props.name}</td>
            <td>{this.props.sector}</td>
            <td>{this.props.year}</td>
            <td>{this.props.marketCap}</td>
            <td>
                <button onClick={this.deleteCompany} type='button' className='btn btn-danger'>Delete</button></td>
        </tr>)
    }
}
// Parent class
class BSE extends React.Component {
    constructor(props) {
        super(props);
        //state object
        this.state = {
            sensexCompanies: [
                {
                    company: "Adani Ports & Special Economic Zone",
                    established: 1998,
                    sector: "Infrastructure & Ports",
                    marketCapCrore: 320000
                },
                {
                    company: "Asian Paints",
                    established: 1942,
                    sector: "Paints / Consumer",
                    marketCapCrore: 230000
                },
                {
                    company: "Axis Bank",
                    established: 1993,
                    sector: "Private Banking",
                    marketCapCrore: 430000
                },
                {
                    company: "Bajaj Finance",
                    established: 1987,
                    sector: "NBFC",
                    marketCapCrore: 580000
                },
                {
                    company: "Bajaj Finserv",
                    established: 2007,
                    sector: "Financial Services",
                    marketCapCrore: 350000
                },
                {
                    company: "Bharti Airtel",
                    established: 1995,
                    sector: "Telecommunications",
                    marketCapCrore: 1106589
                },
                {
                    company: "Eternal (formerly Zomato)",
                    established: 2008,
                    sector: "Internet / Food Delivery",
                    marketCapCrore: 280000
                },
                {
                    company: "HCLTech",
                    established: 1991,
                    sector: "Information Technology",
                    marketCapCrore: 440000
                },
                {
                    company: "HDFC Bank",
                    established: 1994,
                    sector: "Private Banking",
                    marketCapCrore: 1137193
                },
                {
                    company: "Hindustan Unilever",
                    established: 1933,
                    sector: "FMCG",
                    marketCapCrore: 560000
                },
                {
                    company: "ICICI Bank",
                    established: 1994,
                    sector: "Private Banking",
                    marketCapCrore: 1020000
                },
                {
                    company: "IndusInd Bank",
                    established: 1994,
                    sector: "Private Banking",
                    marketCapCrore: 70000
                },
                {
                    company: "Infosys",
                    established: 1981,
                    sector: "Information Technology",
                    marketCapCrore: 670000
                },
                {
                    company: "ITC",
                    established: 1910,
                    sector: "FMCG",
                    marketCapCrore: 530000
                },
                {
                    company: "Kotak Mahindra Bank",
                    established: 1985,
                    sector: "Private Banking",
                    marketCapCrore: 420000
                },
                {
                    company: "Larsen & Toubro",
                    established: 1938,
                    sector: "Engineering & Construction",
                    marketCapCrore: 520000
                },
                {
                    company: "Mahindra & Mahindra",
                    established: 1945,
                    sector: "Automobile",
                    marketCapCrore: 460000
                },
                {
                    company: "Maruti Suzuki India",
                    established: 1981,
                    sector: "Automobile",
                    marketCapCrore: 390000
                },
                {
                    company: "Nestlé India",
                    established: 1959,
                    sector: "FMCG",
                    marketCapCrore: 225000
                },
                {
                    company: "NTPC",
                    established: 1975,
                    sector: "Power Generation",
                    marketCapCrore: 350000
                },
                {
                    company: "Power Grid Corporation of India",
                    established: 1989,
                    sector: "Power Transmission",
                    marketCapCrore: 280000
                },
                {
                    company: "Reliance Industries",
                    established: 1973,
                    sector: "Oil, Gas & Conglomerate",
                    marketCapCrore: 1710175
                },
                {
                    company: "State Bank of India",
                    established: 1955,
                    sector: "Public Sector Banking",
                    marketCapCrore: 720000
                },
                {
                    company: "Sun Pharmaceutical Industries",
                    established: 1983,
                    sector: "Pharmaceuticals",
                    marketCapCrore: 410000
                },
                {
                    company: "Tata Consultancy Services",
                    established: 1968,
                    sector: "Information Technology",
                    marketCapCrore: 1190000
                },
                {
                    company: "Tata Motors",
                    established: 1945,
                    sector: "Automobile",
                    marketCapCrore: 250000
                },
                {
                    company: "Tata Steel",
                    established: 1907,
                    sector: "Steel",
                    marketCapCrore: 210000
                },
                {
                    company: "Tech Mahindra",
                    established: 1986,
                    sector: "Information Technology",
                    marketCapCrore: 170000
                },
                {
                    company: "Titan Company",
                    established: 1984,
                    sector: "Consumer Goods / Jewellery",
                    marketCapCrore: 310000
                },
                {
                    company: "UltraTech Cement",
                    established: 1983,
                    sector: "Cement",
                    marketCapCrore: 360000
                }
            ]
        };
    }

    deleteCompany = (name) => {
        alert("parent delete company method called." + name);
        //temp has all the items except one item that has been deleted
        var temp = this.state.sensexCompanies.filter((item) => {
            //console.log(item.company,name);
            if (item.company !== name)
                return item
        });
        console.log(temp.length);
        
        this.setState({
            sensexCompanies: temp
        }); //update state array which will run render method again
    }
    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h1>BSE 30 companies </h1>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Sr No</th>
                                        <th>Company Name</th>
                                        <th>Sector</th>
                                        <th>Establishment Year</th>
                                        <th>Market cap</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.sensexCompanies.map((item, index) => {
                                        return <Company no={index + 1} name={item.company} sector={item.sector} year={item.established} marketCap={item.marketCapCrore} 
                                        key={item.company} deleteCompany={this.deleteCompany} />
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BSE />)