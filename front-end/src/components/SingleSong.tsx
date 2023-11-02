import { Link } from "react-router-dom";
import { songInterface } from "../interfaces/interface";

export function SingleSong({key, item}:{key:string, item:songInterface}){
    return (
        <tr style={{ cursor: "alias" }} key = {key}>
          <td>
            <Link to={`/songs/${item.id}`}>
              {item["name"]}
            </Link>
          </td>
          <td>
            <Link to={`/songs/${item.id}`}>
              {item["artist"]}
            </Link>
          </td>
          <td>
            <Link to={`/songs/${item.id}`}>
              {item.is_favorite ? (<span>Yes</span>) : (<span>No</span>)}
            </Link>
          </td>
        </tr>
    );
}
