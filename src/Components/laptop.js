import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './watch.css'
import 'tachyons';

class Laptop extends Component{
   
    constructor(){
        super();
        this.state={
            laptop1:[]
        }
    }

    componentDidMount(){
        console.log("Component is mounted");
        fetch('/laptop')
        .then(res => res.json())
        .then(res => {
            console.log(JSON.stringify(res));
            this.setState({laptop1:res})
        })
        console.log(this.state.laptop1)
    }


    render(){
        return (
            <div className="t1 backgroundimg4">
                <div class="bg">
                   <img src="https://homegadgetguides.com/wp-content/uploads/2020/01/Feature-2.jpg" alt="laptop" class="img-fluid" />
                   <div class="text-block">
                      
                   </div>
                </div>

            {this.state.laptop1.map(ele=>
                <div className="main dib pa3 shadow-5 tc ba pa1 ml5 ma1" style={{width:"300px",height:"300px"}}>
                <img src={ele.link} alt="Top" style={{width:"24vh",height:"24vh"}}/>
                <h3 class="ma0 pa0">{ele.title}</h3>
                <h4 class="ma0 pa0">{ele.price}</h4>
                <button class="btn btn-danger shadow-lg ma0 pa0" style={{fontSize:"1.5rem"}} onClick={()=>this.fun(ele)} ><Link class="l1 black" to="/tt">Shop Now</Link></button>
                </div> 
            )}
       </div>
            );           
            }
}
export default Laptop;