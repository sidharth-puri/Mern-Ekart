import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './watch.css'
import 'tachyons';

class Watch extends Component{
   
    constructor(){
        super();
        this.state={
            watch1:[]
        }
    }

    componentDidMount(){
        console.log("Component is mounted");
        fetch('/watch')
        .then(res => res.json())
        .then(res => {
            console.log(JSON.stringify(res));
            this.setState({watch1:res})
        })
        console.log(this.state.watch1)
    }


    render(){
        return (
            <div className="t1 backgroundimg4">
                <div class="bg">
                   <img src="https://worldtimer.com.hk/image/catalog/editoruploads/banner_08.jpg" alt="watch" class="img-fluid" />
                   <div class="text-block">
                       <p><b>Get AMAZING and STYLISH Watches</b></p>
                   </div>
                </div>

            {this.state.watch1.map(ele=>
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
export default Watch;