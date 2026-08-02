import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1785574039141 implements MigrationInterface {
    name = 'Initial1785574039141'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."testimonials_status_enum" AS ENUM('pending', 'approved', 'rejected')`);
        await queryRunner.query(`CREATE TABLE "testimonials" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(255) NOT NULL, "company" character varying(150), "content" text NOT NULL, "rating" smallint NOT NULL, "status" "public"."testimonials_status_enum" NOT NULL DEFAULT 'pending', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_63b03c608bd258f115a0a4a1060" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "idx_testimonials_status_created_at" ON "testimonials"  ("status", "createdAt") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."idx_testimonials_status_created_at"`);
        await queryRunner.query(`DROP TABLE "testimonials"`);
        await queryRunner.query(`DROP TYPE "public"."testimonials_status_enum"`);
    }

}
