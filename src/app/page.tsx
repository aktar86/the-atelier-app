import FurnitureData from "../components/UI/FurnitureData";
import ClientSession from "../components/UI/ClientSession";
import { authOptions } from "../lib/authOptions";
import { getServerSession } from "next-auth";
import { Button } from "@/components/ui/button";

// accordion data
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HomeBanner from "../components/Home/Banner";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <div className="border border-blue-500 p-5 mb-5">
        <p>Server Session</p>
        <p>{JSON.stringify(session)}</p>
      </div>
      <ClientSession></ClientSession>

      <HomeBanner></HomeBanner>
      <FurnitureData></FurnitureData>
    </div>
  );
}
