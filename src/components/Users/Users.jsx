import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users= useLoaderData();
    return (
        <div >
            <h1 className="mt-12 text-3xl font-bold capitalize">dummy users loader({users.length}).</h1>
            <div className="mt-8 grid grid-cols-3">
                {
                    users.map(user => <User key={user.id} user={user}></User>) 
                }
            </div>
        </div>
    );
};

export default Users;