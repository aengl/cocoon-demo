#!/usr/bin/env Rscript --vanilla
library(ggplot2)
library(jsonlite)

# Read JSON from stdin
input <- file('stdin')
data <- fromJSON(input)

# Run k-means clustering
cluster <- as.factor(kmeans(data, 3)$cluster)

# Plot JSON data to file
jpeg('plot.png', width=525, height=500)
ggplot(data, aes(x, y, color=cluster)) + geom_point()
dev.off()
