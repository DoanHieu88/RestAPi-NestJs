import {MigrationInterface, QueryRunner} from "typeorm";

export class update1673599706346 implements MigrationInterface {
    name = 'update1673599706346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`code\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`importDate\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`amount\` double NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`note\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`image\` \`image\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`image\` \`image\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`note\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`amount\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`importDate\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`code\``);
    }

}
