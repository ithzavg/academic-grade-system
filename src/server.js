import express, {json} from 'express';
import  IndexRoutes from './routes/index.routes';
import TeacherIndex from './routes/teacher.routes';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(json());

app.use(IndexRoutes);
app.use('/teachers',TeacherIndex);


export default app;