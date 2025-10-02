//routes/user.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

const RIOT_API_KEY = 'RGAPI-9f774a5d-71e0-4178-93a4-f0baeed189e3' //나중에 환경변수에 넣기
const gameName = '지켜줄게용용'
const tagLine = 'kr1'

const getUserPUUID = async (gameName,tagLine)=>{
    try{
        const accountResponse 
        = await axios.get(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`,// paramiter로 요청 url이 들어감
            {
                headers:{
                    'X-Riot-Token': RIOT_API_KEY
                }
            }
        )
        return accountResponse.data.puuid;
    } catch(error){
        console.error('Error fetching data:', error.response ? error.response.data:error.message);
    }
}

router.get('/', async(req,res)=>{
    //res.json(await getUserPUUID(gameName, tagLine)); 이렇게 보내는것보다 json형태로 보내는게 좋다고 함
    res.json({
        puuid: await getUserPUUID(gameName,tagLine)
    });


});

 module.exports = router  //앞에서 만든 router 객체를 외부에서 사용하도록 내보냄. index.js파일에서 user.js파일을 가져오기 위해 작성함


