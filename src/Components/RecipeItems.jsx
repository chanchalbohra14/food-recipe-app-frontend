import React, { useState } from "react";
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const RecipeItems = () => {
  const [allRecipes, setAllRecipes] = useState();

  return (
    <div>
      <div className="card-container">
        {allRecipes?.map((item, index) => {
          return (
            <div
              key={index}
              className="card"
              onDoubleClick={() => navigate(`/recipe/${item._id}`)}
            >
              <img
                src={`http://localhost:5000/images/${item.coverImage}`}
                width="120px"
                height="100px"
              ></img>
              <div className="card-body">
                <div className="title">{item.title}</div>
                <div className="icons">
                  <div className="timer">
                    <BsStopwatchFill />
                    {item.time}
                  </div>
                  {!path ? (
                    <FaHeart
                      onClick={() => favRecipe(item)}
                      style={{
                        color: favItems.some((res) => res._id === item._id)
                          ? "red"
                          : "",
                      }}
                    />
                  ) : (
                    <div className="action">
                      <Link to={`/editRecipe/${item._id}`} className="editIcon">
                        <FaEdit />
                      </Link>
                      <MdDelete
                        onClick={() => onDelete(item._id)}
                        className="deleteIcon"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeItems;
