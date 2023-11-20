import './list.css'


const List = (props)=>{
    console.log(props);
    const{userFlower}=props;
    const result=userFlower.map((e,index)=>{
    return(
        <li key={index}>{e.fname}</li>
    )
    })
    return(
       <div className="furit">
        <h2>Flowers</h2>
        <ul>
            {result}
           
        </ul>
       </div>
        
    )

}

export default List;