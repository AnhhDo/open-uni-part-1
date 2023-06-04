const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.content[0].name} exercise={props.content[0].exercises}></Part>
      <Part part={props.content[1].name} exercise={props.content[1].exercises}></Part>
      <Part part={props.content[2].name} exercise={props.content[2].exercises}></Part>
    </div>
  );
};
const Total = (props) => {
  return <p>Number of exercises {props.value}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises;

  return (
    <div>
      <Header course={course.name}></Header>
      <Content content={course.parts}></Content>
      <Total value={total}></Total>
    </div>
  );
};

export default App;
