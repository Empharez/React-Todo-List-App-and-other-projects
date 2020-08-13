import React from 'react';
function WordClock(){
    const styles = {
        fontSize: '30px'
      }
      const date = new Date();
      const hours = date.getHours();
      let timeOfDay;
      if (hours < 12) {
        timeOfDay = 'morning'
        styles.color = '#04756F'
      }else if (hours >= 12 && hours < 17){
        timeOfDay = 'afternoon'
        styles.color = '#2E0927'
      }else {
        timeOfDay = 'night'
        styles.color = '#D90000'
      }
    return(
        <div>
            <h1 style={styles}>It is currently about {date.getHours() } O'clock. Good {timeOfDay}!</h1>
        </div>
    )
}



export default WordClock;