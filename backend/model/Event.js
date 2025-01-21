let mysqlConection=require('../controllers/Connection')

let Event=`
create table if not exists Event (
 event_id INT AUTO_INCREMENT PRIMARY KEY,
 user_regId INT NOT NULL,
    sport_name  VARCHAR(10) NOT NULL,
    prize_pool VARCHAR(100) NOT NULL,
    sport_type VARCHAR(20) NOT NULL,
    status boolean NOT NULL,
    desc VARCHAR(20) ,
    start_date DATETIME,
    end_date DATETIME,
    FOREIGN KEY (user_regId) REFERENCES User(reg_id)
    );`; 
 
    mysqlConection.query(Event,(err,result)=>{
        if(err){
            console.log('Event table not create',err);
        }
        else {
            console.log('Event table craete successfully ',result)
        }
    })
module.exports=Event
