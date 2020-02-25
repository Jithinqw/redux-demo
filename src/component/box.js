import React from "react";

class Box extends React.Component {
    render() {
        if(this.props.loading) {
            return <h1>Loading.....</h1>
        }

        return (
            <div className="wrapper">
                <div className="box">
                    <button onClick={()=>{this.props.handleClick()}}>Change Color</button>            
                    <img src={this.props.url} alt="sdfsdfsd"/>
                </div>
            </div>
        )
    }
}

export default Box;