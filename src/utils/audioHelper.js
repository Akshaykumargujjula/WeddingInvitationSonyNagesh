/**
 * Wedding Audio Controller
 * Supports HTML5 Audio with graceful Web Audio API Tanpura & Bansuri synthesizer fallback.
 * Strictly adheres to mobile gesture rules (no autoplay without interaction).
 */

class WeddingAudioManager {
  constructor() {
    this.audioElement = null;
    this.audioContext = null;
    this.synthOscillators = [];
    this.isPlaying = false;
    this.isSynthPlaying = false;
    this.volume = 0.75;
    this.listeners = new Set();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach((fn) => fn(this.isPlaying));
  }

  initHtml5Audio(trackUrl) {
    if (this.audioElement) return;

    try {
      this.audioElement = new Audio(trackUrl);
      this.audioElement.loop = true;
      this.audioElement.volume = this.volume;
      this.audioElement.preload = "auto";

      this.audioElement.addEventListener("play", () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audioElement.addEventListener("pause", () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audioElement.addEventListener("error", () => {
        // Fallback to synthesized audio if file fails or missing
        console.warn("Audio file load notice: Falling back to sacred ambient synthesizer.");
        if (this.isPlaying) {
          this.startSynthesizer();
        }
      });
    } catch (err) {
      console.warn("HTML5 audio initialization notice:", err);
    }
  }

  // Auspicious Web Audio API Tanpura Drone Fallback
  startSynthesizer() {
    if (this.isSynthPlaying) return;

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      if (!this.audioContext) {
        this.audioContext = new AudioCtx();
      }

      if (this.audioContext.state === "suspended") {
        this.audioContext.resume();
      }

      const masterGain = this.audioContext.createGain();
      masterGain.gain.setValueAtTime(0.01, this.audioContext.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(this.volume * 0.4, this.audioContext.currentTime + 2);
      masterGain.connect(this.audioContext.destination);

      // Raga Mohanam / Bhupali chord: Sa (277.18Hz), Pa (415.77Hz), Sa' (554.36Hz), Low Pa (207.88Hz)
      const freqs = [138.59, 207.88, 277.18, 415.77, 554.36];
      this.synthOscillators = [];

      freqs.forEach((freq, idx) => {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        // Warm triangle and sine waves
        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, this.audioContext.currentTime);

        // Gentle tanpura breathing LFO
        const lfo = this.audioContext.createOscillator();
        const lfoGain = this.audioContext.createGain();
        lfo.frequency.value = 0.25 + idx * 0.08;
        lfoGain.gain.value = 0.06;
        lfo.connect(lfoGain);
        lfoGain.connect(gain.gain);
        lfo.start();

        gain.gain.setValueAtTime(0.12 / (idx + 1), this.audioContext.currentTime);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start();

        this.synthOscillators.push(osc, lfo);
      });

      this.isSynthPlaying = true;
      this.isPlaying = true;
      this.notify();
    } catch (err) {
      console.warn("Audio synthesizer error:", err);
    }
  }

  stopSynthesizer() {
    if (!this.isSynthPlaying) return;
    try {
      this.synthOscillators.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (_) {}
      });
      this.synthOscillators = [];
      this.isSynthPlaying = false;
    } catch (_) {}
  }

  async play(trackUrl) {
    if (!this.audioElement && trackUrl) {
      this.initHtml5Audio(trackUrl);
    }

    if (this.audioElement) {
      try {
        const playPromise = this.audioElement.play();
        if (playPromise !== undefined) {
          await playPromise;
          this.isPlaying = true;
          this.notify();
          return true;
        }
      } catch (err) {
        // If file play fails or blocked, gracefully activate synth
        this.startSynthesizer();
        return true;
      }
    } else {
      this.startSynthesizer();
      return true;
    }
  }

  pause() {
    if (this.audioElement) {
      try {
        this.audioElement.pause();
      } catch (_) {}
    }
    this.stopSynthesizer();
    this.isPlaying = false;
    this.notify();
  }

  toggle(trackUrl) {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play(trackUrl);
      return true;
    }
  }
}

export const audioManager = new WeddingAudioManager();
