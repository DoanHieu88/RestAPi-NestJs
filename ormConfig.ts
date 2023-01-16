import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME ,
  port: Number(process.env.DB_PORT) ,
  username: process.env.DB_USERNAME ,
  password: process.env.DB_PASSWORD ,
  synchronize: true,
  entities: ['dist/src/**/**.entity.js'],
  migrations: ['dist/src/database/migration/**/*.js'],
  cli: {
    entitiesDir: 'src/entity/',
    migrationsDir: 'src/database/migration',
  },
};

export default config;
 