import {
  Accordion as BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button"

interface Props {
  pageDetails: {
    pageName: string;
  sections: string[];
  contentKeys: string[][];
  contentValues: any[][];
  }[];
}

export function Accordion({ pageDetails }: Props) {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const response = await fetch("/api/update-content", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ location, description }),
  });
  console.log(response);
  
  const result = await response.json();
  console.log(result);
  };

  return (
    <BaseAccordion type="multiple" className="w-full">
     
      {pageDetails.map((item, i) => {
        return (
          
          
          <AccordionItem value={`item-${i.toFixed()}`} key={i}>
            <AccordionTrigger>{item.pageName}</AccordionTrigger>
            <AccordionContent className="flex flex-col items-center justify-center w-full gap-1.5 bg-amber-400">
              {item.sections.map((section, index1) => (
                <AccordionItem value={`section-${i}-${index1}`} key={`section-${i}-${index1}`}>
                <AccordionTrigger className="w-200 bg-violet-300 p-5">{section}</AccordionTrigger>
                <AccordionContent className="flex flex-col justify-items-start w-full gap-1.5 bg-blue-400">
                  {item.contentKeys[index1].map((item2, index2) => (
                    <BaseAccordion type="single" collapsible className="w-200" key={`accordion-${index2}`}>
                      <AccordionItem value={`item-${index1}-${index2}`} key={`item1-${index1}-${index2}`}>
                          <AccordionTrigger className="p-5">{(typeof item2 === "number") ? `package-${item2 + 1}` : item2}</AccordionTrigger>

                        <AccordionContent>
                        {typeof item.contentValues[index1][index2] === "object" ? (
                          <BaseAccordion type="single" collapsible className="w-full" key={`accordion-object-${index2}`}>
                    {Object.keys(item.contentValues[index1][index2]).map((item4: any, index3: number) => (
                      typeof item.contentValues[index1][index2][item4] === "string" ? (
                        <AccordionItem
                          value={`item-${index1}-${index2}-${item4}`}
                          key={`item-${index1}-${index2}-${item4}`}
                        >
                          <AccordionTrigger>{item4}</AccordionTrigger>
                          <AccordionContent className="flex flex-col justify-items-start w-full gap-1.5 bg-blue-400">
                            <form
                              className="flex flex-col items-center justify-center w-full gap-1.5"
                              onSubmit={(e) => {
                                e.preventDefault(); 
                                handleSubmit(e);
                              }}
                            >
                              <Textarea
                                id="message-1"
                                defaultValue={item.contentValues[index1][index2][item4]}
                                onChange={(e) => setDescription(e.target.value)}
                                onClick={() =>
                                  setLocation(`${item.pageName}-${section}-${item2}-${item4}`)
                                }
                              />
                              <Button
                                type="submit"
                                className="w-20"
                                disabled={
                                  description === "" ||
                                  description === item.contentValues[index1][index2][item4]
                                }
                              >
                                Save
                              </Button>
                            </form>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        Object.keys(item.contentValues[index1][index2][item4]).map((item5, index4) =>
                          
                          (
                          <AccordionItem
                            value={`item-${index1}-${index2}-${index3}-${index4}`}
                            key={`item-${index1}-${index2}-${index3}-${index4}`}
                          >
                            <AccordionTrigger>{item5}</AccordionTrigger>
                            <AccordionContent>
                              <form
                                className="flex flex-col items-center justify-center w-full gap-1.5"
                                onSubmit={(e) => {
                                  e.preventDefault(); 
                                  handleSubmit(e); 
                                }}
                              >
                                <Textarea
                                  id="message-2"
                                  defaultValue={item.contentValues[index1][index2][item4][item5]}
                                  onChange={(e) => setDescription(e.target.value)}
                                  onClick={() =>
                                    setLocation(`${item.pageName}-${section}-${item2}-${item4}-${item5}`)
                                  }
                                />
                                <Button
                                  type="submit"
                                  className="w-20"
                                  disabled={
                                    description === "" ||
                                    description === item.contentValues[index1][index2][item4][item5]
                                  }
                                >
                                  Save
                                </Button>
                              </form>
                            </AccordionContent>
                          </AccordionItem>
                        ))
                      )
                    ))}
                  </BaseAccordion>
                            ) : (
                              <form className="flex flex-col items-center justify-center w-full gap-1.5" onSubmit={(e) => {
                                  e.preventDefault(); 
                                  handleSubmit(e); 
                                }}>
                              {/* <Label htmlFor="message-2">Your Message</Label> */}
                              {/* <Label htmlFor="message-2">{item3}</Label> */}
                              <Textarea id="message-3" 
                              defaultValue={item.contentValues[index1][index2]}  
                              onChange={(e) => setDescription(e.target.value)} 
                              onClick={() => setLocation(`${item.pageName}-${section}-${item2}`)}/>
                              <Button type="submit"
                               className="w-20"
                                disabled={description === "" ||
                                 description === item.contentValues[index1][index2]} >Save</Button>
                              
                            </form>
                          )}

                          {/* {console.log(item3)} */}
                          {/* <AccordionTrigger onClick={() => Location(`${item.pageName}-${section}-${item3}`)}>{item3}</AccordionTrigger> */}
                          {/* <AccordionContent>{item.contentValues[index2][index3]}</AccordionContent> */}
                          
                            
                          </AccordionContent>

                          {/* <hr className="border-t-2 border-solid"> </hr> */}
                        </AccordionItem>
                      {/* {item2.map((item3, index3) => (
                        
                      ))} */}
                    </BaseAccordion>
                  ))}
                </AccordionContent>
                
              </AccordionItem>
            ))}
            </AccordionContent>
            
          </AccordionItem>
        );
      }
      
      
      
      )}
    </BaseAccordion>
  );
}
