grep "[aeiou].*[aeiou].*[aeiou]" input.txt | grep "\(.\)\1" | grep -v "ab\|cd\|pq\|xy" | wc -l
grep "\(..\).*\1" input.txt | grep "\(.\).\1" | wc -l
