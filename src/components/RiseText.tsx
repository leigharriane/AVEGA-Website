"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

type RiseTextProps = {
  text: string;
  className?: string;         // custom classes for the outer wrapper
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  replayOnHover?: boolean;
  mark?: boolean;             // wrap the entire text in <mark>
  markText?: string | RegExp | Array<string | RegExp>; // highlight matches
  markClassName?: string;     // classes for <mark>
};

export default function RiseText({
  text,
  className,
  delay = 0,
  duration = 0.6,
  y = 24,
  stagger = 0.04,
  replayOnHover = false,
  mark = false,
  markText,
  markClassName = "",
}: RiseTextProps) {
  const elRef = useRef<HTMLSpanElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray<HTMLElement>("[data-char]");
      tlRef.current = gsap.timeline({ delay });
      tlRef.current.from(letters, {
        y,
        opacity: 0,
        duration,
        ease: "power3.out",
        stagger,
      });
    }, elRef);
    return () => ctx.revert();
  }, [text, delay, duration, y, stagger]);

  // helpers
  const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const buildRegex = (
    value: string | RegExp | Array<string | RegExp>
  ): RegExp | null => {
    if (!value) return null;
    const arr = Array.isArray(value) ? value : [value];
    const sources = arr.map((v) =>
      v instanceof RegExp ? v.source : escapeRegExp(v)
    );
    // default to global, case-insensitive
    return new RegExp(`(${sources.join("|")})`, "gi");
  };

  // break the text into segments, marking any matches
  const segmentText = (
    full: string,
    regex: RegExp | null
  ): Array<{ text: string; marked: boolean }> => {
    if (!regex) return [{ text: full, marked: false }];

    const segments: Array<{ text: string; marked: boolean }> = [];
    let lastIndex = 0;

    for (const m of full.matchAll(regex)) {
      const start = m.index ?? 0;
      const end = start + m[0].length;

      if (start > lastIndex) {
        segments.push({ text: full.slice(lastIndex, start), marked: false });
      }
      segments.push({ text: full.slice(start, end), marked: true });
      lastIndex = end;
    }

    if (lastIndex < full.length) {
      segments.push({ text: full.slice(lastIndex), marked: false });
    }

    return segments;
  };

  const regex = mark ? null : (markText !== undefined && markText !== null ? buildRegex(markText) : null);
  const segments = mark
    ? [{ text, marked: true }]
    : segmentText(text, regex);

  // render a string as letter spans
  let keySeed = 0;
  const renderLetters = (t: string) =>
    t.split("").map((ch) => (
      <span
        key={`ch-${keySeed++}`}
        data-char
        aria-hidden="true"
        style={{ display: "inline-block" }}
      >
        {ch}
      </span>
    ));

  return (
    <span
      ref={elRef}
      className={className}
      aria-label={text}
      style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
      onMouseEnter={() => {
        if (replayOnHover) tlRef.current?.restart();
      }}
    >
      {segments.map((seg, i) =>
        seg.marked ? (
          <mark key={`seg-${i}`} className={markClassName} style={{ background: "transparent" }}>
            {renderLetters(seg.text)}
          </mark>
        ) : (
          <span key={`seg-${i}`} style={{ display: "inline" }}>
            {renderLetters(seg.text)}
          </span>
        )
      )}
    </span>
  );
}
