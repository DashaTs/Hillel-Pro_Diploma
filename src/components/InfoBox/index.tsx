import { UserItem } from "../UserItem";

export function InfoBox({ item }: any): JSX.Element {
  return (
    <div>
      <UserItem item={item}/ >
    </div>
  );
}
