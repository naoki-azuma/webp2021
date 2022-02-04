import express from "express";
import cors from "cors";
//import sequelize from "sequelize";
import { User, Karuta, sequelize } from "./models.js";
import { checkJwt, getUser } from "./auth0.js";

//import * as data from "./sample-data.js";
//import * as data2 from "./karuta-data.js";

const app = express();
app.use(cors());
app.use(express.json());


app.get("/questions", async (req, res) => {
  const limit=60;
  const ofset=0;
  const tmp = await Karuta.findAll({
    order: sequelize.random(),
    limit,
    ofset
  });
  let ret=[];
  for(let i=0;i<15;i++){
    const t=4*i
    ret.push( {'correct' : tmp[t], 'choices': [ tmp[t+1], tmp[t+2], tmp[t+3] ] });
  }
  
  res.json(ret);
});


//kokokaraatarasii

app.get("/ranking", async (req, res) => {
  const limit = 30;
  const offset = 0;
  const ranking = await User.findAll({
    order: [
      ['bestscore', 'DESC'],
      ['besttime', 'ASC'],
    ],
    limit,
    offset,
  });
  res.json(ranking);
});

//kokomade


app.post("/grades", checkJwt, async (req, res) => {
  const auth0User = await getUser(req.get("Authorization"));
  const [user, created] = await User.findOrCreate({
    where: { sub: auth0User.sub },
    defaults: {
      nickname: auth0User.nickname,
      bestscore: 0,
      besttime: 0,
    },
  });
  if (!created) {
    user.nickname = auth0User.nickname;
    await user.save();
  }

  const new_score=req.body.score;
  const new_time=req.body.time;

  if(user.bestscore<new_score){
    user.bestscore=new_score;
    user.besttime=new_time;
    await user.save();
  }else if(new_score==user.bestscore && user.besttime>new_time){
    user.besttime=new_time;
    await user.save();
  }

  res.json(user);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});