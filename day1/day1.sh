#! /bin/sh
#
# day1.sh
# Copyright © 2015 tox <tox@rootkit>
#
# Distributed under terms of the MIT license.
#


sed 's/(/1\n/g;s/)/-1\n/g' input.txt | paste -s -d+ | bc
sed 's/(/++i\n/g;s/)/--i\n/g' input.txt | bc | nl | grep -m 1 -- -1 | awk '{print $1}'
