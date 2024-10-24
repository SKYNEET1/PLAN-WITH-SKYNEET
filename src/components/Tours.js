import Card from "./Card";

function Tours({tours,removetour}){
    return(
       <div className="container">

        <div>
        <h1 className="title">Plan with SKYNEET!!</h1>
        </div>

        <div className="cards">
            {
                tours.map((tour) =>{
                    return (<Card key={tour.id} {...tour} removetour={removetour}></Card>)
                    // puri ki puri obj ki copy pass kr di ...tour
                    // key={tour.id} not needed but it is a best practise if you add map to any list then always add a key.
                })
            }
        </div>
       </div>
    )
}
export default Tours;