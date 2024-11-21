import pandas as pd
import random

# Define possible values
body_parts = ['head', 'shoulders', 'chest', 'left arm', 'right arm', 'waist', 'left leg', 'right leg']
pain_types = ['sharp', 'dull', 'throbbing', 'burning', 'aching']
diagnoses = ['sprain', 'fracture', 'dislocation', 'muscle strain', 'arthritis']

# Generate synthetic data
data = []
for _ in range(100):  # Generate 100 samples
    body_part = random.choice(body_parts)
    pain_type = random.choice(pain_types)
    bruising = random.choice(['yes', 'no'])
    pain_level = random.randint(0, 10)
    diagnosis = random.choice(diagnoses)

    data.append([body_part, pain_type, bruising, pain_level, diagnosis])

# Create DataFrame
df = pd.DataFrame(data, columns=['body_part', 'pain_type', 'bruising', 'pain_level', 'diagnosis'])

# Preview the data
print(df.head())

# Save to CSV
df.to_csv('generated_data.csv', index=False)