import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default function(sequelize, DataTypes) {
  return sequelize.define('order', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: 'order_statuses',
        key: 'id'
      }
    },
    order_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    shipping_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    billing_address_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'addresses',
        key: 'id'
      },
      unique: "billing_address_unique"
    },
    shipping_address_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'addresses',
        key: 'id'
      },
      unique: "shipping_address_unique"
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    total_discount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'orders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "billing_address_unique",
        unique: true,
        fields: [
          { name: "billing_address_id" },
        ]
      },
      {
        name: "pk_orders",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "shipping_address_unique",
        unique: true,
        fields: [
          { name: "shipping_address_id" },
        ]
      },
    ]
  });
};
