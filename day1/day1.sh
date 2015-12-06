#! /bin/sh
#
# day1.sh
# Copyright © 2015 tox <tox@rootkit>
#
# Distributed under terms of the MIT license.
#


cat input.txt | tr -cd "()" | sed 's/./\0\n/g' | sort | uniq -c | tr -d '()' | paste -s -d- | bc
cat input.txt | sed 's/./\0\n/g' | \
	while read l; do
		case $l in 
			\() i=`expr $i + 1`;;
			\)) i=`expr $i - 1`;;
		esac;
		echo $i;
	done | cat -n | grep -- -1 | head -n 1 | awk '{ print $1} '
