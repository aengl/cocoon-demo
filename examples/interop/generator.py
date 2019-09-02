#!/usr/bin/env python3
import fileinput
import json
import random
import sys

# Read number of points to generate from stdin
clusters = json.load(sys.stdin)

# Generate points
data = []
for cluster in clusters:
  for i in range(cluster['num_points']):
    data.append({
      'x': random.gauss(cluster['mu']['x'], cluster['sigma']),
      'y': random.gauss(cluster['mu']['y'], cluster['sigma'])
    })

# Write data as JSON via stdout
print(json.dumps(data))
