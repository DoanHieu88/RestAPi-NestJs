import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'nestjs',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '12345678Aaa',
  synchronize: true,
  entities: ['dist/src/**/**.entity.js'],
  migrations: ['dist/src/database/migration/**/*.js'],
  cli: {
    entitiesDir: 'src/entity/',
    migrationsDir: 'src/database/migration',
  },
};

export default config;
