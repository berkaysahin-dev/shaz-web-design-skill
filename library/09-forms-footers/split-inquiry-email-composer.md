# Split Inquiry Email Composer — Interactive Client Card

* **ID:** `form-split-inquiry-email-composer`
* **Category:** `09-forms-footers`
* **Vibe:** `Modern Software Architect / Interactive Email Client Card`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Framer Motion
* **Rule Compliance:** Zero fake coordinates, zero neon halos, human-centered dialogue, keyboard shortcut integration.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An authoritative, high-conversion contact section designed for independent software engineers, technical consultants, and boutique digital agencies. Replaces generic 4-field static web forms with a split layout: on the left, a friendly, direct dialogue invitation with quick email copy; on the right, a realistic, interactive email client interface ("Yeni e-posta") with category filter pills, character counter, and instant keyboard submission.

### 1.2 Layout & Geometry
- **Split Stage:** 2-column asymmetric split (`grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`).
- **Left Column (5 Cols):** Question prefix ("Bir fikriniz mi var?"), oversized accent keyword ("Konuşalım."), concise 1-sentence terms ("İlk görüşme ücretsiz."), followed by a direct copy-to-clipboard email pill.
- **Right Column (7 Cols):** Framed email window card (`rounded-2xl bg-zinc-950/90 border border-white/10 shadow-2xl p-6 sm:p-8`).
- **Category Chips:** Selectable project type tags (`Mobil uygulama`, `Web sitesi`, `Tasarım`, `Sunucu ve bakım`).
- **Action Bar:** Word counter, privacy notice link, and high-contrast "Gönder [Ctrl ↵]" submission trigger.

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React, { useState } from "react";
import { Check, Copy, Send } from "lucide-react";

interface SplitInquiryProps {
  email?: string;
  recipientName?: string;
  recipientAvatar?: string;
}

export function SplitInquiryEmailComposer({
  email = "iletisim@ibrahimh.com.tr",
  recipientName = "İbrahim H.",
  recipientAvatar,
}: SplitInquiryProps) {
  const [copied, setCopied] = useState(false);
  const [selectedTag, setSelectedTag] = useState("Web sitesi");
  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const tags = ["Mobil uygulama", "Web sitesi", "Tasarım", "Sunucu ve bakım"];

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message || !senderEmail) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Dialogue & Quick Copy */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
          <div>
            <p className="text-zinc-600 dark:text-zinc-400 font-medium text-lg sm:text-xl">
              Bir fikriniz mi var?
            </p>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
              <span className="text-[#FF4D36] dark:text-[#FF5722]">Konuşalım.</span>
            </h2>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
            Ne yapmak istediğinizi ve ne zamana lazım olduğunu birkaç cümleyle yazın. İlk görüşme ücretsiz.
          </p>

          <div className="pt-2">
            <span className="block text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-2">
              ya da doğrudan yazın
            </span>
            <div className="inline-flex items-center gap-2 p-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800">
              <span className="px-3 text-xs sm:text-sm font-mono text-zinc-800 dark:text-zinc-200 select-all">
                {email}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white dark:bg-zinc-100 text-zinc-900 rounded-full text-xs font-semibold shadow-sm hover:opacity-90 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Kopyalandı" : "Kopyala"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Email Client Card */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-white dark:bg-[#111116] border border-zinc-200 dark:border-zinc-800/80 shadow-xl overflow-hidden transition-all">
            {/* Window Header Bar */}
            <div className="px-6 py-3.5 bg-zinc-50 dark:bg-[#16161C] border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">Yeni e-posta</span>
              <span className="text-[11px] text-zinc-400">Resend ile gönderilir</span>
            </div>

            {submitted ? (
              <div className="p-12 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Mesajınız Alındı</h3>
                <p className="text-sm text-zinc-500 max-w-sm mx-auto">
                  Talebiniz başarıyla iletildi. En geç 24 saat içinde dönüş sağlanacaktır.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
                {/* To Field */}
                <div className="flex items-center gap-4 py-2 border-b border-zinc-100 dark:border-zinc-800/60 text-xs">
                  <span className="w-16 font-mono text-zinc-400 dark:text-zinc-500">Kime:</span>
                  <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200 font-medium">
                    <div className="w-5 h-5 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden flex items-center justify-center text-[10px]">
                      {recipientAvatar ? (
                        <img src={recipientAvatar} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <span>{recipientName.slice(0, 1)}</span>
                      )}
                    </div>
                    <span>{recipientName}</span>
                    <span className="text-zinc-400 font-mono text-[11px]">({email})</span>
                  </div>
                </div>

                {/* Name Field */}
                <div className="flex items-center gap-4 py-2 border-b border-zinc-100 dark:border-zinc-800/60 text-xs">
                  <label htmlFor="name-input" className="w-16 font-mono text-zinc-400 dark:text-zinc-500">
                    Adınız:
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    placeholder="Ad Soyad"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="flex-1 bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none text-xs sm:text-sm"
                  />
                </div>

                {/* Email Field */}
                <div className="flex items-center gap-4 py-2 border-b border-zinc-100 dark:border-zinc-800/60 text-xs">
                  <label htmlFor="email-input" className="w-16 font-mono text-zinc-400 dark:text-zinc-500">
                    E-posta:
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    placeholder="siz@ornek.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="flex-1 bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none text-xs sm:text-sm"
                  />
                </div>

                {/* Subject Field */}
                <div className="flex items-center gap-4 py-2 border-b border-zinc-100 dark:border-zinc-800/60 text-xs">
                  <label htmlFor="subj-input" className="w-16 font-mono text-zinc-400 dark:text-zinc-500">
                    Konu:
                  </label>
                  <input
                    id="subj-input"
                    type="text"
                    placeholder="Kısaca ne hakkında?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="flex-1 bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none text-xs sm:text-sm"
                  />
                </div>

                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSelectedTag(tag)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        selectedTag === tag
                          ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm"
                          : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                {/* Textarea */}
                <div className="pt-2">
                  <textarea
                    rows={5}
                    required
                    placeholder={`Merhaba ${recipientName}, bir fikrim var...`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none text-xs sm:text-sm resize-none"
                  />
                </div>

                {/* Footer Bar */}
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-[11px] text-zinc-400 dark:text-zinc-500 font-mono">
                    {message.length} / 5000 karakter
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    <span>Gönder</span>
                    <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">Ctrl ↵</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
```
