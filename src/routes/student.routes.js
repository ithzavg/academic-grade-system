import {Router} from 'express';
import {connect} from '../database';


const router = Router();

router.get('/:id', async (req,res) => {
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('studentsInfo').aggregate([{$match:{"groups.students.id":id}},{$unwind:"$groups"},{$unwind:"$groups.students"},{$match:{"groups.students.id":id}},{$project:{"groups.students":1}}]).toArray();
    res.json(result);
});

router.put('/:id', async (req,res) => {
    const {id} = req.params;
    const updateNotes ={
                       
                note_1:req.body.note_1,
                note_2:req.body.note_2,
                note_3:req.body.note_3,
                note_4:req.body.note_4
            
    };
    const db = await connect();
    await db.collection('studentsInfo').updateOne(
        {"groups.students.id":id},
        {$set:{"groups.$[].students.$[student].notes":updateNotes}},
        {arrayFilters:[{"student.id":id}]}
    );
    res.json({
        message: `Notes of Student ${id} Update`
    })
});

export default router;