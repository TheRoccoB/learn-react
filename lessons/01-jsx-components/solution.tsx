// Lesson 01: JSX & Components
//
// In Vue, you'd write a Single File Component with <template> and <script setup>.
// In React, you write a function that returns JSX.
//
// ASSIGNMENT:
// 1. Define a Props type with: name (string), role (string), avatarUrl (string)
// 2. Accept those props as function parameters (hint: destructure them)
// 3. Return JSX with:
//    - A wrapper div with data-testid="profile-card"
//    - An <img> with src={avatarUrl} and alt={name}
//    - An <h2> with data-testid="profile-name" showing the name
//    - A <p> with data-testid="profile-role" showing the role
//
// Remember: In React it's className, not class!
interface Props {
  name: string;
  role: string;
  avatarUrl: string;
}
export default function ProfileCard({name, role, avatarUrl} : Props) {
  return <div data-testid="profile-card" className="border max-w-sm border-zinc-100 p-6 ">
    <img src={avatarUrl} alt={name} className="rounded-full"/>
    <h2 data-testid="profile-name" className="text-xl">{name}</h2>
    <p data-testid="profile-role">{role}</p>
  </div>;
}
