import Image from "next/image";
import PortalLayout from "./(adminPortal)/layout";
import Dashboard from "./(adminPortal)/dashboard";

export default function Home() {
  return (
    <PortalLayout>
      <Dashboard />
    </PortalLayout>
  );
}
