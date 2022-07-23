import mongoose from 'mongoose';
import dotnev from 'dotenv';

import app from './app';

dotnev.config();

const PORT = process.env.PORT;
const DATABASE: string = process.env.DATABASE || '';
const DATABASE_PASSWORD: string = encodeURIComponent(
  process.env.DATABASE_PASSWORD || ''
);

const DB: string = DATABASE.replace('<PASSWORD>', DATABASE_PASSWORD);

console.log(DB);

mongoose
  .connect(DB)
  .then((_con: any) => {
    console.log('Database Connection Successful');
  })
  .catch((err: Error) => console.log(err));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
