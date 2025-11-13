function list() {

    let items = ["New York", "Delhi", "Bangalore", "Chennai", "Kolkata"];
    return (
        <>
            {items.length === 0 && <li className="list-group-item">No items found</li>}
            <h1>Hello React</h1>
            <ul className="list-group">
                {items.map((item,index) => <li key={item} className="list-group-item" onClick={()=>console.log(item,index)}>{item}</li>)}
            </ul>
        </>
    )
}

export default list