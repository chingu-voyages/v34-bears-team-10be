import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default function(sequelize, DataTypes) {
  return sequelize.define('order_product', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subtotal: {
      type: DataTypes.DECIMAL,
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
    tableName: 'order_products',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_order_products",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
