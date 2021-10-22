import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default function(sequelize, DataTypes) {
  return sequelize.define('order_status', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    inserted_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'order_statuses',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_order_statuses",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
