import { IUser } from "../../types/IUser";
import Typography from '@mui/material/Typography';


export function UserItem({ item }: IProps): JSX.Element {
  return (
    <div className="user-item_wrapper">
        <img src="" alt="" />
        <div>
          <Typography variant="h2">Leslie Alexander</Typography>
        </div>
    </div>
  );
}

interface IProps {
  item: IUser;
}