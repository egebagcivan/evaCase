import { DataTypes } from 'sequelize';
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";

@Table({ timestamps: true })
class Share extends Model {
    @Column({ autoIncrement: true, primaryKey: true, type: DataType.INTEGER })
    public id!: number;

    @Column({ type: DataType.STRING(3), unique: true, allowNull: false })
    public symbol!: string;

    @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
    public price!: number;

}

export { Share };
