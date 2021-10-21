import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _address from  "./address.js";
import _brand from  "./brand.js";
import _category from  "./category.js";
import _order_product from  "./order_product.js";
import _order_status from  "./order_status.js";
import _order from  "./order.js";
import _product_category from  "./product_category.js";
import _product_image from  "./product_image.js";
import _product_review from  "./product_review.js";
import _product_status from  "./product_status.js";
import _product from  "./product.js";
import _user from  "./user.js";

export default function initModels(sequelize) {
  var address = _address(sequelize, DataTypes);
  var brand = _brand(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var order_product = _order_product(sequelize, DataTypes);
  var order_status = _order_status(sequelize, DataTypes);
  var order = _order(sequelize, DataTypes);
  var product_category = _product_category(sequelize, DataTypes);
  var product_image = _product_image(sequelize, DataTypes);
  var product_review = _product_review(sequelize, DataTypes);
  var product_status = _product_status(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  category.belongsToMany(product, { as: 'product_id_products', through: product_category, foreignKey: "category_id", otherKey: "product_id" });
  product.belongsToMany(category, { as: 'category_id_categories', through: product_category, foreignKey: "product_id", otherKey: "category_id" });
  order.belongsTo(address, { as: "billing_address", foreignKey: "billing_address_id"});
  address.hasOne(order, { as: "order", foreignKey: "billing_address_id"});
  order.belongsTo(address, { as: "shipping_address", foreignKey: "shipping_address_id"});
  address.hasOne(order, { as: "shipping_address_order", foreignKey: "shipping_address_id"});
  product.belongsTo(brand, { as: "brand", foreignKey: "brand_id"});
  brand.hasMany(product, { as: "products", foreignKey: "brand_id"});
  category.belongsTo(category, { as: "parent", foreignKey: "parent_id"});
  category.hasMany(category, { as: "categories", foreignKey: "parent_id"});
  product_category.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(product_category, { as: "product_categories", foreignKey: "category_id"});
  order.belongsTo(order_status, { as: "order_status", foreignKey: "order_status_id"});
  order_status.hasMany(order, { as: "orders", foreignKey: "order_status_id"});
  order_product.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(order_product, { as: "order_products", foreignKey: "order_id"});
  product.belongsTo(product_status, { as: "status", foreignKey: "status_id"});
  product_status.hasMany(product, { as: "products", foreignKey: "status_id"});
  order_product.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(order_product, { as: "order_products", foreignKey: "product_id"});
  product_category.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(product_category, { as: "product_categories", foreignKey: "product_id"});
  product_image.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(product_image, { as: "product_images", foreignKey: "product_id"});
  product_review.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(product_review, { as: "product_reviews", foreignKey: "product_id"});
  address.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(address, { as: "addresses", foreignKey: "user_id"});
  order.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(order, { as: "orders", foreignKey: "user_id"});
  product_review.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(product_review, { as: "product_reviews", foreignKey: "user_id"});

  return {
    address,
    brand,
    category,
    order_product,
    order_status,
    order,
    product_category,
    product_image,
    product_review,
    product_status,
    product,
    user,
  };
}
