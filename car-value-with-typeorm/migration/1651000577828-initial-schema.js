const { MigrationInterface, QueryRunner, Table } = require("typeorm");

module.exports = class initialSchema1651000577828 {
    name = 'initialSchema1651000577828'
 
    async up(queryRunner) {
        await queryRunner.createTable(
        new Table({
            name: 'user',
            columns: [
            {
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'email',
                type: 'varchar',
            },
            {
                name: 'password',
                type: 'varchar',
            },
            {
                name: 'admin',
                type: 'boolean',
                default: 'true',
            },
            ],
        }),
        );
    
        await queryRunner.createTable(
        new Table({
            name: 'report',
            columns: [
            {
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            { name: 'approved', type: 'boolean', default: 'false' },
            { name: 'price', type: 'float' },
            { name: 'make', type: 'varchar' },
            { name: 'model', type: 'varchar' },
            { name: 'year', type: 'integer' },
            { name: 'lng', type: 'float' },
            { name: 'lat', type: 'float' },
            { name: 'mileage', type: 'integer' },
            { name: 'userId', type: 'integer' },
            ],
        }),
        );
    }
    
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE ""report""`);
        await queryRunner.query(`DROP TABLE ""user""`);
    }

    // async up(queryRunner) {
    //     await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "admin" boolean NOT NULL DEFAULT (0), "email" varchar NOT NULL, "password" varchar NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))`);
    //     await queryRunner.query(`CREATE TABLE "report" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "approved" boolean NOT NULL DEFAULT (0), "price" integer NOT NULL, "make" varchar NOT NULL, "model" varchar NOT NULL, "year" integer NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "mileage" integer NOT NULL, "user_id" integer NOT NULL, "approver_id" integer)`);
    //     await queryRunner.query(`CREATE TABLE "temporary_report" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "approved" boolean NOT NULL DEFAULT (0), "price" integer NOT NULL, "make" varchar NOT NULL, "model" varchar NOT NULL, "year" integer NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "mileage" integer NOT NULL, "user_id" integer NOT NULL, "approver_id" integer, CONSTRAINT "FK_c6686efa4cd49fa9a429f01bac8" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_6b35b16340546949e26b7600abe" FOREIGN KEY ("approver_id") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
    //     await queryRunner.query(`INSERT INTO "temporary_report"("id", "approved", "price", "make", "model", "year", "latitude", "longitude", "mileage", "user_id", "approver_id") SELECT "id", "approved", "price", "make", "model", "year", "latitude", "longitude", "mileage", "user_id", "approver_id" FROM "report"`);
    //     await queryRunner.query(`DROP TABLE "report"`);
    //     await queryRunner.query(`ALTER TABLE "temporary_report" RENAME TO "report"`);
    // }

    // async down(queryRunner) {
    //     await queryRunner.query(`ALTER TABLE "report" RENAME TO "temporary_report"`);
    //     await queryRunner.query(`CREATE TABLE "report" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "approved" boolean NOT NULL DEFAULT (0), "price" integer NOT NULL, "make" varchar NOT NULL, "model" varchar NOT NULL, "year" integer NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "mileage" integer NOT NULL, "user_id" integer NOT NULL, "approver_id" integer)`);
    //     await queryRunner.query(`INSERT INTO "report"("id", "approved", "price", "make", "model", "year", "latitude", "longitude", "mileage", "user_id", "approver_id") SELECT "id", "approved", "price", "make", "model", "year", "latitude", "longitude", "mileage", "user_id", "approver_id" FROM "temporary_report"`);
    //     await queryRunner.query(`DROP TABLE "temporary_report"`);
    //     await queryRunner.query(`DROP TABLE "report"`);
    //     await queryRunner.query(`DROP TABLE "user"`);
    // }
}
