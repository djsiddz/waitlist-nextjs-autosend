"use client"

import { Button } from "@/components/ui/button";
import {
  Card
} from "@/components/ui/card";
import {
  Field, FieldGroup,
  FieldLabel
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useActionState, useEffect } from "react";
import { submitDemoRequestForm } from "@/app/signup/actions";
import { toast } from "sonner";

const initialState = {
  errors: {},
}

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const [state, formAction, pending] = useActionState(submitDemoRequestForm, initialState);

  useEffect(() => {
    if (!state?.errors) return;
    const errorMessage = Object.values(state.errors)
      .map((error) => String(error))
      .join("\n")
      .trim();

    if (!errorMessage) return;

    toast(errorMessage, {
      description: "Verify the details you've entered or try again after some time.",
    });
  }, [state.errors]);

  return (
    <Card {...props}>

      <form action={formAction}>
        <FieldGroup className="flex flex-col gap-4">
          <FieldGroup className="flex flex-row gap-4">
            <Field className="flex flex-col gap-2">
              <FieldLabel htmlFor="name">Full Name *</FieldLabel>
              <Input id="name" name="name" type="text" placeholder="John Doe" required />
            </Field>
            <Field className="flex flex-col gap-2">
              <FieldLabel htmlFor="email">Email *</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@acme.com"
                required
              />
            </Field>
          </FieldGroup>
          <FieldGroup>
            <Field>
              <Button type="submit" disabled={pending}>
                <Image
                  className="dark:invert"
                  src="/logoipsum-379.svg"
                  alt="Vercel logomark"
                  width={16}
                  height={16}
                />
                {pending ? "Submitting..." : "Join the Waitlist"}
              </Button>
            </Field>
          </FieldGroup>
        </FieldGroup>
      </form>
    </Card>
  )
}
