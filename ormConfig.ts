import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  database: 'nestjs',
  port: 3306,
  username: 'root',
  password: '123456',
  synchronize: true,
  entities: ['dist/src/**/**.entity.js'],
  migrations: ['dist/src/database/migration/**/*.js'],
  cli: {
    entitiesDir: 'src/entity/',
    migrationsDir: 'src/database/migration',
  },
};

export default config;
