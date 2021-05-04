import {Router} from 'express';
import {connect} from '../database';
import {ObjectID} from 'mongodb';

const router = Router();

router.get('/:_id/:id', async (req,res) => {
   const {_id} = req.params;
   const {id} = req.params;
   const db = await connect();
   const result = await db.collection('studentsInfo').findOne({"_id": ObjectID(_id)},{projection:{groups: {$elemMatch: { id: id}}}});
   console.log(result)
   res.json(result);
});

export default router;