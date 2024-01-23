import express from 'express';
import { createRequire } from "module";  const require = createRequire(import.meta.url);
const app = express();
import path from 'path';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
const cron = require('node-cron');
const serviceAccount =  require('./key.json');
import admin from 'firebase-admin';
import bp from 'body-parser';
import cors from 'cors';
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended:true}));
const __dirname = dirname(fileURLToPath(import.meta.url));

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
};

app.use(express.static(path.join(__dirname, 'build')));


admin.initializeApp(firebaseConfig);
const db = admin.firestore();


cron.schedule('*/7 * * * *', () => {
  fetch('https://discussion-project-h9ep.onrender.com/keep-alive').then((res) => res.text()).then((data) => console.log(data)).catch((e) => console.log(e));
});


app.get('/err', (req, res) => {
  res.send("Error");
});


app.get('/keep-alive', (req, res) => {
  res.send('Server is alive');
});

app.post("/addthread", async(req, res) => {
  try {

    var date = new Date();
    const dt = req.body;
    dt.post_time = {"day" : days[date.getDay()], "time" : date.getHours() + ":" + date.getMinutes()};

    dt.comments = [];
    dt.reactions = {likes : 0, hearts : 0, laughs : 0};
    await db.collection("threads").doc().set(dt);

    res.send("inserted");

  }
  catch (error) {
    res.send(error); console.log(error);
  }
});

app.get("/getthreads", async (req, res) => {
  try {

    const dt = await db.collection("threads").get();
    const obj = dt.docs.map((i) => ({id : i.id, ...i.data()}));
    /*
    for (const i of dt.docs){
      var obj = {};
      obj = {...i.data(), id : i.id};
      console.log(obj);
    }*/

    res.send(obj);

  }
  catch (error) {
    res.send(error); console.log(error);
  }
});

app.post("/getthread", async(req, res) => {
  try {

    const dt = await db.collection("threads").doc(req.body.id).get().then(d => d.data());

    res.send(dt);

  }
  catch (error) {
    res.send(error); console.log(error);
  }
})


app.post("/addcomment", async(req, res) => {
  try {

    var id = req.body.id;
    delete req.body.id;

    var thr = await db.collection("threads").doc(id).get().then(doc => doc.data());

    req.body.reactions = {likes : 0, dislikes : 0};
    thr["comments"].push(req.body);
    await db.collection("threads").doc(id).set(thr);

    res.send("commented");

  }
  catch (error) {
    res.send(error); console.log(error);
  }
});

app.post('/register', async(req, res) => {
  try{

    const userid = req.body.username;
    const passwd = req.body.passwd;
    const email = req.body.email;

    // console.log(userid, passwd, email);

    admin.auth()
    .createUser({
      email: email,
      emailVerified: false,
      password: passwd,
      displayName: userid,
    })
    .then((userRecord) => {
      console.log('Successfully created new user:', userRecord.uid);
      res.send("registered");
    })
    .catch((error) => {
      console.log(error);
      if (error.code == "auth/email-already-exists"){
        res.send("User exists");
      }
    });

    //const r = await db.collection("Users").doc(userid);

    // r.get().then(async (doc) => {
    //   if (!doc.exists){
    //     const data = {password : passwd,};
    //     await r.set(data);
    //     res.send("registered");
    //   }
    //   else{
    //     res.send("User exists");
    //   }
    // });
  }
  catch(err){
    console.log(err); res.send(err, "Registration failed");
  }
});


// app.post('/login', async(req, res) => {
//   try{
//
//     // console.log(req.body);
//     const email = req.body.email;
//     const passwd = req.body.passwd;
//
//     admin.auth()
//     .getUserByEmail(email)
//     .then((userRecord) => {
//       return admin.auth().verifyUserPassword(email, passwd);
//     })
//     .then(() => {
//       console.log("ad");
//     }
//     )
//     .catch(e => console.log(e));
//   //   var found = false;
//   //   const r = await db.collection("Users").get();
//   //   const arr = r.docs.map((doc) => ({id: doc.id, ...doc.data()}));
//   //
//   //   for (const k of arr){
//   //     if (k.id == userid && k.password == passwd) {
//   //       found = true;
//   //       res.send('Login Successfull'); break;
//   //     }
//   //   }
//   //
//   //   if (!found) res.send("User doesnt exist");
//   // }
// }
//   catch(err){
//     console.log(err); res.send("Login Failed");
//   }
// });

app.post("/reaction", async(req, res) => {
  try{

    const type = req.body.type;
    const id = req.body.id;

    var thr = await db.collection("threads").doc(id).get().then(doc => doc.data());
    thr.reactions[type]++;
    await db.collection("threads").doc(id).set(thr);

    res.send("ok");
  }
  catch(e){
    res.send(e); console.log(e);
  }
});



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(5000, () => {console.log("Running");});
