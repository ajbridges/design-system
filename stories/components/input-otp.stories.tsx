import type { Meta, StoryObj } from "@storybook/react-vite"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

const meta = { title: "Components/Input OTP", component: InputOTP, tags: ["autodocs"] } satisfies Meta
export default meta
export const Code: StoryObj = {
  render: () => (
    <InputOTP maxLength={6} aria-label="Ticket code">
      <InputOTPGroup>
        {Array.from({ length: 6 }, (_, index) => <InputOTPSlot key={index} index={index} />)}
      </InputOTPGroup>
    </InputOTP>
  ),
}
