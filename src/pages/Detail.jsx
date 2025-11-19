import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useParams, Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from("crewmates")
        .select("*")
        .eq("id", id)
        .single();

      if (error) console.log(error);
      else setCrewmate(data);
    };
    fetchCrewmate();
  }, [id]);

  if (!crewmate) return <p>Loading...</p>;

  return (
    <div>
      <h1>{crewmate.name}</h1>
      <p>Attribute 1: {crewmate.attributes?.attribute1}</p>
      <p>Attribute 2: {crewmate.attributes?.attribute2}</p>
      <p>Extra: {crewmate.extra}</p>
      <Link to={`/crewmate/${id}/edit`}>Edit</Link>
    </div>
  );
}