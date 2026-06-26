console.log("This is day 5 with React props");

import React from "react";
import ReactDOM from "react-dom/client";

let rootEle = document.getElementById("root");

let root = ReactDOM.createRoot(rootEle);

let Topic = (props) => {

  console.log(props);

  props.hello();
  return (
    <>
      <h1>
        Welcome to React Props Lec by {props.name} age={props.age}
      </h1>
      <p>{props.skills.join(",")}</p>
    </>
  );
};

let Student = ({name,age,address,roll,children}) => {
  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{address.city}</h2>
      {roll}
      {children}
    </>
  );
};

<Student
  name="Yagya"
  age={21}
  address={{ city: "Tikamgarh", state: "M.P" }}
></Student>;

function App() {
    function hello(){
        alert("Hello i am App (parent) element fucntion");
    }
  return (
    <>
      <Topic
        name={"jay"}
        age={21}
        skills={["react", "html", "css", "javascript"]}
        hello={hello}
      />
      <Student
        name="Yagya"
        age={21}
        address={{ city: "Tikamgarh", state: "M.P" }}
        roll={<h1>alkdfjaldjflskf</h1>}
      >
        <Topic
        name={"jay"}
        age={21}
        skills={["react", "html", "css", "javascript"]}
        hello={hello}
       />

      </Student>
    </>
  );
}

root.render(<App />);
