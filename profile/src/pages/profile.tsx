import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user } = useAuth0();

  console.log(user);
  return (
    <div>
      <h3>Profile</h3>
      <form>
        <label>Name</label>
        <p>{user?.name}</p>
        <label>Email</label>
        <p>{user?.email}</p>
        <label>Nickname</label>
        <p>{user?.nickname}</p>
      </form>
    </div>
  );
}
