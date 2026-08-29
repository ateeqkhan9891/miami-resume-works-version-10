
import WorkspaceTopHeader from "./top-header/WorkspaceTopHeader";
import EditorToolbar  from "./editor-toolbar/EditorToolbar";
import ResumeCanvas from "./resume-canvas/ResumeCanvas";
export default function ResumeWorkspace() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <WorkspaceTopHeader saveStatus="saved" />


     <EditorToolbar />


    <ResumeCanvas />
      
    </div>
  );
} 