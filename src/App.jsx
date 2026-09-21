const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Content = (props) => (
  <div>
    <Part part={props.part1} />
    <Part part={props.part2} />
    <Part part={props.part3} />
  </div>
)

const Total = (props) => <p>Number of exercises {props.total}</p>

const App = () => {
  const course = 'CIT-U Subjects'
  const part1 = { name: 'CSIT340 - Industry Elective 1', exercises: 6 }
  const part2 = { name: 'CSIT321 - Applications Development and Emerging Technologies', exercises: 6 }
  const part3 = { name: 'CSIT327 - Information Management 2', exercises: 6 }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App