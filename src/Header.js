import journalLogo from "./journal-logo.svg";
export default function Header() {
  return (
    <div className="journal-header">
      <img src={journalLogo} alt="logo" />
      my travel journal.
    </div>
  );
}
