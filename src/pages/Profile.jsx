import { useSelector } from "react-redux/es/exports";
import ProfileDetails from "../components/ProfileDetails";
import AccessDenied from "../components/AccessDenied";

const Profile = () => {
  const { token } = useSelector((state) => state.tokenBox);

  return (
    <>
    {token ? <ProfileDetails /> : <AccessDenied />}
    </>
    );
};

export default Profile;
