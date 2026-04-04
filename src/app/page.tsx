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

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <div className="border border-blue-500 p-5 mb-5">
        <p>Server Session</p>
        <p>{JSON.stringify(session)}</p>
      </div>
      <ClientSession></ClientSession>
      <FurnitureData></FurnitureData>
      <div className="py-20 flex flex-col justify-center items-center">
        {/* accordion */}
        <div className="my-10 ">
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Is it customizable?</AccordionTrigger>
              <AccordionContent>
                Yes. It can be customized to fit your needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <Button variant="outline">Hello, World!</Button>
      </div>
    </div>
  );
}
