import express from 'express'
import 'dotenv/config'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import routerGastos from './routes/gastos.route.js'
import routerRoomm from './routes/roomm.route.js'
import cors from 'cors'


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(__dirname + '/public'));

app.use('/gastos', routerGastos);
app.use('/roommates', routerRoomm);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('servidor escuchando ...')
})