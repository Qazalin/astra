import { useProjects } from "@astra/lib/hooks";

export default function Projects() {
  const { projects, isLoading, isError } = useProjects();
  console.log(projects);
  return <div />;
}
