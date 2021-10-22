import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default function(sequelize, DataTypes) {
  return sequelize.define('address', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    postal_code: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'addresses',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_addresses",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
