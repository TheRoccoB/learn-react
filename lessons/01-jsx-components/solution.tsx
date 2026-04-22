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

export default function ProfileCard() {
  return <div>TODO: Build your ProfileCard here</div>;
}
