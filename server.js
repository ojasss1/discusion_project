import express from 'express';
import { createRequire } from "module";  const require = createRequire(import.meta.url);
const app = express();
import path from 'path';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
const cron = require('node-cron');
//const multer = require('multer');
const serviceAccount =  require('./key.json');
import admin from 'firebase-admin';
import bp from 'body-parser';
import cors from 'cors';


app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended:true}));
const __dirname = dirname(fileURLToPath(import.meta.url));

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  //storageBucket: 'gs://billinginv-78309.appspot.com',
};

//app.use(express.static(path.join(__dirname, 'build')));


//const upload = multer({ storage: multer.memoryStorage() });


admin.initializeApp(firebaseConfig);
const db = admin.firestore();
//const bt = admin.storage().bucket();

//app.use(express.static(path.join(__dirname, 'build')));


cron.schedule('*/7 * * * * *', () => {
  fetch('https://gdsc-task.onrender.com/keep-alive').then((res) => res.text()).then((data) => console.log(data)).catch((e) => console.log(e));
});


app.get('/err', (req, res) => {
  res.send("Error");
});


app.get('/keep-alive', (req, res) => {
  res.send('Server is alive');
});


// app.post('/addpost', upload.single('file'), async(req, res) => {
//   try{
//     const dt = req.file;
//     const filename = dt.originalname;
//     await bt.file(`images/${filename}`).save(dt.buffer);
//
//     const [url] = await bt.file(`images/${filename}`).getSignedUrl({
//       action: 'read',
//       expires: '01-01-2025',
//     });
//
//     req.body.url = url;
//     const data = req.body;
//     const userId = req.body.userid;
//     await db.collection("posts").doc(userId).set(data);
//
//     res.redirect('/SocialMediaFull');
//   }
//    catch (error) {
//     console.log(error); res.redirect('/err');
//   }
// });
//
//
// app.get('/getpost', async (req, res) => {
//   try{
//   const dt = await db.collection("posts").get();
//   const rr = dt.docs.map((doc) => ({id: doc.id, ...doc.data()}));
//   res.send(rr);
// } catch(e){
//   console.log(e);  res.redirect('/err');
// }
// });
//
//
// app.post('/addtodo', async (req, res) => {
//   try {
//     const dt = req.body;
//     dt.iscompleted = false;
//     await db.collection("todo").doc("dsdsv").collection("tasks").doc().set(dt);
//
//     res.redirect('/TodoList');
//   } catch (e) {
//     console.log(e);  res.redirect('/err');
//   }
// });
//
//
// app.get('/gettodo', async (req, res) => {
//   try {
//     const dt = req.body;
//     const userId = req.body.userid;
//
//     const r = await db.collection("todo").doc("dsdsv").collection("tasks").get();
//     const rr = r.docs.map((doc) => doc.data());
//
//
//     res.send(rr);
//   } catch (e) {
//     console.log(e);  res.redirect('/err');
//   }
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(5000, () => {console.log("Running");});
