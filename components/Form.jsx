import React, { useState } from 'react'
import toast from "react-hot-toast";
import { sendEmail } from "@/app/actions/sendEmail";

const Form = ({className}) => {

const [fullName, setFullName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")
const [isLoading, setIsLoading] = useState(false)

const onSubmitHandler = async (e) => {
    e.preventDefault();
 
    setIsLoading(true)

    try {


    const loadingToast = toast.loading("Sending your message...");

    // Call the server action
    const result = await sendEmail({ fullName, email, message });

    if (result.success) {
      toast.success("Message sent! We'll get back to you soon.", { id: loadingToast });
      setFullName("");
      setEmail("");
      setMessage("");
    } else {
      toast.error("Failed to send. Please try again.", { id: loadingToast });
    }
    } catch (error) {
        toast.error(error.message)
    }finally{
        setIsLoading(false)
    }
}

  return (
    <div>
      <form
          id="form"
          onSubmit={onSubmitHandler}
          className={className}
          style={{ background: "#0d151c" }}
        >
          {/* Form header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-6 bg-brand-navy" />
              <p className="font-outfit text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-brand-navy">
                Get In Touch
              </p>
              <div className="h-px w-6 bg-brand-navy" />
            </div>
            <h2 className="font-ovo text-2xl text-white">Send Us a Message</h2>
            <p className="font-outfit text-sm mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
              We'll respond within 24 hours
            </p>
          </div>

          {/* Inputs */}
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full font-outfit text-sm px-5 py-3.5 rounded-xl outline-none transition-all duration-300 focus:border-brand-navy focus:border-2"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
              }}
              onFocus={e => e.target.style.borderColor = "#14516e"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address*"
              required
              className="w-full font-outfit text-sm px-5 py-3.5 rounded-xl outline-none transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
              }}
              onFocus={e => e.target.style.borderColor = "#14516e"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              rows={6}
              required
              placeholder="How may we help you?*"
              className="w-full font-outfit text-sm px-5 py-3.5 rounded-xl outline-none transition-all duration-300 resize-none"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
              }}
              onFocus={e => e.target.style.borderColor = "#14516e"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
           disabled={isLoading}
            type="submit"
            className="w-full font-outfit text-sm font-semibold tracking-wide text-white py-3.5 rounded-xl transition-all duration-300 hover:opacity-88 hover:-translate-y-0.5 cursor-pointer"
            style={{ background: "#14516e" }}
          >
            Send Message →
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
            <span className="font-outfit text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>or</span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>

          {/* Email alt */}
<a href="mailto:info@zanesystemsgs.com?subject=Inquiry%20about%20Zane%20Systems%20Services&body=Hello%20Adebisi,%20I%20would%20like%20to%20discuss..."  >        <button
            type="button"
            className="w-full font-outfit text-sm font-semibold tracking-wide py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            style={{
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "transparent",
            }}
          >
            Send via Email →
          </button>
          </a>
        </form>

    </div>
  )
}

export default Form
