import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "ishida",
  image: "https://source.unsplash.com/N04FIfHhv_k",
  email: "aaaaa@gmail.com",
  phone: "090-0000-0000",
  company: {
    name: "test株式会社"
  },
  website: "google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>botann</PrimaryButton>
      <SecondaryButton>aasdf</SecondaryButton>
      <SearchInput></SearchInput>
      <UserCard user={user}></UserCard>
    </div>
  );
}
