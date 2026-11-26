#!/bin/bash
# Downloads Amazon product images into public/images/products.
# Usage: bash scripts/download-product-images.sh <list-file>
# Each line of the list file: <product-id> <amazon-image-code>   (e.g. "aegon-ice-roller 61LtYHZNPvL")
cd "$(dirname "$0")/../public/images/products" || exit 1
while read -r id code; do
  [ -z "$id" ] && continue
  curl -s -o "$id.jpg" "https://m.media-amazon.com/images/I/$code._SL600_.jpg"
  echo "$id $(file -b "$id.jpg" | cut -c1-10)"
done < "$1"
