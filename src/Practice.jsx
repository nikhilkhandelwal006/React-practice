export const Practice=()=>{
    let students=[1]
    return (
        <>
      {/* <p> {students.length && "No Students Found"}</p>  */}

      {/* <p> {students.length===0 && "No Students Found"}</p>  */}


      {/* <p> {!students.length && "No Students Found"}</p>  */}


      <p> {!Boolean(students.length) && "No Students Found"}</p> 


      <p>Number of Students : {students.length}</p>
        </>
    )
}