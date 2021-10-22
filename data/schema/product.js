import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default function(sequelize, DataTypes) {
  return sequelize.define('product', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product_statuses',
        key: 'id'
      }
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'brands',
        key: 'id'
      }
    },
    sku: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    regular_price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    discount_price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    num_reviews: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'products',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_products",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
