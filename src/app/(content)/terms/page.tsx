"use client";

import Container from "@/components/shared/container";
import { tiaraFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { legalInfo } from "../../../data/legal_Info";
import { Text } from "@/components/shared/text";
export default function Terms() {
   
    return (
        <Container className="mx-auto">
            <div className="py-4 mx-6  sm:mx-12 space-y-4 pt-32 text-white">
            <Text variant="h1" className={cn("text-5xl", tiaraFont)}>Terms & Conditions</Text>
                {legalInfo.terms.map((terms, index) => (
                    <div key={index}>
                        <Text variant="h2" className={cn("text-2xl", tiaraFont)}>{terms.title}</Text>
                        <p dangerouslySetInnerHTML={{ __html: terms.description }}></p>
                    </div>
               ))}
            </div>
        </Container>
    );
}
