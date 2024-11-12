import pvporcupine
import pyaudio
import struct

# Use your actual Access Key here
access_key = '2dYOf4Tg+s1yNI13OHQbQBn47m/xEKrsv2Ihfc7MYVdghzbsRos4Vg=='

# List of built-in keywords (for example: 'picovoice', 'bumblebee')
keywords = ['picovoice', 'bumblebee']

# Create an instance of Porcupine for wakeword detection
porcupine = pvporcupine.create(
    access_key=access_key,
    keywords=keywords  # or use keyword_paths=['${KEYWORD_FILE_PATH}'] for custom keywords
)

# Initialize PyAudio to capture audio from the microphone
p = pyaudio.PyAudio()
stream = p.open(rate=porcupine.sample_rate,
                channels=1,
                format=pyaudio.paInt16,
                input=True,
                frames_per_buffer=porcupine.frame_length)

print("Warte auf Wakeword...")

# Function to capture audio frames from the microphone
def get_next_audio_frame():
    pcm = stream.read(porcupine.frame_length)
    return struct.unpack_from("h" * porcupine.frame_length, pcm)

try:
    while True:
        # Get the next audio frame
        audio_frame = get_next_audio_frame()
        print = "audio_frame"
        # Process the audio frame for wakeword detection
        keyword_index = porcupine.process(audio_frame)
        
        # Check which wakeword was detected
        if keyword_index == 0:
            print("Wakeword 'picovoice' erkannt!")
        elif keyword_index == 1:
            print("Wakeword 'bumblebee' erkannt!")
        # Add more conditions here if you're using more wakewords

except KeyboardInterrupt:
    print("Programm beendet.")

finally:
    # Release resources when done
    stream.stop_stream()
    stream.close()
    p.terminate()
    porcupine.delete()
