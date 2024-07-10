import React from 'react'

 function SearchComponenet() {
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
         <input style={{height:50 ,width:1500 }}
        type='text'
        
        placeholder='Enter Idustry Name'
        />
        <button style={{backgroundColor:'orange' }}>Search</button>
    </div>
  )
}
export default SearchComponenet
