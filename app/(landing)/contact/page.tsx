import { getProfile } from "@/actions/profile.action";

export default async function Page() {
  const profile = await getProfile();
  console.log(profile);

  return <div>{profile ? profile?.name : "Error occurred"}</div>;
}
