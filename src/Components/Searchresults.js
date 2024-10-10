import { useParams } from "react-router-dom";

const Searchresults = ()=>{
    const{query} = useParams();
    
    console.log(query)
    return (
        <div>
            search results
        </div>
    )
}

export default Searchresults;