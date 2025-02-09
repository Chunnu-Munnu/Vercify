import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Community() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Join Our Community</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Be part of a growing community dedicated to promoting truth and accuracy in information
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Users className="h-12 w-12 mb-4 text-primary" />
              <CardTitle>Global Network</CardTitle>
              <CardDescription>
                Connect with fact-checkers and truth-seekers worldwide
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-12 w-12 mb-4 text-primary" />
              <CardTitle>Verified Contributors</CardTitle>
              <CardDescription>
                Learn from experts and become a verified contributor
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Brain className="h-12 w-12 mb-4 text-primary" />
              <CardTitle>AI-Powered Tools</CardTitle>
              <CardDescription>
                Access cutting-edge AI tools for fact verification
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center space-y-4">
            <h2 className="text-3xl font-bold">Ready to Join?</h2>
            <p className="text-lg opacity-90">
              Experience the future of fact verification with our community
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-4"
            >
             <Link href="http://127.0.0.1:5000" target="_blank" rel="noopener noreferrer">
                Try Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
