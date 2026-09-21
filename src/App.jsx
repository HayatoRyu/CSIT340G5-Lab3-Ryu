const Header = (props) => <h1>{props.course.name}</h1>

const Part = (props) => (
  <p className="part">
    {props.part.name} {props.part.exercises}
  </p>
)

const Content = (props) => (
  <div>
    <Part part={props.course.parts[0]} />
    <Part part={props.course.parts[1]} />
    <Part part={props.course.parts[2]} />
  </div>
)

const Total = (props) => {
  const total = props.course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p className="total">Number of exercises {total}</p>
}

const Footer = (props) => (
  <footer className="footer">
    {props.fullName} - {props.courseCode} - {props.section}
  </footer>
)

const App = () => {
  const course = {
    name: 'CIT-U Subjects',
    parts: [
      { name: 'CSIT340 - Industry Elective 1', exercises: 6 },
      { name: 'CSIT321 - Applications Development and Emerging Technologies', exercises: 6 },
      { name: 'CSIT327 - Information Management 2', exercises: 6 },
    ],
  }

  const fullName = 'Hayato Ryu'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div className="app-container">
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer fullName={fullName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App