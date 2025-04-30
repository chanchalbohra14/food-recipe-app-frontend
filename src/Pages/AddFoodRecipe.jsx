import React from "react";
import { useForm } from "react-hook-form";

const AddFoodRecipe = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can handle form data, maybe send to an API
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Title</label>
          <input type="text" className="input" {...register("title")} />
        </div>

        <div className="form-control">
          <label>Time</label>
          <input type="text" className="input" {...register("time")} />
        </div>

        <div className="form-control">
          <label>Ingredients</label>
          <textarea
            className="input-textarea"
            rows="5"
            {...register("ingredients")}
          ></textarea>
        </div>

        <div className="form-control">
          <label>Instructions</label>
          <textarea
            className="input-textarea"
            rows="5"
            {...register("instructions")}
          ></textarea>
        </div>

        <div className="form-control">
          <label>Recipe Image</label>
          <input type="file" className="input" {...register("file")} />
        </div>

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddFoodRecipe;
