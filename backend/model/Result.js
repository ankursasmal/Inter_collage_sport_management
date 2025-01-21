let mysqlConection=require('../controllers/Connection')

let Result=`
create table if not exists Result (
 result_id INT AUTO_INCREMENT PRIMARY KEY,
 Event_evtId INT NOT NULL,
    upload_img  VARCHAR(5000),
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (Event_evtId) REFERENCES Event(reg_id)
    );`; 
 
    mysqlConection.query(Result,(err,result)=>{
        if(err){
            console.log('Event table not create',err);
        }
        else {
            console.log('Event table craete successfully ',result)
        }
    })
module.exports=Result
