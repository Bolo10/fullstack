import Header from "./Header"
import { Part } from "./Part"
import { Total } from "./Total"
const Course = ({courses}) => {
    console.log(courses)
    return (
      <div>
        {courses.map((course)=>{

          return <div key={course.id}> 
                  <Header title={course.name} key={course.id}/> 
                  {course.parts.map((parts) => <Part parts={parts} key={parts.id}/>)}
                  <Total parts={course.parts}/>
                  </div>
        })}
      </div>
    )
  }

export default Course