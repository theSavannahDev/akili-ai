"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { tools } from "@/lib/constants";

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-center font-montserrat text-2xl font-bold md:text-4xl">
          Weild the power of AI
        </h2>
        <p className="text-center text-sm font-light text-muted-foreground md:text-lg">
          Converse with a highly perceptive AI, unleash your creativity.
        </p>
      </div>

      <div className="space-y-4 px-4 md:px-20 lg:px-32">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="flex cursor-pointer items-center justify-between border-[#404756]/5 p-4 transition hover:shadow-md"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("w-fit rounded-md p-2", tool.bgColor)}>
                <tool.icon className={cn("h-8 w-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="h-5 w-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
