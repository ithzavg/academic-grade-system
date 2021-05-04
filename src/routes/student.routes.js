import {Router} from 'express';
import {connect} from '../database';
import {ObjectID} from 'mongodb';

const router = Router();
router.get('/:id', async (req,res) => {
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('studentsInfo').aggregate([{$match:{"groups.students.id":id}},{$unwind:"$groups"},{$unwind:"$groups.students"},{$match:{"groups.students.id":id}},{$project:{"groups.students":1}}]).toArray();
    res.json(result);
});

export default router;