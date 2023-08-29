import "./admin.css"
function AdminPage(){
    return (
        <>
        <div>
 <h1> Pizza Orders</h1>
</div>
<section>
    <table>
        <tr>
            <th>Name</th>
            <th> Time Order Placed</th>
            <th> Type</th>
            <th>Cost </th>
        </tr>
        <tr>
        <td>Chris</td>
        <td>1/1/2023 11:15am</td>
        <td> Pickup</td>
        <td>$12.99</td>
        </tr>

        <tr>
        <td>john</td>
        <td>9/4/2023 9:15am</td>
        <td> Pickup</td>
        <td>$25</td>
            
        </tr>
    </table>
    
</section>
        
        
        
        
        </>
    )
}
export default AdminPage