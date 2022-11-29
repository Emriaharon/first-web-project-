import './App.css';
import ExpenseItem from './components/ExpensItem';

const hondaPic = new URL('./images/honda_rebel.jpg',import.meta.url)
const tenerePic = new URL('./images/2022-Yamaha.jpg',import.meta.url)
const DucatiPic = new URL('./images/ducati-monster.jpg',import.meta.url)
const harlyePic = new URL('./images/Harley-Davidson.jpg',import.meta.url)
const scooterPic = new URL('./images/scooter.jpg',import.meta.url)


const App = () => {
  const expense = [
    {title: 'Honda Rebel', amount: 50000, thumb:<img src={hondaPic} alt = '' />},
    {title: 'Tenere', amount: 70000, thumb:<img src={tenerePic} alt = '' />},
    {title: 'Ducati Monster', amount: 90000, thumb:<img src={DucatiPic} alt = '' />},
    {title: 'Harlye Davidson', amount: 120000, thumb:<img src={harlyePic} alt = '' />},
    {title: 'Scooter', amount: 1500, thumb:<img src={scooterPic} alt = '' />},
  ];
  
  
  return (
    <div className = "App" >
      <h1>Welcome to The Motorcycle Garage!</h1>
      {/* <div className = "honda">
        <img src = {hondaPic} alt=''/> 
      </div>
      <div className = "tenere">
        <img src = {tenerePic} alt=''/> 
      </div> */}
      
{/* 
      <img src = {motorPic}  className = "Tenere" alt=''/> 
      <img src = {motorPic}  className = "Ducati" alt=''/> 
      <img src = {motorPic}  className = "Harlye" alt=''/> 
      <img src = {motorPic}  className = "Scooter" alt=''/>  */}
      


      <ExpenseItem
        title = {expense[0].title}
        amount = {expense[0].amount}
        thumb = {expense[0].thumb}
        
        ></ExpenseItem>
        <ExpenseItem
        title = {expense[1].title}
        amount = {expense[1].amount}
        thumb = {expense[1].thumb}

        ></ExpenseItem>
        <ExpenseItem
        title = {expense[2].title}
        amount = {expense[2].amount}
        thumb = {expense[2].thumb}

        ></ExpenseItem>
        <ExpenseItem
        title = {expense[3].title}
        amount = {expense[3].amount}
        thumb = {expense[3].thumb}

        ></ExpenseItem>
        <ExpenseItem
        title = {expense[4].title}
        amount = {expense[4].amount}
        thumb = {expense[4].thumb}

        ></ExpenseItem>
    </div>
  );
}

export default App;
