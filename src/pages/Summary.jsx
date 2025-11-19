import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

export default function Summary() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from("crewmates")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.log(error);
      else setCrewmates(data);
    };

    fetchCrewmates();
  }, []);

  return (
    <div>
      <h1>Summary Page</h1>
      {crewmates.length === 0 ? (
        <p>No crewmates yet</p>
      ) : (
        <ul>
          {crewmates.map((c) => (
            <li key={c.id}>
              <Link to={`/crewmate/${c.id}`}>{c.name}</Link> |{" "}
              <Link to={`/crewmate/${c.id}/edit`}>Edit</Link> <br />
              Attributes: {c.attributes?.attribute1}, {c.attributes?.attribute2}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}