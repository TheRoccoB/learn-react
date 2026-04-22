// Lesson 03: useEffect & Lifecycle
//
// In Vue, you'd use onMounted + watch. In React, useEffect does both.
//
// ASSIGNMENT:
// 1. Add 'use client' at the top
// 2. Import useState and useEffect from 'react'
// 3. Accept a { url: string } prop
// 4. Create state for users (string[]) and loading (boolean)
// 5. Use useEffect to fetch from the url:
//    - Set loading to true
//    - Fetch the JSON
//    - Extract user names from the response (each item has a .name field)
//    - Set loading to false
//    - Add [url] as the dependency array so it re-fetches on url change
// 6. Show a <div data-testid="loading"> while loading
// 7. Show a <ul data-testid="user-list"> with <li> for each user name

export default function UserList() {
  return <div>TODO: Build your UserList here</div>;
}
