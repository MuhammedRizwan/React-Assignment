import './App.css'
import Person from './person'

function App() {
  const data=[
    {id:1,name:'Leanme Graham',email:'leangrahm@abc.com'},
    {id:2,name:'Ervin Howell',email:'ervinhowell@wbg.com'},
    {id:3,name:'Neelakandan',email:'neelakandan@gmail.com'},
    {id:4,name:'Karnen',email:'karnen@gmail.com'},
    {id:5,name:'shibili',email:'shibili@gmail.com.com'},
    {id:6,name:'Rizwan',email:'rizwan@gmail.com'},
    {id:1,name:'Shafi',email:'shafi@gmail.com'},
  ]
  return (
    <div>
      <Person  key={data.map(key=>key.id)} list={data} />
    </div>
  )
}

export default App
