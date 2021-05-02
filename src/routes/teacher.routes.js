import {Router} from 'express';
import {connect} from '../database';
import {ObjectID} from 'mongodb';

const router = Router();

router.get('/',async(req,res) => {
    const db = await connect();
   const result = await db.collection('studentsInfo').find({}).toArray();
   res.json(result);
});

router.get('/:id', async (req,res) => {
    const {id} = req.params;
    const db = await connect();
     const result = await db.collection('studentsInfo').findOne({_id:ObjectID(id)});
    res.json(result)
});

export default router;