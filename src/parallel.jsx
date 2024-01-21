import React from "react";
import { useQuery, useQueries } from "@tanstack/react-query";

const Parallel = () => {
  const [userIds, setUserIds] = React.useState([1, 2]);

  //   userIds.forEach((userId) => {
  //     const userQuery = useQuery({
  //       quryKey: ["userId", userId],
  //       queryFn: async () => {
  //         const data = await fetch(`https://dummyjson.com/users/${userId}`).then(
  //           (res) => res.json()
  //         );
  //         return data;
  //       },
  //     });
  //   });

  const userQueries = useQueries({
    queries: userIds?.map((userId) => {
      return {
        quryKey: ["user", userId],
        queryFn: async () => {
          const data = await fetch(
            `https://dummyjson.com/users/${userId}`
          ).then((res) => res.json());
          return data;
        },
      };
    }),
  });

  return (
    <div>
      <button
        onClick={() =>
          setUserIds((prev) => {
            return [...prev, Date.now()];
          })
        }
      >
        Load more
      </button>

      {userIds.map((id) => (
        <h1 key={id}>{id}</h1>
      ))}
    </div>
  );
};

export default Parallel;
