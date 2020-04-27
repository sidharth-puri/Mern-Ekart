import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ProductService from '../Services/ProductService';
import 'tachyons';
import './watch.css'

export default class myproducts extends React.Component {
    constructor(props){
        super(props);
        this.state={
            watch1:[]
        }
    }
        componentDidMount(){
            console.log("Component is mounted");
            ProductService.getProducts()
            .then(res => {
                this.setState({watch1:res.products})
            })
            console.log(this.state.watch1)
        }
        render(){
            return (
                <div className="t1 backgroundimg4">
                {this.state.watch1.map(ele=>
                    <div className="main dib pa3 shadow-5 tc ba pa1 ml5 ma1" style={{width:"300px",height:"300px"}}>
                    <img src={ele.link} alt="Top" style={{width:"24vh",height:"24vh"}}/>
                    <h3 class="ma0 pa0">{ele.title}</h3>
                    <h4 class="ma0 pa0">{ele.price}</h4>
                    </div> 
                )}
           </div>
                );           
                }
}
