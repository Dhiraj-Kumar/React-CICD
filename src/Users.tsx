import { useEffect } from 'react'
import { getUsers } from "./redux/appSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Users() {
    const dispatch = useDispatch<any>();
    const users = useSelector((state: any) => state.app.users);
    useEffect(() => {
        dispatch(getUsers());
    }, [])

    return (
        <div>
            <ul>
                {
                    users.map((item: any) => <li>{item.firstName}</li>)
                }
            </ul>
        </div>
    )
}
