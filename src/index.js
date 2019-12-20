import React from 'react';
import ReactDOM from 'react-dom';


class Run extends React.Component{
    constructor(props){
        super(props);
        this.fun1= this.fun1.bind(this);
        this.state={
            player1 : 0,
            player2 : 0,
            matchsticks : 21  ,
            loser : " "
          };      
    }

    fun1 = () => {
        this.setState({player1 : 1});
        this.setState({player2 : 4});
        this.setState({matchsticks : this.state.matchsticks - 5});
        if(this.state.matchsticks === 1)
        {
            this.setState({player1 : 1 , player2 : 0 , matchsticks : 0 , loser : "Player1 Loses"});
        }
        if(this.state.matchsticks === 0)
        {
            this.setState({player1 : 1 , player2 : 0 , matchsticks : 0 , loser : "Player1 Loses"});
        }
    }
    fun2 = () => {
        this.setState({player1 : 2});
        this.setState({player2 : 3});
        this.setState({matchsticks : this.state.matchsticks - 5});
        if(this.state.matchsticks === 1)
        {
            this.setState({player1 : 1 , player2 : 0 , matchsticks : 0 , loser : "Player1 Loses"});
        }
        if(this.state.matchsticks === 0)
        {
            this.setState({player1 : 1 , player2 : 0 , matchsticks : 0 , loser : "Player1 Loses"});
        }
    }
    fun3 = () => {
        this.setState({player1 : 3});
        this.setState({player2 : 2});
        this.setState({matchsticks : this.state.matchsticks - 5});
        if(this.state.matchsticks === 1)
        {
            this.setState({player1 : 1 , player2 : 0 , matchsticks : 0 , loser : "Player1 Loses"});
        }
        if(this.state.matchsticks === 0)
        {
            this.setState({player1 : 1 , player2 : 0 , matchsticks : 0 , loser : "Player1 Loses"});
        }
    }
    fun4 = () => {
        this.setState({player1 : 4});
        this.setState({player2 : 1});
        this.setState({matchsticks : this.state.matchsticks - 5});
        if(this.state.matchsticks === 1)
        {
            this.setState({player1 : 1 , player2 : 0 , matchsticks : 0 , loser : "Player1 Loses"});
        }
        if(this.state.matchsticks === 0)
        {
            this.setState({player1 : 1 , player2 : 0 , matchsticks : 0 , loser : "Player1 Loses"});
        }
    }
    // show1 =() => {
    //     <div>
    //     <h1> Player2 : {this.state.player2} <br></br> Matchsticks Left : {this.state.matchsticks}   <br></br>  </h1>
    //     </div>
    // }
    render(){
        return(
            <div>
                <h1>Player1 : {this.state.player1}</h1>   
                <button type="button" name="1" onClick={this.fun1}>1</button>
                <button type="button" name="2" onClick={this.fun2}>2</button>
                <button type="button" name="3" onClick={this.fun3}>3</button>
                <button type="button" name="4" onClick={this.fun4}>4</button>
                <h1> Player2 : {this.state.player2} <br></br> <br></br>Matchsticks Left : {this.state.matchsticks}   <br></br> <br></br> {this.state.loser} </h1>
                {/* <button type="button" onClick={this.show1}>play</button> */}
            </div>
        )
    }

}
ReactDOM.render(<Run /> , document.getElementById("root"));