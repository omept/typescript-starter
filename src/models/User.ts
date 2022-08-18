import { Model } from 'objection';

import Table from '../resources/enums/Table';

class User extends Model {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  createdAt!: string;
  updatedAt!: string;

  static get tableName(): string {
    return Table.USERS;
  }

  $beforeInsert() {
    this.createdAt = new Date().toJSON().slice(0, 19).replace('T', ' ');
    this.updatedAt = new Date().toJSON().slice(0, 19).replace('T', ' ');
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toJSON().slice(0, 19).replace('T', ' ');
  }
}

export default User;
