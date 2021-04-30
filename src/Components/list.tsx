import React, { FC, useEffect, useState } from "react";
import { list } from "../Services";

interface OwnProps {}

const List: FC<OwnProps> = (props) => {
  const [user_list, set_user_list] = useState<any[]>([]);
  useEffect(() => {
    list(1)
      .then((response) => {
        set_user_list(response?.data?.data);
      })
      .catch((e) => {
        console.log("Error", { ...e });
      });
  }, []);
  return (
    <div>
      {user_list.length > 0 && (
        <ul>
            {user_list.map((user, index) => {
                return <li key={`user_${index}`}>
                    <span>{user.first_name} {user.last_name}</span>
                    <img src={user.avatar} alt="User" width={100}/>
                </li>
            })}
        </ul>
      )}
      {user_list.length === 0 && <span>Users no found</span>}
    </div>
  );
};

export default List;
