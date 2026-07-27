import React from "react";
import DinningTable from './dinning_table'
export default class Restaurant extends React.Component {
    render() {
        return (<div className="container">
            <div className="row mt-5">
                <DinningTable name='Lalji' />
                <DinningTable name='Mayur' />
                <DinningTable name='Karan' />
                <DinningTable name='Krisha' />
            </div> {/* /row */}
        </div>
        );
    }
}