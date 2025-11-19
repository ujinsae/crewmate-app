import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function CreateCrewmate() {
  const [name, setName] = useState("");
  const [attributes, setAttributes] = useState({ attribute1: "", attribute2: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("crewmates")
      .insert([{ name, attributes }]);

    if (error) console.log(error);
    else navigate("/");
  };

  return (
    <div>
      <h1>Create Crewmate</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Attribute 1"
          value={attributes.attribute1}
          onChange={(e) => setAttributes({ ...attributes, attribute1: e.target.value })}
        />
        <input
          placeholder="Attribute 2"
          value={attributes.attribute2}
          onChange={(e) => setAttributes({ ...attributes, attribute2: e.target.value })}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}