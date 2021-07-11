// import section
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import bodyParser from 'body-parser';
import Pusher from 'pusher';
import cors from 'cors';
// app config
const app = express();

const pusher = new Pusher({
  appId: a,
  key: b,
  secret: c,
  cluster: d,
  useTLS: e
});

const port = process.env.PORT || 9000;



//middleware

app.use(bodyParser.json());
app.use(cors());

// DB Configure
const connectionURL = url
mongoose.connect(connectionURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.once('open', ()=> {
  console.log('DB connected');

  const msgCollection = db.collection('messagecontents');
  const changeStream = msgCollection.watch();

  changeStream.on('change', (change) => {
    console.log(change);

    if (change.operationType === 'insert') {
      const messageDetails = change.fullDocument;
      pusher.trigger('messages', 'inserted', {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      })
    } else {
      console.log('Error triggering Pusher');
    }
  })

})
// ???


// app routes
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
})

app.get('/messages/sync', (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

app.post('/messages/new', (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  })
})

// listen
app.listen(port, () => console.log(`Listening on port: ${port}`));
