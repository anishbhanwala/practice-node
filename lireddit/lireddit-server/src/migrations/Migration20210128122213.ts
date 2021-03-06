import { Migration } from "@mikro-orm/migrations";

export class Migration20210128122213 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null);'
    );

    this.addSql('drop table if exists "SequelizeMeta" cascade;');

    this.addSql('drop table if exists "tokens" cascade;');

    this.addSql('drop table if exists "users" cascade;');
  }
}
