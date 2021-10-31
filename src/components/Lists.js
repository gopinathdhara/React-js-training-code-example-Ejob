import React from 'react' 
const myList=["apple","banana","orange"];
const myListArr=myList.map((elem,index)=>{
    return <option>{elem}</option>
})
class Lists extends React.Component
{
  render (){
        return (
            <div class="col-sm-4" style={{padding:'10px',margin:'50px','text-align':'center'}}>
                <h3>List With Map</h3>
                <select class="form-control">
                    {myListArr}
                </select>

            </div>

        )
  }
    
}
export default Lists;