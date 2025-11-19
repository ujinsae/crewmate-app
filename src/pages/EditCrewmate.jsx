import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useParams, useNavigate } from "react-router-dom";

export default function EditCrewmate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [attributes, setAttributes] = useState({ attribute1: "", attribute2: "" });
  const [extra, setExtra] = useState("");

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from("crewmates")
        .select("*")
        .eq("id", id)
        .single();

      if (error) console.log(error);
      else {
        setName(data.name);
        setAttributes(data.attributes || { attribute1: "", attribute2: "" });
        setExtra(data.extra || "");
      }
    };

    fetchCrewmate();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("crewmates")
      .update({ name, attributes, extra })
      .eq("id", id);

    if (error) console.log(error);
    else navigate("/");
  };

  const handleDelete = async () => {
    const { error } = await supabase.from("crewmates").delete().eq("id", id);
    if (error) console.log(error);
    else navigate("/");
  };

  return (
    <div>
      <h1>Edit Crewmate</h1>
      <form onSubmit={handleUpdate}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input
          value={attributes.attribute1}
          onChange={(e) =>
            setAttributes({ ...attributes, attribute1: e.target.value })
          }
        />
        <input
          value={attributes.attribute2}
          onChange={(e) =>
            setAttributes({ ...attributes, attribute2: e.target.value })
          }
        />
        <input value={extra} onChange={(e) => setExtra(e.target.value)} />
        <button type="submit">Update</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}