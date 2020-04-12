import React from 'react';
import './App.css';

function App() {
  return (
    <div class="main-content">
        <div class="title"> <span> Welcome to Boggiling Bingo</span></div>
        <Board />
    </div>
  );
}

export default App;

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: props.number,
            selected : false,
        };
    }

    render() {
        return (
        <div class={this.state.selected ? "bingo-card__item active" : "bingo-card__item" } onClick={this.handleClick}>
                {this.state.number}
              <span class="bingo-card__checkbox"></span>
        </div>
        );
    }

    handleClick =() =>{
        this.setState({
            selected : !this.state.selected
        });
    }
}

class Blank extends React.Component {
    render() {
        return (
        <div class="bingo-card__item" >
        </div>
        )
    }
}

class Board extends React.Component {

    constructor(props) {
        super(props);

        var n = 20
        var max = 90
        var all = []

        for (var i = 1 ; i < max; i++){
            all[i] = i
        }

        this.shuffle(all)
        all = all.slice(0,n)
        all.sort((a,b) => a - b)

        this.state = {
            numbers : all
        };
    }

    render() {
        var squares = this.state.numbers.map(function(i){ return <Square number={i} /> } )
        var row1 = squares.slice(0,3).concat( [<Blank/>]).concat(squares.slice(3,4))
        var row2 = squares.slice(4,5).concat( [<Blank/>]).concat(squares.slice(5,8))
        var row3 = squares.slice(8,10).concat( [<Blank/>]).concat(squares.slice(10,12))
        var row4 = squares.slice(12,13).concat( [<Blank/>]).concat(squares.slice(13,16))
        var row5 = squares.slice(16,19).concat( [<Blank/>]).concat(squares.slice(19,20))
        return (
          <div class="bingo-card">
            {row1} {row2} {row3} {row4} {row5}
          </div>
        );
    }
    shuffle (array) {
        array.sort(() => Math.random() - 0.5);
    };
  }
