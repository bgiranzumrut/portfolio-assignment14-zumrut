# Assignment 14 - Portfolio Website

This is my final Assignment 14 submission for the Business Systems Build and Testing. It is a Dockerized portfolio website that demonstrates my growth as a full stack developer. This site integrates reusable components from my previous assignment (Assignment 13: UI Component Library) and presents major coursework in a visually engaging flipbook layout.

---

##  Built With

- **React** + **Vite** + **TypeScript**
- **Styled-components**
- **Docker**
- **Jest**, **React Testing Library**
- **ESLint**, **Prettier**, **Husky**
- **CI/CD** with GitHub Actions

---

##  What I Did in This Assignment

1. **Created Portfolio Pages**:
   - `BasicInfo` — Introduction and location details.
   - `Work` — My Prairie Circle project with tech stack and GitHub link.
   - `Skills` — Lists languages, tools, and frameworks.
   - `Resources` — Documentation links with descriptions.
   - `DeveloperSetup` — My VS Code, terminal, and Git settings.

2. **Reused My Component Library**:
   All UI elements such as `Label`, `Text`, `Button`, `Card`, and more are imported from the component library I created in Assignment 13. These components were styled with `styled-components` and tested with Jest.

3. **Testing**:
   - Implemented and passed 31 unit tests using Jest and React Testing Library.
   - Verified all components work independently.

4. **Styling and Layout**:
   - Used a responsive grid and page-flip layout (`react-pageflip`) for navigation.
   - Defined color tokens and font variables for consistency.

5. **Dockerized the App**:
   - Built a multistage Dockerfile (Node + Nginx) for production deployment.
   - Exposed the container on `localhost:5575` with correct naming and directory structure.

6. **Configured CI/CD**:
   - GitHub Actions workflow set up to run tests and lint checks automatically.
   - Husky + lint-staged set up to auto-format code and prevent bad commits.

---

##  How to Run with Docker

###  1. Build the image

```bash
docker build -t zumrut_busra_coding_assignment14 .
```

### ▶ 2. Run the container

```bash
docker run -d -p 5575:80 --name zumrut_busra_coding_assignment14 zumrut_busra_coding_assignment14
```

###  3. View your site

Go to: [http://localhost:5575]

---

##  Run Tests Locally

```bash
npm install
npm test
```

---

##  Clean Up Docker
To stop and remove the container:

```bash
docker stop zumrut_busra_coding_assignment14
docker rm zumrut_busra_coding_assignment14
```

---

##  Extra Notes

- This project is stored in `/zumrut_busra_final_site` inside the Docker container.
- Make sure Docker Desktop is running before starting the container.
- The `vite` production build is served via `nginx`.

---

##  Author

**Busra Giran Zumrut**
📍 Winnipeg, MB
🌐 [github.com/bgiranzumrut]