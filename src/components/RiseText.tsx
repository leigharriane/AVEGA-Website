"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type RiseTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  replayOnHover?: boolean;
  start?: string;
  once?: boolean;
  mark?: boolean;
  markText?: string | RegExp | Array<string | RegExp>;
  markClassName?: string;
};

export default function RiseText({
  text,
  className,
  delay = 0,
  duration = 0.6,
  y = 24,
  stagger = 0.04,
  replayOnHover = false,
  start = "top 85%",
  once = true,
  mark = false,
  markText,
  markClassName = "",
}: RiseTextProps) {
  const elRef = useRef<HTMLSpanElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray<HTMLElement>("[data-char]");
      tlRef.current = gsap.timeline({
        delay,
        scrollTrigger: {
          trigger: elRef.current!,
          start,
          toggleActions: once ? "play none none none" : "play none none reverse",
          ...(once ? { once: true } : {}),
        },
      });
      tlRef.current.from(letters, {
        y,
        opacity: 0,
        duration,
        ease: "power3.out",
        stagger,
      });
    }, elRef);
    return () => ctx.revert();
  }, [text, delay, duration, y, stagger, start, once]);

  // --- marking helpers ---
  const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const buildRegex = (value: string | RegExp | Array<string | RegExp> | undefined) => {
    if (!value) return null;
    const arr = Array.isArray(value) ? value : [value];
    const sources = arr.map((v) => (v instanceof RegExp ? v.source : escapeRegExp(v)));
    return new RegExp(`(${sources.join("|")})`, "gi");
  };
  const regex = mark ? null : buildRegex(markText);

  // Split into tokens that preserve spaces
  const tokens = text.split(/(\s+)/); // keeps spaces as separate items
  let keySeed = 0;

  // render a single word as a no-break unit containing letter spans
  const renderWord = (word: string, isMarked: boolean) => {
    const letters = word.split("").map((ch) => (
      <span
        key={`ch-${keySeed++}`}
        data-char
        aria-hidden="true"
        style={{ display: "inline-block" }}
      >
        {ch}
      </span>
    ));

    const inner = isMarked ? (
      <mark className={markClassName} style={{ background: "transparent" }}>
        {letters}
      </mark>
    ) : (
      letters
    );

    return (
      <span
        key={`word-${keySeed++}`}
        data-word
        // This wrapper prevents line breaks within the word
        style={{ display: "inline-block", whiteSpace: "nowrap" }}
      >
        {inner}
      </span>
    );
  };

  return (
    <span
      ref={elRef}
      className={className}
      aria-label={text}
      // allow wrapping between words; do not force one-line
      style={{ display: "inline-block", whiteSpace: "normal" }}
      onMouseEnter={() => {
        if (replayOnHover) tlRef.current?.restart();
      }}
    >
      {tokens.map((tok, i) => {
        // spaces: render as-is so the browser can wrap between words
        if (tok.match(/^\s+$/)) {
          return <span key={`sp-${i}`}>{tok}</span>;
        }

        // words: either fully marked, partially marked, or unmarked
        if (mark) {
          // mark entire text: every word is marked
          return renderWord(tok, true);
        }

        if (!regex) {
          // no marking: simple word
          return renderWord(tok, false);
        }

        // If marking specific matches, we may have multiple matches inside a word.
        // Split the word by matches and wrap only matched pieces in <mark>.
        const parts: Array<{ text: string; marked: boolean }> = [];
        let last = 0;
        for (const m of tok.matchAll(regex)) {
          const start = m.index ?? 0;
          const end = start + m[0].length;
          if (start > last) parts.push({ text: tok.slice(last, start), marked: false });
          parts.push({ text: tok.slice(start, end), marked: true });
          last = end;
        }
        if (last < tok.length) parts.push({ text: tok.slice(last), marked: false });

        // If no matches, render as plain word
        if (parts.length === 0) return renderWord(tok, false);

        // If there are matches, render the word wrapper (no-break) and mark only matched segments
        return (
          <span
            key={`word-${i}`}
            data-word
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {parts.flatMap(({ text: sub, marked }) =>
              sub.split("").map((ch) => (
                <span key={`ch-${keySeed++}`} style={{ display: "inline-block" }}>
                  {marked ? (
                    <mark className={markClassName} style={{ background: "transparent" }}>
                      <span data-char aria-hidden="true" style={{ display: "inline-block" }}>
                        {ch}
                      </span>
                    </mark>
                  ) : (
                    <span data-char aria-hidden="true" style={{ display: "inline-block" }}>
                      {ch}
                    </span>
                  )}
                </span>
              ))
            )}
          </span>
        );
      })}
    </span>
  );
}
