import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from 'express';
import app from './config/server';
import images from './modules/images/images.route';
import * as path from 'path';

async function startDatabase() {
    try {
      await createConnection()
      console.info("Connected to DB");
    } catch (error) {
      console.error("TypeORM connection error: ", error);
    }
}

async function startServer() {
    app.use('/uploads', express.static(path.join(__dirname, '..', '/uploads')));
    app.use('/images', images);

    app.listen(app.get('port'), () => {
        console.info(`running on port ${app.get('port')}`);
    });
}

async function bootstrap() {
    try {
      await startDatabase();
      await startServer();
    } catch (ex) {
      console.error(ex);
    }
}

bootstrap();
