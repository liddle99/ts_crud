import {
    Table,
    Model,
    PrimaryKey,
    AutoIncrement,
    AllowNull,
    Column,
    DataType,
    Index,
    Unique,
} from "sequelize-typescript";

export interface usersAttributes {
    id: number;
    email: string;
    password: string;
    name: string;
}
@Table({
    timestamps: false,
})
export default class users extends Model implements usersAttributes {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    id!: number;

    @Unique
    // @Index("email-index")
    @AllowNull(false)
    @Column(DataType.STRING)
    email!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    password!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    name!: string;
}
