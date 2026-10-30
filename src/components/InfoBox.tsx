import type { ReactNode } from "react";

interface HintBoxProps {
  mode: "hint";
  children: ReactNode;
}

interface WarningBoxProps {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  // info, warning
  const { children, mode } = props;
  if (mode == "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  // We can destructure severity at this stage because it has passed the 'hint' check, which means it can only be set to warning.
  //TypeScript knows that we get the severity prompt under that condition
  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
