import express, {json} from 'express';
import  IndexRoutes from './routes/index.routes';
import TeacherIndex from './routes/teacher.routes';
import GroupIndex from './routes/group.routes';
import StudentIndex from './routes/student.routes';
const { config } = require('./config/index');

const app = express();

app.set('port',config.port);
app.use(json());

app.use(IndexRoutes);
app.use('/teachers',TeacherIndex);
app.use('/group',GroupIndex);
app.use('/student',StudentIndex);

export default app;