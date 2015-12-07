#! /bin/sh
#
# day1.sh
# Copyright © 2015 tox <tox@rootkit>
#
# Distributed under terms of the MIT license.
#


sed 's/(/1\n/g;s/)/-1\n/g' input.txt|paste -s -d+|bc
sed 's/(/++i\n/g;s/)/--i;if(i<0) halt\n/g;' input.txt|bc|wc -l
