"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Textarea } from "./ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { useActionState, useEffect, useState } from "react";
import { CalendarIcon } from "lucide-react";
import { submitDemoRequestForm } from "@/app/signup/actions";
import { toast } from "sonner";

const initialState = {
  errors: {},
}

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [state, formAction, pending] = useActionState(submitDemoRequestForm, initialState);

  useEffect(() => {
    state.errors && toast(Object.values(state.errors), { description: "Verify the details you've entered or Try again after some time." });
  }, [state])

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Image
          className="dark:invert"
          src="/logoipsum-379.svg"
          alt="Vercel logomark"
          width={16}
          height={16}
        /> TickToes</CardTitle>
        <CardDescription>
          Enter your information below to get early access.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup className="flex flex-col gap-4">
            <FieldGroup className="flex flex-row gap-4">
              <Field className="flex flex-col gap-2">
                <FieldLabel htmlFor="name">Full Name *</FieldLabel>
                <Input id="name" name="name" type="text" placeholder="John Doe" required />
              </Field>
              <Field className="flex flex-col gap-2">
                <FieldLabel htmlFor="email">Work Email *</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@acme.com"
                  required
                />
              </Field>
            </FieldGroup>
            <FieldGroup className="flex flex-row gap-4">
              <Field className="flex flex-col gap-2">
                <FieldLabel htmlFor="date-picker">
                  Preferred Date for Demo *
                </FieldLabel>
                <div className="relative flex gap-2">
                  <Input
                    id="date"
                    value={date?.toDateString()}
                    name="date"
                    placeholder="Select Date"
                    className="bg-background pr-10"
                    onChange={(e) => {
                      const date = new Date(e.target.value)
                      setDate(date)
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") {
                        e.preventDefault()
                        setOpen(true)
                      }
                    }}
                  />
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="ghost"
                        id="date-picker"
                        className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                      >
                        <CalendarIcon className="size-3.5" />
                        <span className="sr-only">Select date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto overflow-hidden p-0"
                      align="end"
                      alignOffset={-8}
                      sideOffset={10}
                    >
                      <Calendar
                        mode="single"
                        disabled={{ before: new Date() }}
                        selected={date || undefined}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                          if (date) {
                            setDate(date)
                          }
                          setOpen(false)
                        }}
                        required
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </Field>
              <Field className="flex flex-col gap-2">
                <FieldLabel htmlFor="time-picker">
                  Preferred Time Slot *
                </FieldLabel>
                <Input
                  required
                  type="time"
                  id="time-picker"
                  min="09:00"
                  max="17:30"
                  name="time"
                  step="600"
                  className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
                <FieldDescription className="text-xs text-muted-foreground">
                  We are available from 09:00 AM to 06:00 PM.
                </FieldDescription>
              </Field>
            </FieldGroup>
            <Field className="gap-2">
              <FieldLabel htmlFor="feedback">Any Specific Queries?</FieldLabel>
              <FieldDescription className="text-xs text-muted-foreground">
                We&apos;ll be happy to address them during our demo.
              </FieldDescription>
              <Textarea
                id="feedback"
                name="feedback"
                placeholder="I want to know more about..."
                rows={4}
                required
              />
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit" disabled={pending}>{pending ? "Submitting..." : "Request Early Access"}</Button>
                <FieldDescription className="px-6 text-center text-xs text-balance">
                  By filling this form, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
