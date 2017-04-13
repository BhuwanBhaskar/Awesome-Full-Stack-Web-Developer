# @Author: Anas Aboureada <AnasAboureada>
# @Date:   Sun, 5th Feb 2017, T 17:14 +01:00
# @Email:  me@anasaboureada.com
# @Project: awesome-full-stack-web-developer
# @Filename: create_test_cases.py
# @Last modified by:   AnasAboureada
# @Last modified time: Sat, 11th Mar 2017, T 11:43 +01:00
# @License: MIT License
# @Copyright: Copyright (c) 2017 Anas Aboureada <anasaboureada.com>



import sys
import random

items_count = 100000
max_item_value = 1000000000

with open ('./test_cases.txt', 'w') as f:
    f.write(items_count + '\n')
    for i in range(items_count):
        f.write(str(random.randint(0, max_item_value))+ ' ')

if __name__ == '__main__':
    with open('./test_cases.txt') as tests:
        with open('./test_results.txt') as results:
            with open('./written_tests.txt', 'a') as written_test:
                test_lines = [line.rstrip() for line in tests]
                answer_lines = [line.rstrip() for line in results]

                for i in range(len(list(test_lines))):
                    written_test.write('self.assertEqual(is_matched(\'%s\'), %s)\n' % (test_lines[i], answer_lines[i]))

