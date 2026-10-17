import os
import wave
import struct
import numpy as np

def create_wedding_audio(filepath, duration_sec=42):
    sr = 44100
    t = np.linspace(0, duration_sec, int(sr * duration_sec), endpoint=False)
    
    # Auspicious Raga Mohanam / Bhupali (Sa, Ri, Ga, Pa, Dha)
    # C#4 base = 277.18 Hz
    base_sa = 277.18
    ratios = {
        'Sa': 1.0,
        'Ri': 1.125,
        'Ga': 1.25,
        'Pa': 1.5,
        'Dha': 1.6667,
        'Sa2': 2.0,
        'Ri2': 2.25,
        'Ga2': 2.5,
        'Pa_low': 0.75,
        'Dha_low': 0.8333
    }
    
    # 1. Warm Meditative Tanpura Drone
    strum_env = np.exp(-3.0 * ((t % 4.0) / 4.0)) + 0.35
    tanpura = (
        0.25 * np.sin(2 * np.pi * base_sa * t) +
        0.12 * np.sin(2 * np.pi * base_sa * 2 * t) +
        0.06 * np.sin(2 * np.pi * base_sa * 3 * t) +
        0.20 * np.sin(2 * np.pi * (base_sa * 1.5) * t + 0.5) +
        0.10 * np.sin(2 * np.pi * (base_sa * 3.0) * t + 0.8) +
        0.22 * np.sin(2 * np.pi * (base_sa * 0.5) * t)
    ) * strum_env
    
    # 2. Bansuri / Flute Melody
    flute = np.zeros_like(t)
    melody = [
        ('Sa', 2.0), ('Ri', 1.5), ('Ga', 2.5), ('Pa', 2.0),
        ('Dha', 2.0), ('Sa2', 3.0), ('Dha', 1.5), ('Pa', 2.5),
        ('Ga', 2.0), ('Ri', 2.0), ('Ga', 2.5), ('Pa', 2.0),
        ('Ga', 1.5), ('Ri', 1.5), ('Sa', 4.0),
        ('Pa_low', 2.0), ('Dha_low', 2.0), ('Sa', 2.5), ('Ri', 1.5),
        ('Ga', 2.0), ('Pa', 2.0), ('Dha', 2.0), ('Sa2', 2.5),
        ('Ri2', 1.8), ('Sa2', 2.0), ('Dha', 1.5), ('Pa', 2.5),
        ('Ga', 2.0), ('Ri', 2.0), ('Sa', 4.5)
    ]
    
    curr = 1.0
    for note, dur in melody:
        if curr + dur > duration_sec:
            break
        idx = (t >= curr) & (t < curr + dur)
        if np.any(idx):
            note_t = t[idx] - curr
            freq = base_sa * ratios[note]
            
            # Subtle Indian gamaka / vibrato
            vib = 1.0 + 0.008 * np.sin(2 * np.pi * 5.2 * note_t)
            
            # Attack / release envelope
            att = np.clip(note_t / 0.25, 0.0, 1.0)
            rel = np.clip((dur - note_t) / 0.4, 0.0, 1.0)
            env = np.minimum(att, rel)
            
            # Flute timbre
            tone = (
                0.35 * np.sin(2 * np.pi * (freq * vib) * t[idx]) +
                0.18 * np.sin(2 * np.pi * (freq * vib * 2) * t[idx]) +
                0.09 * np.sin(2 * np.pi * (freq * vib * 3) * t[idx]) +
                0.04 * np.sin(2 * np.pi * (freq * vib * 4) * t[idx])
            ) * env
            flute[idx] = tone
        curr += dur + 0.2
        
    # 3. Auspicious Temple Bell Chimes
    chime = np.zeros_like(t)
    for b in [0.5, 9.0, 18.0, 27.0, 36.0]:
        idx = (t >= b) & (t < b + 4.0)
        if np.any(idx):
            ch_t = t[idx] - b
            c_env = np.exp(-2.2 * ch_t)
            chime[idx] += (
                0.09 * np.sin(2 * np.pi * 1864.0 * t[idx]) +
                0.05 * np.sin(2 * np.pi * 2795.0 * t[idx])
            ) * c_env
            
    # Master Envelope (Fade in and out for loop)
    fade = np.minimum(np.clip(t / 1.5, 0.0, 1.0), np.clip((duration_sec - t) / 2.0, 0.0, 1.0))
    
    left = np.clip((tanpura * 0.45 + flute * 0.70 + chime * 0.35) * fade, -0.95, 0.95)
    right = np.clip((tanpura * 0.50 + flute * 0.65 + chime * 0.40) * fade, -0.95, 0.95)
    
    left_int = (left * 32767).astype(np.int16)
    right_int = (right * 32767).astype(np.int16)
    
    # Interleave stereo
    audio_data = np.empty((left_int.size + right_int.size,), dtype=np.int16)
    audio_data[0::2] = left_int
    audio_data[1::2] = right_int
    
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with wave.open(filepath, 'w') as wf:
        wf.setnchannels(2)
        wf.setsampwidth(2)
        wf.setframerate(sr)
        wf.writeframes(audio_data.tobytes())
    print(f"Generated {filepath} successfully!")

if __name__ == "__main__":
    create_wedding_audio("public/audio/wedding-melody.mp3")
    create_wedding_audio("public/audio/wedding-melody.wav")
