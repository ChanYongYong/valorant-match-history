const express = require('express')
const app = express();
const port = 8080;


const userRouter = require('./routes/user');

//json 요청 데이터 파싱 미들웨어
app.use(express.json())//요청 데이터 파싱

//라우터 적용
app.use('/user',userRouter);


//실행
app.listen(port,()=>{
    console.log(`${port} 서버 실행`);
}); 