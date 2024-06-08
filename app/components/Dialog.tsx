"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/ui/dialog";
import RoundedButton from "./custom/RoundedButton/RoundedButton";
import { toast } from "sonner";
export function DialogButton({
  course,
  link,
}: {
  link: string;
  course: string;
}) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log(email, link, course);

  async function sendEmail() {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          link,
          course,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Email sent successfully");
        console.log("Email sent successfully!", data);
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to send email");
        console.error("Failed to send email", errorData);
      }
    } catch (error) {
      toast.error("Sorry, an error has occurred!");
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild className="w-fit h-[100%]">
        <button className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
          See Brochure
          <svg
            className="w-2.5 h-2.5"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lato bg-white">
        <label className="text-xl font-[500]">Email</label>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=""
          className="w-[100%] mt-4 border border-greenPrimary rounded-md px-2 py-2 outline-none"
        />
        <button className="w-[100%] mt-4 flex justify-end" onClick={sendEmail}>
          <RoundedButton className="w-fit px-8 py-2 rounded-md text-md">
            {!isLoading ? "See Brochure" : "Loading..."}
          </RoundedButton>
        </button>
      </DialogContent>
    </Dialog>
  );
}
