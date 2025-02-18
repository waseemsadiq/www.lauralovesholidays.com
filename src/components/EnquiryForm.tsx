
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const EnquiryForm = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your interest. We'll get back to you shortly.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-neutral-600">
          Name
        </label>
        <Input
          id="name"
          placeholder="Your name"
          className="w-full bg-white/50"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-neutral-600">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Your email"
          className="w-full bg-white/50"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-neutral-600">
          Preferred Travel Date
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal bg-white/50",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-neutral-600">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your dream holiday"
          className="w-full bg-white/50 min-h-[120px]"
          required
        />
      </div>

      <Button type="submit" className="w-full bg-neutral-800 hover:bg-neutral-900 text-white">
        Send Enquiry
      </Button>
    </form>
  );
};
