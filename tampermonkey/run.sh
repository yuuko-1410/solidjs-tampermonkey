#!/bin/bash

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Read the config file
CONFIG_FILE="$SCRIPT_DIR/config.json"
TEMPLATE_FILE="$SCRIPT_DIR/template.js"
# Dynamically find the index js file
DIST_JS_FILE=$(find "$PROJECT_ROOT/dist/assets" -name "index-*.js" | head -n 1)
OUTPUT_FILE="$PROJECT_ROOT/userscript.js"

# Check if we found the dist js file
if [ -z "$DIST_JS_FILE" ]; then
    echo "Error: Could not find index-*.js in dist/assets directory"
    exit 1
fi

# Create temporary files
HEADER_FILE=$(mktemp)
CONTENT_FILE=$(mktemp)
DIST_CONTENT=$(mktemp)

# Generate header from config
echo "// ==UserScript==" > "$HEADER_FILE"
echo "// @name         $(jq -r '.name' "$CONFIG_FILE")" >> "$HEADER_FILE"
echo "// @version      $(jq -r '.version' "$CONFIG_FILE")" >> "$HEADER_FILE"
echo "// @description  $(jq -r '.description' "$CONFIG_FILE")" >> "$HEADER_FILE"
echo "// @author       $(jq -r '.author' "$CONFIG_FILE")" >> "$HEADER_FILE"
jq -r '.match[]' "$CONFIG_FILE" | while read -r match; do
    echo "// @match        $match" >> "$HEADER_FILE"
done
echo "// ==/UserScript==" >> "$HEADER_FILE"

# Get the dist content
cat "$DIST_JS_FILE" > "$DIST_CONTENT"

# Process the template and inject the dist content
awk -v dist_file="$DIST_CONTENT" '
  /function run\(\) {/,/^}/ {
    if ($0 ~ /function run\(\) {/) {
      print $0
      while ((getline line < dist_file) > 0) {
        print "  " line
      }
      next
    }
    if ($0 ~ /^}/) print $0
    next
  }
  {print}
' "$TEMPLATE_FILE" | sed -n '/\/\/ ==UserScript==/,/\/\/ ==\/UserScript==/!p' > "$CONTENT_FILE"

# Create the final output
{
    cat "$HEADER_FILE"
    cat "$CONTENT_FILE"
} > "$OUTPUT_FILE"

# Clean up temporary files
rm "$HEADER_FILE" "$CONTENT_FILE" "$DIST_CONTENT"

echo "Generated userscript at: $OUTPUT_FILE"
