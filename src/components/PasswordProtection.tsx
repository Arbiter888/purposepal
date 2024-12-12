import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface PasswordProtectionProps {
  onCorrectPassword: () => void;
}

const PasswordProtection = ({ onCorrectPassword }: PasswordProtectionProps) => {
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Optimism") {
      onCorrectPassword();
      localStorage.setItem("siteAccess", "granted");
    } else {
      toast({
        variant: "destructive",
        title: "Incorrect Password",
        description: "Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-muted/10 p-8 rounded-lg backdrop-blur-sm">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome to BornPurpose Demo</h2>
          <p className="text-gray-400 mb-6">
            This is a demonstration version of BornPurpose. Please enter the password to continue.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/50 border-gray-700 text-white"
            />
          </div>
          <Button type="submit" className="w-full bg-secondary hover:bg-secondary-dark">
            Enter Site
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtection;