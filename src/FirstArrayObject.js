export default function FirstObject()
{
    var catagori=[{NAME:"RAMAKANTA GAHAN",AGE:24,GENDER:"MALE"},{NAME:"HIMADRI TANAYA MAHARANA",AGE:24,GENDER:"FEMALE"}]
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>GENDER</th>
                    </tr>
                </thead>
                <tbody>
                     {
                        catagori.map(alldata=>
                            <tr>
                                <td>{alldata.NAME}</td>
                                <td>{alldata.AGE}</td>
                                <td>{alldata.GENDER}</td>
                            </tr>
                            
                      )
                     }
                </tbody>
            </table>

        </div>
    )
}