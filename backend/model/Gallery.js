let mysqlConection=require('../controllers/Connection')

let Gallery=`
create table if not exists Gallery (
 sport_id INT AUTO_INCREMENT PRIMARY KEY,
 Event_evtId INT NOT NULL,
    upload_img  VARCHAR(5000),
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (Event_evtId) REFERENCES Event(reg_id)
    );`; 
 
    mysqlConection.query(Gallery,(err,result)=>{
        if(err){
            console.log('Event table not create',err);
        }
        else {
            console.log('Event table craete successfully ',result)
        }
    })
module.exports=Gallery
