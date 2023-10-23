export default function FirstArraydata()
{
    var data=["ALL","ELECTRONICS","MENS FASHION","KIDS","SHIRT"]
    return(
        <div>
            <select>
                {
                    data.map(alldata=>
                        <option key={alldata} value={alldata}>{alldata}</option>
                    )
                }
            </select>
            <ol>
                {
                    data.map(alldatalist =>
                        <li key={alldatalist}>
                            {alldatalist}
                        </li>)
                    
                }
            </ol>

        </div>
        
    )
}