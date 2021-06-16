import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../actions/category.action";
import "./styles.css";
const MenuHeader = () => {
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const renderCategories = (cat) => {
    let categories = [];
    for (const category of cat) {
      categories.push(
        <li key={category._id}>
          {category.parentId ? (
            <a
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}
            >
              {category.name}
            </a>
          ) : (
            <span>{category.name}</span>
          )}
          {category.children.length > 0 ? (
            <ul key={category._id}>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return categories;
  };

  return (
    <div className="menu-header">
      <ul>{categories.length > 0 ? renderCategories(categories) : null}</ul>
    </div>
  );
};

export default MenuHeader;
