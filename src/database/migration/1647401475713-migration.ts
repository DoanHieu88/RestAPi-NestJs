import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1647401475713 implements MigrationInterface {
    name = 'migration1647401475713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`alo\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`alo\``);
    }

}
