// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/taher-dev')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex items-center justify-center gap-4">
      <div>
        <div>Username: {data.login}</div>
        <div>Github followers: {data.followers}</div>
        <div>Github public repos: {data.public_repos}</div>
      </div>
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/taher-dev");
  return response.json();
};
