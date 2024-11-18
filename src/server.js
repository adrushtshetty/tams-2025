const { error } = require('console');
const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const fs = require('fs');

const url = "mongodb://127.0.0.1:27017";
const app = express();

app.use(fileUpload());

app.post('/api/upload-event', (req,res)=>{
    console.log("hello there");
    if(!req.files || !req.files.eventImage) {
        return res.status(400).send("no file uploaded");
    }

    const eventImage = req.files.eventImage;
    const uploadPath = path.join(__dirname, '../public/static/img/performer/', eventImage.name);

    eventImage.mv(uploadPath, (err) => {
        if(err){
            return res.status(500).send(err);
        }

        res.status(200).send('File uploaded successfully');
        MongoClient.connect(url)
        .then((connectedClient)=>{
            client = connectedClient;
        })
        .then(()=>{
            const collection = client.db('events').collection('event');
            return collection.insertOne({"event_name": req.body.eventName, "desc": req.body.description, "per_team": req.body.perteam , "img_path": path.join("/static/img/performer/",eventImage.name)})
        })
        .catch((err)=>{
            console.log(err);
        })
    });
});

app.get('/api/events', async (req, res)=>{
    try {
        const client = await MongoClient.connect(url);
        const collection = client.db('events').collection('event');
        const events = await collection.find({}).toArray();
        client.close();
        res.json(events);
    } catch (err) {
        console.error('Error fetching events: ', err);
        res.status(500).json({error: 'Error fetching events' });
    }
});

app.put('/api/edit-event/:id', async(req,res)=>{
    try {
        const client = await MongoClient.connect(url);
        const collection = client.db('events').collection('event');
        const ids = new ObjectId(req.params.id);
        
        const oldEvent = await collection.findOne({
            _id: ids
        });
        var eventImagePath = oldEvent.img_path;
        if (req.files && req.files.eventImage){
            const eventImage = req.files.eventImage;
            eventImagePath = path.join("/static/img/performer/", eventImage.name)
            
            if(oldEvent && oldEvent.img_path){
                const oldImage = path.join(__dirname, '../public', oldEvent.img_path);
                if(fs.existsSync(oldImage)){
                    fs.unlinkSync(oldImage);
                }
            }

            await eventImage.mv(path.join(__dirname, '../public/static/img/performer', eventImage.name));
            
        
        };
        await collection.updateOne(
            {_id: ids},
            {$set: { "event_name": req.body.eventName, "desc": req.body.desc, "per_team": req.body.perteam, "img_path": eventImagePath}}
        )
        client.close();
        res.status(200).send("Event updated successfully");
    } catch(err) {
        console.error("Error updating event:", err);
        res.status(500).json({error: 'Error updating event'});
    }
});

app.delete('/api/delete-event/:id', async(req, res)=>{
    try{
        const client = await MongoClient.connect(url);
        const collection = client.db('events').collection('event');
        const ids = new ObjectId(req.params.id); 

        const eventDelete = await collection.findOne({ _id: ids});

        if(eventDelete && eventDelete.img_path){
            const imagepath = path.join(__dirname, '../public', eventDelete.img_path);
            if (fs.existsSync(imagepath)){
                fs.unlinkSync(imagepath);
            }
        }

        await collection.deleteOne({_id: ids});
        client.close();
        res.status(200).send("Event Delete Successfully");
    } catch(error){
        console.error("Error deleting event");

    }
});

app.listen(5000, ()=>{
    console.log('Server running on port 5000');
});