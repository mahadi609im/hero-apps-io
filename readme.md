# 🦸‍♂️ Assignment 008 — Hero IO

### 📅 Deadline For 60 marks: 09 October , 2025 (11:59 pm ⏱️)

---

## Private Repo-Link : please create your own public repository for this assignment.

---

# 🐣 Basic Requirements

- Make the Application Responsive for All the Devices - **---Done---**
- Do minimum 5 commits to your github Repository - **---Done---**
- Give a meaning full name to your application - **---Done---**
- Make Sure on Production Application is error Free - **---Done---**
- Add a Readme.md with App Name , Description & Technologies

---

# 🔧 Main Requirements

## 1. 🧱 Layout & Data Design

#### Header

- The header must include:
  - A logo.on clicking it user will be navigated to home page. - **---Done---**
  - A navigation bar with links [ `home` , `apps` , `installation` ] and active
    route indication. - **---Done---**
  - A `Contribution` button as Figma linking to the your GitHub profile. -
    **---Done---**

#### Footer

- Design a custom footer using your own creativity and style. - **---Done---**

#### Data

- Create an JSON Array of minimum 12-20 objects for app data using the following
  structure: - **---Done---**
  ```js
  {
    image: string;
    title: string;
    companyName: string;
    id: number;
    description: string;
    size: number;
    reviews: number;
    ratingAvg: number;
    downloads: number;
    ratings: [
      { name: "1 star"; count: number },
      { name: "2 star"; count: number },
      { name: "3 star"; count: number },
      { name: "4 star"; count: number },
      { name: "5 star"; count: number }
    ];
  }
  ```

---

## 2. 🏠 Home Page

#### Banner

- Must contain a center-aligned heading, text, and two buttons. - **---Done---**
- “App Store” button will redirect to the App Store. - **---Done---**
- “Play Store” button will redirect to the Play Store. - **---Done---**

#### States Section

- Must contain three state cards as shown in Figma.
- Each state should have a title and a unique background color or style.

#### Top Apps Section

- Display eight apps in a four-column layout. - **---Done---**
- Each app card should display: - **---Done---**
  - App title
  - Image
  - Download count
  - Average rating
- Clicking on a card should navigate the user to the App Details page.
- Include a “Show All” button that navigates to the All Apps page. -
  **---Done---**

---

## 3.📱 All Apps Page

#### Title Section

- Include a title and subtitle following the Figma design. - **---Done---**

#### Search and States

- Display the total number of apps on the left and a search bar on the right. -
  **---Done---**
- `Implement live search functionality` - **---Done---**
  - filters apps by title as the user types. - **---Done---**
  - Search will be case-insensitive - **---Done---**
  - If no app matches, display a “No App Found” message.

#### App Section

- Display all apps from the JSON data. - **---Done---**
- Each app card should include:
  - App title
  - Image
  - Download count
  - Average rating
- Clicking on an app card should navigate to the App Details page. -
  **---Done---**

---

## 4.📊 App Details Page

#### App Information

- Show app image on the left .- **---Done---**
- Display app details such as title, rating, downloads, reviews. -
  **---Done---**
- Include an `Install button`: - **---Done---**
  - When clicked, it becomes disabled and the text changes to `Installed`.
  - Show a Success Toast after App installed

#### App Review Chart

- Implement a responsive chart using the **Recharts** library. - **---Done---**
- Visualize the app’s review data as shown in the Figma design. - **---Done---**

#### App Description

- Show the app details in description section as per Figma layout. -
  **---Done---**

---

## 5. Error Page & Others

- Create a custom error page for invalid routes. - **---Done---**

- Show a loading animation during: `Challenge Part`

  - Page navigation.
  - Search operation. - **------------------Not Done--------------**

- Show a Relevant Not Found message app not found in app details section. -
  **---Done---**

- Ensure that reloading any route after deployment does not cause an error. -
  **---Done---**

---

# Challenge Requirement

### LocalStorage Features

#### App Installation

- When the “Install” button is clicked:
  - Save the app to localStorage. - **---Done---**
  - If the app is already installed, show a disabled button with the text
    `Installed`. - **---Done---**

#### My Installation Page

- Create a page named “My Installation” following the Figma design. -
  **---Done---**
- Display all installed apps as cards. - **---Done---**
- Include an Uninstall button:
  - Clicking it
    - removes the app from both the UI and localStorage. - **---Done---**
    - Show an Toast with some relevant message - **---Done---**

---

### Sort by Downloads

- Implement a dropdown for sorting apps by download count. - **---Done---**
- The dropdown must include:
  - **High-Low:** Sort apps in ascending order by downloads. - **---Done---**
  - **Low-High:** Sort apps in descending order by downloads. - **---Done---**

---

### Loading Animation

- Show a loading animation during:

  - Page navigation. - **---Done---**

  - Search operation - **---Not Done---**

---

## 🚀 Deployment

- Deploy the project to Cloudflare / Netlify / Vercel.
- Reloading from any route must work correctly without showing a 404 error.

---
