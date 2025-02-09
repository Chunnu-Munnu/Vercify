"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

function HOMEE() {
  const [txt, setTxt] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [ans, setans] = useState<any>(null);
  const { toast } = useToast();

  async function checkIfTrue() {
    if (txt === "") {
      if (!txt) {
        toast({
          title: "ERROR!!!",
          description: "Write something please!!!",
          variant: "destructive",
        });
      }
      return;
    }

    setisLoading(true)
    setans(null)

    try {
      let resp = await fetch("https://vercify-api-call.vercel.app/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: txt }),
      });

      let d = await resp.json();
      
      setTimeout(() => {
        setans(d);
        setisLoading(false);
      }, 2000);

    } catch (e) {
      toast({
        title: "OOPS!!!",
        description: "something went wrong try again!!!",
        variant: "destructive",
      });
      setisLoading(false)
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-500 via-blue-700 to-purple-700 bg-clip-text text-transparent">
              Fact Verification
            </h1>
            <p className="text-muted-foreground text-lg">
              Verify the accuracy of information using our advanced AI analysis
            </p>
          </div>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="bg-gradient-to-r from-purple-400 via-blue-800 to-purple-900 bg-clip-text text-transparent">
              Verify Information
            </CardTitle>
            <CardDescription>
              Enter the text you would like to fact-check
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Enter your text here for verification..."
              className="min-h-[150px]"
              value={txt}
              onChange={(e) => {setTxt(e.target.value)}}
            />
            <Button 
              className={`w-full bg-gradient-to-r from-purple-500 via-blue-700 to-purple-700 
                hover:from-purple-600 hover:via-blue-800 hover:to-purple-800 
                transition-all duration-300`}
              onClick={() => {
                checkIfTrue()
              }}
              disabled={isLoading ? true : false}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? "Analyzing..." : "Verify Now"}
            </Button>
          </CardContent>
        </Card>

        {ans ? (
          ans !== null ? (
            <Card>
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-purple-600 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Analysis Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <div className="font-semibold">Verification Status:</div>
                  <div className="text-muted-foreground">{ans.status}</div>
                </div>
                <div className="grid gap-2">
                  <div className="font-semibold">Accuracy Score:</div>
                  <div className="text-muted-foreground">{ans.score}/10</div>
                </div>
                <div className="grid gap-2">
                  <div className="font-semibold">Detailed Analysis:</div>
                  <div className="text-muted-foreground">{ans.verification_details}</div>
                </div>
              </CardContent>
            </Card>
          ) : null
        ) : null}
      </div>
    </div>
  );
}

export default HOMEE;
