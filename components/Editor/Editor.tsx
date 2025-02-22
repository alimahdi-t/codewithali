import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import { ControllerRenderProps } from "react-hook-form";

interface EditorProps {
  field: ControllerRenderProps<any, any>;
}

const Editor: React.FC<EditorProps> = ({ field }: EditorProps) => {
  return (
    <MdEditor
      language="en-US"
      value={field.value} // Controlled value from React Hook Form
      onChange={field.onChange} // Updates the form when content changes
    />
  );
};

export default Editor;
