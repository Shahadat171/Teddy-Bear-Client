


const EveryTeddyBear = ({teddyBear}) => {
    console.log(teddyBear)
    return (
        <tr >
             <td >1</td>
             <td >{teddyBear.name}</td>    
             <td >{teddyBear.type}</td>    
             <td >{teddyBear.seller?teddyBear: 'No seller'}</td>    
             <td >${teddyBear.price}</td>    
             <td >{teddyBear.quantity}</td>    
             <td className="mx-auto"><button className="btn btn-secondary rounded-full">View Details</button></td>    
        </tr>
    );
};

export default EveryTeddyBear;