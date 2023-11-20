import { getRoles } from '@testing-library/react';
import './App.css';
import Table from './Table';
import Table1 from './Table1';
import Greet from './Setstate';
import ClassList from './Classlist';
import List from './component/props-functionComponent/list';

function App() {
  const flower=[
    {
      fname:"Rose"
    },
      {
        fname:"Jasmine"
    },
     {
      fname:"Daisy"
    },
      {
        fname:"Lilly"
    },
      {
        fname:"Lotus"
    }
  ]
    const userDetails=[
      {
        name:"Kogila",
        age:21,
        profession:"Developer"
      },
      {
        name:"aarani",
        age:21,
        profession:"Tester"
      },
      {
        name:"mathi",
        age:21,
        profession:"Tester"
      },
      {
        name:"charu",
        age:20,
        profession:"Developer"
      }
    ]
    
      const playerName=[
        {
        name:"charu",
        age:21,
        game:"kabadi"
      },
      {
        name:"aarani",
        age:21,
        game:"basekatball"
      },
      {
        name:"mathi",
        age:27,
        game:"batsman"
      },
      {
        name:"kaviya",
        age:20,
        game:"kabadi"
      },
      {
        name:"priya",
        age:23,
        game:"criket"
      },
    ]
    const fruit1=[
      {
        fruitName:"Apple",
        cost:28
      },
      {
        fruitName:"Grapes",
        cost:80
      },
      {
        fruitName:"Banana",
        cost:10
      },
      {
        fruitName:"Orange",
        cost:40
      }
    ]
  return (

    <div className="App">
      <List userFlower={flower} />
      <Table userData={userDetails}/>
     <Table1 team={playerName}/>
     <ClassList detail1={fruit1}/>

    <Greet />
    </div>
  );
}

export default App;
