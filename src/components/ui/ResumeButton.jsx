import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { personal } from "../../data/portfolioData";

// Downloads the resume only if the PDF really exists.
// If it is missing, shows a clear message instead of failing silently.
export default function ResumeButton({ className = "btn btn-ghost" }) {
  const [unavailable, setUnavailable] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setUnavailable(false);

    try {
      const response = await fetch(personal.resumePath, { cache: "no-store" });
      const type = response.headers.get("content-type") || "";

      // A missing file in dev/preview returns the web page (text/html) instead of an error
      if (!response.ok || type.includes("text/html")) {
        throw new Error("Resume PDF not found");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = personal.resumeFileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch {
      console.warn(`Resume not found. Place your PDF at public/${personal.resumeFileName}`);
      setUnavailable(true);
    }
  };

  return (
    <>
      <a
        href={personal.resumePath}
        download={personal.resumeFileName}
        onClick={handleClick}
        className={className}
      >
        <FiDownload aria-hidden="true" className="h-4 w-4" />
        Resume
      </a>

      {/* Always rendered so screen readers announce the message when it appears */}
      <p role="status" className={unavailable ? "w-full text-sm text-amber-200" : "sr-only"}>
        {unavailable && (
          <>
            The resume isn&apos;t available right now. Please email me at{" "}
            <a href={`mailto:${personal.email}`} className="font-semibold underline underline-offset-2">
              {personal.email}
            </a>
            .
          </>
        )}
      </p>
    </>
  );
}