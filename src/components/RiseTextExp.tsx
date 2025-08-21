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
  // in-view controls
  start?: string;   // ScrollTrigger start position, e.g. "top 85%"
  once?: boolean;   // play only once on first enter
  // marking
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
          // `once` is supported in recent GSAP. If not, toggleActions line already ensures one-time play.
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

  const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const buildRegex = (value: string | RegExp | Array<string | RegExp> | undefined) => {
    if (!value) return null;
    const arr = Array.isArray(value) ? value : [value];
    const sources = arr.map((v) => (v instanceof RegExp ? v.source : escapeRegExp(v)));
    return new RegExp(`(${sources.join("|")})`, "gi");
  };

  const segmentText = (full: string, regex: RegExp | null) => {
    if (!regex) return [{ text: full, marked: false }];
    const segs: Array<{ text: string; marked: boolean }> = [];
    let last = 0;
    for (const m of full.matchAll(regex)) {
      const i = m.index ?? 0;
      const e = i + m[0].length;
      if (i > last) segs.push({ text: full.slice(last, i), marked: false });
      segs.push({ text: full.slice(i, e), marked: true });
      last = e;
    }
    if (last < full.length) segs.push({ text: full.slice(last), marked: false });
    return segs;
  };

  const regex = mark ? null : buildRegex(markText);
  const segments = mark ? [{ text, marked: true }] : segmentText(text, regex);

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