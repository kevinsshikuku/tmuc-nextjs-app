import React, { useState, useEffect} from 'react';
import styles from "./styles.module.scss";
import {Colors, initial} from '../../components/theme_color';

/** Event ... */
function Event() {
  const [ theme, setTheme] = useState(initial);
 
 
  let days = []
  let monday, friday, sunday, tuesday, thursday, saturday, wednesday;

  if(typeof window !== 'undefined' ){
         monday    = JSON.parse(localStorage.getItem("Monday"));
         friday    = JSON.parse(localStorage.getItem("Friday"));
         sunday    = JSON.parse(localStorage.getItem("Sunday"));
         tuesday   = JSON.parse(localStorage.getItem("Tuesday"));
         thursday  = JSON.parse(localStorage.getItem("Thursday"));
         saturday  = JSON.parse(localStorage.getItem("Saturday"));
         wednesday = JSON.parse(localStorage.getItem("Wednesday"));
  }
  
console.log(monday)

  useEffect(()=> {
     setTheme(Colors())
  },[])

  const [open, setOpen] = React.useState(false);
  const [ xday, setXDay ] =  React.useState({});

  const handleOpen = ({day, index, time}) => {
        setXDay({day, index, time})
        setOpen(true)
  };


  const handleClose = () => setOpen(false);

  days.push(monday, tuesday, wednesday, thursday, friday, saturday, sunday);

  const  areSame = (arr) => {
    // Put all array elements in a HashSet
    let s = new Set(arr);
    // If all elements are same, size of
    // HashSet should be 1. As HashSet contains only distinct values.
    return (s.size === 1);
}

let empty =  days.includes(null) && areSame(days);



 const [ deleted, setDeleted] = useState(false);

 const delete_ = ({day, index}) => {
   let oldData = JSON.parse(localStorage.getItem(day));
   oldData.splice(index, 1)
   if(oldData.length === 0){
       localStorage.removeItem(day)
    }else{
      localStorage.setItem(day, JSON.stringify(oldData))
    }
    setDeleted(!deleted)
    setOpen(false)
 }


 let monday_ = ( monday !== null && monday.length > 0 &&
                <div className={styles.Monday} style={{background:theme.secondary}} >
                  <p className={styles.day}>Monday</p>
                    { monday.map((day, i) => (
                                  <div className={styles.event_activity} key={i}>
                                    <div>
                                       <p> <span style={{color:"green"}}>Time:</span> {day.Time}</p> <br/>
                                       <p>{day.Activity}</p> 
                                     </div>
                                     <div className={styles.delete}>
                                      <button onClick={ () => handleOpen({day: "Monday", index: i, time: day.Time})}>Delete</button>
                                     </div>
                                  </div>
                        ))}
                </div>)
 let tuesday_ = ( tuesday !== null && tuesday.length > 0 &&
  <div className={styles.Tuesday} style={{background:theme.secondary}}>
    <p className={styles.day}>Tuesday</p>
      { tuesday.map((day, i) => (
                    <div className={styles.event_activity} key={i}>
                      <div>
                        <p><span style={{color:"green"}}>Time:</span>{day.Time}</p> <br/>
                        <p>{day.Activity}</p> 
                      </div>
                      <div className={styles.delete}>
                        <button onClick={ () => handleOpen({day: "Tuesday", index: i, time: day.Time})}>Delete</button>
                      </div>
                    </div>
          ))}
  </div>)
let wednesday_ = ( wednesday !== null && wednesday.length > 0 &&
  <div className={styles.Wednesday} style={{background:theme.secondary}}>
    <p className={styles.day}>Wednesday</p>
      { wednesday.map((day, i) => (
                    <div className={styles.event_activity} key={i}>
                      <div>
                        <p><span style={{color:"green"}}>Time:</span>{day.Time}</p> <br/>
                        <p>{day.Activity}</p> 
                      </div>
                      <div className={styles.delete}>
                        <button onClick={ () => handleOpen({day: "Wednesday", index: i, time: day.Time})}>Delete</button>
                      </div>
                    </div>
          ))}
  </div>)

let thursday_ = ( thursday !== null &&  thursday.length > 0 &&
  <div className={styles.Thursday} style={{background:theme.secondary}}>
    <p className={styles.day}>Thursday</p>
      { thursday.map((day, i) => (
                    <div className={styles.event_activity} key={i}>
                      <div>
                          <p><span style={{color:"green"}}>Time:</span>{day.Time}</p><br/>
                          <p>{day.Activity}</p> 
                      </div>
                      <div className={styles.delete}>
                          <button onClick={ () => handleOpen({day: "Thursday", index: i, time: day.Time})}>Delete</button>
                        </div>
                    </div>
          ))}
  </div>)

let friday_ = ( friday !== null && friday.length > 0 &&
  <div className={styles.Friday} style={{background:theme.secondary}}>
    <p className={styles.day}>Friday</p>
      { friday.map((day, i) => (
                    <div className={styles.event_activity} key={i}>
                      <div>
                        <p><span style={{color:"green"}}>Time:</span>{day.Time}</p> <br/>
                        <p>{day.Activity}</p> 
                      </div>
                      <div className={styles.delete}>
                          <button onClick={ () => handleOpen({day: "Friday", index: i, time: day.Time})}>Delete</button>
                        </div>
                    </div>
          ))}
  </div>)
let saturday_ = ( saturday !== null && saturday.length > 0 &&
  <div className={styles.Saturday} style={{background:theme.secondary}}>
    <p className={styles.day}>Saturday</p>
      { saturday.map((day, i) => (
                    <div className={styles.event_activity} key={i}>
                      <div>
                        <p><span style={{color:"green"}}>Time:</span>{day.Time}</p> <br/>
                        <p>{day.Activity}</p> 
                      </div>
                      <div className={styles.delete}>
                          <button onClick={ () => handleOpen({day: "Saturday", index: i, time: day.Time})}>Delete</button>
                        </div>
                    </div>
          ))}
  </div>)

let sunday_ = ( sunday !== null && sunday.length > 0 &&
  <div className={styles.sunday} style={{background:theme.secondary}}>
    <p className={styles.day}>Sunday</p>
      { sunday.map((day, i) => (
                    <div className={styles.event_activity} key={i}>
                      <div>
                        <p><span style={{color:"green"}}>Time:</span>{day.Time}</p> <br/>
                        <p>{day.Activity}</p> 
                      </div>
                      <div className={styles.delete}>
                          <button onClick={ () => handleOpen({day: "Sunday", index: i, time: day.Time})}>Delete</button>
                        </div>
                    </div>
          ))}
  </div>)


let dammy = [
  {Day: 'Monday', Time: '8:00 am - 11:00 am', Activity: 'Here goes the activity to be done over the specified time in this case 8:00 am - 11:00am'},
  {Day: 'Monday', Time: '1:00pm - 4:00 pm', Activity: 'Activity'}
]

let example = ( dammy !== null && dammy.length > 0 &&
  <div className={styles.Dammy} style={{background:theme.secondary}}  suppressHydrationWarning={true}>
    <p className={styles.day}>Wednesday</p>
      { dammy.map((day, i) => (
                    <div className={styles.event_activity} key={i}>
                      <div>
                         <p> <span style={{color:"green"}}>Time:</span> {day.Time}</p> <br/>
                         <p>{day.Activity}</p> 
                       </div>
                       <div className={styles.delete}>
                        <button>Delete</button>
                       </div>
                    </div>
          ))}
  </div>)


  return (
    <div suppressHydrationWarning={true}>
      <p>{deleted}</p>
      {
        open && 
        <div 
        className={styles.modal}
      >
        <div className={styles.modal_body}>
          <p>
            Do you want to delete  your {xday?.time} {xday?.day}  activity?
          </p>
          <div  className={styles.modalButtons}>
            <button onClick={handleClose} style={{color: theme.link}}>Cancel</button>
            <button onClick={() => delete_(xday)} style={{color: "red"}} >Delete</button>
          </div>
        </div>

        </div>}
      {monday_}
      {tuesday_}
      {wednesday_}
      {thursday_}
      {friday_}
      {saturday_}
      {sunday_}
      {empty && 
        <div className={styles.guide}>
          <h4>SET YOUR PERSONAL  SCHEDULE TO STAY ORGANISED</h4>
        </div>
      }
      {empty && example}
      {empty && 
       <div className={styles.guide}>
         
          <ul>
              <b>Success and time management tips !!</b> <br/>
              <li>Start your day right.</li>
              <li>Have a plan for what you want to accomplish.</li>
              <li>Break tasks into reasonable units.</li>
              <li>Prioritize tasks and refuse inessential tasks.</li>
              <li>Plan time for meals, exercising, and socializing.</li>
              <li>Work on your dreams one step at a time.</li>
          </ul>
          <h4>The goal is academic excellence 🎓</h4>
       </div>
       }
    </div>
  )
}
export default Event;