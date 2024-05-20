import { useState } from "react";
import Header from "@/components/Header";
import GridProjectList from "@/components/GridProjectsList";
import PROJECTS from "@/utils/Projects";

function App() {
  const [search, setSearch] = useState<string>("");

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  const filteredProjects = PROJECTS.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header onSearchChange={handleSearchChange}></Header>
      <GridProjectList
        projects={search.trim() ? filteredProjects : PROJECTS}
      ></GridProjectList>
    </>
  );
}

export default App;
