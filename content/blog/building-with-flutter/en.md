---
title: "Building a Music Player with Flutter"
excerpt: "A deep dive into the engineering decisions behind PPPlayer's UI and playback architecture."
date: "2026-09-12"
author: "Engineering"
category: "Engineering"
readTime: "8"
coverImage: "/images/blog/building-with-flutter.jpg"
isDraft: false
---

When deciding how to build PPPlayer, we faced a classic engineering dilemma: how do we deliver a native-feeling, high-performance music application across Android, Windows, macOS, and Linux without maintaining four completely separate codebases?

We chose **Flutter**. Here is a look into the architectural decisions that shaped PPPlayer.

## Why Flutter?

Flutter, Google's UI toolkit, allows us to compile a single Dart codebase into native ARM and Intel machine code for mobile and desktop. 

While frameworks like Electron exist for cross-platform desktop apps, they essentially bundle an entire Chromium web browser, leading to high memory usage—a major problem for a background music player. Flutter draws its own UI using Skia (and now Impeller), resulting in a much lighter footprint and true 60fps performance.

## Handling Audio Playback

Flutter handles UI brilliantly, but a music player needs robust, low-level audio engine access. Relying purely on Dart for audio decode and playback wouldn't provide the performance or format support we needed.

Instead, we leverage the `media_kit` package, which acts as a bridge to `libmpv` (the engine behind the popular MPV video player). This allows PPPlayer to:
* Support virtually any audio format (FLAC, ALAC, MP3, OPUS).
* Utilize hardware-accelerated decoding.
* Manage gapless playback and crossfading natively.

## The State Management Challenge

A music player has complex, globally reactive state. The play/pause button, the seek bar, the mini-player, and the current playlist all need to react instantly to changes in the audio engine.

We organize our architecture using the `Provider` pattern combined with localized `ValueNotifiers` for high-frequency updates. For example, the seek bar does not rebuild the entire UI every second; it listens to a specific `PositionNotifier`, ensuring that UI updates are localized and consume minimal CPU cycles.

## Desktop vs. Mobile UX

While the business logic and audio engine are shared, the UI paradigms for desktop and mobile are fundamentally different. 

Instead of forcing a mobile layout onto a wide screen, we use responsive `LayoutBuilders`. On desktop, PPPlayer features a persistent sidebar and a dense grid layout. On mobile, it switches to a bottom navigation bar and a prominent full-screen "Now Playing" sheet. 

By building with Flutter, we get the best of both worlds: the efficiency of a single codebase with the flexibility to design platform-appropriate interfaces.