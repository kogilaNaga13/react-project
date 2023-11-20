import { Component } from "react";

class ClassList extends Component{
    render(){
           const {detail1}=this.props
           const store2=detail1.map((e)=>{
        return(
             <li>{e.fruitName}</li>
        )
    })
    return(
        <div class ="fru">
           <h1>print fruitName use class component</h1>
          <ul>
          {store2}
            
            </ul> 

        </div>
    )
    
}
}
export default ClassList;