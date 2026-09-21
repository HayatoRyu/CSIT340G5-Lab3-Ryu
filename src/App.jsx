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
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
)

const Total = (props) => {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = 'CIT-U Subjects'
  const parts = [
    { name: 'CSIT340 - Industry Elective 1', exercises: 6 },
    { name: 'CSIT321 - Applications Development and Emerging Technologies', exercises: 6 },
    { name: 'CSIT327 - Information Management 2', exercises: 6 },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App