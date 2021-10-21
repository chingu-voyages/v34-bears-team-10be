import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default function(sequelize, DataTypes) {
  return sequelize.define('product_image', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    alt: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      }
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
    tableName: 'product_images',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_product_images",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
